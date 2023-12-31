package com.marisarichmond.honeydew.models

import java.util.UUID
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

enum class Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

@Entity
@Table(name = "day_schedule")
data class DaySchedule(
    @Id
    override val id: UUID = UUID.randomUUID(),
    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    val day: Day,
    val isActive: Boolean = false,
    val timeInMinutes: Long = 0,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "day = $day",
        "isActive = $isActive",
        "timeInMinutes = $timeInMinutes",
        "user = <LAZY>",
    ).joinToString(", ") + ")"
}
