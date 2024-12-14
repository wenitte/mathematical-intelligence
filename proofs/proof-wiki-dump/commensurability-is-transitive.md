theorem Commensurability_is_Transitive() {
  assert(
    ∀a,b,c ∈ ℝ ∧ (a/b ∈ ℚ) ∧ (b/c ∈ ℚ) ⇒ (a/c ∈ ℚ)
  )
} ↔

proof Commensurability_is_Transitive() {
  setVar(a,b,c: ℝ) →
  assume(a/b ∈ ℚ ∧ b/c ∈ ℚ) →
  
  lemma Rational_Multiplication_Closed() {
    assert(
      ∀p,q ∈ ℚ ⇒ (p × q ∈ ℚ)
    )
  } →
  
  let(p ≔ a/b) →
  let(q ≔ b/c) →
  apply(Rational_Multiplication_Closed()) →
  assert((a/b) × (b/c) ∈ ℚ) →
  assert((a×b)/(b×c) ∈ ℚ) →
  assert(a/c ∈ ℚ) →
  conclude(a,c are commensurable)
}