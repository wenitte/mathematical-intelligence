theorem Between_Two_Cubes_Mean_Proportionals() {
  assert(
    ∀a,b ∈ ℕ ⇒
    [∃x,y ∈ ℝ: (a³,x,y,b³) forms geometric sequence] ∧
    [(a/b)³ = a³/b³]
  )
} ↔

proof Between_Two_Cubes_Mean_Proportionals() {
  setVar(a,b: ℕ) →
  setVar(x = a²b, y = ab²) →
  
  lemma Geometric_Sequence() {
    assert(
      (a³,a²b,ab²,b³) is geometric sequence
    )
  } →
  
  lemma Mean_Proportionals() {
    assert(
      a³/a²b = a²b/ab² = ab²/b³ = a/b
    )
  } →
  
  apply(Geometric_Sequence()) →
  apply(Mean_Proportionals()) →
  
  assert(
    a³/b³ = (a/b)³
  ) →
  
  conclude(
    a²b and ab² are mean proportionals between a³ and b³ ∧
    ratio(a³:b³) = ratio(a:b)³
  )
}