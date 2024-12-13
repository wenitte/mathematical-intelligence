theorem Applesellers_Problem() {
  assert(
    ∃A,B,C ∈ ℕ ∧
    A = 20 ∧ B = 30 ∧ C = 40 ∧
    ∃price1,price2 ∈ ℝ+ ∧
    ∃split_A,split_B,split_C ∈ ℕ ⇒
    TotalRevenue(A) = TotalRevenue(B) = TotalRevenue(C)
  )
} ↔

proof Applesellers_Problem() {
  lemma GeneralSolution() {
    setVar(m,n,k: ℝ) →
    assert(
      0 ≤ m ≤ 20 ∧
      n > 10 ∧
      m + 2n ≤ 40 ∧
      k ∈ ℝ+
    ) →
    define(
      A_revenue = m×k(n-10) + (20-m)×kn ∧
      B_revenue = (m+n)×k(n-10) + (30-m-n)×kn ∧
      C_revenue = (m+2n)×k(n-10) + (40-m-2n)×kn
    ) →
    assert(
      A_revenue = B_revenue = C_revenue = 10k(2n-m)
    )
  } →
  
  apply(GeneralSolution()) →
  setVar(m = 2, n = 15, k = 0.2) →
  assert(
    price1 = k(n-10) = 1 penny ∧
    price2 = kn = 3 pence
  ) →
  
  verify(
    A: [2@1p + 18@3p = 56p] ∧
    B: [17@1p + 13@3p = 56p] ∧
    C: [32@1p + 8@3p = 56p]
  ) →
  
  conclude(
    ∃solution(m,n,k) ∈ {(2,15,0.2)} ⊆ Solutions ∧
    |Solutions| = 100 for (m,n) ∧
    |Solutions| = ∞ for k
  )
}