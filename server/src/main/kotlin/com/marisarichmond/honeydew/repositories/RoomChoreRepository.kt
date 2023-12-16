package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.RoomChore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface RoomChoreRepository : JpaRepository<RoomChore, UUID>
