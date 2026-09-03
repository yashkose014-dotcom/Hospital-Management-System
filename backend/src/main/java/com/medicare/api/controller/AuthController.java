package com.medicare.api.controller;

import com.medicare.api.dto.ApiMessage;
import org.springframework.web.bind.annotation.*;

/** Endpoint contract placeholder. Add JWT issuing and registration service in the authentication milestone. */
@RestController @RequestMapping("/auth")
public class AuthController {
  @GetMapping("/status") public ApiMessage status(){ return new ApiMessage("Authentication module is ready for JWT integration."); }
}

