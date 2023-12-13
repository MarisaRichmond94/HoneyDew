package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.Chore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChoreRepository : JpaRepository<Chore, Long>
