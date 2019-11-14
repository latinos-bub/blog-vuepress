---
title: 跨域-spring boot后端配置
tags: [编程技术]
---

### 跨域

> 关于跨域的概念，请参看：[腾讯云的介绍](https://cloud.tencent.com/developer/article/1175899)

<!--more-->

### 怎么判断是跨域

> * 是否是同一协议，比如 http、https等
> * 是否是同一ip地址
> * 是否是同一端口
>
> 只要以上三个条件中有一个不满足，既是跨域

### 如何解决

> 常见的解决方式大概有三种：前端解决（适用于前后端分离分离项目）、后端解决、通过代理服务器解决（比如常见的nginx代理配置解决）
>
> 现在我这里只介绍通过后端的配置来解决跨域的问题，前端和nginx代理的解决方式，之后会写

### spring boot 解决

```java
// 我们通过实现WebMvcConfigurer接口来解决跨域
package xxxx;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @description: 后端通过实现 WebMvcConfigure 接口来实现跨域
 * @className: CorsConfig
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .allowedMethods("GET", "POST", "DELETE", "PUT","PATCH")
                .maxAge(3600);
    }
}
```

