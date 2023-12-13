package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.DailyChore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DailyChoreRepository : JpaRepository<DailyChore, Long> {}
