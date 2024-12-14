theorem ChiuChangExample1() {
  assert(
    ∀x ∈ ℝ ∧ 
    (2.5 piculs = (3/7) taels) →
    ∃x[x = piculs_per_9_taels]
  )
} ↔

proof ChiuChangExample1() {
  setVar(x: ℝ) →
  lemma UnitConversion() {
    assert(
      (x/9) = piculs_per_tael ∧
      (x/9 × 3/7) = piculs_per_3/7_tael
    )
  } →
  
  apply(UnitConversion()) →
  assert(x/9 × 3/7 = 5/2) →
  
  lemma SolveForX() {
    assert(
      x = 9 × (5/2) ÷ (3/7) ∧
      x = 9 × (5/2) × (7/3) ∧
      x = 52.5
    )
  } →
  
  apply(SolveForX()) →
  assert(x = 52.5 piculs)
}