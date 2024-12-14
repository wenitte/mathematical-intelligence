theorem Pentatope_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ P_n = (n(n+1)(n+2)(n+3))/24
  )
} ↔

proof Pentatope_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  assert(P_n = ∑_{k=1}^n T_k) by(def_pentatope_number) →
  assert(P_n = ∑_{k=1}^n (k(k+1)(k+2))/6) by(tetrahedral_numbers_closed_form) →
  assert(P_n = ∑_{k=1}^n (k³ + 3k² + 2k)/6) by(expand_algebraic) →
  assert(P_n = (1/6)∑_{k=1}^n k³ + (1/2)∑_{k=1}^n k² + (1/3)∑_{k=1}^n k) by(summation_linearity) →
  assert(P_n = (1/6)∑_{k=1}^n k³ + (1/2)∑_{k=1}^n k² + (1/3)(n(n+1)/2)) by(triangular_numbers) →
  assert(P_n = (1/6)∑_{k=1}^n k³ + (1/2)(n(n+1)(2n+1)/6) + (1/3)(n(n+1)/2)) by(sum_of_squares) →
  assert(P_n = (1/6)(n²(n+1)²/4) + (1/2)(n(n+1)(2n+1)/6) + (1/3)(n(n+1)/2)) by(sum_of_cubes) →
  assert(P_n = (n²(n+1)² + 2n(n+1)(2n+1) + 4n(n+1))/24) by(common_denominator) →
  assert(P_n = (n(n+1)(n(n+1) + 2(2n+1) + 4))/24) by(factor_terms) →
  assert(P_n = (n(n+1)(n² + 5n + 6))/24) by(simplify) →
  assert(P_n = (n(n+1)(n+2)(n+3))/24) by(factorize)
}