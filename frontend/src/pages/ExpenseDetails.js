import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div>
                Your Balance is ₹ {incomeAmt - expenseAmt}
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
               Expense
                <span className="income-amount">₹{incomeAmt}</span>
                Income
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails