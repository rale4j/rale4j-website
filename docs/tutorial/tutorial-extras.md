 # Tutorial Extras

   You can customize the rate limiter further by modifying the `application.yml`:

   ```yaml
   rale4j:
     strategies:
       bucket4j:
         enabled: true
     limits:
       default:
         limit: 200
         duration: 120
   ```

   ## Monitoring and Metrics

   Enable Prometheus metrics for observability:

   ```yaml
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

   ## Security Configuration

   Configure security settings:

   ```yaml
   rale4j:
     security:
       jwt:
         enabled: true
       oauth2:
         enabled: true
       apiKey:
         enabled: true
       rbac:
         enabled: true
   ```
