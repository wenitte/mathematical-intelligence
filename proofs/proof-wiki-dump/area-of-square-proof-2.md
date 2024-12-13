theorem Square_Area() {
  assert(
    ∀L ∈ ℝ_≥0 ⇒ Area(L) = L²
  )
} ↔

proof Square_Area() {
  setVar(L: ℝ_≥0) →
  construct(Square(ABCD): length(AB) = L) →
  construct(Square(EFGH): length(EF) = 1) →
  
  lemma Unit_Square_Area() {
    assert(Area(EFGH) = 1)
  } →
  
  lemma Side_Ratio() {
    assert(AB:EF = L:1)
  } →
  
  apply(Similar_Polygons_Theorem()) →
  assert(
    Area(ABCD):Area(EFGH) = (AB:EF)²
  ) →
  
  substitute(Side_Ratio()) →
  assert(
    Area(ABCD):Area(EFGH) = (L:1)²
  ) →
  
  substitute(Unit_Square_Area()) →
  assert(
    Area(ABCD):1 = L²
  ) →
  
  simplify() →
  assert(
    Area(ABCD) = L²
  ) →
  
  conclude(
    ∀L ∈ ℝ_≥0 ⇒ Area(L) = L²
  )
}