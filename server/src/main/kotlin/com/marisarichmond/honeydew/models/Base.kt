package com.marisarichmond.honeydew.models

import org.hibernate.Hibernate
import java.util.*
import javax.persistence.Id
import javax.persistence.MappedSuperclass

@MappedSuperclass
abstract class Base(
    @Id
    open val id: UUID = UUID.randomUUID(),
) {
    final override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false
        other as Base

        return id == other.id
    }

    final override fun hashCode(): Int = javaClass.hashCode()

    override fun toString(): String = this::class.simpleName + "(id = $id)"
}
