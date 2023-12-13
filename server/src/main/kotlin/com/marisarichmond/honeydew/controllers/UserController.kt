package com.marisarichmond.honeydew.controllers

import com.marisarichmond.honeydew.mappers.toUserResponseDto
import com.marisarichmond.honeydew.models.dtos.CreateUserRequestDto
import com.marisarichmond.honeydew.models.dtos.UserResponseDto
import com.marisarichmond.honeydew.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*


@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/private/users")
class UserController(private val userService: UserService) {

    @ResponseBody
    @PostMapping
    fun findOrCreateUser(
        @RequestBody createUserRequestDto: CreateUserRequestDto,
    ): ResponseEntity<UserResponseDto> = ResponseEntity.status(HttpStatus.OK).body(
        toUserResponseDto(
            userService.findOrCreateUser(createUserRequestDto)
        )
    )
}
