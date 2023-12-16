package com.marisarichmond.honeydew.mappers

import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.UserResponseDto

fun toUserResponseDto(user: User): UserResponseDto = UserResponseDto(
    id = user.id,
    firstName = user.firstName,
    lastName = user.lastName,
    avatar = user.avatar,
    assignedChores = user.assignedChores,
    dailyChores = user.dailyChores,
    dews = user.userChores.map { it.chore }.toSet(),
    rooms = user.rooms,
    schedule = user.schedule!!,
)
