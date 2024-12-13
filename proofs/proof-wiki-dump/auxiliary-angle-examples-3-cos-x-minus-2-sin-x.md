theorem Auxiliary_Angle_Example() {
  assert(
    ∀x ∈ ℝ : 3cos(x) - 2sin(x) = √13 · cos(x + arctan(2/3))
  )
}

proof Auxiliary_Angle_Example() {
  setVar(x: ℝ) →
  setVar(α: ℝ) →
  
  lemma Trig_Form() {
    assert(
      ∀p,q ∈ ℝ : p·sin(x) + q·cos(x) = √(p² + q²) · cos(x + arctan(-p/q))
    )
  } →

  assert(tan(α) = 2/3) →
  assert(3 = √13 · cos(α)) ∧
  assert(2 = √13 · sin(α)) →
  
  assert(
    3cos(x) - 2sin(x) = √13(cos(α)cos(x) - sin(α)sin(x))
  ) →
  
  lemma Cosine_Sum() {
    assert(
      ∀a,b ∈ ℝ : cos(a + b) = cos(a)cos(b) - sin(a)sin(b)
    )
  } →
  
  apply(Cosine_Sum()) →
  assert(
    3cos(x) - 2sin(x) = √13 · cos(x + α)
  ) →
  
  assert(
    α = arctan(2/3)
  ) →
  
  conclude(
    3cos(x) - 2sin(x) = √13 · cos(x + arctan(2/3))
  )
}