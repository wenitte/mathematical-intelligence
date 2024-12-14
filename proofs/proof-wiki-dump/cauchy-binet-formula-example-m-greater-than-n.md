theorem CauchyBinetZero() {
  assert(
    ∀A ∈ ℝ^{m×n}, ∀B ∈ ℝ^{n×m}, m > n →
    det(A·B) = 0
  )
} ↔

proof CauchyBinetZero() {
  setVar(A: ℝ^{m×n}) →
  setVar(B: ℝ^{n×m}) →
  assume(m > n) →
  
  lemma CauchyBinet() {
    assert(
      det(A·B) = ∑_{1≤j₁<j₂<...<j_m≤n} det(A_{j₁j₂...j_m})·det(B_{j₁j₂...j_m})
    )
  } →
  
  apply(CauchyBinet()) →
  
  assert(
    m > n → 
    {j₁,j₂,...,j_m: 1≤j₁<j₂<...<j_m≤n} = ∅
  ) →
  
  assert(
    {j₁,j₂,...,j_m: 1≤j₁<j₂<...<j_m≤n} = ∅ →
    ∑_{1≤j₁<j₂<...<j_m≤n} det(A_{j₁j₂...j_m})·det(B_{j₁j₂...j_m}) = 0
  ) →
  
  conclude(det(A·B) = 0)
}