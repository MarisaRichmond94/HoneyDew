package com.marisarichmond.honeydew.models.dtos

import com.marisarichmond.honeydew.models.*
import java.util.UUID

data class CreateUserRequestDto(
    val email: String,
    val firstName: String,
    val lastName: String,
    val avatar: String,
    val googleId: String,
)

data class UserResponseDto(
    val id: UUID,
    val firstName: String,
    val lastName: String,
    val avatar: String,
    val assignedChores: Set<AssignedChore>,
    val dailyChores: Set<DailyChore>,
    val dews: Set<Chore>,
    val rooms: Set<Room>,
    val schedule: Map<Day, DayDto>,
)
