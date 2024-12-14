theorem Ceiling_Minus_Real_Number() {
  assert(
    ∀x ∈ ℝ ⇒ (⌈x⌉ - x) ∈ [0,1)
  )
} ↔

proof Ceiling_Minus_Real_Number() {
  setVar(x: ℝ) →
  assert(⌈x⌉ - 1 < x ≤ ⌈x⌉) →
  
  lemma Step1() {
    assert(⌈x⌉ - 1 - ⌈x⌉ < x - ⌈x⌉ ≤ ⌈x⌉ - ⌈x⌉)
  } →
  
  apply(Step1()) →
  assert(-1 < x - ⌈x⌉ ≤ 0) →
  
  lemma Step2() {
    assert(-1 < x - ⌈x⌉ ≤ 0) ↔
    assert(1 > ⌈x⌉ - x ≥ 0)
  } →
  
  apply(Step2()) →
  assert(⌈x⌉ - x ∈ [0,1))
}