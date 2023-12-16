package com.marisarichmond.honeydew.controllers

import com.marisarichmond.honeydew.models.Room
import com.marisarichmond.honeydew.models.dtos.CreateRoomDto
import com.marisarichmond.honeydew.services.RoomService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*


@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/private/room")
class RoomController(private val roomService: RoomService) {
    @PostMapping
    fun createRoom(
        @RequestHeader("userId") userId: UUID,
        @RequestBody createRoomDto: CreateRoomDto,
    ): ResponseEntity<Room> = ResponseEntity.status(HttpStatus.CREATED).body(
        roomService.createRoom(userId, createRoomDto)
    )
}
