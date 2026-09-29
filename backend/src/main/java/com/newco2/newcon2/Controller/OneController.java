package com.newco2.newcon2.Controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.newco2.newcon2.Service.OneService;
import com.newco2.newcon2.DTO.OneDTO.*;


@RestController
@RequestMapping("/newEmp")
@CrossOrigin(origins = "http://localhost:5173")
public class OneController {

	private final OneService os;

	public OneController(OneService os) {
		this.os = os;
	}
	//salutations
	@GetMapping("/salutations")
	public List<SalutationDTO> getAllSalutations(){
		return os.getAllSalutations();
	}
	
	//gender
	@GetMapping("/gender/{code}/{serial}/{param1}")
	public List<GenderDTO> getAllGender(@PathVariable String code, @PathVariable String serial, @PathVariable String param1){
		return os.getAllGender(code, serial, param1);
	}
	
	//religion
	@GetMapping("/religion")
	public List<ReligionDTO> getAllReligion (){
		return os.getAllReligion();
	}
	@GetMapping("/religion/{RELIGION_ID}")
	public ReligionDTO getReligionByID(@PathVariable String RELIGION_ID) {
		return os.getReligionByID(RELIGION_ID);
	}
	
	
	//marital
	@GetMapping("/marital")
	public List<MaritalDTO> getAllMarital (){
	return os.getAllMarital();
	}
	@GetMapping("/marital/{MARITAL_ID}")
	public MaritalDTO getMaritalById(@PathVariable String MARITAL_ID) {
	return os.getMaritalById(MARITAL_ID) ;
	}
	//state
	@GetMapping("/state")
	public List<StateDTO> getAllState (){
		return os.getAllState();
	}
	@GetMapping("/state/{STATE_ID}")
	public StateDTO getStateById(@PathVariable String STATE_ID) {
		return os.getStateById(STATE_ID);
	}
	//category
    @GetMapping("/category")
    public List<CategoryDTO> getAllCategories() {
        return os.getAllCategories();
    }

    @GetMapping("/category/{id}")
    public CategoryDTO getCategoryById(@PathVariable String id) {
        return os.getCategoryById(id);
    }
    
    //location
    @GetMapping("/location")
    public List<LocationDTO> getAllLocations() {
        return os.getAllLocations();
    }

    @GetMapping("/location/{id}")
    public LocationDTO getLocationById(@PathVariable String id) {
        return os.getLocationById(id);
        		
    }
	//dept
    @GetMapping("/dept")
    public List<DepartmentDTO> getAllDepartments() {
        return os.getAllDepartments();
    }

    @GetMapping("/dept/{id}")
    public DepartmentDTO getDeptById(@PathVariable String id) {
        return os.getDeptById(id);
    }
    //depthead
    @GetMapping("/deptHead")
    public List<DeptHeadDTO> getAllDeptHead() {
        return os.getAllDeptHead();
    }

    @GetMapping("/deptHead/{id}")
    public DeptHeadDTO getDeptHeadById(@PathVariable String id) {
        return os.getDeptHeadById(id);	
    }
    //designation
    @GetMapping("/designation")
    public List<DesignationDTO> getAllDesignation() {
        return os.getAllDesignation();
    }

    @GetMapping("/designation/{id}")
    public DesignationDTO getDesignationById(@PathVariable String id) {
        return os.getDesignationById(id);	
    }
    //discipline
    @GetMapping("/discipline")
    public List<DisciplineDTO> getAllDiscipline() {
        return os.getAllDiscipline();
    }

    @GetMapping("/discipline/{id}")
    public DisciplineDTO getDisciplineById(@PathVariable String id) {
        return os.getDisciplineById(id);	
    }
    //ddo
    @GetMapping("/ddo")
    public List<DDOdto> getAllddo() {
        return os.getAllddo();
    }

    @GetMapping("/ddo/{id}")
    public DDOdto getddoById(@PathVariable String id) {
        return os.getDDOById(id);
    }
    
    //fund type
    @GetMapping("/fundType")
    public List<FundTypeDTO> getFundTypeById() {
        return os.getAllFundType();
    }

    @GetMapping("/fundType/{id}")
    public FundTypeDTO getFundTypeById(@PathVariable String id) {
        return os.getFundTypeById(id);	
    }
    //nature type
    @GetMapping("/nature")
    public List<NatureTypeDTO> getAllNatureType() {
        return os.getAllNatureType();
    }

    @GetMapping("/nature/{id}")
    public NatureTypeDTO getNatureTypeById(@PathVariable String id) {
        return os.getNatureTypeById(id);	
    }
    
    //budgethead
    @GetMapping("/budgetHead")
    public List<BudgetHeadDTO> getAllBudgetHead() {
        return os.getAllBudgetHead();
    }

    @GetMapping("/budgetHead/{id}")
    public BudgetHeadDTO getBudgetHeadById(@PathVariable String id) {
        return os.getBudgetHeadById(id);	
    }
    
    @GetMapping("/budgetHead/fund")
    public List<BudgetHeadDTO> getAllBudgetHeadsConcated() {
        return os.getAllBudgetHeadsConcated(); 
    }
    
    @GetMapping("/budgetHead/fund/{id}")
    public List<BudgetHeadDTO> getBudgetHeadsByFundId(@PathVariable String id){
    	return os.getBudgetHeadsByFundId(id);
    }
    
    //class
    @GetMapping("/class")
	public List<ClassDTO> getAllClass(){
		return os.getAllClass();
	}
	
	@GetMapping("/class/{id}")
	public ClassDTO getClassById(@PathVariable String id) {
		return os.getClassById(id);
	}
	
	//class dependent
	@GetMapping("/classDependent")
	public List<ClassDependentDTO> getAllClassDependent(){
		return os.getAllClassDependent();
	}
	@GetMapping("/classDependent/{id}")
	public ClassDependentDTO getClassDependentById(@PathVariable String id) {
		return os.getClassDependentById(id);
	}
	//association
	@GetMapping("/association/{id}")
	public AssociationDTO getAssociationById(@PathVariable String id) {
		return os.getAssociationById(id);
	}
	
	@GetMapping("/association")
	public List<AssociationDTO> getAllAssociation() {
		return os.getAllAssociation();
	}
	
	//salary bill
	@GetMapping("/salaryBill")
	public List<SalaryBillDTO> getAllSalaryBill(){
		return os.getAllSalaryBill();
	}
	
	@GetMapping("/salaryBill/{id}")
	public SalaryBillDTO getSalaryBillById(@PathVariable String id) {
		return os.getSalaryBillById(id);
	}
	
	//payment mode
	@GetMapping("/paymentMode/{code}/{serial}/{param1}")
	public List<PaymentModeDTO> getAllPaymentMode(@PathVariable String code, @PathVariable String serial, @PathVariable String param1){
		return os.getAllPaymentMode(code, serial, param1);
	}
	//city
	@GetMapping("/city")
	public List<CityDTO> getAllCiti(){
		return os.getAllCity();
	}
	//paylevel
	@GetMapping("/payLevel")
	public List<PayLevelDTO> getAllPaylevel(){
		return os.getAllPayLevels();
	}
	//group
	@GetMapping("/group")
	public List<GroupDTO> getAllGroupService(){
		return os.getAllGroup();
	}
	//quarter
	@GetMapping("/quarter")
	public List<QuarterDTO> getAllQuarterService(){
		return os.getAllQuarter();
	}
	
	
	
}
