package com.marisarichmond.honeydew.controllers

import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.CreateUserRequestDto
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
    ): ResponseEntity<User> = ResponseEntity.status(HttpStatus.OK).body(userService.findOrCreateUser(createUserRequestDto))
}
