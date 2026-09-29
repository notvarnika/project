package com.newco2.newcon2.Service;

import java.util.List;


import org.springframework.stereotype.Service;
import com.newco2.newcon2.DTO.OneDTO.*;
import com.newco2.newcon2.Repo.OneRepo;

@Service
public class OneService {
private final OneRepo or;

public OneService(OneRepo or) {
	this.or = or;
}
//salutations
public List<SalutationDTO> getAllSalutations(){
	return or.findSalutaions();
}
//gender
public List<GenderDTO> getAllGender(String code, String serial, String param1){
	return or.getAllGenders(code,serial,param1);
}

//religion
public List<ReligionDTO> getAllReligion(){
	return or.getAllReligion();
}
public ReligionDTO getReligionByID(String RELIGION_ID) {
	return or.getReligionById(RELIGION_ID);
}
//marital status

public List<MaritalDTO> getAllMarital (){
	return or.getAllMarital();
}
public MaritalDTO getMaritalById(String MARIRAL_ID) {
	return or.getByMarital_ID(MARIRAL_ID);
}

//state

public List<StateDTO> getAllState(){
	return or.getAllStates();
}
public StateDTO getStateById(String id) {
	return or.getStateById(id);
}

//category
public List<CategoryDTO> getAllCategories() {
    return or.getAllCategories();
}

public CategoryDTO getCategoryById(String id) {
    return or.getCategoryById(id);
}
//location
public List<LocationDTO> getAllLocations() {
    return or.getAllLocations();
}

public LocationDTO getLocationById(String id) {
    return or.getById(id);
}
//deparrtments
public List<DepartmentDTO> getAllDepartments(){
	return or.getAllDept();
}

public DepartmentDTO getDeptById(String id) {
	return or.getDeptById(id);
}
//designation

public List<DesignationDTO > getAllDesignation() {
    return or.getAllDesignation();
}

public DesignationDTO getDesignationById(String id) {
    return or.getDesignationById(id);
}

//nature type
public List<NatureTypeDTO > getAllNatureType() {
    return or.getAllNatureType();
}

public NatureTypeDTO getNatureTypeById(String id) {
    return or.getNatureTypeById(id);
}
//ddo

public List<DDOdto> getAllddo() {
    return or.getAllDDO();
}

public DDOdto getDDOById(String id) {
    return or.getDDOById(id);
}

//dept head

public List<DeptHeadDTO > getAllDeptHead() {
    return or.getAllDeptHead();
}

public DeptHeadDTO getDeptHeadById(String id) {
    return or.getDeptHeadById(id);
}

//discipline

public List<DisciplineDTO > getAllDiscipline() {
    return or.getAllDiscipline();
}

public DisciplineDTO getDisciplineById(String id) {
    return or.getDisciplineById(id);
}
	

//fund type

public List<FundTypeDTO > getAllFundType() {
    return or.getAllFundType();
}

public FundTypeDTO getFundTypeById(String id) {
    return or.getFundTypeById(id);
}

//budget head


public List<BudgetHeadDTO > getAllBudgetHead() {
    return or.getAllBudgetHead();
}

public BudgetHeadDTO getBudgetHeadById(String id) {
    return or.getBudgetHeadById(id);
}
public List<BudgetHeadDTO> getAllBudgetHeadsConcated() { // Or rename this to getAllBudgetHeads() too
    return or.getAllBudgetHeadsConcated(); // <-- Calling it without arguments now works perfectly!
}
public List<BudgetHeadDTO> getBudgetHeadsByFundId(String id){
	return or.getBudgetHeadsByFundId(id);
}
//association
public AssociationDTO getAssociationById(String id) {
	return or.getAssociationById(id);
}

public List<AssociationDTO> getAllAssociation(){
	return or.getAllAssociation();
}
//class id
public List<ClassDTO> getAllClass(){
	return or.getAllClass();
}
public ClassDTO getClassById(String id) {
	return or.getClassById(id);
}
//class dependent
public List<ClassDependentDTO> getAllClassDependent(){
	return or.getAllClassDependent();
}
public ClassDependentDTO getClassDependentById(String id) {
	return or.getClassDependentById(id);
}
///salary bill
public List<SalaryBillDTO> getAllSalaryBill(){
	return or.getAllSalaryBill();
}
public SalaryBillDTO getSalaryBillById(String id) {
	return or.getSalaryBillById(id);
}
//payment mode
public List<PaymentModeDTO> getAllPaymentMode(String code, String serial, String param1) {
	return or.getAllPaymentMode(code, serial, param1);
}

//city
public List<CityDTO> getAllCity(){
	return or.getAllCities();
}
//paylevel
public List<PayLevelDTO> getAllPayLevels(){
	return or.getAllPayLevel();
}

//group
public List<GroupDTO> getAllGroup(){
	return or.getAllGroups();
}
//quarter
public List<QuarterDTO> getAllQuarter(){
	return or.getAllQuarters();
}
	
}
