package com.country.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.country.crud.model.Country;

public interface CRUDRepository extends JpaRepository<Country, Integer> {

}
