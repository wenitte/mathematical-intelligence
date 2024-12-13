theorem BetweenTwoSquares() {
  assert(
    ∀a,b ∈ ℕ ⇒ 
    ∃m ∈ ℕ [
      (m is mean proportional between a² and b²) ∧
      (a²:b² = (a:b)²)
    ]
  )
} ↔

proof BetweenTwoSquares() {
  setVar(a,b: ℕ) →
  setVar(m = ab) →
  
  assert(
    a²/(ab) = a/b = ab/b²
  ) →
  
  lemma MeanPropDef() {
    assert(
      x is mean proportional between y and z ↔
      y/x = x/z
    )
  } →
  
  apply(MeanPropDef()) →
  assert(ab is mean proportional between a² and b²) →
  
  assert(
    (a/b)² = a²/b²
  ) →
  
  lemma DuplicateRatioDef() {
    assert(
      x has to y the duplicate ratio of z to w ↔
      (z/w)² = x/y
    )
  } →
  
  apply(DuplicateRatioDef()) →
  assert(
    a² has to b² the duplicate ratio of a to b
  )
}