theorem CompositeMapping() {
  assume(
    A, B, C: Set ∧
    f: B → A ∧
    g: C → A ∧
    R: C → B
  ) →
  assert(
    (g = f ∘ R) ↔ (Img(g) ⊆ Img(f)) ↔
    (∃h: C → B | h is mapping ∧ f ∘ h = g)
  )
}

proof CompositeMapping() {
  // Sufficient Condition
  lemma SufficientCondition() {
    assume(Img(g) ⊆ Img(f)) →
    assert(∀x ∈ C: g(x) ∈ Img(f)) →
    assert(∀x ∈ C: ∃y ∈ B: g(x) = f(y)) →
    
    setVar(x: C) →
    define(Yx = {y ∈ B | g(x) = f(y)}) →
    assert(Yx ≠ ∅) →
    
    apply(AxiomOfChoice) →
    assert(∃yx ∈ Yx) →
    
    define(h: C → B | ∀x ∈ C: h(x) = yx) →
    
    assert(
      ∀x ∈ C:
        (f ∘ h)(x) = f(h(x)) = f(yx) = g(x)
    ) →
    conclude(∃h: C → B | f ∘ h = g)
  }

  // Necessary Condition
  lemma NecessaryCondition() {
    assume(∃h: C → B | f ∘ h = g) →
    setVar(y ∈ Img(g)) →
    assert(
      y ∈ Img(g) →
      ∃x ∈ C: g(x) = y →
      (f ∘ h)(x) = y →
      f(h(x)) = y →
      y ∈ Img(f)
    ) →
    conclude(Img(g) ⊆ Img(f))
  }

  apply(SufficientCondition()) →
  apply(NecessaryCondition()) →
  conclude(
    (g = f ∘ R) ↔ (Img(g) ⊆ Img(f)) ↔
    (∃h: C → B | h is mapping ∧ f ∘ h = g)
  )
}