using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MemberXSystem.Models
{
    public class AuthRequest
    {
        public string userName;
        public string password;
        public int? changesourceID = null;
    }
}