package com.marisarichmond.honeydew.models

import com.marisarichmond.honeydew.models.dtos.DayDto
import java.util.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table


@Entity
@Table(name = "users")
data class User(
    @Id
    override val id: UUID = UUID.randomUUID(),

    val firstName: String,
    val lastName: String,
    val email: String,
    val avatar: String,
    val googleId: String,

    @Transient
    val schedule: Map<Day, DayDto>? = emptyMap(),
) : Base(id) {
    override fun toString() = this::class.simpleName + listOf(
        "id = $id",
        "firstName = $firstName",
        "lastName = $lastName",
        "email = $email",
        "avatar = $avatar",
        "googleId = $googleId",
    ).joinToString(", ")
}
