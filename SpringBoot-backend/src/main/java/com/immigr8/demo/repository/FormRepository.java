package com.immigr8.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.immigr8.demo.domain.ImmigrationForm;

@Repository
public interface FormRepository extends CrudRepository<ImmigrationForm, Long> {}
