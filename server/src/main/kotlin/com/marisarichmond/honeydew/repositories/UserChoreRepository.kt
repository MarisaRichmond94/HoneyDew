package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.UserChore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface UserChoreRepository : JpaRepository<UserChore, UUID>
