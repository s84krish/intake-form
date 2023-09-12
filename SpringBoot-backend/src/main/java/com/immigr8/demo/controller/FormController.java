package com.immigr8.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.immigr8.demo.domain.ImmigrationForm;
import com.immigr8.demo.repository.FormRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/api/form")
public class FormController {

  @Autowired
  private FormRepository formRepository;

  @GetMapping("/{alienNum}")
  public ResponseEntity<ImmigrationForm> getForm(@PathVariable(value = "alienNum") long alienNum) {
    Optional<ImmigrationForm> form = formRepository.findById(alienNum);

    if (form.isPresent()) {
      return ResponseEntity.ok().body(form.get());
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping
  public ImmigrationForm saveForm(@Validated @RequestBody ImmigrationForm form) {
    return formRepository.save(form);
  }

}
