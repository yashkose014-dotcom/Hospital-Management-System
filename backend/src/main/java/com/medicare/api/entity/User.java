package com.medicare.api.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity @Table(name = "users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
  @Column(name="full_name", nullable=false) private String fullName;
  @Column(nullable=false, unique=true) private String email;
  @Column(name="password_hash", nullable=false) private String passwordHash;
  @Enumerated(EnumType.STRING) @Column(nullable=false) private Role role;
  private String phone;
  private boolean active = true;
  @Column(name="created_at", updatable=false) private Instant createdAt;
  public Long getId(){return id;} public String getFullName(){return fullName;} public String getEmail(){return email;} public Role getRole(){return role;} public boolean isActive(){return active;}
}

