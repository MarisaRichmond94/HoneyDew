package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.DaySchedule
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface DayScheduleRepository : JpaRepository<DaySchedule, UUID> {
    fun findById(id: UUID): DaySchedule?
    fun findAllByUserId(userId: UUID): List<DaySchedule>
}
