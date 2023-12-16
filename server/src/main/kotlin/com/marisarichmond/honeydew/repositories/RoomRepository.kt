package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.Room
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface RoomRepository : JpaRepository<Room, UUID>
