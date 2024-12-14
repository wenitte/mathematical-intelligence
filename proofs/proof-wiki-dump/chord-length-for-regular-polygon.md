theorem Chord_Length_Regular_Polygon() {
  let n: ℕ, k: ℕ, r: ℝ⁺
  given(
    P: RegularPolygon(n) ∧
    Circle(C, r) inscribes P ∧
    Chord(CF) divides P into (k, n-k) sides
  )
  assert(
    length(CF) = 2r·sin(kπ/n)
  )
} ↔

proof Chord_Length_Regular_Polygon() {
  setVar(θ: ℝ) →
  assert(θ = ∠BAC where A is vertex of P) →
  
  lemma Equal_Sides() {
    assert(P is regular → all_sides_equal(P))
  } →
  
  lemma Central_Angles() {
    assert(
      Circle(C, r) inscribes P →
      ∀angle ∈ central_angles(P): angle = 2π/n
    )
  } →
  
  apply(Inscribed_Angle_Theorem) →
  assert(θ = π/n) →
  
  setVar(φ: ℝ = ∠CAF) →
  assert(φ subtends Chord(CF)) →
  assert(φ = ∠CAD + ∠DAE + ∠EAF) →
  assert(φ = k·θ) →
  assert(φ = k·π/n) →
  
  apply(Chord_Length_Formula) →
  assert(length(CF) = 2r·sin(φ)) →
  assert(length(CF) = 2r·sin(kπ/n)) →
  QED
}

lemma Chord_Length_Formula() {
  given(
    Circle(C, r) ∧
    Chord(c) ∧
    φ: inscribed_angle(c)
  )
  assert(
    length(c) = 2r·sin(φ)
  )
}