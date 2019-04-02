using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MemberXSystem.Models
{
    public class Customer
    {
        public int id;
        public int accountBillToID;
        public string barcodeID;
        public Name name;
        public int categoryID;
        public int sourceID;
    }
}