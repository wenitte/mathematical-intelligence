theorem CstarAlgebraHomomorphismPreservesPreordering() {
  let(A: CstarAlgebra, B: CstarAlgebra)
  let(φ: HomomorphismCstar(A → B))
  let(≤_A: PreorderingCanonical(A))
  let(≤_B: PreorderingCanonical(B))
  let(x,y,z: A)
  assume(x ≤_A y ≤_A z) →
  assert(φ(x) ≤_B φ(y) ≤_B φ(z))
} ↔

proof CstarAlgebraHomomorphismPreservesPreordering() {
  setVar(y-x: A, z-y: A) →
  assert(φ(y-x) is_positive ∧ φ(z-y) is_positive) →
  
  lemma HermitianPreservation() {
    assume(y-x is_hermitian ∧ z-y is_hermitian) →
    assert(φ(y-x) is_hermitian ∧ φ(z-y) is_hermitian)
  } →
  
  lemma SpectrumPositivity() {
    assert(σ_A(y-x) ⊆ [0,∞) ∧ σ_A(z-y) ⊆ [0,∞)) →
    apply(SpectrumImageCorollary) →
    assert(σ_B(φ(y-x)) ⊆ σ_A(y-x) ∪ {0} ⊆ [0,∞)) ∧
    assert(σ_B(φ(z-y)) ⊆ σ_A(z-y) ∪ {0} ⊆ [0,∞))
  } →
  
  apply(HermitianPreservation()) →
  apply(SpectrumPositivity()) →
  assert(φ(y-x) is_positive ∧ φ(z-y) is_positive) →
  assert(φ(y) - φ(x) is_positive ∧ φ(z) - φ(y) is_positive) →
  conclude(φ(x) ≤_B φ(y) ≤_B φ(z))
}