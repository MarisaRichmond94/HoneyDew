package com.marisarichmond.honeydew.services

import com.marisarichmond.honeydew.models.Day
import com.marisarichmond.honeydew.models.DaySchedule
import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.DayDto
import com.marisarichmond.honeydew.repositories.DayScheduleRepository
import org.springframework.stereotype.Service
import java.util.*
import javax.persistence.EntityNotFoundException
import javax.transaction.Transactional

@Service
class DayScheduleService(private val dayScheduleRepository: DayScheduleRepository) {
    @Transactional
    fun findOrCreateSchedule(user: User): Map<Day, DayDto> {
        val schedule = dayScheduleRepository.findAllByUserId(user.id).takeIf { it.isNotEmpty() } ?: generateSchedule(user)

        return schedule.associate { day ->
            day.day to DayDto(
                id = day.id,
                isActive = day.isActive,
                timeInMinutes = day.timeInMinutes,
            )
        }
    }

    @Transactional
    fun updateDaySchedule(
        id: UUID,
        isActive: Boolean = false,
        timeInMinutes: Long = 0,
    ): DayDto {
        val updatedDaySchedule = dayScheduleRepository.findById(id)?.copy(isActive = isActive, timeInMinutes = timeInMinutes)
            ?: throw EntityNotFoundException("Day Schedule Service (updateDaySchedule): No entity found by id '$id'")

        dayScheduleRepository.save(updatedDaySchedule)

        return DayDto(
            id = id,
            isActive = updatedDaySchedule.isActive,
            timeInMinutes = updatedDaySchedule.timeInMinutes,
        )
    }

    private fun generateSchedule(user: User): List<DaySchedule> = dayScheduleRepository.saveAll(
        Day.values().map { day -> DaySchedule(user = user, day = day) }
    )
}
