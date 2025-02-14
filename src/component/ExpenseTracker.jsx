import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import './XpenseTracker.css'


const ExpenseTracker = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setShowIncomeModal] = useState(false);

  const handleShowExpense = () => setShowExpenseModal(true);
  const handleCloseExpense = () => setShowExpenseModal(false);

  const handleShowIncome = () => setShowIncomeModal(true);
  const handleCloseIncome = () => setShowIncomeModal(false);

  return (
    <div className="container py-5" style={{ backgroundColor: "#333", minHeight: "100vh" }}>
      <h1 className="text-center text-white mb-4">Expense Tracker</h1>
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-center bg-dark text-white">
            <div className="card-body">
              <h4>Wallet Balance: <span className="text-success">₹5000</span></h4>
              <button className="btn btn-success mt-3" onClick={handleShowIncome}>+ Add Income</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center bg-dark text-white">
            <div className="card-body">
              <h4>Expenses: <span className="text-danger">₹0</span></h4>
              <button className="btn btn-danger mt-3" onClick={handleShowExpense}>+ Add Expense</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center bg-dark text-white">
            <div className="card-body">
              <h4>Expenses: <span className="text-danger">₹0</span></h4>
              <button className="btn btn-danger mt-3" onClick={handleShowExpense}>+ Add Expense</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card bg-dark text-white">
            <div className="card-header">Recent Transactions</div>
            <div className="card-body">
              <table className="table">
                <tbody> 
                    <tr>
                        <th scope="row">2</th>
                        <td>Jane</td>
                        <td>Smith</td>
                        <td>jane@example.com</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mike</td>
                        <td>Johnson</td>
                        <td>mike@example.com</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-dark text-white">
            <div className="card-header">Top Expenses</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Food: -</li>
                <li>Entertainment: -</li>
                <li>Travel: -</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Expense Modal */}
      <Modal show={showExpenseModal} onHide={handleCloseExpense} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="expenseTitle" className="form-label">Title</label>
              <input type="text" className="form-control" id="expenseTitle" placeholder="Enter Title" />
            </div>
            <div className="mb-3">
              <label htmlFor="expensePrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="expensePrice" placeholder="Enter Price" />
            </div>
            <div className="mb-3">
              <label htmlFor="expenseCategory" className="form-label">Select Category</label>
              <input type="text" className="form-control" id="expenseCategory" placeholder="Enter amount" />
            </div>
            <div className="mb-3">
              <label htmlFor="expenseDate" className="form-label">Date</label>
              <input type="date" className="form-control" id="expenseDate" placeholder="Enter Date" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseExpense}>Close</Button>
          <Button variant="primary">Save Expense</Button>
          <Button variant="danger">Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* Income Modal */}
      <Modal show={showIncomeModal} onHide={handleCloseIncome} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Balance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="incomeName" className="form-label">Income Amount</label>
              <input type="text" className="form-control" id="incomeName" placeholder="Income Amount" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseIncome}>Close</Button>
          <Button variant="primary">Add Balance</Button>
          <Button variant="danger">Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpenseTracker;
