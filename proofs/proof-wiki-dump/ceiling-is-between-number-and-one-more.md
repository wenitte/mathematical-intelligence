theorem Ceiling_Between_Number_And_One_More() {
  assert(
    ∀x ∈ ℝ ⇒ (x ≤ ⌈x⌉ < x + 1)
  )
} ↔

proof Ceiling_Between_Number_And_One_More() {
  setVar(x: ℝ) →
  
  lemma Prior_Ceiling_Property() {
    assert(⌈x⌉ - 1 < x ≤ ⌈x⌉)
  } →
  
  apply(Prior_Ceiling_Property()) →
  
  assert((⌈x⌉ - 1 < x ≤ ⌈x⌉) → (⌈x⌉ - 1 + 1 < x + 1)) →
  
  assert(⌈x⌉ < x + 1) ∧
  
  assert(x ≤ ⌈x⌉) →
  
  conclude((x ≤ ⌈x⌉) ∧ (⌈x⌉ < x + 1))
}