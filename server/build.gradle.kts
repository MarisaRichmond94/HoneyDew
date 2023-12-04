import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.6.7"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	kotlin("jvm") version "1.6.21"
	kotlin("plugin.spring") version "1.6.21"
	kotlin("plugin.jpa") version "1.6.21"
	kotlin("plugin.allopen") version "1.6.21"
	kotlin("plugin.noarg") version "1.6.21"
}

group = "com.marisarichmond"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

// This version is necessary for oauth to work
var springSecurityVersion = "5.6.3"

dependencies {
	annotationProcessor("org.projectlombok:lombok")
	compileOnly("org.projectlombok:lombok")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("com.okta.spring:okta-spring-boot-starter:3.0.5")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.2")
	implementation("org.liquibase:liquibase-core")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.security:spring-security-config:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-core:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-crypto:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-oauth2-client:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-oauth2-core:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-oauth2-jose:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-oauth2-resource-server:$springSecurityVersion")
	implementation("org.springframework.security:spring-security-web:$springSecurityVersion")
	implementation("io.github.microutils:kotlin-logging:1.12.5")
	runtimeOnly("org.postgresql:postgresql")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
