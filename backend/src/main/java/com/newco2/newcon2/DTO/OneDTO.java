package com.newco2.newcon2.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OneDTO {

	//salutations
	public static class SalutationDTO {
		@JsonProperty("SALUTATION")
		private String SALUTATION;
		@JsonProperty("SAL_ID")
		private String SAL_ID;
		

		public SalutationDTO( String SAL_ID,String SALUTATION) {
			this.SALUTATION = SALUTATION;
			this.SAL_ID = SAL_ID;
		}
		public SalutationDTO() {}

		public String getSALUTATION() {
			return SALUTATION;
		}
		public void setSALUTATION(String SALUTATION) {
			this.SALUTATION = SALUTATION;
		}
		public String getSAL_ID() {
			return SAL_ID;
		}
		public void setSAL_ID(String SAL_ID) {
			this.SAL_ID = SAL_ID;
		}
	}
	
	//gender
	public static class GenderDTO {
		private String PDOC;
		public GenderDTO(String PDOC, String DESCP1, int DOC) {
			this.PDOC = PDOC;
			this.DESCP1 = DESCP1;
			this.DOC = DOC;
		}
		public String getPDOC() {
			return PDOC;
		}
		public void setPDOC(String PDOC) {
			this.PDOC = PDOC;
		}
		public String getDESCP1() {
			return DESCP1;
		}
		public void setDESCP1(String DESCP1) {
			this.DESCP1 = DESCP1;
		}
		public int getDoc() {
			return DOC;
		}
		public void setDoc(int DOC) {
			this.DOC = DOC;
		}
		private String DESCP1;
		private int DOC;
		}
	//religion
	public static class ReligionDTO {

		private String RELIGION_ID;
		public ReligionDTO() {
		}

		public ReligionDTO(String RELIGION_ID, String RELIGION) {
			this.RELIGION_ID = RELIGION_ID;
			this.RELIGION = RELIGION;
		}
		public String getRELIGION_ID() {
			return RELIGION_ID;
		}
		public void setRELIGION_ID(String RELIGION_ID) {
			this.RELIGION_ID = RELIGION_ID;
		}
		public String getRELIGION() {
			return RELIGION;
		}
		public void setRELIGION(String RELIGION) {
			this.RELIGION = RELIGION;
		}
		private String RELIGION;
		}
	//marital
	public static class MaritalDTO {
		private String MARITAL_ID;
		private String MARITAL;
		public MaritalDTO() {
		}

		public MaritalDTO(String MARITAL_ID, String MARITAL) {
			this.MARITAL_ID = MARITAL_ID;
			this.MARITAL = MARITAL;
		}

		public String getMARITAL_ID() {
			return MARITAL_ID;
		}
		public void setMARITAL_ID(String MARITAL_ID) {
			this.MARITAL_ID = MARITAL_ID;
		}
		public String getMARITAL() {
			return MARITAL;
		}
		public void setMARITAL(String MARITAL) {
			this.MARITAL = MARITAL;
		}
		}
	//state
	public  static class StateDTO {
	    
	    private String STATE_ID;
	    private String STATE;

	    public StateDTO() {
	    }

	    public StateDTO(String STATE_ID, String STATE) {
	        this.STATE_ID = STATE_ID;
	        this.STATE = STATE;
	    }

	    public String getSTATE_ID() {
	        return STATE_ID;
	    }

	    public void setSTATE_ID(String STATE_ID) {
	        this.STATE_ID = STATE_ID;
	    }

	    public String getSTATE() {
	        return STATE;
	    }

	    public void setSTATE(String STATE) {
	        this.STATE = STATE;
	    }
	}

	//category
	public static class CategoryDTO {
	    
	    private String CATEGORY_ID;
	    private String CATEGORY;
	    private String is_subCat;

	    public CategoryDTO() {
	    }

	    public CategoryDTO(String CATEGORY_ID, String CATEGORY, String is_subCat) {
	        this.CATEGORY_ID = CATEGORY_ID;
	        this.CATEGORY = CATEGORY;
	        this.is_subCat = is_subCat;
	    }

	    public String getCATEGORY_ID() {
	        return CATEGORY_ID;
	    }

	    public void setCATEGORY_ID(String CATEGORY_ID) {
	        this.CATEGORY_ID = CATEGORY_ID;
	    }

	    public String getCATEGORY() {
	        return CATEGORY;
	    }

	    public void setCATEGORY(String CATEGORY) {
	        this.CATEGORY = CATEGORY;
	    }

	    public String getIs_subCat() {
	        return is_subCat;
	    }

	    public void setIs_subCat(String is_subCat) {
	        this.is_subCat = is_subCat;
	    }
	}

	//location
	public static class LocationDTO {

		private String LOCATION_CODE;
		private String LOCATION_ID;
		private String LOCATION_NAME;

		// No-argument Constructor
		public LocationDTO() {
		}

		// Parameterized Constructor
		public LocationDTO(String LOCATION_CODE, String LOCATION_ID, String LOCATION_NAME) {
			this.LOCATION_CODE = LOCATION_CODE;
			this.LOCATION_ID = LOCATION_ID;
			this.LOCATION_NAME = LOCATION_NAME;
		}

		// Getters and Setters
		public String getLOCATION_CODE() {
			return LOCATION_CODE;
		}

		public void setLOCATION_CODE(String LOCATION_CODE) {
			this.LOCATION_CODE = LOCATION_CODE;
		}

		public String getLOCATION_ID() {
			return LOCATION_ID;
		}

		public void setLOCATION_ID(String LOCATION_ID) {
			this.LOCATION_ID = LOCATION_ID;
		}

		public String getLOCATION_NAME() {
			return LOCATION_NAME;
		}

		public void setLOCATION_NAME(String LOCATION_NAME) {
			this.LOCATION_NAME = LOCATION_NAME;
		}
	}
	//dept
	public static class DepartmentDTO {

		private String DEPT_ID;
		private String DEPARTMENT;

		public DepartmentDTO() {
		}

		public DepartmentDTO(String DEPT_ID, String DEPARTMENT) {
			this.DEPT_ID = DEPT_ID;
			this.DEPARTMENT = DEPARTMENT;
		}

		public String getDEPT_ID() {
			return DEPT_ID;
		}

		public void setDEPT_ID(String DEPT_ID) {
			this.DEPT_ID = DEPT_ID;
		}

		public String getDEPARTMENT() {
			return DEPARTMENT;
		}

		public void setDEPARTMENT(String DEPARTMENT) {
			this.DEPARTMENT = DEPARTMENT;
		}
	}
	//dept head
	public static class DeptHeadDTO {
	    private String DEPT_HEAD_ID;
	    private String DEPARTMENT_HEAD_NAME;

	    // Default Constructor
	    public DeptHeadDTO() {
	    }

	    // Parameterized Constructor
	    public DeptHeadDTO(String DEPT_HEAD_ID, String DEPARTMENT_HEAD_NAME) {
	        this.DEPT_HEAD_ID = DEPT_HEAD_ID;
	        this.DEPARTMENT_HEAD_NAME = DEPARTMENT_HEAD_NAME;
	    }

	    // Getters and Setters
	    public String getDEPT_HEAD_ID() {
	        return DEPT_HEAD_ID;
	    }

	    public void setDEPT_HEAD_ID(String DEPT_HEAD_ID) {
	        this.DEPT_HEAD_ID = DEPT_HEAD_ID;
	    }

	    public String getDEPARTMENT_HEAD_NAME() {
	        return DEPARTMENT_HEAD_NAME;
	    }

	    public void setDEPARTMENT_HEAD_NAME(String DEPARTMENT_HEAD_NAME) {
	        this.DEPARTMENT_HEAD_NAME = DEPARTMENT_HEAD_NAME;
	    }

	   
	}
	
	//ddo
	public static class DDOdto {

		private String DDO_ID;
		private String DDONAME;
		private String DDOCODE;

		public DDOdto() {
		}

		public DDOdto(String DDO_ID, String DDONAME, String DDOCODE) {
			this.DDO_ID = DDO_ID;
			this.DDONAME = DDONAME;
			this.DDOCODE = DDOCODE;
		}

		public String getDDO_ID() {
			return DDO_ID;
		}

		public void setDDO_ID(String DDO_ID) {
			this.DDO_ID = DDO_ID;
		}

		public String getDDONAME() {
			return DDONAME;
		}

		public void setDDONAME(String DDONAME) {
			this.DDONAME = DDONAME;
		}

		public String getDDOCODE() {
			return DDOCODE;
		}

		public void setDDOCODE(String DDOCODE) {
			this.DDOCODE = DDOCODE;
		}
	}
	//designation
	public static class DesignationDTO {
	    
	    private String DESIGNATION_ID;
	    private String DESIGNATION;

	    // Default Constructor
	    public DesignationDTO() {
	    }

	    // Parameterized Constructor
	    public DesignationDTO(String DESIGNATION_ID, String DESIGNATION) {
	        this.DESIGNATION_ID = DESIGNATION_ID;
	        this.DESIGNATION = DESIGNATION;
	    }

	    // Getters and Setters
	    public String getDESIGNATION_ID() {
	        return DESIGNATION_ID;
	    }

	    public void setDESIGNATION_ID(String DESIGNATION_ID) {
	        this.DESIGNATION_ID = DESIGNATION_ID;
	    }

	    public String getDESIGNATION() {
	        return DESIGNATION;
	    }

	    public void setDESIGNATION(String designation) {
	        this.DESIGNATION = designation;
	    }

	   
	    }
	//discipline
	public static class DisciplineDTO {
	    private String DISC_ID;
	    private String DISCIPLINE;

	    // Default Constructor
	    public DisciplineDTO() {
	    }

	    // Parameterized Constructor
	    public DisciplineDTO(String DISC_ID, String DISCIPLINE) {
	        this.DISC_ID = DISC_ID;
	        this.DISCIPLINE = DISCIPLINE;
	    }

	    // Getters and Setters
	    public String getDISC_ID() {
	        return DISC_ID;
	    }

	    public void setDISC_ID(String DISC_ID) {
	        this.DISC_ID = DISC_ID;
	    }

	    public String getDISCIPLINE() {
	        return DISCIPLINE;
	    }

	    public void setDISCIPLINE(String DISCIPLINE) {
	        this.DISCIPLINE = DISCIPLINE;
	    }
	}
	//nature type
	public static class NatureTypeDTO {
	    private String NATURE_ID;
	    private String NATURE;

	    // Default Constructor
	    public NatureTypeDTO() {
	    }

	    // Parameterized Constructor
	    public NatureTypeDTO(String NATURE_ID, String NATURE) {
	        this.NATURE_ID = NATURE_ID;
	        this.NATURE = NATURE;
	    }

	    // Getters and Setters
	    public String getNATURE_ID() {
	        return NATURE_ID;
	    }

	    public void setNATURE_ID(String NATURE_ID) {
	        this.NATURE_ID = NATURE_ID;
	    }

	    public String getNATURE() {
	        return NATURE;
	    }

	    public void setNATURE(String NATURE) {
	        this.NATURE = NATURE;
	    }
	}
	//fund type
	public static class FundTypeDTO {
	    private String FUND_TYPE_ID;
	    private String DESCRIPTION;

	    // Default Constructor
	    public FundTypeDTO() {
	    }

	    // Parameterized Constructor
	    public FundTypeDTO(String FUND_TYPE_ID, String DESCRIPTION) {
	        this.FUND_TYPE_ID = FUND_TYPE_ID;
	        this.DESCRIPTION = DESCRIPTION;
	    }

	    // Getters and Setters
	    public String getFUND_TYPE_ID() {
	        return FUND_TYPE_ID;
	    }

	    public void setFUND_TYPE_ID(String FUND_TYPE_ID) {
	        this.FUND_TYPE_ID = FUND_TYPE_ID;
	    }

	    public String getDESCRIPTION() {
	        return DESCRIPTION;
	    }

	    public void setDESCRIPTION(String DESCRIPTION) {
	        this.DESCRIPTION = DESCRIPTION;
	    }
	}
	//budget head

public static class BudgetHeadDTO {

    private String BUDGET_HEAD_ID;
    private String GOVT_BUDGET_HEAD;
    private String FUND_TYPE;
    private String FUND_CATEGORY;
    private String BUDGET_HEAD;
    private String BUDGET_HEAD_DESCRIPTION;
    public String getCONCAT_HEAD() {
		return CONCAT_HEAD;
	}

	public void setCONCAT_HEAD(String CONCAT_HEAD) {
		this.CONCAT_HEAD = CONCAT_HEAD;
	}

	private String CONCAT_HEAD;

    // Default Constructor
    public BudgetHeadDTO() {
    }

    // Parameterized Constructor
    public BudgetHeadDTO(String BUDGET_HEAD_ID, String GOVT_BUDGET_HEAD, String FUND_TYPE, String FUND_CATEGORY, String BUDGET_HEAD, String BUDGET_HEAD_DESCRIPTION) {
        this.BUDGET_HEAD_ID = BUDGET_HEAD_ID;
        this.GOVT_BUDGET_HEAD = GOVT_BUDGET_HEAD;
        this.FUND_TYPE = FUND_TYPE;
        this.FUND_CATEGORY = FUND_CATEGORY;
        this.BUDGET_HEAD = BUDGET_HEAD;
        this.BUDGET_HEAD_DESCRIPTION = BUDGET_HEAD_DESCRIPTION;
    }

    // Getters and Setters
    public String getBUDGET_HEAD_ID() {
        return BUDGET_HEAD_ID;
    }

    public void setBUDGET_HEAD_ID(String BUDGET_HEAD_ID) {
        this.BUDGET_HEAD_ID = BUDGET_HEAD_ID;
    }

    public String getGOVT_BUDGET_HEAD() {
        return GOVT_BUDGET_HEAD;
    }

    public void setGOVT_BUDGET_HEAD(String GOVT_BUDGET_HEAD) {
        this.GOVT_BUDGET_HEAD = GOVT_BUDGET_HEAD;
    }

    public String getFUND_TYPE() {
        return FUND_TYPE;
    }

    public void setFUND_TYPE(String FUND_TYPE) {
        this.FUND_TYPE = FUND_TYPE;
    }

    public String getFUND_CATEGORY() {
        return FUND_CATEGORY;
    }

    public void setFUND_CATEGORY(String FUND_CATEGORY) {
        this.FUND_CATEGORY = FUND_CATEGORY;
    }

    public String getBUDGET_HEAD() {
        return BUDGET_HEAD;
    }

    public void setBUDGET_HEAD(String BUDGET_HEAD) {
        this.BUDGET_HEAD = BUDGET_HEAD;
    }

    public String getBUDGET_HEAD_DESCRIPTION() {
        return BUDGET_HEAD_DESCRIPTION;
    }

    public void setBUDGET_HEAD_DESCRIPTION(String BUDGET_HEAD_DESCRIPTION) {
        this.BUDGET_HEAD_DESCRIPTION = BUDGET_HEAD_DESCRIPTION;
    }
	
}
	
	
	//association
	public static class AssociationDTO {

	    private String ASSOCIATION_ID;
	    private String association_name;

	    public AssociationDTO() {
	    }

	    public AssociationDTO(String ASSOCIATION_ID, String association_name) {
	        this.ASSOCIATION_ID = ASSOCIATION_ID;
	        this.association_name = association_name;
	    }

	    public String getASSOCIATION_ID() {
	        return ASSOCIATION_ID;
	    }

	    public void setASSOCIATION_ID(String ASSOCIATION_ID) {
	        this.ASSOCIATION_ID = ASSOCIATION_ID;
	    }

	    public String getAssociation_name() {
	        return association_name;
	    }

	    public void setAssociation_name(String association_name) {
	        this.association_name = association_name;
	    }

	}
	
	//class
	public static class ClassDTO {

		private String CLASS_ID;
		private String CLASS;

		// No-argument constructor
		public ClassDTO() {
		}

		// All-argument constructor
		public ClassDTO(String CLASS_ID, String CLASS) {
			this.CLASS_ID = CLASS_ID;
			this.CLASS = CLASS;
		}

		// Getters and Setters
		public String getCLASS_ID() {
			return CLASS_ID;
		}

		public void setCLASS_ID(String CLASS_ID) {
			this.CLASS_ID = CLASS_ID;
		}

		public String getCLASS() {
			return CLASS;
		}

		public void setCLASS(String CLASS) {
			this.CLASS = CLASS;
		}
	}
	
	//class dependent
	public static class ClassDependentDTO {

		private String GAD_ID;
		private String GAD_NONGAD;

		public ClassDependentDTO() {
		}

		public ClassDependentDTO(String GAD_ID, String GAD_NONGAD) {
			this.GAD_ID = GAD_ID;
			this.GAD_NONGAD = GAD_NONGAD;
		}

		public String getGAD_ID() {
			return GAD_ID;
		}

		public void setGAD_ID(String GAD_ID) {
			this.GAD_ID = GAD_ID;
		}

		public String getGAD_NONGAD() {
			return GAD_NONGAD;
		}

		public void setGAD_NONGAD(String GAD_NONGAD) {
			this.GAD_NONGAD = GAD_NONGAD;
		}
	}
	
	//payment mode
	public static class PaymentModeDTO {

		private String PDOC;
		private String DESCP1;

		public PaymentModeDTO() {
		}

		public PaymentModeDTO(String PDOC, String DESCP1) {
			this.PDOC = PDOC;
			this.DESCP1 = DESCP1;
		}

		public String getPDOC() {
			return PDOC;
		}

		public void setPDOC(String PDOC) {
			this.PDOC = PDOC;
		}

		public String getDESCP1() {
			return DESCP1;
		}

		public void setDESCP1(String DESCP1) {
			this.DESCP1 = DESCP1;
		}
	}
	//salarybill
	public  static class SalaryBillDTO {

	    private String BILL_TYPE_ID;
	    private String DESCRIPTION;

	    public SalaryBillDTO() {
	    }

	    public SalaryBillDTO(String BILL_TYPE_ID, String DESCRIPTION) {
	        this.BILL_TYPE_ID = BILL_TYPE_ID;
	        this.DESCRIPTION = DESCRIPTION;
	    }

	    public String getBILL_TYPE_ID() {
	        return BILL_TYPE_ID;
	    }

	    public void setBILL_TYPE_ID(String BILL_TYPE_ID) {
	        this.BILL_TYPE_ID = BILL_TYPE_ID;
	    }

	    public String getDESCRIPTION() {
	        return DESCRIPTION;
	    }

	    public void setDESCRIPTION(String DESCRIPTION) {
	        this.DESCRIPTION = DESCRIPTION;
	    }
	}
	//city
	
	
	public static class CityDTO{
		private String CITY_ID;
		private String CITY_NAME;
		
		public CityDTO() {
	    }

	    public CityDTO(String CITY_ID, String CITY_NAME) {
	        this.CITY_ID = CITY_ID;
	        this.CITY_NAME = CITY_NAME;
	    }

	    public String getCITY_ID() {
	        return CITY_ID;
	    }

	    public void setCITY_ID(String CITY_ID) {
	        this.CITY_ID = CITY_ID;
	    }

	    public String getCITY_NAME() {
	        return CITY_NAME;
	    }

	    public void setCITY_NAME(String CITY_NAME) {
	        this.CITY_NAME = CITY_NAME;
	    }
		
	}
	
	
	//paylevel
	
	public static class PayLevelDTO{
		private String GRADE_ID;
		private String basic_from;
		private Integer GD_id;
		public PayLevelDTO() {}
		
		public PayLevelDTO(String GRADE_ID, String basic_from, Integer GD_id) {
			this.GRADE_ID = GRADE_ID;
			this.basic_from = basic_from;
			this.GD_id = GD_id;
		}
		public String getGRADE_ID() {
			return GRADE_ID;
		}
		public void setGRADE_ID(String GRADE_ID) {
			this.GRADE_ID = GRADE_ID;
		}
		public String getBasic_from() {
			return basic_from;
		}
		public void setBasic_from(String basic_from) {
			this.basic_from = basic_from;
		}
		public Integer getGD_id() {
			return GD_id;
		}
		public void setGD_id(Integer GD_id) {
			this.GD_id = GD_id;
		}
		
	}
	//group
	public static class GroupDTO{
		private String GRADE_ID;
		private String GRADE_NAME;
		
		public GroupDTO() {
	    }

	    public GroupDTO(String GRADE_ID, String GRADE_NAME) {
	        this.GRADE_ID = GRADE_ID;
	        this.GRADE_NAME = GRADE_NAME;
	    }

	    public String getGRADE_ID() {
	        return GRADE_ID;
	    }

	    public void setGRADE_ID2(String GRADE_ID) {
	        this.GRADE_ID = GRADE_ID;
	    }

	    public String getGRADE_NAME() {
	        return GRADE_NAME;
	    }

	    public void setGRADE_NAME(String GRADE_NAME) {
	        this.GRADE_NAME = GRADE_NAME;
	    }
	}
	
	public static class QuarterDTO{
		private String QUARTER_ID;
		private String QUARTER_CATEGORY;
		
		public QuarterDTO() {
			
		}
		public String getQUARTER_ID() {
	        return QUARTER_ID;
	    }

	    public void setQUARTER_ID(String QUARTER_ID) {
	        this.QUARTER_ID = QUARTER_ID;
	    }

	    public String getQUARTER_CATEGORY() {
	        return QUARTER_CATEGORY;
	    }

	    public void setQUARTER_CATEGORY(String QUARTER_CATEGORY) {
	        this.QUARTER_CATEGORY = QUARTER_CATEGORY;
	    }
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
