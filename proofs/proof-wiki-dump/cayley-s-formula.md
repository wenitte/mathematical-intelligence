theorem CayleyFormula() {
  assert(
    ∀n ∈ ℕ ⇒ |{T: T is labeled tree with n nodes}| = n^(n-2)
  )
} ↔

proof CayleyFormula() {
  setVar(n: ℕ) →
  
  lemma PruferBijection() {
    assert(
      ∃f: {T: T is labeled tree with n nodes} → {(a₁,...,aₙ₋₂): aᵢ ∈ {1,...,n}} ∧
      f is bijective
    )
  } →
  
  assert(
    |{(a₁,...,aₙ₋₂): aᵢ ∈ {1,...,n}}| = ∏ᵢ₌₁ⁿ⁻² n
  ) →
  
  assert(
    ∏ᵢ₌₁ⁿ⁻² n = n^(n-2)
  ) →
  
  apply(PruferBijection()) →
  apply(CardinalityBijection()) →
  
  assert(
    |{T: T is labeled tree with n nodes}| = n^(n-2)
  )
}