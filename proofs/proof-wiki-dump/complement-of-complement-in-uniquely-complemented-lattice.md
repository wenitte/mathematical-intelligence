theorem Complement_of_Complement_in_Uniquely_Complemented_Lattice() {
  assert(
    ∀S[Structure(S, ∧, ∨, ≼) ∧ UniquelyComplementedLattice(S)] ∧
    ∀x ∈ S ∧ ∃(¬x)[Complement(x, ¬x)] ⇒
    ¬¬x = x
  )
} ↔

proof Complement_of_Complement_in_Uniquely_Complemented_Lattice() {
  setVar(x: S) →
  
  lemma Complement_Definition() {
    assert(
      Complement(x, ¬x) ↔
      (¬x ∨ x = ⊤) ∧ (¬x ∧ x = ⊥)
    )
  } →

  lemma Commutative_Laws() {
    assert(
      ∀a,b ∈ S: (a ∨ b = b ∨ a) ∧ (a ∧ b = b ∧ a)
    )
  } →

  apply(Complement_Definition()) →
  apply(Commutative_Laws()) →
  
  assert(
    (x ∨ ¬x = ⊤) ∧ (x ∧ ¬x = ⊥)
  ) →

  lemma Is_Complement_of_Negation() {
    assert(
      (x ∨ ¬x = ⊤) ∧ (x ∧ ¬x = ⊥) ⇒
      Complement(¬x, x)
    )
  } →

  apply(Is_Complement_of_Negation()) →
  
  assert(
    UniquelyComplementedLattice(S) ⇒
    ∀y ∈ S: Complement(y, a) ∧ Complement(y, b) ⇒ a = b
  ) →
  
  assert(¬¬x = x)
}