package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : JpaRepository<User, UUID> {
    fun findByGoogleId(googleId: String): User?
}
