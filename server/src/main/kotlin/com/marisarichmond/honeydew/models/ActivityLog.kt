package com.marisarichmond.honeydew.models

import java.time.Instant
import java.util.*
import javax.persistence.*

enum class Activity {

}

@Entity
@Table(name = "activity_log")
data class ActivityLog(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    val activity: Activity,
    val loggedAt: Long = Instant.now().epochSecond,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "activity = $activity",
        "loggedAt = $loggedAt",
        "user = <LAZY>",
    ).joinToString(", ") + ")"
}
