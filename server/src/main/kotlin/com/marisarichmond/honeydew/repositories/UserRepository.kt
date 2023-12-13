package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.User
import org.springframework.data.jpa.repository.EntityGraph
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : JpaRepository<User, UUID> {
    @EntityGraph(value = "UserResponseDtoGraph", type = EntityGraph.EntityGraphType.FETCH)
    fun findByGoogleId(googleId: String): User?
}
