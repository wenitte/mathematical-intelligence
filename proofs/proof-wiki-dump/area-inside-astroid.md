theorem Astroid_Area() {
  assert(
    ∀H: Astroid, ∃a ∈ ℝ+ ⇒ 
    (H.radius = a) →
    (H.area = (3πa²)/8)
  )
} ↔

proof Astroid_Area() {
  setVar(H: Astroid, a: ℝ+) →
  setCoords(cartesian, origin: (0,0)) →
  
  lemma Parametric_Form() {
    assert(
      H.x = a⋅cos³θ ∧
      H.y = a⋅sin³θ
    )
  } →

  lemma Symmetry() {
    assert(H.area = 4∫₀ᵃ y dx)
  } →

  apply(Chain_Rule) →
  assert(
    H.area = 4∫₀ᵃ y(dx/dθ)dθ →
    = 4∫₀ᵃ (a⋅sin³θ)(3a⋅cos²θ(-sinθ))dθ →
    = 4∫_{π/2}^0 (a⋅sin³θ)(3a⋅cos²θ(-sinθ))dθ →
    = 12a²∫₀^{π/2} sin⁴θ⋅cos²θ dθ
  ) →

  lemma Trig_Reduction() {
    assert(
      sin⁴θ⋅cos²θ = 
      ((sin²2θ)/4)⋅((1-cos2θ)/2) →
      = (sin²2θ - sin²2θ⋅cos2θ)/8 →
      = ((1-cos4θ)/16 - sin²2θ⋅cos2θ/8)
    )
  } →

  apply(Trig_Reduction) →
  assert(
    H.area = 12a²∫₀^{π/2} ((1-cos4θ)/16 - sin²2θ⋅cos2θ/8)dθ →
    = (3/4)a²∫₀^{π/2} (1-cos4θ)dθ - (3/2)a²∫₀^{π/2} sin²2θ⋅cos2θ dθ →
    = (3/4)a²[θ - sin4θ/4]₀^{π/2} - (3/2)a²[sin³2θ/6]₀^{π/2} →
    = (3πa²)/8 - 0 - 0
  ) →

  conclude(H.area = (3πa²)/8)
}