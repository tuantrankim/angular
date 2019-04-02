using LAFitness.FDMT.Common.Data;
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
    public class SecurityController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [AllowAnonymous]
        public AuthResponse Post([FromBody]AuthRequest request)
        {
            string errorMessage = string.Empty;
            Employee emp = Factory<IFDMTSystem>.Proxy.AuthenticateEmployee(request.userName, request.password, out errorMessage);
            if (emp != null)
            {
                return new AuthResponse() { name = emp.Name.FullName, department = emp.Department, jobTitle = emp.JobTitle };
            }
            else return null;
            //return new AuthResponse() { name = "tuan", department = "MNOT", jobTitle="IT" };
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}