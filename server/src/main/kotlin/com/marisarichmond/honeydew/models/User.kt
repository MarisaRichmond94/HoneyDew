package com.marisarichmond.honeydew.models

import com.marisarichmond.honeydew.models.dtos.DayDto
import java.util.*
import javax.persistence.*
import kotlin.jvm.Transient


@Entity
@Table(name = "users")
data class User(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val rooms: List<Room> = emptyList(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val days: List<Schedule> = emptyList(),

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    val dailyChores: List<DailyChore> = emptyList(),

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
