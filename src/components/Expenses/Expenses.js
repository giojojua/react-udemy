import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id}
                                 title={expense.title}
                                 amount={expense.amount}
                                 date={expense.date}/>
                ))}
            </Card>
        </div>
    )
}