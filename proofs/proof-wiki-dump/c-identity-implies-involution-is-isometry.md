theorem CStarIdImpliesIsometry() {
  assert(
    ∀A[BanachAlgebra(A) ∧ StarAlgebra(A)] ∧
    ∀x ∈ A[∥xx*∥ = ∥x∥²] ⇒
    ∀x ∈ A[∥x∥ = ∥x*∥]
  )
} ↔

proof CStarIdImpliesIsometry() {
  setVar(x: A) →
  lemma ZeroVectorHermitian() {
    assert(0ₐ* = 0ₐ)
  } →
  case(x = 0ₐ) {
    apply(ZeroVectorHermitian()) →
    assert(∥0ₐ∥ = ∥0ₐ*∥)
  } →
  case(x ≠ 0ₐ) {
    assert(∥x∥ ≠ 0) by(NormAxiomN1) →
    assert(∥xx*∥ ≤ ∥x∥∥x*∥) by(AlgebraNormDef) →
    assert(∥x∥² ≤ ∥x∥∥x*∥) by(hypothesis) →
    assert(∥x∥ ≤ ∥x*∥) by(divBoth(∥x∥)) →
    letVar(y := x*) →
    assert(∥y∥ ≤ ∥y*∥) by(substitute) →
    assert(x** = x) by(InvolutionDef) →
    assert(∥x*∥ ≤ ∥x∥) by(substitute) 
  } →
  assert(∥x∥ = ∥x*∥) by(≤AntiSymmetric)
}