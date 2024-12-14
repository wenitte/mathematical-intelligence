theorem Complement_of_Top_Bounded_Lattice() {
  assert(
    ∀L: BoundedLattice[S, ∨, ∧, ≼] ⇒
    ∃!c ∈ L: (c ∧ ⊤ = ⊥) ∧ (c ∨ ⊤ = ⊤) ∧ (c = ⊥)
  )
} ↔

proof Complement_of_Top_Bounded_Lattice() {
  setVar(L: BoundedLattice) →
  lemma Dual_Pairs() {
    assert(⊤ dual_to ⊥)
  } →
  lemma Complement_of_Bottom() {
    assert(∃!c ∈ L: (c ∧ ⊥ = ⊥) ∧ (c ∨ ⊥ = ⊤) ∧ (c = ⊤))
  } →
  apply(Duality_Principle) →
  apply(Complement_of_Bottom()) →
  assert(⊥ is_complement_of ⊤) →
  assert(∀x ∈ L: x is_complement_of ⊤ ⇒ x = ⊥)
}