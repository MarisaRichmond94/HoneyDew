package com.marisarichmond.honeydew.models

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "room_chore")
data class RoomChore(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @OneToOne
    @JoinColumn(name = "room_id")
    val room: Room,

    @OneToOne
    @JoinColumn(name = "chore_id")
    val chore: Chore,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "room = <LAZY>",
        "chore = <LAZY>",
    ).joinToString(", ") + ")"
}
