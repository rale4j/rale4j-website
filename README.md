# Rale4j Spring Boot

Rale4j is a flexible and powerful rate-limiting library for Java applications. This project demonstrates how to integrate Rale4j with a Spring Boot application.

## Features

- Supports multiple rate-limiting strategies: Guava, Redis, Token Bucket, Resilience4j, Bucket4j
- Easy integration with Spring Boot
- Customizable rate limits and security configurations
- Monitoring and metrics with Prometheus and Grafana

## Getting Started

### Prerequisites

- Java 21 or higher
- Gradle 8 or higher
- Spring Boot 3 or higher

### Installation

Add the following dependency to your `build.gradle`:

#### Kotlin

```kotlin
dependencies {
    implementation("com.rale4j:rale4j-core:1.0.0")
}
```

#### Groovy

```groovy
dependencies {
    implementation group: 'com.rale4j', name: 'rale4j-core', version: '1.0.0'
}
```

### Configuration

Configure the `application.yml` file:

```yaml
rale4j:
  strategies:
    guava:
      enabled: true
    redis:
      enabled: true
      host: 127.0.0.1
      port: 6379
    tokenBucket:
      enabled: true
    resilience4j:
      enabled: true
    bucket4j:
      enabled: true

  limits:
    default:
      limit: 100
      duration: 60
    metrics:
      limit: 10
      duration: 60

  security:
    jwt:
      enabled: true
    oauth2:
      enabled: true
    apiKey:
      enabled: true
    rbac:
      enabled: true

  observability:
    prometheus:
      enabled: true
    grafana:
      enabled: true

management:
  endpoints:
    web:
      exposure:
        include: prometheus
  metrics:
    export:
      prometheus:
        enabled: true
```

### Usage

Annotate your Spring Boot controller methods with the `@Rale4j` annotation to enforce rate limiting:

```java
import com.rale4j.sb.annotation.Rale4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class MyController {

    @Rale4j(strategy = "bucket4j", limit = 100, duration = 60)
    @GetMapping("/api/resource")
    public ResponseEntity<String> getResource() {
        return ResponseEntity.ok("Request allowed");
    }
}
```
## Documentation

For more information, visit the [website](https://rale4j.com).