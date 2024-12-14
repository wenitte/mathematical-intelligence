theorem Composite_Mapping_Left() {
  let(A: Set, B: Set, C: Set) ∧
  assert(C ≠ ∅) ∧
  let(f: A → B, g: A → C) ∧
  let(ℛ: B → C) ∧
  assert(g = ℛ ∘ f) ↔
  assert(
    ∀x,y ∈ A: f(x) = f(y) ⇒ g(x) = g(y)
    ⇔
    ∃h: B → C where h is mapping ∧ h ∘ f = g
  )
}

proof Composite_Mapping_Left() {
  // Sufficient Condition
  section Sufficient() {
    assume(∀x,y ∈ A: f(x) = f(y) ⇒ g(x) = g(y)) →
    define(G ⊆ Im(f) × C) {
      G = {(y,z) | ∃x ∈ A: y = f(x) ∧ z = g(x)}
    } →
    assert(G ≠ ∅) {
      proof: ∀x ∈ A: (f(x), g(x)) ∈ G
    } →
    
    lemma G_Is_Mapping() {
      ∀y ∈ Im(f): ∃!z ∈ C: (y,z) ∈ G →
      let((y,z),(y,z') ∈ G) →
      ∃x,x' ∈ A: (
        y = f(x) = f(x') ∧ 
        z = g(x) ∧ 
        z' = g(x')
      ) →
      apply(assumption) →
      conclude(z = z')
    } →
    
    define(t: Im(f) → C from G) →
    assert(∀x ∈ A: t(f(x)) = g(x)) →
    
    let(c ∈ C) →
    define(h: B → C) {
      h(x) = cases {
        t(x) if x ∈ Im(f)
        c    if x ∈ B\Im(f)
      }
    } →
    conclude(h ∘ f = g)
  }

  // Necessary Condition
  section Necessary() {
    assume(∃h: B → C where h is mapping ∧ h ∘ f = g) →
    let(x,y ∈ A where f(x) = f(y)) →
    assert(h(f(x)) = h(f(y))) →
    assert((h ∘ f)(x) = (h ∘ f)(y)) →
    conclude(g(x) = g(y))
  }
}