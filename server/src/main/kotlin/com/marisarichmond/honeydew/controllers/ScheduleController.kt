package com.marisarichmond.honeydew.controllers

import com.marisarichmond.honeydew.models.dtos.DayDto
import com.marisarichmond.honeydew.models.dtos.UpdateScheduleDto
import com.marisarichmond.honeydew.services.ScheduleService
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
class ScheduleController(private val scheduleService: ScheduleService) {
    @ResponseBody
    @PatchMapping("/{id}")
    fun updateSchedule(
        @PathVariable
        id: UUID,

        @RequestBody
        @Valid
        body: UpdateScheduleDto,
    ): ResponseEntity<DayDto> = ResponseEntity.status(HttpStatus.ACCEPTED).body(
        scheduleService.updateSchedule(
            id = id,
            isActive = body.isActive,
            timeInMinutes = body.timeInMinutes,
        )
    )
}
