package com.marisarichmond.honeydew.models

import com.marisarichmond.honeydew.models.dtos.DayDto
import java.util.*
import javax.persistence.*
import kotlin.jvm.Transient


@Entity
@Table(name = "users")
@NamedEntityGraph(
    name = "UserResponseDtoGraph",
    attributeNodes = [
        NamedAttributeNode(
            value = "assignedChores",
            subgraph = "assignedChores.subgraph",
        ),
        NamedAttributeNode(
            value = "dailyChores",
            subgraph = "dailyChores.subgraph",
        ),
        NamedAttributeNode("rooms"),
        NamedAttributeNode(
            value = "userChores",
            subgraph = "userChores.subgraph",
        )
    ],
    subgraphs = [
        NamedSubgraph(
            name = "assignedChores.subgraph",
            attributeNodes = [NamedAttributeNode("chore")]
        ),
        NamedSubgraph(
            name = "dailyChores.subgraph",
            attributeNodes = [NamedAttributeNode("chore")]
        ),
        NamedSubgraph(
            name = "userChores.subgraph",
            attributeNodes = [NamedAttributeNode("chore")],
        ),
    ],
)
data class User(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val assignedChores: Set<AssignedChore> = emptySet(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val dailyChores: Set<DailyChore> = emptySet(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val daySchedules: Set<DaySchedule> = emptySet(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val rooms: Set<Room> = emptySet(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val userChores: Set<UserChore> = emptySet(),

    val firstName: String,
    val lastName: String,
    val email: String,
    val avatar: String,
    val googleId: String,
    val points: Long = 0,

    @Transient
    val schedule: Map<Day, DayDto>? = emptyMap(),
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "firstName = $firstName",
        "lastName = $lastName",
        "email = $email",
        "avatar = $avatar",
        "googleId = $googleId",
        "points = $points",
    ).joinToString(", ") + ")"
}
