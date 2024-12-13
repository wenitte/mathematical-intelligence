theorem Angular_Velocity_Is_Vector() {
  assert(
    ∀ω₁,ω₂ ∈ V, ∀r ∈ ℝ³ ⇒ 
    (ω₁ × r + ω₂ × r = (ω₁ + ω₂) × r)
  )
} ↔

proof Angular_Velocity_Is_Vector() {
  setVar(O: Point) →
  setVar(P: Point) →
  setVar(r: Vector, r = position(P - O)) →
  setVar(ω₁: Vector, axis_through(O)) →
  setVar(ω₂: Vector, axis_through(O)) →
  
  lemma Tangential_Velocity_1() {
    assert(v₁ = ω₁ × r)
  } →
  
  lemma Tangential_Velocity_2() {
    assert(v₂ = ω₂ × r)
  } →
  
  lemma Linear_Velocity_Addition() {
    assert(v_total = v₁ + v₂)
  } →
  
  apply(Tangential_Velocity_1()) →
  apply(Tangential_Velocity_2()) →
  apply(Linear_Velocity_Addition()) →
  
  assert(v_total = ω₁ × r + ω₂ × r) →
  assert(
    ω₁ × r + ω₂ × r = (ω₁ + ω₂) × r,
    by(distributive_property)
  ) →
  
  setVar(ω: Vector, ω = ω₁ + ω₂) →
  assert(v_total = ω × r) →
  
  conclude(
    "Motion due to combined angular velocities equals motion due to vector sum"
  )
}