import { useState } from "react";
import "./HomeLoan.css";

export default function HomeLoan() {
  const [form, setForm] = useState({
    totalAmount: 1000,
    downPayment: 200,
    interestRate: 5,
    amortizationMonths: 240,
    propertyTax: 3000,
    homeInsurance: 3000,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateLoan = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/loan/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResult(data.estimatedMonthlyPayment);
    } catch (err) {
      console.error("Loan calculation failed", err);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setForm({
      totalAmount: "",
      downPayment: "",
      interestRate: "",
      amortizationMonths: "",
      propertyTax: "",
      homeInsurance: "",
    });
    setResult(null);
  };

  return (
    <section className="loan-section">
      <div className="loan-container">
        {/* LEFT */}
        <div className="loan-form">
          <h2>
            Do you need a home loan?
            <br /> Get pre-approved
          </h2>

          <p className="subtitle">
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </p>

          <div className="form-grid">
            <div>
              <label>Total Amount</label>
              <input
                name="totalAmount"
                value={form.totalAmount}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Down Payment</label>
              <input
                name="downPayment"
                value={form.downPayment}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Interest Rate (%)</label>
              <input
                name="interestRate"
                value={form.interestRate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Amortization Period (months)</label>
              <select
                name="amortizationMonths"
                value={form.amortizationMonths}
                onChange={handleChange}
              >
                <option value="">Select amortization period</option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>

            <div>
              <label>Property Tax</label>
              <input
                name="propertyTax"
                value={form.propertyTax}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Home Insurance</label>
              <input
                name="homeInsurance"
                value={form.homeInsurance}
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="estimate">
            Your estimated monthly payment:{" "}
            <span>{result ? `₹${result}` : "--"}</span>
          </p>

          <div className="buttons">
            <button className="primary" onClick={calculateLoan}>
              {loading ? "Calculating..." : "Calculate now"}
            </button>
            <button className="secondary" onClick={resetForm}>
              Start over
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="loan-image">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            alt="Home"
          />
        </div>
      </div>
    </section>
  );
}
