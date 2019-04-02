using Common = LAFitness.FDMT.Common.Data;
using LAFitness.FDMT.Common.Interface;
using LAFitness.WCF;
using MemberXSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MemberXSystem.Controllers
{
    public class CommissionController : ApiController
    {
        public class CommissionRequest
        {
            public int customerID;
        }
        // POST api/<controller>
        public IEnumerable<Commission> Post([FromBody]CommissionRequest request)
        {
            try
            { 
                string errorMessage = string.Empty;
                Common.CommissionCollection commissionCollection = Factory<IFDMTSystem>.Proxy.GetCommissionsInfoForCustomer(request.customerID);

                if (commissionCollection != null && commissionCollection.Count > 0)
                {
                    var commissions = commissionCollection.Select(c => new Commission() {
                        id = c.ID,
                        type = c.Type,
                        typeID = c.TypeID,
                        amount = c.Amount,
                        //Employee salesPerson = c.SalesPerson,
                        note = c.Note,
                        //Club assignedClub = c.AssignedClub,
                        //Club commissionClub = c.CommissionClub,
                        date = c.Date,
                        isActive = c.IsActive,
                        attendantID = c.AttendantID,
                        //Customer customer = c.Customer,
                        paymentClubNumber = c.PaymentClubNumber,
                        paymentID = c.PaymentID,
                        editDate = c.EditDate,
                        editEmployeeID = c.EditEmployeeID,
                        invoiceClubNumber = c.InvoiceClubNumber,
                        invoiceID = c.InvoiceID,
                        contractClubNumber = c.ContractClubNumber,
                        contractID = c.ContractID,
                        commissionPlanID = c.CommissionPlanID,
                        commissionTypeID = c.CommissionTypeID,
                        commissionUnits = c.CommissionUnits,
                        commissionSplit = c.CommissionSplit,
                        commissionSale = c.CommissionSale,
                        commissionFixed = c.CommissionFixed,
                        dollarPerUnit = c.DollarPerUnit,
                        origCommissionID = c.OrigCommissionID
                    });
                    return commissions;
                }
                else return null;
                    //return new AuthResponse() { name = "tuan", department = "MNOT", jobTitle="IT" };
            }
            catch (Exception ex)
            {
                LAFitness.WCF.Factory<IFDMTSystem>.DisposeProxy();
            }
            return null;
        }
    }
}
