theorem TriangleAreaDeterminant() {
  assert(
    ∀A,B,C ∈ ℝ² → (
      A = (0,0) ∧ 
      B = (b,a) ∧ 
      C = (x,y) ∧
      T = Triangle(A,B,C) →
      Area(T) = |by - ax|/2
    )
  )
} ↔

proof TriangleAreaDeterminant() {
  setVar(A,B,C: ℝ²) →
  setVar(T: Triangle) →
  assert(Area(T) = (1/2)|det[
    [0, 0, 1],
    [b, a, 1],
    [x, y, 1]
  ]|) →
  
  lemma DeterminantExpansion() {
    assert(
      det[
        [0, 0, 1],
        [b, a, 1],
        [x, y, 1]
      ] = by - ax
    )
  } →
  
  apply(DeterminantExpansion()) →
  assert(Area(T) = |by - ax|/2)
}