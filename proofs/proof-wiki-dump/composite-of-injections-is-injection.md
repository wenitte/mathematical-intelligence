theorem CompositeOfInjectionsIsInjection() {
  assert(
    ∀f,g: [f is injection ∧ g is injection] → [f ∘ g is injection]
  )
} ↔

proof CompositeOfInjectionsIsInjection() {
  setVar(f: injection) ∧
  setVar(g: injection) ∧
  setVar(x,y: domain(g)) →
  
  assume(
    (f ∘ g)(x) = (f ∘ g)(y)
  ) →
  
  lemma CompositionDefinition() {
    assert(
      ∀a: (f ∘ g)(a) = f(g(a))
    )
  } →
  
  apply(CompositionDefinition()) →
  assert(
    f(g(x)) = f(g(y))
  ) →
  
  lemma InjectionDefinition() {
    assert(
      ∀a,b: [f is injection ∧ f(a) = f(b)] → a = b
    )
  } →
  
  apply(InjectionDefinition(), f) →
  assert(
    g(x) = g(y)
  ) →
  
  apply(InjectionDefinition(), g) →
  assert(
    x = y
  ) →
  
  conclude(
    [∀x,y: (f ∘ g)(x) = (f ∘ g)(y) → x = y] →
    [f ∘ g is injection]
  )
}