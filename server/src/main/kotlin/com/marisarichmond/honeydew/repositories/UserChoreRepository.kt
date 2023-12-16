package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.UserChore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserChoreRepository : JpaRepository<UserChore, Long> {}
