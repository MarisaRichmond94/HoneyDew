package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.Chore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ChoreRepository : JpaRepository<Chore, UUID>
