package com.marisarichmond.honeydew.models.dtos

data class CreateUserRequestDto(
    val email: String,
    val firstName: String,
    val lastName: String,
    val avatar: String,
    val googleId: String,
)
