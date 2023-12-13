package com.marisarichmond.honeydew.controllers

import com.marisarichmond.honeydew.models.dtos.DayDto
import com.marisarichmond.honeydew.models.dtos.UpdateDayScheduleDto
import com.marisarichmond.honeydew.services.DayScheduleService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/private/schedule")
@Validated
class DayScheduleController(private val dayScheduleService: DayScheduleService) {
    @ResponseBody
    @PatchMapping("/{id}")
    fun updateDaySchedule(
        @PathVariable
        id: UUID,

        @RequestBody
        @Valid
        body: UpdateDayScheduleDto,
    ): ResponseEntity<DayDto> = ResponseEntity.status(HttpStatus.ACCEPTED).body(
        dayScheduleService.updateDaySchedule(
            id = id,
            isActive = body.isActive,
            timeInMinutes = body.timeInMinutes,
        )
    )
}
