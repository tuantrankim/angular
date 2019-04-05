using LAFitness.FDMT.Common.Data;
using LAFitness.FDMT.Common.Interface;
using LAFitness.WCF;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace MemberXSystem
{
    public class AppAuthorizationServerProvider: OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();//
        }
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });


            string errorMessage = "";
            try
            {
                Employee emp = Factory<IFDMTSystem>.Proxy.AuthenticateEmployee(context.UserName, context.Password, out errorMessage);
                if (emp != null)
                {
                    var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                    //identity.AddClaim(new Claim(ClaimTypes.Name, emp.Name.FullName));
                    //identity.AddClaim(new Claim("username", context.UserName));

                    // Add Role
                    string role = "";
                    if (emp.IsClubSupervisor) role = "ClubSupervisor";
                    else if (emp.IsClubGeneralManager) role = "ClubGeneralManager";
                    else if (emp.IsCorporateEmployee) role = "CorporateEmployee";
                    if (role != "") identity.AddClaim(new Claim(ClaimTypes.Role, role));

                    // Add Privileges

                    AuthenticationProperties props = new AuthenticationProperties();
                    props.Dictionary.Add("user_name", emp.Name.FullName);

                    string[] claimsArray = emp.SecurityPrivileges.Where(i => i.Value == true).Select(c => c.Key).ToArray<string>();
                    string claims = string.Join(",", claimsArray);
                    props.Dictionary.Add("claims", claims);
                    
                    
                    var ticket = new AuthenticationTicket(identity, props);
                    context.Validated(ticket);
                }
                else
                {
                    context.SetError("invalid_grant", "Provided username and password is incorrect");
                    return;
                }
                /*
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                
                if (context.UserName == "admin" && context.Password == "admin")
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, "admin"));
                    identity.AddClaim(new Claim("username", "admin"));
                    identity.AddClaim(new Claim(ClaimTypes.Name, "admin"));
                    IDictionary<string, string> data = new Dictionary<string, string>
                    {
                        { "userName", "userabc" }
                    };
                    AuthenticationProperties props = new AuthenticationProperties(data);

                    var ticket = new AuthenticationTicket(identity, props);
                    context.Validated(ticket);
                }
                else if (context.UserName == "user" && context.Password == "user")
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
                    identity.AddClaim(new Claim("username", "uesr"));
                    identity.AddClaim(new Claim(ClaimTypes.Name, "Tuan Tran"));
                    AuthenticationProperties props = new AuthenticationProperties();
                    props.Dictionary.Add("userxxxxx", "userxxxxx");
                    props.Dictionary.Add("useryyyyy", "useryyyyy");

                    var ticket = new AuthenticationTicket(identity, props);
                    context.Validated(ticket);
                }
                else
                {
                    context.SetError("invalid_grant", "Provided username and password is incorrect");
                    return;
                }
                */
            }
            catch (Exception ex)
            {
                Factory<IFDMTSystem>.DisposeProxy();
                Helper.LogError("MemberX", ex.Message, context.UserName, ex.Source, ex.StackTrace);
                context.SetError("invalid_grant", ex.Message);

                return;
            }
        }
    }
}
