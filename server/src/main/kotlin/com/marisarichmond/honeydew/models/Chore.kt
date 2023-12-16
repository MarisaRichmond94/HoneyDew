package com.marisarichmond.honeydew.models

import java.util.UUID
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

enum class ChorePriority {
    LOWEST,
    LOW,
    MEDIUM,
    HIGH,
    HIGHEST,
}

@Entity
@Table(name = "chore")
data class Chore(
    @Id
    override val id: UUID = UUID.randomUUID(),

    val name: String,
    val description: String? = null,
    val timeInMinutes: Long,
    val priority: ChorePriority,
    val coolDownInDays: Long,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "name = $name",
        "description = $description",
        "timeInMinutes = $timeInMinutes",
        "priority = $priority",
        "coolDownInDays = $coolDownInDays",
    ).joinToString(", ") + ")"
}
