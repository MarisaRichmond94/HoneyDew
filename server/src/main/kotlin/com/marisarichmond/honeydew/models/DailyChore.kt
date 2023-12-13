package com.marisarichmond.honeydew.models

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "daily_chore")
data class DailyChore(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    @OneToOne
    @JoinColumn(name = "chore_id")
    val chore: Chore,

    val day: Day,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "day = $day",
        "user = <LAZY>",
        "chore = <LAZY>"
    ).joinToString(", ") + ")"
}
