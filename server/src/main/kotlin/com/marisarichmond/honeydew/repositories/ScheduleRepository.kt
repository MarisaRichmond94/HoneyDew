package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.Schedule
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ScheduleRepository : JpaRepository<Schedule, Long> {
    fun findById(id: UUID): Schedule?
    fun findAllByUserId(userId: UUID): List<Schedule>
}
