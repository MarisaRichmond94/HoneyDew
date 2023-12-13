package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.RoomChore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface RoomChoreRepository : JpaRepository<RoomChore, Long> {}
