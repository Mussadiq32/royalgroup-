import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MortgageCalculatorProps {
  className?: string;
}

const MortgageCalculator = ({ className }: MortgageCalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [downPayment, setDownPayment] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const monthly = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const total = monthly * numberOfPayments;
      const interest = total - principal;

      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setTotalInterest(interest);
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, downPayment, interestRate, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className={cn(
      "bg-white rounded-2xl p-6 shadow-lg border border-royal-100",
      className
    )}>
      <h3 className="text-2xl font-bold text-royal-800 mb-6">
        Mortgage <span className="text-gradient">Calculator</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Loan Amount */}
        <div>
          <label className="block text-royal-700 mb-2">Loan Amount</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="flex-1 h-2 bg-royal-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-royal-200 rounded-lg text-right"
            />
          </div>
          <p className="text-sm text-royal-600 mt-1">{formatCurrency(loanAmount)}</p>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-royal-700 mb-2">Down Payment</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max={loanAmount * 0.8}
              step="50000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="flex-1 h-2 bg-royal-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-royal-200 rounded-lg text-right"
            />
          </div>
          <p className="text-sm text-royal-600 mt-1">{formatCurrency(downPayment)}</p>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-royal-700 mb-2">Interest Rate (%)</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="flex-1 h-2 bg-royal-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-royal-200 rounded-lg text-right"
              step="0.1"
            />
          </div>
          <p className="text-sm text-royal-600 mt-1">{interestRate}%</p>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-royal-700 mb-2">Loan Term (Years)</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="30"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="flex-1 h-2 bg-royal-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-royal-200 rounded-lg text-right"
            />
          </div>
          <p className="text-sm text-royal-600 mt-1">{loanTerm} years</p>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-royal-50 p-6 rounded-xl">
          <h4 className="text-royal-600 mb-2">Monthly Payment</h4>
          <p className="text-2xl font-bold text-royal-800">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>

        <div className="bg-royal-50 p-6 rounded-xl">
          <h4 className="text-royal-600 mb-2">Total Payment</h4>
          <p className="text-2xl font-bold text-royal-800">
            {formatCurrency(totalPayment)}
          </p>
        </div>

        <div className="bg-royal-50 p-6 rounded-xl">
          <h4 className="text-royal-600 mb-2">Total Interest</h4>
          <p className="text-2xl font-bold text-royal-800">
            {formatCurrency(totalInterest)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;