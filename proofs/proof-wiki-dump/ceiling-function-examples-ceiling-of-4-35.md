theorem Ceiling_4_35() {
  assert(
    ⌈4.35⌉ = 5
  )
} ↔

proof Ceiling_4_35() {
  lemma CeilingDefinition() {
    assert(
      ∀x ∈ ℝ,
      ⌈x⌉ = n ↔ [n ∈ ℤ ∧ (x ≤ n) ∧ (n-1 < x)]
    )
  } →
  
  assert(4 < 4.35) →
  assert(4.35 ≤ 5) →
  assert(4 < 4.35 ≤ 5) →
  
  setVar(n: ℤ = 5) →
  apply(CeilingDefinition()) →
  
  assert(
    5 ∈ ℤ ∧
    4.35 ≤ 5 ∧
    4 < 4.35
  ) →
  
  conclude(⌈4.35⌉ = 5)
}