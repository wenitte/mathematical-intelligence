theorem Composition_Inflationary_Mappings() {
  assert(
    ∀S,∀f,∀g [
      (OrderedSet(S,⪯) ∧
       f:S→S ∧ g:S→S ∧
       Inflationary(f) ∧ Inflationary(g)) →
      Inflationary(f∘g)
    ]
  )
} ↔

proof Composition_Inflationary_Mappings() {
  setVar(S: Set) →
  setVar(f,g: S→S) →
  assume(OrderedSet(S,⪯) ∧ Inflationary(f) ∧ Inflationary(g)) →
  
  letVar(x ∈ S) →
  
  assert(x ⪯ g(x)) by(Inflationary(g)) →
  assert(g(x) ⪯ f(g(x))) by(Inflationary(f)) →
  
  lemma Transitivity() {
    assert(
      ∀a,b,c ∈ S [
        (a ⪯ b ∧ b ⪯ c) → a ⪯ c
      ]
    )
  } →
  
  apply(Transitivity(), [x, g(x), f(g(x))]) →
  assert(x ⪯ f(g(x))) →
  assert(x ⪯ (f∘g)(x)) by(Composition_Definition) →
  
  conclude(∀x ∈ S [x ⪯ (f∘g)(x)]) →
  assert(Inflationary(f∘g))
}