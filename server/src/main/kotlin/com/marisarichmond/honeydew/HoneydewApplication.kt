package com.marisarichmond.honeydew

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.validation.annotation.Validated

@SpringBootApplication
@Validated
class HoneyDewApplication

fun main(args: Array<String>) {
	runApplication<HoneyDewApplication>(*args)
}
