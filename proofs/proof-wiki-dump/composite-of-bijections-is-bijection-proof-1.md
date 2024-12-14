theorem Composite_of_Bijections_is_Bijection() {
  assert(
    ∀f,g: Mapping ∧ 
    Dom(f) = Cdm(g) ∧
    Bijection(f) ∧ Bijection(g) ⇒ 
    Bijection(f ∘ g)
  )
} ↔

proof Composite_of_Bijections_is_Bijection() {
  setVar(f,g: Mapping) →
  
  lemma Bijection_Contains_Injection() {
    assert(
      Bijection(f) ∧ Bijection(g) ⇒
      Injection(f) ∧ Injection(g)
    )
  } →

  lemma Bijection_Contains_Surjection() {
    assert(
      Bijection(f) ∧ Bijection(g) ⇒
      Surjection(f) ∧ Surjection(g)
    )
  } →

  apply(Bijection_Contains_Injection()) →
  apply(Composite_of_Injections_is_Injection()) →
  assert(Injection(f ∘ g)) →

  apply(Bijection_Contains_Surjection()) →
  apply(Composite_of_Surjections_is_Surjection()) →
  assert(Surjection(f ∘ g)) →

  lemma Injection_and_Surjection_is_Bijection() {
    assert(
      Injection(f ∘ g) ∧ Surjection(f ∘ g) ⇒
      Bijection(f ∘ g)
    )
  } →

  apply(Injection_and_Surjection_is_Bijection()) →
  assert(Bijection(f ∘ g))
}