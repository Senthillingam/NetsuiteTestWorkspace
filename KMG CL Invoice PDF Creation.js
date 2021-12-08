/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/error', 'N/log', 'N/url','N/search','N/record'],
/**
 * @param {currentRecord} currentRecord
 * @param {error} error
 * @param {log} log
 */
function(currentRecord, error, log, url,search,record) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
	 
	 
	 
	  function callfun_pdfgeneration(invoiceRec,entity) {
    	try{
			
					var invRecObj = record.load({
						type: 'invoice', 
						id: invoiceRec,
						isDynamic: true
					});
					
					var customerTemplate =invRecObj.getValue({
							fieldId: 'custbody_kmg_invoice_pdf_template'
						});
						
					var templateId=invRecObj.getValue({
								fieldId: 'custbody_kmg_invoice_email_template'
					});
					var customerEmail=invRecObj.getValue({
								fieldId: 'custbody_kmg_customer_email'
					});
				
				
				 if(_logValidation(customerTemplate)==false)
				 {
					 alert("Please Select the Customer PDF Template");
					 return false;
				 }
				 
				/* if(_logValidation(templateId)==false)
				 {
					  alert("Please Select the Email Template");
					 return false;
				 }
				  if(_logValidation(customerEmail)==false)
				 {
					 alert("Please Select the Customer Email");
					 return false;
				 }*/
    		
				  if(_logValidation(invoiceRec)) 
				{

					var s_url = url.resolveScript({
						scriptId: 'customscript_kmg_sl_agency_invoice_pdf',
						deploymentId: 'customdeploy_kmg_sl_agency_invoice_pdf',
						returnExternalUrl: false
					});
					s_url += '&invoicerecId=' + invoiceRec+'&bemail=1';
					window.open(s_url);
				}
    	}catch(e){
      	 alert(e)
        }   
    }
    
	 
    function pageInit(scriptContext) {
		/*var recordObj = scriptContext.currentRecord
		var entity= recordObj.getValue('entity');
		alert("entity"+entity);*/

    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    }
    
   
  

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {

    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {

    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {

    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {

    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord() {
	

    }
	
		function templateType(entity) {
			try
			{
            var typeOfTemplate = search.lookupFields({
                type: search.Type.CUSTOMER,
                id: entity,
                columns: ['custentity_kmg_invoice_view']

            });
		
				
				if(typeOfTemplate)
				return typeOfTemplate.custentity_kmg_invoice_view[0].value;

            return fapItem;
			}
			catch (err) {
               log.debug('Error while AP Item Lookup','Error while AP Item Lookup:'+err);
            }
        }

    function _logValidation(value) {
        if (value != null && value != 'null' && value != '' && value != undefined && value != 'undefined' && value != 'NaN' && value != ' ') {
            return true;
        } else {
            return false;
        }
    }
    
    return {
      pageInit: pageInit,
        callfun_pdfgeneration: callfun_pdfgeneration
       
       /* fieldChanged: fieldChanged,
        postSourcing: postSourcing,
        sublistChanged: sublistChanged,
        lineInit: lineInit,
        validateField: validateField,
        validateLine: validateLine,
        validateInsert: validateInsert,
        validateDelete: validateDelete,
        saveRecord: saveRecord*/
    };
    
});
