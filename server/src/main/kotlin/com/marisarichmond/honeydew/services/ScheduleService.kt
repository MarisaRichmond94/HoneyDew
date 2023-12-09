package com.marisarichmond.honeydew.services

import com.marisarichmond.honeydew.models.Day
import com.marisarichmond.honeydew.models.Schedule
import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.DayDto
import com.marisarichmond.honeydew.repositories.ScheduleRepository
import org.springframework.stereotype.Service
import java.util.*
import javax.persistence.EntityNotFoundException
import javax.transaction.Transactional

@Service
class ScheduleService(private val scheduleRepository: ScheduleRepository) {
    @Transactional
    fun findOrCreateSchedule(user: User): Map<Day, DayDto> {
        val schedule = scheduleRepository.findAllByUserId(user.id).takeIf { it.isNotEmpty() } ?: generateSchedule(user)

        return schedule.associate { day ->
            day.day to DayDto(
                id = day.id,
                isActive = day.isActive,
                timeInMinutes = day.timeInMinutes,
            )
        }
    }

    @Transactional
    fun updateSchedule(
        id: UUID,
        isActive: Boolean = false,
        timeInMinutes: Long = 0,
    ): DayDto {
        val updatedSchedule = scheduleRepository.findById(id)?.copy(isActive = isActive, timeInMinutes = timeInMinutes)
            ?: throw EntityNotFoundException("Schedule Service (updateSchedule): No entity found by id '$id'")

        scheduleRepository.save(updatedSchedule)

        return DayDto(
            id = id,
            isActive = updatedSchedule.isActive,
            timeInMinutes = updatedSchedule.timeInMinutes,
        )
    }

    private fun generateSchedule(user: User): List<Schedule> = scheduleRepository.saveAll(
        Day.values().map { day -> Schedule(user = user, day = day) }
    )
}
