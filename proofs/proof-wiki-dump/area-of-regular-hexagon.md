theorem Regular_Hexagon_Area() {
  let(H: RegularHexagon, s: ℝ⁺, A: ℝ⁺) →
  assert(
    (isRegularHexagon(H) ∧ sideLength(H) = s ∧ area(H) = A) →
    A = (3*√3/2)*s²
  )
}

proof Regular_Hexagon_Area_1() {
  let(H: RegularHexagon, s: ℝ⁺, A: ℝ⁺) →
  let(AT: ℝ⁺) →
  
  lemma Hexagon_Decomposition() {
    assert(
      isRegularHexagon(H) →
      ∃T1,...,T6: EquilateralTriangle | 
      H = T1 ∪ T2 ∪ T3 ∪ T4 ∪ T5 ∪ T6 ∧
      congruent(Ti, Tj) ∀i,j ∈ {1,...,6}
    )
  } →
  
  lemma Equilateral_Triangle_Area() {
    assert(
      AT = (√3/4)*s²
    )
  } →
  
  apply(Hexagon_Decomposition()) →
  apply(Equilateral_Triangle_Area()) →
  assert(A = 6*AT) →
  assert(A = 6*(√3/4)*s²) →
  assert(A = (3*√3/2)*s²)
}

proof Regular_Hexagon_Area_2() {
  let(H: RegularHexagon, s: ℝ⁺, A: ℝ⁺) →
  
  lemma Regular_Polygon_Area() {
    assert(
      area(RegularPolygon(n,s)) = (n*s²/4)*cot(π/n)
    )
  } →
  
  apply(Regular_Polygon_Area(), n=6) →
  assert(A = (6*s²/4)*cot(π/6)) →
  assert(cot(π/6) = √3) →
  assert(A = (6*s²/4)*√3) →
  assert(A = (3*√3/2)*s²)
}