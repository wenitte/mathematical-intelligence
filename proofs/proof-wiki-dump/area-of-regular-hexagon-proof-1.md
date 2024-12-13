theorem Regular_Hexagon_Area() {
  assert(
    ∀H: RegularHexagon ∧
    ∀s: ℝ⁺ ∧ 
    s = sideLength(H) ∧
    ∀A: ℝ⁺ ∧
    A = area(H) 
    ⇒ A = (3 * √3 / 2) * s²
  )
} ↔

proof Regular_Hexagon_Area() {
  setVar(H: RegularHexagon) →
  setVar(s: ℝ⁺, s = sideLength(H)) →
  setVar(A: ℝ⁺, A = area(H)) →
  
  lemma Hexagon_Triangle_Decomposition() {
    assert(
      ∀H: RegularHexagon ⇒
      ∃T₁,T₂,T₃,T₄,T₅,T₆: EquilateralTriangle ∧
      H = T₁ ∪ T₂ ∪ T₃ ∪ T₄ ∪ T₅ ∪ T₆ ∧
      congruent(T₁,T₂,T₃,T₄,T₅,T₆)
    )
  } →

  setVar(A_T: ℝ⁺) →
  assert(A_T = area(T₁)) →
  
  lemma Equilateral_Triangle_Area() {
    assert(
      ∀T: EquilateralTriangle ∧
      sideLength(T) = s
      ⇒ area(T) = (√3 / 4) * s²
    )
  } →
  
  apply(Equilateral_Triangle_Area()) →
  assert(A_T = (√3 / 4) * s²) →
  
  apply(Hexagon_Triangle_Decomposition()) →
  assert(A = 6 * A_T) →
  assert(A = 6 * (√3 / 4) * s²) →
  assert(A = (3 * √3 / 2) * s²)
}