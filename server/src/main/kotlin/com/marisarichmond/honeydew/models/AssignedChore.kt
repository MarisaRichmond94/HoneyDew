package com.marisarichmond.honeydew.models

import java.time.Instant
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "assigned_chore")
data class AssignedChore(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    @OneToOne
    @JoinColumn(name = "chore_id")
    val chore: Chore,

    val assignedAt: Long = Instant.now().epochSecond,
    val isComplete: Boolean = false,
    val isArchived: Boolean = false,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "assignedAt = $assignedAt",
        "isComplete = $isComplete",
        "isArchived = $isArchived",
        "user = <LAZY>",
        "chore = <LAZY>",
    ).joinToString(", ") + ")"
}
