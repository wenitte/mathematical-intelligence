theorem Quadrilateral_Area() {
  assert(
    ∀Q[Quadrilateral] ∧ vertices(Q) = {(2,-1), (4,3), (-1,2), (-3,-2)} →
    Area(Q) = 18
  )
} ↔

proof Quadrilateral_Area() {
  setVar(Q: Quadrilateral) →
  lemma Area_Determinant_Form() {
    assert(
      Area(Q) = (1/2)(|D₁| + |D₂|) where
      D₁ = |2 -1 1|
          |4  3 1|
          |-1 2 1| ∧
      D₂ = |2  -1 1|
          |-3 -2 1|
          |-1  2 1|
    )
  } →
  
  apply(Area_Determinant_Form()) →
  assert(|D₁| = |(2×3 - 4×(-1)) - (2×2 - (-1)×(-1)) + (4×2 - (-1)×3)|) →
  assert(|D₂| = |(2×(-2) - (-3)×(-1)) - (2×2 - (-1)×(-1)) + ((-3)×2 - (-1)×(-2))|) →
  
  assert(|D₁| = |6 - (-4) - (4 - 1) + (8 - (-3))|) →
  assert(|D₂| = |(-4) - 3 - (4 - 1) + (-6 - 2)|) →
  
  assert(|D₁| = |10 - 3 + 11|) →
  assert(|D₂| = |-7 - 3 + (-8)|) →
  
  assert(|D₁| = |18|) →
  assert(|D₂| = |-18|) →
  
  assert(Area(Q) = (1/2)(|18| + |-18|)) →
  assert(Area(Q) = (1/2)(36)) →
  assert(Area(Q) = 18)
}