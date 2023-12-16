package com.marisarichmond.honeydew.services

import com.marisarichmond.honeydew.models.Room
import com.marisarichmond.honeydew.models.dtos.CreateRoomDto
import com.marisarichmond.honeydew.models.dtos.UpdateRoomDto
import com.marisarichmond.honeydew.repositories.RoomRepository
import org.springframework.stereotype.Service
import java.util.*
import javax.transaction.Transactional

@Service
class RoomService(
    private val roomRepository: RoomRepository,
    private val userService: UserService,
) {
    @Transactional
    fun createRoom(
        userId: UUID,
        createRoomDto: CreateRoomDto,
    ) = roomRepository.save(
        Room(
            user = userService.getById(userId),
            name = createRoomDto.name,
        )
    )

    @Transactional
    fun updateRoom(
        id: UUID,
        updateRoomDto: UpdateRoomDto,
    ) {
        val existingRoom = roomRepository.getById(id)
        roomRepository.save(existingRoom.copy(name = updateRoomDto.name))
    }
}
