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
    public class CustomerController : ApiController
    {
        public class CustomerRequest
        {
            public string barcodeID;
        }
        // POST api/<controller>
        public Customer Post([FromBody]CustomerRequest request)
        {
            try
            {
                string errorMessage = string.Empty;
                Common.Customer c = Factory<IFDMTSystem>.Proxy.GetCustomerByBarcode(request.barcodeID);

                var customer = new Customer
                {
                    id = c.ID,
                    accountBillToID = c.AccountBillToID,
                    barcodeID = c.BarcodeID,
                    categoryID = c.CategoryID,
                    sourceID = c.SourceID,
                    name = new Name {
                        firstName = c.Name.FirstName,
                        lastName = c.Name.LastName,
                        middleInitial = c.Name.MiddleInitial,
                        preferredName = c.Name.PreferredName,
                        fullName = c.Name.FullName }
                };
                return customer;
            }
            catch (Exception ex)
            {
                LAFitness.WCF.Factory<IFDMTSystem>.DisposeProxy();
            }
            return null;
        }
    }
}
