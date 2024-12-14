theorem Ceiling_Of_Negative_One_Point_One() {
  assert(
    ⌈-1.1⌉ = -1
  )
} ↔

proof Ceiling_Of_Negative_One_Point_One() {
  lemma Ceiling_Definition() {
    assert(
      ∀x ∈ ℝ: (n ∈ ℤ ∧ x ≤ n < x + 1) ↔ ⌈x⌉ = n
    )
  } →
  
  assert(-2 < -1.1) ∧ assert(-1.1 ≤ -1) →
  assert(-2 < -1.1 ≤ -1) →
  
  apply(Ceiling_Definition()) →
  conclude(⌈-1.1⌉ = -1)
}