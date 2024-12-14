theorem Cofunction_Pairs() {
  assert(
    ∀f,g: Functions(ℝ→ℝ) ∧
    IsCofunction(g,f) →
    IsCofunction(f,g)
  )
}

proof Cofunction_Pairs() {
  setVar(f,g: Functions(ℝ→ℝ)) →
  assume(IsCofunction(g,f)) →
  
  lemma Cofunction_Definition() {
    assert(
      ∀x∈ℝ: g(x) = f(90° - x)
    )
  } →

  assert(
    g(90° - x) = f(90° - (90° - x))
  ) →
  
  assert(
    g(90° - x) = f(x)
  ) →
  
  lemma Cofunction_Equivalence() {
    assert(
      ∀x∈ℝ: f(x) = g(90° - x) ↔
      IsCofunction(f,g)
    )
  } →

  apply(Cofunction_Equivalence()) →
  
  conclude(
    IsCofunction(f,g)
  )
}