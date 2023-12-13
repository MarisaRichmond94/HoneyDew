package com.marisarichmond.honeydew.mappers

import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.UserResponseDto

fun toUserResponseDto(user: User): UserResponseDto = UserResponseDto(
    id = user.id,
    firstName = user.firstName,
    lastName = user.lastName,
    avatar = user.avatar,
    schedule = user.schedule!!,
    rooms = user.rooms,
    dailyChores = user.dailyChores,
    assignedChores = user.assignedChores,
)
