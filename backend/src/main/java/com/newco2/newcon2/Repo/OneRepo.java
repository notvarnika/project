package com.newco2.newcon2.Repo;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.newco2.newcon2.DTO.OneDTO.*;

@Repository
public class OneRepo {

	private final JdbcTemplate jdbcTemplate;
	

	public OneRepo(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	
	//salutations
	public List<SalutationDTO> findSalutaions(){
		String sql= "SELECT SAL_ID, SALUTATION FROM salutation_mast ; ";
		return jdbcTemplate.query(sql,(rs,rowNum)->{
			SalutationDTO dto = new  SalutationDTO();
			dto.setSAL_ID(rs.getString("SAL_ID"));
			dto.setSALUTATION(rs.getString("SALUTATION"));
			return dto;
		});
	}
	
    //gender
    public List<GenderDTO> getAllGenders(String code, String serial, String param1) {
    	String sql = "SELECT TRIM(pdoc) as pdoc, TRIM(descp1) as descp1, doc FROM cparam " +
                "WHERE TRIM(code) = TRIM(?) " +
                "AND TRIM(serial) = TRIM(?) " +
                "AND TRIM(param1) = TRIM(?) " +
                "ORDER BY doc ASC LIMIT 3";        
        return jdbcTemplate.query(sql, (rs, rowNum) -> new GenderDTO(
            rs.getString("pdoc"),
            rs.getString("descp1"),
            rs.getInt("doc") 
        ), code, serial, param1);
    
}
    
    //religion
    
    public List<ReligionDTO> getAllReligion() {
        String sql = "SELECT RELIGION_ID, RELIGION FROM religion_mast";
        
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            ReligionDTO dto = new ReligionDTO();
            dto.setRELIGION_ID(rs.getString("RELIGION_ID"));
            dto.setRELIGION(rs.getString("RELIGION"));
            return dto;
        });
    }
    
    public ReligionDTO getReligionById(String RELIGION_ID) {
        String sql = "SELECT RELIGION_ID, RELIGION FROM religion_mast WHERE RELIGION_ID = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                ReligionDTO dto = new ReligionDTO();
                dto.setRELIGION_ID(rs.getString("RELIGION_ID"));
                dto.setRELIGION(rs.getString("RELIGION"));
                return dto;
            }, RELIGION_ID);
        } catch(Exception e) {
            System.err.println("Religion ID not found: " + RELIGION_ID);
            return null;
        }
    }
    
    
    
    
    //marital status
    
    public List<MaritalDTO> getAllMarital() {
        String sql = "SELECT MARITAL_ID, MARITAL FROM marital_mast";
        
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            MaritalDTO dto = new MaritalDTO();
            dto.setMARITAL_ID(rs.getString("MARITAL_ID"));
            dto.setMARITAL(rs.getString("MARITAL"));
            return dto;
        });
    }
    
    public MaritalDTO getByMarital_ID(String MARITAL_ID) {
        String sql = "SELECT MARITAL_ID, MARITAL FROM marital_mast WHERE MARITAL_ID = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                MaritalDTO dto = new MaritalDTO();
                dto.setMARITAL_ID(rs.getString("MARITAL_ID"));
                dto.setMARITAL(rs.getString("MARITAL"));
                return dto;
            }, MARITAL_ID);
        } catch (Exception e) {
            System.err.println("Marital ID not found: " + MARITAL_ID);
            return null;
        }
    }
    
    
    
    
    
    //state
    
    
    public List<StateDTO> getAllStates() {
        String sql = "SELECT STATE_ID, STATE FROM state_mast";
        
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            StateDTO dto = new StateDTO();
            dto.setSTATE_ID(rs.getString("STATE_ID"));
            dto.setSTATE(rs.getString("STATE"));
            return dto;
        });
    }
    
    public StateDTO getStateById(String STATE_ID) {
        String sql = "SELECT STATE_ID, STATE FROM state_mast WHERE STATE_ID = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                StateDTO dto = new StateDTO();
                dto.setSTATE_ID(rs.getString("STATE_ID"));
                dto.setSTATE(rs.getString("STATE"));
                return dto;
            }, STATE_ID);
        } catch (Exception e) {
            System.err.println("State ID not found: " + STATE_ID);
            return null;
        }
    }
    
    
    
    
    //category
    
    public List<CategoryDTO> getAllCategories() {
        String sql = "SELECT CATEGORY_ID, CATEGORY, is_subCat FROM category_mast";
        
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            CategoryDTO dto = new CategoryDTO();
            dto.setCATEGORY_ID(rs.getString("CATEGORY_ID"));
            dto.setCATEGORY(rs.getString("CATEGORY"));
            dto.setIs_subCat(rs.getString("is_subCat"));
            return dto;
        });
    }

    public CategoryDTO getCategoryById(String CATEGORY_ID) {
        String sql = "SELECT CATEGORY_ID, CATEGORY, is_subCat FROM category_mast WHERE CATEGORY_ID = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                CategoryDTO dto = new CategoryDTO();
                dto.setCATEGORY_ID(rs.getString("CATEGORY_ID"));
                dto.setCATEGORY(rs.getString("CATEGORY"));
                dto.setIs_subCat(rs.getString("is_subCat"));
                return dto;
            }, CATEGORY_ID);
        } catch (Exception e) {
            System.err.println("Category ID not found: " + CATEGORY_ID);
            return null;
        }
    }
    
    
    
    //location
    public List<LocationDTO> getAllLocations() {
        String sql = "SELECT LOCATION_CODE, LOCATION_ID, LOCATION_NAME FROM leave_location_mast;";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            LocationDTO dto = new LocationDTO();
            dto.setLOCATION_CODE(rs.getString("LOCATION_CODE"));
            dto.setLOCATION_ID(rs.getString("LOCATION_ID"));
            dto.setLOCATION_NAME(rs.getString("LOCATION_NAME"));
            return dto;
        });
	}
	public LocationDTO getById(String id) {
        String sql = "SELECT LOCATION_CODE, LOCATION_ID, LOCATION_NAME FROM leave_location_mast WHERE LOCATION_CODE = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                LocationDTO dto = new LocationDTO();
                dto.setLOCATION_CODE(rs.getString("LOCATION_CODE"));
                dto.setLOCATION_ID(rs.getString("LOCATION_ID"));
                dto.setLOCATION_NAME(rs.getString("LOCATION_NAME"));
                return dto;
            }, id);
        } catch (Exception e) {
            System.err.println("Location ID not found: " +id);
            return null;
        }

	}
	
	
	
	//department
	public List<DepartmentDTO> getAllDept(){
   	 String sql = "SELECT DEPT_ID, DEPARTMENT FROM department_mast;";
	        
	        return jdbcTemplate.query(sql, (rs, rowNum) -> {
	        	DepartmentDTO dto = new DepartmentDTO();
	            dto.setDEPT_ID(rs.getString("DEPT_ID"));
	            dto.setDEPARTMENT(rs.getString("DEPARTMENT"));
	            return dto;
	        });
   }
   public DepartmentDTO getDeptById(String id) {
   	String sql = "SELECT DEPT_ID, DEPARTMENT FROM department_mast WHERE DEPT_ID = ?";
       
       try {
           return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
           	DepartmentDTO dto = new DepartmentDTO();
               dto.setDEPT_ID(rs.getString("DEPT_ID"));
               dto.setDEPARTMENT(rs.getString("DEPARTMENT"));
               return dto;
           }, id);
       } catch (Exception e) {
           System.err.println("department ID not found: " + id);
           return null;
       }	
   }
   
   
   //designationn
   public List<DesignationDTO> getAllDesignation(){
   	
   	String sql = "SELECT DESIGNATION_ID, DESIGNATION FROM designation_mast;";
       
       return jdbcTemplate.query(sql, (rs, rowNum) -> {
       	DesignationDTO dto = new DesignationDTO();
           dto.setDESIGNATION_ID(rs.getString("DESIGNATION_ID"));
           dto.setDESIGNATION(rs.getString("DESIGNATION"));
           return dto;
       });
   }
   
   public DesignationDTO getDesignationById(String id) {
   	String sql = "SELECT DESIGNATION_ID, DESIGNATION FROM designation_mast WHERE DESIGNATION_ID = ?";
       
       try {
           return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
           	DesignationDTO dto = new DesignationDTO();
               dto.setDESIGNATION_ID(rs.getString("DESIGNATION_ID"));
               dto.setDESIGNATION(rs.getString("DESIGNATION"));
               return dto;
           }, id);
       } catch (Exception e) {
           System.err.println("designation ID not found: " + id);
           return null;
       }	
   }
   
   
   
   //nature type
   
   public List<NatureTypeDTO> getAllNatureType(){
		  String sql = "SELECT NATURE_ID,NATURE FROM nature_mast;";
	        
	        return jdbcTemplate.query(sql, (rs, rowNum) -> {
	        	NatureTypeDTO dto = new NatureTypeDTO();
	            dto.setNATURE_ID(rs.getString("NATURE_ID"));
	            dto.setNATURE(rs.getString("NATURE"));
	            return dto;
	        });
	}
	
	public NatureTypeDTO getNatureTypeById(String id) {
		  String sql = "SELECT NATURE_ID,NATURE FROM nature_mast WHERE NATURE_ID=?;";
		  
		  try {
	            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
	            	NatureTypeDTO dto = new NatureTypeDTO();
		            dto.setNATURE_ID(rs.getString("NATURE_ID"));
		            dto.setNATURE(rs.getString("NATURE"));
		            return dto;
	            }, id);
	        } catch (Exception e) {
	            System.err.println("Nature ID not found: " + id);
	            return null;
	        }    

	}
	
	
	//ddo
	
	public List<DDOdto> getAllDDO(){
		  String sql = "SELECT DDO_ID, DDONAME, DDOCODE FROM ddo";
	        
	        return jdbcTemplate.query(sql, (rs, rowNum) -> {
	            DDOdto dto = new DDOdto();
	            dto.setDDO_ID(rs.getString("DDO_ID"));
	            dto.setDDONAME(rs.getString("DDONAME"));
	            dto.setDDOCODE(rs.getString("DDOCODE"));
	            return dto;
	        });
	}
	public DDOdto getDDOById(String id) {
String sql = "SELECT DDO_ID, DDONAME, DDOCODE FROM ddo WHERE DDO_ID = ?";
      
      try {
          return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
              DDOdto dto = new DDOdto();
              dto.setDDO_ID(rs.getString("DDO_ID"));
              dto.setDDONAME(rs.getString("DDONAME"));
              dto.setDDOCODE(rs.getString("DDOCODE"));
              return dto;
          }, id);
      } catch (Exception e) {
          System.err.println("ddo ID not found: " + id);
          return null;
      }
  
		
	}
	
	//dept head
	
public List<DeptHeadDTO> getAllDeptHead(){
        
        String sql = "SELECT DEPT_HEAD_ID, DEPARTMENT_HEAD_NAME FROM department_head_mast;";
        
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            DeptHeadDTO dto = new DeptHeadDTO();
            dto.setDEPT_HEAD_ID(rs.getString("DEPT_HEAD_ID"));
            dto.setDEPARTMENT_HEAD_NAME(rs.getString("DEPARTMENT_HEAD_NAME"));
            return dto;
        });
    }
    
    public DeptHeadDTO getDeptHeadById(String id) {
        String sql = "SELECT DEPT_HEAD_ID, DEPARTMENT_HEAD_NAME FROM department_head_mast WHERE DEPT_HEAD_ID = ?";
        
        try {
            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
                DeptHeadDTO dto = new DeptHeadDTO();
                dto.setDEPT_HEAD_ID(rs.getString("DEPT_HEAD_ID"));
                dto.setDEPARTMENT_HEAD_NAME(rs.getString("DEPARTMENT_HEAD_NAME"));
                return dto;
            }, id);
        } catch (Exception e) {
            System.err.println("Dept Head ID not found: " + id);
            return null;
        }    
    }
    
    //discipline
    
    public List<DisciplineDTO> getAllDiscipline(){
    	String sql = "SELECT DISC_ID, DISCIPLINE FROM discipline_mast;";
    	        
    	        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    	        	DisciplineDTO dto = new DisciplineDTO();
    	            dto.setDISC_ID(rs.getString("DISC_ID"));
    	            dto.setDISCIPLINE(rs.getString("DISCIPLINE"));
    	            return dto;
    	        });
    		};
    		
    		public  DisciplineDTO getDisciplineById(String id) {
    	String sql = "SELECT DISC_ID, DISCIPLINE FROM discipline_mast WHERE DISC_ID = ?";
    	        
    	        try {
    	            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
    	            	DisciplineDTO dto = new DisciplineDTO();
    	                dto.setDISC_ID(rs.getString("DISC_ID"));
    	                dto.setDISCIPLINE(rs.getString("DISCIPLINE"));
    	                return dto;
    	            }, id);
    	        } catch (Exception e) {
    	            System.err.println("Discipline ID not found: " + id);
    	            return null;
    	        }	
    		}
    		
    		
    		//fund type
    		
    		
    		public List<FundTypeDTO> getAllFundType(){
    	String sql = "SELECT FUND_TYPE_ID, DESCRIPTION FROM fund_type_master;";
    	        
    	        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    	        	FundTypeDTO dto = new FundTypeDTO();
    	            dto.setFUND_TYPE_ID(rs.getString("FUND_TYPE_ID"));
    	            dto.setDESCRIPTION(rs.getString("DESCRIPTION"));
    	            return dto;
    	        });
    		}
    		public FundTypeDTO getFundTypeById(String id) {
    			String sql = "SELECT FUND_TYPE_ID, DESCRIPTION FROM fund_type_master WHERE FUND_TYPE_ID=?";
    			 try {
    		            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
    		            	FundTypeDTO dto = new FundTypeDTO();
    		                dto.setFUND_TYPE_ID(rs.getString("FUND_TYPE_ID"));
    		                dto.setDESCRIPTION(rs.getString("DESCRIPTION"));
    		                return dto;
    		            }, id);
    		        } catch (Exception e) {
    		            System.err.println("Discipline ID not found: " + id);
    		            return null;
    		        }	

    		}
    		
    		
    		
    		//budget head
    		
    		 public List<BudgetHeadDTO> getAllBudgetHead() {
    		        String sql = "SELECT BUDGET_HEAD_ID, GOVT_BUDGET_HEAD, FUND_TYPE, FUND_CATEGORY, BUDGET_HEAD, BUDGET_HEAD_DESCRIPTION FROM budget_head_master;";
    		        
    		        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    		            BudgetHeadDTO dto = new BudgetHeadDTO();
    		            dto.setBUDGET_HEAD_ID(rs.getString("BUDGET_HEAD_ID"));
    		            dto.setGOVT_BUDGET_HEAD(rs.getString("GOVT_BUDGET_HEAD"));
    		            dto.setFUND_TYPE(rs.getString("FUND_TYPE"));
    		            dto.setFUND_CATEGORY(rs.getString("FUND_CATEGORY"));
    		            dto.setBUDGET_HEAD(rs.getString("BUDGET_HEAD"));
    		            dto.setBUDGET_HEAD_DESCRIPTION(rs.getString("BUDGET_HEAD_DESCRIPTION"));
    		            return dto;
    		        });
    		    }
    		     
    		    public BudgetHeadDTO getBudgetHeadById(String id) {
    		        String sql = "SELECT BUDGET_HEAD_ID, GOVT_BUDGET_HEAD, FUND_TYPE, FUND_CATEGORY, BUDGET_HEAD, BUDGET_HEAD_DESCRIPTION "
    		                   + "FROM budget_head_master WHERE BUDGET_HEAD_ID = ?;";
    		        try {
    		            return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
    		                BudgetHeadDTO dto = new BudgetHeadDTO();
    		                dto.setBUDGET_HEAD_ID(rs.getString("BUDGET_HEAD_ID"));
    		                dto.setGOVT_BUDGET_HEAD(rs.getString("GOVT_BUDGET_HEAD"));
    		                dto.setFUND_TYPE(rs.getString("FUND_TYPE"));
    		                dto.setFUND_CATEGORY(rs.getString("FUND_CATEGORY"));
    		                dto.setBUDGET_HEAD(rs.getString("BUDGET_HEAD"));
    		                dto.setBUDGET_HEAD_DESCRIPTION(rs.getString("BUDGET_HEAD_DESCRIPTION"));
    		                return dto;
    		            }, id);
    		        } catch (Exception e) {
    		            System.err.println("Budget Head ID not found: " + id);
    		            return null;
    		        }    
    		       
    		    }
    		    
    		    public List<BudgetHeadDTO> getAllBudgetHeadsConcated() { 
    		        String sql = """
    		            SELECT BUDGET_HEAD_ID, BUDGET_HEAD, GOVT_BUDGET_HEAD, FUND_TYPE, FUND_CATEGORY, BUDGET_HEAD_DESCRIPTION,
    		                   CONCAT(BUDGET_HEAD, '-', BUDGET_HEAD_DESCRIPTION) AS CONCAT_HEAD
    		            FROM budget_head_master;
    		            """;
    		            
    		        try {
    		            return jdbcTemplate.query(sql, (rs, rowNum) -> {
    		                BudgetHeadDTO dto = new BudgetHeadDTO();
    		                dto.setBUDGET_HEAD_ID(rs.getString("BUDGET_HEAD_ID"));
    		                dto.setBUDGET_HEAD(rs.getString("BUDGET_HEAD"));
    		                dto.setGOVT_BUDGET_HEAD(rs.getString("GOVT_BUDGET_HEAD"));
    		                dto.setFUND_TYPE(rs.getString("FUND_TYPE"));
    		                dto.setFUND_CATEGORY(rs.getString("FUND_CATEGORY"));
    		                dto.setBUDGET_HEAD_DESCRIPTION(rs.getString("BUDGET_HEAD_DESCRIPTION"));
    		                dto.setCONCAT_HEAD(rs.getString("CONCAT_HEAD")); 
    		                return dto;
    		            });
    		        } catch (Exception e) {
    		            System.err.println("Error fetching budget heads");
    		            e.printStackTrace();
    		            return List.of();
    		        }
    		    }
    		    

    		    public List<BudgetHeadDTO> getBudgetHeadsByFundId(String fundId) {
    		        String sql = "SELECT BUDGET_HEAD_ID,BUDGET_HEAD, GOVT_BUDGET_HEAD, FUND_TYPE, FUND_CATEGORY, BUDGET_HEAD_DESCRIPTION, "
    		                   + "CONCAT(BUDGET_HEAD, '-', BUDGET_HEAD_DESCRIPTION) AS CONCAT_HEAD "
    		                   + "FROM budget_head_master WHERE FUND_TYPE = ?;";
    		        try {
    		            return jdbcTemplate.query(sql, (rs, rowNum) -> {
    		                BudgetHeadDTO dto = new BudgetHeadDTO();
    		                dto.setBUDGET_HEAD_ID(rs.getString("BUDGET_HEAD_ID"));
    		                dto.setBUDGET_HEAD(rs.getString("BUDGET_HEAD"));

    		                dto.setGOVT_BUDGET_HEAD(rs.getString("GOVT_BUDGET_HEAD"));
    		                dto.setFUND_TYPE(rs.getString("FUND_TYPE"));
    		                dto.setFUND_CATEGORY(rs.getString("FUND_CATEGORY"));
    		                dto.setBUDGET_HEAD_DESCRIPTION(rs.getString("BUDGET_HEAD_DESCRIPTION"));
    		                
    		                dto.setCONCAT_HEAD(rs.getString("CONCAT_HEAD")); 
    		                return dto;
    		            }, fundId);
    		        } catch (Exception e) {
    		            System.err.println("Error fetching budget heads for Fund Type: " + fundId);
    		            e.printStackTrace();
    		            return List.of();
    		        }
    		    }
    
    
    //association
    		    public AssociationDTO getAssociationById(String id) {
    		    	String sql ="	Select ASSOCIATION_ID, association_name FROM association_mast WHERE ASSOCIATION_ID=?;";
    		    	try {
    		    	return jdbcTemplate.queryForObject(sql, (rs, rowNum)->{
    		    		AssociationDTO dto = new AssociationDTO();
    		    		dto.setASSOCIATION_ID(rs.getString("ASSOCIATION_ID"));
    		    		dto.setAssociation_name(rs.getString("association_name"));
    		    		return dto;
    		    	},id);
    		    	}catch(Exception e) {
    		            System.err.println("Association ID not found: " + id);
    		            return null;

    		    	}
    		    }
    		    public List<AssociationDTO> getAllAssociation(){
    		    	String sql ="SELECT ASSOCIATION_ID,association_name from association_mast ; ";
    		    	
    		    	return jdbcTemplate.query(sql,(rs, rowNum)->{
    		    		AssociationDTO dto = new AssociationDTO();
    		    		dto.setASSOCIATION_ID(rs.getString("ASSOCIATION_ID"));
    		    		dto.setAssociation_name(rs.getString("association_name"));
    		    		return dto;
    		    	});
    		    }
    		    
    		
    		    
    //salary bill
    		    
    		    public List<SalaryBillDTO> getAllSalaryBill(){
    				 String sql = "SELECT BILL_TYPE_ID, DESCRIPTION FROM salary_bill_mast;";
    			        
    			        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    			        	SalaryBillDTO dto = new SalaryBillDTO();
    			            dto.setBILL_TYPE_ID(rs.getString("BILL_TYPE_ID"));
    			            dto.setDESCRIPTION(rs.getString("DESCRIPTION"));
    			            return dto;
    			        });
    			}
    			
    			public SalaryBillDTO getSalaryBillById(String id) {
    				 String sql = "SELECT BILL_TYPE_ID, DESCRIPTION FROM salary_bill_mast WHERE BILL_TYPE_ID=?;";

    				 try {
    					 return jdbcTemplate.queryForObject(sql,(rs,rowNum)->{
    						 SalaryBillDTO dto = new SalaryBillDTO();
    				            dto.setBILL_TYPE_ID(rs.getString("BILL_TYPE_ID"));
    				            dto.setDESCRIPTION(rs.getString("DESCRIPTION"));
    				            return dto;
    					 },id);
    				 }
    				 catch(Exception e) {
    					 System.err.println("no salary bill found w this id:"+id);
    					 return null;
    				 }
    			}
    			
    			
    			//class
    			public List<ClassDTO> getAllClass(){
    		    	 String sql = "SELECT CLASS_ID, CLASS FROM class_mast;";
    			        
    			        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    			        	ClassDTO dto = new ClassDTO();
    			            dto.setCLASS_ID(rs.getString("CLASS_ID"));
    			            dto.setCLASS(rs.getString("CLASS"));
    			            return dto;
    			        });
    		    }
    		    
    		    public ClassDTO getClassById(String id) {
    		    	
    		   	 String sql = "SELECT CLASS_ID, CLASS FROM class_mast WHERE CLASS_ID=?;";
    		   	 
    		   	 try {
    		   		 return jdbcTemplate.queryForObject(sql, (rs,rowNum)->{
    		   			ClassDTO dto = new ClassDTO();
    		            dto.setCLASS_ID(rs.getString("CLASS_ID"));
    		            dto.setCLASS(rs.getString("CLASS"));
    		            return dto;
    		   		 },id);
    		   	 }
    		   	 catch(Exception e){
    		   		System.err.println("Class ID not found: " + id);
    		        return null;
    		   	 }

    		    }
    
    
    //class dependent
    		    public List<ClassDependentDTO> getAllClassDependent(){
    				 String sql = "SELECT GAD_ID, GAD_NONGAD FROM gad_nongad_mast;";
    			        
    			        return jdbcTemplate.query(sql, (rs, rowNum) -> {
    			        	ClassDependentDTO dto = new ClassDependentDTO();
    			            dto.setGAD_ID(rs.getString("GAD_ID"));
    			            dto.setGAD_NONGAD(rs.getString("GAD_NONGAD"));
    			            return dto;
    			        });
    			    }
    			
    			
    			public  ClassDependentDTO getClassDependentById(String id) {
    				 String sql = "SELECT GAD_ID, GAD_NONGAD FROM gad_nongad_mast WHERE gad_nongad_mast=?  ;";
    				 try {
    					 return jdbcTemplate.queryForObject(sql,(rs,rowNum)->{
    						 ClassDependentDTO dto = new ClassDependentDTO();
    				            dto.setGAD_ID(rs.getString("GAD_ID"));
    				            dto.setGAD_NONGAD(rs.getString("GAD_NONGAD"));
    				            return dto;	 
    					 },id);
    				 }
    				 catch(Exception e) {
    					 System.err.println("Class ID not found: " + id);
    			            return null;
    				 }

    			}
    
    
    			//payyment mode
    			public List<PaymentModeDTO> getAllPaymentMode(String code, String serial, String param1){
    		    	String sql = "SELECT TRIM(pdoc) as pdoc, TRIM(descp1) as descp1 FROM cparam " +
    		                "WHERE TRIM(code) = TRIM(?) " +
    		                "AND TRIM(serial) = TRIM(?) " +
    		                "AND TRIM(param1) = TRIM(?) ;" ;     			
    		    	return jdbcTemplate.query(sql, (rs, rowNum) -> new PaymentModeDTO(
    		                rs.getString("pdoc"),
    		                rs.getString("descp1")
    		            ), code, serial, param1);
    		    }

   
    			//city
    			public List<CityDTO> getAllCities(){
    				 String sql = "SELECT CITY_ID, CITY_NAME FROM city_master;";
 			        
 			        return jdbcTemplate.query(sql, (rs, rowNum) -> {
 			        	CityDTO dto = new CityDTO();
 			            dto.setCITY_ID(rs.getString("CITY_ID"));
 			            dto.setCITY_NAME(rs.getString("CITY_NAME"));
 			            return dto;
 			        });
    				
    			}
    			
    			
    			// pay level 
    			public List<PayLevelDTO> getAllPayLevel() {
    			    String sql = "SELECT d.GD_id, g.GRADE_ID, d.basic_from "
    			               + "FROM grade_mast g "
    			               + "INNER JOIN grade_details d ON g.GRADE_ID = d.GRADE_ID ";

    			    return jdbcTemplate.query(sql, (rs, rowNum) -> {
    			        PayLevelDTO dto = new PayLevelDTO();
 			            dto.setGRADE_ID(rs.getString("GRADE_ID"));
 			            dto.setBasic_from(rs.getString("basic_from"));
 			            dto.setGD_id(rs.getInt("GD_id"));
 			            return dto;
    			    });
    			}
    			
    			//group
    			public List<GroupDTO> getAllGroups(){
   				 String sql = "SELECT GRADE_ID, GRADE_NAME FROM grade_mast ;";
   				 
   				return jdbcTemplate.query(sql, (rs, rowNum) -> {
   					GroupDTO dto = new GroupDTO();
			            dto.setGRADE_ID2(rs.getString("GRADE_ID"));
			            dto.setGRADE_NAME(rs.getString("GRADE_NAME"));
			            return dto;
			    });
    			}
    //quarter
    			public List<QuarterDTO> getAllQuarters(){
    				 String sql = "SELECT QUARTER_ID, QUARTER_CATEGORY FROM quarter_master ;";
    				 return jdbcTemplate.query(sql, (rs, rowNum) -> {
    					 QuarterDTO dto = new QuarterDTO();
    				            dto.setQUARTER_ID(rs.getString("QUARTER_ID"));
    				            dto.setQUARTER_CATEGORY(rs.getString("QUARTER_CATEGORY"));
    				            return dto;
    				    }); 
    			}
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

