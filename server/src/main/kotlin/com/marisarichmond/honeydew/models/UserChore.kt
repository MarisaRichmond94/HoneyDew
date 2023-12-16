package com.marisarichmond.honeydew.models

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "user_chore")
data class UserChore(
    @Id
    override val id: UUID = UUID.randomUUID(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    @OneToOne
    @JoinColumn(name = "chore_id")
    val chore: Chore,
) : Base(id) {
    override fun toString() = this::class.simpleName + "(" + listOf(
        "id = $id",
        "user = <LAZY>",
        "chore = <LAZY>",
    ).joinToString(", ") + ")"
}
