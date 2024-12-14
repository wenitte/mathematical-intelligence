theorem Completely_Irreducible_Implies_Infimum_Differs() {
  let(S: OrderedSet) →
  let(p: Element[S]) →
  assert(
    isCompletelyIrreducible(p) →
    inf(upperClosure(p) \ {p}) ≠ p
  )
} ↔

proof Completely_Irreducible_Implies_Infimum_Differs() {
  setDef(CompletelyIrreducible) →
  assert(
    hasMinimum(upperClosure(p) \ {p})
  ) →
  
  lemma Minimum_Implies_Infimum() {
    assert(
      hasMinimum(upperClosure(p) \ {p}) →
      (hasInfimum(upperClosure(p) \ {p}) ∧
       inf(upperClosure(p) \ {p}) ∈ (upperClosure(p) \ {p}))
    )
  } →
  
  apply(Minimum_Implies_Infimum()) →
  
  lemma Set_Difference_Property() {
    assert(
      ∀x ∈ (upperClosure(p) \ {p}) →
      x ∉ {p}
    )
  } →
  
  apply(Set_Difference_Property()) →
  
  lemma Singleton_Definition() {
    assert(
      x ∉ {p} ↔ x ≠ p
    )
  } →
  
  apply(Singleton_Definition()) →
  assert(inf(upperClosure(p) \ {p}) ≠ p)
}