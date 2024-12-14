theorem Zero_Vector_Components() {
  assert(
    (∀r ∈ ℝ³)(
      (r = xî + yĵ + zk̂) ∧ 
      (r = 0) 
      ⇒ (x = 0 ∧ y = 0 ∧ z = 0)
    )
  )
} ↔

proof Zero_Vector_Components() {
  setVar(r: ℝ³) →
  setVar(x,y,z: ℝ) →
  
  lemma Vector_Magnitude() {
    assert(
      ∀v ∈ ℝ³: ‖v‖ = √(x² + y² + z²)
    )
  } →
  
  assert(r = 0 ⇒ ‖r‖ = 0) →
  apply(Vector_Magnitude()) →
  assert(√(x² + y² + z²) = 0) →
  
  lemma Square_NonNegative() {
    assert(
      ∀a ∈ ℝ: a² ≥ 0
    )
  } →
  
  apply(Square_NonNegative()) →
  assert(x² ≥ 0 ∧ y² ≥ 0 ∧ z² ≥ 0) →
  assert(x² + y² + z² = 0) →
  
  lemma Sum_NonNeg_Zero() {
    assert(
      ∀a,b,c ∈ ℝ: (
        (a ≥ 0 ∧ b ≥ 0 ∧ c ≥ 0) ∧
        (a + b + c = 0)
        ⇒ (a = 0 ∧ b = 0 ∧ c = 0)
      )
    )
  } →
  
  apply(Sum_NonNeg_Zero()) →
  assert(x² = 0 ∧ y² = 0 ∧ z² = 0) →
  assert(x = 0 ∧ y = 0 ∧ z = 0)
}