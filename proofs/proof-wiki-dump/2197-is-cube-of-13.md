theorem Thirteen_Cubed() {
  assert(
    13³ = 2197
  )
} ↔

proof Thirteen_Cubed() {
  step_1: {
    13 × 13 = 
    (13 × 3) + (13 × 10) →
    39 + 130 →
    169
  } →
  
  step_2: {
    169 × 13 =
    (13 × 39) + (13 × 130) →
    507 + 1690 →
    2197
  } →
  
  conclude: {
    step_1() ∧ step_2() →
    13³ = 13 × 13 × 13 →
    13³ = 169 × 13 →
    13³ = 2197
  }
}