theorem Set_S2_Cardinality() {
  assert(
    S₂ = {x ∈ ℤ: 0 < x < 6} →
    |S₂| = 5
  )
} ↔

proof Set_S2_Cardinality() {
  setVar(S₂: Set) →
  assert(S₂ = {x ∈ ℤ: 0 < x < 6}) →
  lemma Elements_Definition() {
    assert(
      ∀x ∈ S₂ ↔ (x ∈ ℤ ∧ 0 < x ∧ x < 6)
    )
  } →
  apply(Elements_Definition()) →
  assert(S₂ = {1, 2, 3, 4, 5}) →
  lemma Cardinality_Definition() {
    assert(
      |S₂| = count({x: x ∈ S₂})
    )
  } →
  apply(Cardinality_Definition()) →
  assert(|S₂| = count({1, 2, 3, 4, 5})) →
  assert(|S₂| = 5)
}