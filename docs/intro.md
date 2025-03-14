---
sidebar_position: 1
---

# Intro

Rale4j (**Rate Limiting Enhancement for Java Devs**) is a powerful, lightweight, and configurable **rate-limiting** library for Spring Boot applications.

## 🔥 Why Use Rale4j?
✅ **Simple Annotations** – Just use `@Rale4j` to control API access.  
✅ **Flexible Configuration** – Customize limits via `application.properties` or Java configurations.  
✅ **In-Memory & Redis Support** – Choose between **Guava Cache** (in-memory) or **Redis** for distributed rate limiting.  
✅ **High Performance** – Uses efficient algorithms like **Token Bucket, Sliding Window, and Leaky Bucket**.  
✅ **Observability** – Integrates with **Prometheus & Grafana** for monitoring.  

## 📦 Installation

### **Maven**
Add this dependency to your `pom.xml`:
```xml
<dependency>
    <groupId>com.rale4j</groupId>
    <artifactId>rale4j-core</artifactId>
    <version>1.0.0</version>
</dependency>
```
Gradle (Kotlin DSL)
```kts
implementation("com.rale4j:rale4j-core:1.0.0")
```
Gradle (Groovy DSL)
```groovy
implementation group: 'com.rale4j', name: 'rale4j-core', version: '1.0.0'
```
⚙️ Getting Started

    Install Rale4j using the dependencies above.
    Configure Rate Limits in application.properties (or application.yml).
    Use the @RateLimit Annotation to enforce limits.