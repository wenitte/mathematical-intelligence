theorem Bound_Norm_Difference() {
  let(A: CStarAlgebra, unital) →
  let(≤_A: CanonicalPreordering(A)) →
  let(a,b ∈ A) →
  assert(0_A ≤_A a ≤_A b ≤_A 1_A) →
  assert(
    ∀x ∈ A ⇒ (
      ∥x - bx∥² ≤ ∥x*(1_A - a)x∥ ∧
      ∥x - xb∥² ≤ ∥x(1_A - a)x*∥
    )
  )
} ↔

proof Bound_Norm_Difference() {
  lemma NegativeOrder() {
    apply(ScalarMultNegOneReversesOrder) →
    assert(-1_A ≤_A -b ≤_A -a ≤_A 0_A)
  } →
  
  lemma DiffBound() {
    apply(PreorderedVectorSpace_Axiom1) →
    assert(0_A ≤_A 1_A - b ≤_A 1_A)
  } →
  
  lemma SpectrumBound() {
    apply(BoundsHermitianElement) →
    assert(σ_A(1_A - b) ⊆ [0,1])
  } →
  
  setVar(x: A) →
  assert(∥x - bx∥² = ∥(1_A - b)x∥²) →
  assert(∥(1_A - b)x∥² = ∥x*(1_A - b)²x∥) →
  
  lemma SquareBound() {
    assert(∀t ∈ [0,1] ⇒ 0 ≤ t² ≤ t) →
    apply(ContinuousFunctionNormalElement) →
    assert(0_A ≤_A (1_A - b)² ≤_A 1_A - b)
  } →
  
  apply(ConjugationPreservesPositivity) →
  assert(0_A ≤_A x*(1_A - b)²x ≤_A x*(1_A - b)x) →
  apply(NormPreservesOrdering) →
  assert(∥x*(1_A - b)²x∥ ≤ ∥x*(1_A - b)x∥) →
  
  lemma FinalBound() {
    assert(-b ≤_A -a) →
    apply(PreorderedVectorSpace_Axiom1) →
    assert(1_A - b ≤_A 1_A - a) →
    apply(ConjugationPreservesPositivity) →
    assert(0_A ≤_A x*(1_A - b)x ≤_A x*(1_A - a)x) →
    apply(NormPreservesOrdering) →
    assert(∥x*(1_A - b)x∥ ≤ ∥x*(1_A - a)x∥)
  } →
  
  assert(∥x - bx∥² ≤ ∥x*(1_A - a)x∥) →
  
  lemma SecondInequality() {
    assert(∥x - xb∥² = ∥x* - bx*∥²) →
    assert(∥x* - bx*∥² ≤ ∥(x*)*(1_A - a)x*∥) →
    assert(∥(x*)*(1_A - a)x*∥ = ∥x(1_A - a)x*∥)
  } →
  
  assert(∥x - xb∥² ≤ ∥x(1_A - a)x*∥)
}