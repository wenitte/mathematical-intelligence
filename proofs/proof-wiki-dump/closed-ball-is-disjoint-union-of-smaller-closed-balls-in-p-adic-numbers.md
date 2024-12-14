theorem ClosedBallDisjointUnion() {
  setParams(p: Prime, Qp: p-AdicNumbers, a: Qp, n: ℤ, m: ℤ)
  requires(n < m)
  assert(
    (∀ε ∈ ℝ₊)(B⁻_ε(a) = closed_ball(a,ε)) ∧
    (B⁻_{p⁻ⁿ}(a) = ⋃ᵢ₌₀ᵖ⁽ᵐ⁻ⁿ⁾⁻¹ B⁻_{p⁻ᵐ}(a + ip^n)) ∧
    (∀i,j ∈ [0,p^(m-n)-1])(i ≠ j → B⁻_{p⁻ᵐ}(a + ip^n) ∩ B⁻_{p⁻ᵐ}(a + jp^n) = ∅)
  )
} ↔

proof ClosedBallDisjointUnion() {
  // Part 1: Union equality
  lemma PadicNormEquiv() {
    assert(
      ∀y ∈ Qp: (‖y‖_p ≤ p⁻ⁿ ↔ ∃i ∈ ℤ: 
        (0 ≤ i ≤ p^(m-n)-1) ∧ (‖y - ip^n‖_p ≤ p⁻ᵐ))
    )
  } →
  
  // Forward inclusion
  setVar(i: ℤ, x: Qp) →
  assume(0 ≤ i ≤ p^(m-n)-1) →
  assume(x ∈ B⁻_{p⁻ᵐ}(a + ip^n)) →
  assert(‖x - (a + ip^n)‖_p ≤ p⁻ᵐ) →
  apply(PadicNormEquiv()) →
  assert(x ∈ B⁻_{p⁻ⁿ}(a)) →
  conclude(⋃ᵢ₌₀ᵖ⁽ᵐ⁻ⁿ⁾⁻¹ B⁻_{p⁻ᵐ}(a + ip^n) ⊆ B⁻_{p⁻ⁿ}(a)) →

  // Backward inclusion
  setVar(x: Qp) →
  assume(x ∈ B⁻_{p⁻ⁿ}(a)) →
  apply(PadicNormEquiv()) →
  assert(∃i ∈ [0,p^(m-n)-1]: x ∈ B⁻_{p⁻ᵐ}(a + ip^n)) →
  conclude(B⁻_{p⁻ⁿ}(a) ⊆ ⋃ᵢ₌₀ᵖ⁽ᵐ⁻ⁿ⁾⁻¹ B⁻_{p⁻ᵐ}(a + ip^n)) →

  // Part 2: Disjointness
  setVar(i: ℤ, j: ℤ, x: Qp) →
  assume(0 ≤ i,j ≤ p^(m-n)-1) →
  assume(x ∈ B⁻_{p⁻ᵐ}(a + ip^n) ∩ B⁻_{p⁻ᵐ}(a + jp^n)) →
  assert(‖(x-a) - ip^n‖_p ≤ p⁻ᵐ ∧ ‖(x-a) - jp^n‖_p ≤ p⁻ᵐ) →
  apply(NonArchimedeanNorm()) →
  assert(‖ip^n - jp^n‖_p ≤ p⁻ᵐ) →
  assert(p⁻ⁿ‖i-j‖_p ≤ p⁻ᵐ) →
  assert(‖i-j‖_p ≤ p^(n-m)) →
  assert(p^(m-n) | (i-j)) →
  assert(i ≡ j (mod p^(m-n))) →
  conclude(i = j) →
  conclude(∀i,j: i≠j → B⁻_{p⁻ᵐ}(a + ip^n) ∩ B⁻_{p⁻ᵐ}(a + jp^n) = ∅)
}