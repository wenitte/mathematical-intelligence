theorem Closed_Form_Of_One_Minus_Golden_Mean() {
  assert(
    ∀ϕ ∈ ℝ [ϕ = (1 + √5)/2] ⇒ 
    [ϕ̂ = (1 - √5)/2]
  )
  where(
    ϕ̂ = 1 - ϕ
  )
} ↔

proof Closed_Form_Of_One_Minus_Golden_Mean() {
  setVar(ϕ: ℝ) →
  assert(ϕ̂ = 1 - ϕ) →
  apply(Definition_Golden_Mean) →
  assert(ϕ̂ = 1 - (1 + √5)/2) →
  apply(Common_Denominator) →
  assert(ϕ̂ = (2 - (1 + √5))/2) →
  apply(Arithmetic) →
  assert(ϕ̂ = (1 - √5)/2)
}