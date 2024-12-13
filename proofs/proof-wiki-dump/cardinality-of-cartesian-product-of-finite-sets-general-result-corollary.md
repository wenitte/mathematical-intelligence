theorem CartesianProductPowerCardinality() {
  assert(
    ∀S: Set ∧ isFinite(S) ∧
    ∀n: ℕ ∧
    let S^n = CartesianPower(S,n) ⇒
    |S^n| = |S|^n
  )
} ↔

proof CartesianProductPowerCardinality() {
  setVar(S: Set) →
  setVar(n: ℕ) →
  lemma CartesianProductGeneralCardinality() {
    assert(
      ∀{A₁,...,Aₙ}: FiniteSet ⇒
      |A₁ × ... × Aₙ| = |A₁| × ... × |Aₙ|
    )
  } →
  assert(S^n = S × S × ... × S [n times]) →
  apply(CartesianProductGeneralCardinality()) →
  assert(|S^n| = |S| × |S| × ... × |S| [n times]) →
  assert(|S^n| = |S|^n)
}