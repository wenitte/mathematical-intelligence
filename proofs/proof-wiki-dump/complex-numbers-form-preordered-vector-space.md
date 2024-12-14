theorem Complex_Numbers_Preordered_Vector_Space() {
  assert(
    let ℂ be vector_space(over: ℂ) ∧
    let ≥^ℂ be relation(on: ℂ × ℂ) ∧
    ∀z,w ∈ ℂ: (z ≥^ℂ w ↔ (z - w) ∈ [0,∞)) →
    struct(ℂ, ≥^ℂ) is_preordered_vector_space()
  )
} ↔

proof Complex_Numbers_Preordered_Vector_Space() {
  lemma Characterization() {
    assert(
      struct(ℂ, ≥^ℂ) is_preordered_vector_space() ↔
      [0,∞) is_convex_cone()
    )
  } →
  
  let Cone_Property() {
    setVar(x ∈ [0,∞)) →
    setVar(α ∈ ℝ_≥0) →
    assert(αx ≥ 0) →
    assert(αx ∈ [0,∞))
  } →
  
  let Convexity_Property() {
    setVar(x,y ∈ [0,∞)) →
    assert(x + y ≥ 0) →
    assert(x + y ∈ [0,∞))
  } →
  
  apply(Cone_Property()) →
  apply(Convexity_Property()) →
  assert([0,∞) is_convex_cone()) →
  apply(Characterization()) →
  assert(struct(ℂ, ≥^ℂ) is_preordered_vector_space())
}