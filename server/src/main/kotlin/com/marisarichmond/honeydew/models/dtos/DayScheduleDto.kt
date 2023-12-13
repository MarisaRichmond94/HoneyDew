package com.marisarichmond.honeydew.models.dtos

import javax.validation.constraints.NotNull
import javax.validation.constraints.Positive

data class UpdateDayScheduleDto(
    @NotNull(message = "isActive is a required field")
    val isActive: Boolean,

    @NotNull(message = "timeInMinutes is a required field")
    @Positive(message = "timeInMinutes must be a positive number")
    val timeInMinutes: Long,
)
