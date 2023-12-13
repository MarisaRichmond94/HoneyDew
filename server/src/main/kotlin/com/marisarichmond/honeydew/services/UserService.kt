package com.marisarichmond.honeydew.services

import com.marisarichmond.honeydew.models.User
import com.marisarichmond.honeydew.models.dtos.CreateUserRequestDto
import com.marisarichmond.honeydew.repositories.UserRepository
import org.springframework.stereotype.Service
import javax.transaction.Transactional


@Service
class UserService(
    private val dayScheduleService: DayScheduleService,
    private val userRepository: UserRepository,
) {
    @Transactional
    fun findOrCreateUser(createUserRequestBody: CreateUserRequestDto): User = createUserRequestBody.run {
        val user = userRepository.findByGoogleId(googleId)?.copy(avatar = avatar) ?: User(
            firstName = firstName,
            lastName = lastName,
            email = email,
            avatar = avatar,
            googleId = googleId,
        )
        userRepository.save(user)
        user.copy(schedule = dayScheduleService.findOrCreateSchedule(user))
    }
}
