package com.marisarichmond.honeydew.repositories

import com.marisarichmond.honeydew.models.ActivityLog
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ActivityLogRepository : JpaRepository<ActivityLog, UUID>
