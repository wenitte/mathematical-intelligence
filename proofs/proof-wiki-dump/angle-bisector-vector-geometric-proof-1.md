theorem AngleBisectorVector() {
  assert(
    ∀u,v ∈ V: (‖u‖ ≠ 0 ∧ ‖v‖ ≠ 0) ⇒
    (‖u‖v + ‖v‖u) bisects_angle(u,v)
  )
} ↔

proof AngleBisectorVector() {
  setVar(γ: angle(u,v)) →
  setVar(α: angle(‖u‖v, ‖v‖u)) →
  setVar(β: angle(u, ‖u‖v + ‖v‖u)) →
  
  lemma EqualLengths() {
    assert(‖‖u‖v‖ = ‖‖v‖u‖)
  } →
  
  apply(EqualLengths()) →
  assert(IsoscelesTriangle(‖u‖v, ‖v‖u, ‖u‖v + ‖v‖u)) →
  
  assert(2β + α = 180°) →
  assert(β = 90° - (1/2)α) →
  assert(2β = 180° - α) →
  
  setVar(δ: angle(v, ‖u‖v)) →
  assert(δ = α) →  // Parallel vectors have equal angles
  
  assert(δ + γ = 180°) →
  assert(α + γ = 180°) →
  assert(γ = 180° - α) →
  
  assert(γ = 2β) →  // Conclusion: angle is bisected
  assert(‖u‖v + ‖v‖u bisects_angle(u,v))
}