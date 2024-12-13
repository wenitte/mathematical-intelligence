theorem Parallelogram_Area() {
  assert(
    ∀ABCD: Parallelogram, ∀a,b,h ∈ ℝ⁺, ∀θ ∈ (0,π) ⇒
    (∥AB∥ = a ∧ ∥BC∥ = b ∧ ∠ABC = θ) →
    Area(ABCD) = bh ∧ Area(ABCD) = ab·sin(θ)
  )
}

proof Parallelogram_Area() {
  setVar(ABCD: Parallelogram) →
  setVar(F: Point, foot_of_altitude(C,AB)) →
  setVar(E: Point, foot_of_altitude(D,AB)) →
  
  lemma Congruent_Parts() {
    assert(AD ≅ BC) ∧
    assert(∠AED ≅ ∠BFC) ∧
    assert(DE ≅ CF)
  } →
  
  lemma Triangle_Congruence() {
    assert(△AED ≅ △BFC) →
    assert(Area(AED) = Area(BFC))
  } →
  
  apply(Triangle_Congruence()) →
  assert(Area(ABCD) = EF·FC) →
  assert(EF = AB) →
  assert(Area(ABCD) = AB·DE) →
  assert(AB = b ∧ DE = h) →
  assert(Area(ABCD) = bh) →
  
  lemma Sine_Height() {
    assert(sin(θ) = h/a) →
    assert(h = a·sin(θ))
  } →
  
  apply(Sine_Height()) →
  assert(Area(ABCD) = bh = b(a·sin(θ)) = ab·sin(θ))
}