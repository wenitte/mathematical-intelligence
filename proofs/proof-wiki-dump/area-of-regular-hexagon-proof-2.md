theorem Area_Regular_Hexagon() {
  let H: RegularPolygon
  let s: ℝ
  let A: ℝ
  assert(
    (isRegularHexagon(H) ∧ 
     sideLength(H) = s ∧ 
     area(H) = A) →
    A = (3*√3/2)*s²
  )
}

proof Area_Regular_Hexagon() {
  setDef(RegularHexagon := RegularPolygon(sides=6)) →
  
  lemma Regular_Polygon_Area() {
    assert(
      ∀p:RegularPolygon, 
      area(p) = (n*s²/4)*cot(π/n) 
      where n = sides(p)
    )
  } →
  
  apply(Regular_Polygon_Area()) →
  assert(
    A = (6*s²/4)*cot(π/6)
  ) →
  
  lemma Cotangent_Pi_Six() {
    assert(cot(π/6) = √3)
  } →
  
  apply(Cotangent_Pi_Six()) →
  assert(
    A = (6*s²/4)*√3
  ) →
  
  simplify() →
  assert(
    A = (3*√3/2)*s²
  )
}