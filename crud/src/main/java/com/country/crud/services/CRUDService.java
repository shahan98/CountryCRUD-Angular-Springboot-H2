package com.country.crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.country.crud.model.Country;
import com.country.crud.repository.CRUDRepository;

@Service
public class CRUDService {
	
	@Autowired
	private CRUDRepository repo;
	
	public List<Country> fetchCountryList(){
		return repo.findAll();
	}
	
	public Country saveCountryToDB(Country country) {
		return repo.save(country);
	}
	
	public Optional<Country> fetchCountryById(int id) {
		return repo.findById(id);
	}
	
	public String deleteCountryById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result = "Country successfully deleted";
		}catch(Exception e) {
			result = "Country doesn't exist!";
		}
		return result;
		
	}
	
}
