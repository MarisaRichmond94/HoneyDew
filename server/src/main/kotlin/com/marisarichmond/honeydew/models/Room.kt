package com.marisarichmond.honeydew.models

import java.util.UUID
import javax.persistence.*

@Entity
@Table(name = "room")
data class Room(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    val name: String,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "name = $name",
    ).joinToString(", ") + ")"
}
