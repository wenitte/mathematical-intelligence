theorem Area_Triangle_Origin_Example() {
  assert(
    let A = (0,0) ∧ 
    let B = (b,a) ∧
    let C = (x₀,y₀) ∧
    let T = Triangle(A,B,C) ∧
    (ax₀ - by₀ = 1) →
    Area(T) = 1/2
  )
} ↔

proof Area_Triangle_Origin_Example() {
  setVar(A: ℝ²) →
  setVar(B: ℝ²) →
  setVar(C: ℝ²) →
  
  lemma Area_Triangle_Determinant() {
    assert(
      ∀p,q ∈ ℝ² →
      Area(Triangle((0,0),(b,a),(p,q))) = 1/2|bq - ap|
    )
  } →
  
  apply(Area_Triangle_Determinant()) →
  assert(Area(T) = 1/2|by₀ - ax₀|) →
  
  given(ax₀ - by₀ = 1) →
  assert(|by₀ - ax₀| = 1) →
  
  substitute(|by₀ - ax₀| = 1) →
  assert(Area(T) = 1/2)
}