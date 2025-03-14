# Tutorial Basics

   Ensure you have the following in your `build.gradle`:

   ```kotlin
   dependencies {
       implementation("com.rale4j:rale4j-core:1.0.0")
   }
   ```

   ## Basic Configuration

   Configure the `application.yml` file:

   ```yaml
   rale4j:
     strategies:
       bucket4j:
         enabled: true
     limits:
       default:
         limit: 100
         duration: 60
   ```

## Using the Rate Limiter

Example usage in a Spring Boot application with the `@Rale4j` annotation:

```java
import com.rale4j.sb.annotation.Rale4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
public class MyController {

    @Rale4j(strategy = "bucket4j", limit = 100, duration = 60)
    @GetMapping("/api/resource")
    public ResponseEntity<String> getResource() {
        return ResponseEntity.ok("Request allowed");
    }
}
```
