package com.marisarichmond.honeydew.models.dtos

import com.marisarichmond.honeydew.models.AssignedChore
import com.marisarichmond.honeydew.models.DailyChore
import com.marisarichmond.honeydew.models.Day
import com.marisarichmond.honeydew.models.Room
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
    val schedule: Map<Day, DayDto>,
    val rooms: Set<Room>,
    val dailyChores: Set<DailyChore>,
    val assignedChores: Set<AssignedChore>,
)
