package com.marisarichmond.honeydew.models.dtos

import java.util.UUID

data class DayDto(
    val id: UUID,
    val isActive: Boolean = false,
    val timeInMinutes: Long = 0,
)
