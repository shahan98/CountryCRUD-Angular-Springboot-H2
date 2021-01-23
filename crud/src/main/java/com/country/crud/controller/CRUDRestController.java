package com.country.crud.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.country.crud.model.Country;
import com.country.crud.services.CRUDService;

@RestController
public class CRUDRestController {

	@Autowired
	private CRUDService service;
	
	
	@GetMapping("/rest/v2/getcountrylist")
	@CrossOrigin(origins = "http://127.0.0.1:4200")
	public List<Country> fetchCountryList(){
		List<Country> countries = new ArrayList<Country>();
		//logic to fetch list from database;
		countries = service.fetchCountryList();
		return countries;
	}
	
	@PostMapping("/rest/v2/addcountry")
	@CrossOrigin(origins = "http://127.0.0.1:4200")
	public Country saveCountry(@RequestBody Country country) {
		return service.saveCountryToDB(country);
	}
	
	@GetMapping("/rest/v2/getcountrybyid/{id}")
	@CrossOrigin(origins = "http://127.0.0.1:4200")
	public Country fetchCountryById(@PathVariable int id){
		return service.fetchCountryById(id).get();
		
	}
	
	@DeleteMapping("/rest/v2/deletecountrybyid/{id}")
	@CrossOrigin(origins = "http://127.0.0.1:4200") 
	public String deleteCountryById(@PathVariable int id) {
		return service.deleteCountryById(id);
	}
}
