package com.marisarichmond.honeydew.models.dtos

import javax.validation.constraints.Max
import javax.validation.constraints.NotNull
import javax.validation.constraints.Positive

data class UpdateDayScheduleDto(
    @NotNull(message = "isActive is a required field")
    val isActive: Boolean,

    @NotNull(message = "timeInMinutes is a required field")
    @Positive(message = "timeInMinutes must be a positive number")
    @Max(value = 24 * 60, message = "timeInMinutes cannot exceed the maximum number of minutes in a day (${24 * 60})")
    val timeInMinutes: Long,
)
