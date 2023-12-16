package com.marisarichmond.honeydew.services

import com.marisarichmond.honeydew.models.Room
import com.marisarichmond.honeydew.models.dtos.CreateRoomDto
import com.marisarichmond.honeydew.repositories.RoomRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class RoomService(
    private val roomRepository: RoomRepository,
    private val userService: UserService,
) {
    fun createRoom(
        userId: UUID,
        createRoomDto: CreateRoomDto,
    ) = roomRepository.save(
        Room(
            user = userService.getById(userId),
            name = createRoomDto.name,
        )
    )
}
