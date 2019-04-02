using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MemberXSystem.Models
{
    public class Commission
    {
        public int id;
        public string type;
        public int typeID;
        public double amount;
        //public Employee salesPerson;
        public string note;
        //public Club assignedClub;
        //public Club commissionClub;
        public DateTime date;
        public bool isActive;
        public int attendantID;
        //public Customer customer;
        public int paymentClubNumber;
        public int paymentID;
        public DateTime? editDate = null;
        public int editEmployeeID = -1;
        public int invoiceClubNumber;
        public int invoiceID;
        public int contractClubNumber;
        public int contractID;
        public int commissionPlanID = -1;
        public int commissionTypeID = -1;
        public double commissionUnits = 0;
        public double commissionSplit = 0;
        public double commissionSale = 0;
        public double? commissionFixed = null;
        public double dollarPerUnit = 0;
        public int? origCommissionID = null;
    }
}