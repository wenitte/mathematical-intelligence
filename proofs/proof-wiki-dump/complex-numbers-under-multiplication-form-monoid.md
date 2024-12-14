theorem Complex_Numbers_Multiplication_Monoid() {
  assert(
    ⟨ℂ,×⟩ is_monoid
  )
} ↔

proof Complex_Numbers_Multiplication_Monoid() {
  def(monoid_axioms: {closure, associativity, identity}) →
  
  lemma Closure() {
    assert(
      ∀a,b ∈ ℂ ⇒ (a × b) ∈ ℂ
    )
  } →

  lemma Associativity() {
    assert(
      ∀a,b,c ∈ ℂ ⇒ ((a × b) × c) = (a × (b × c))
    )
  } →

  lemma Identity() {
    assert(
      ∃e ∈ ℂ: e = 1 ∧
      ∀a ∈ ℂ ⇒ (a × e = a) ∧ (e × a = a)
    )
  } →

  apply(Closure()) ∧
  apply(Associativity()) ∧
  apply(Identity()) →
  
  assert(
    satisfies(⟨ℂ,×⟩, monoid_axioms)
  ) →
  
  conclude(⟨ℂ,×⟩ is_monoid)
}