theorem Boolean_Lattice_Is_Heyting() {
  assert(
    ∀L(B, ∨, ∧, ¬, ⪯) [Boolean_Lattice(L)] ⇒
    [∃H(B, ∨, ∧, ⪯) [Heyting_Lattice(H)] ∧
     ∀x,y ∈ B [(x → y) = (¬x ∨ y)]]
  )
} ↔

proof Boolean_Lattice_Is_Heyting() {
  setVar(x,y,z: B) →
  
  lemma Relative_Pseudocomplement() {
    assert(
      ∀x,y ∈ B [
        (z ⪯ ¬x ∨ y) ↔ (z ∧ x ⪯ y)
      ]
    )
  } →

  proof Forward_Direction() {
    assume(z ⪯ ¬x ∨ y) →
    assert(z ∧ x ⪯ (¬x ∨ y) ∧ x) →
    apply(Distributive_Law) →
    assert((¬x ∨ y) ∧ x = (¬x ∧ x) ∨ (y ∧ x)) →
    apply(Complement_Definition) →
    assert((¬x ∧ x) = ⊥) →
    assert(⊥ ∨ (y ∧ x) = y ∧ x) →
    assert(y ∧ x ⪯ y)
  } →

  proof Backward_Direction() {
    assume(z ∧ x ⪯ y) →
    assert(z = z ∧ ⊤) →
    apply(Complement_Definition) →
    assert(⊤ = ¬x ∨ x) →
    assert(z = z ∧ (¬x ∨ x)) →
    apply(Distributive_Law) →
    assert(z = (z ∧ ¬x) ∨ (z ∧ x)) →
    assert((z ∧ ¬x) ∨ (z ∧ x) ⪯ ¬x ∨ y)
  } →

  apply(Forward_Direction()) →
  apply(Backward_Direction()) →
  conclude()
}