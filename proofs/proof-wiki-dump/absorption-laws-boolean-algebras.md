theorem Absorption_Laws_Boolean_Algebra() {
  assert(
    ∀(S: BooleanAlgebra) ∧ ∀(a,b ∈ S) ⇒
    (a = a ∨ (a ∧ b)) ∧ (a = a ∧ (a ∨ b))
  )
} ↔

proof Absorption_Laws_Boolean_Algebra() {
  setVar(S: BooleanAlgebra) →
  setVar(a,b ∈ S) →
  
  // First absorption law
  assert(a ∨ (a ∧ b)) →
  apply(BA1_3: a = a ∧ ⊤) →
  assert((a ∧ ⊤) ∨ (a ∧ b)) →
  apply(BA1_2: x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z)) →
  assert(a ∧ (⊤ ∨ b)) →
  apply(Identity_Law: ⊤ ∨ b = ⊤) →
  assert(a ∧ ⊤) →
  apply(BA1_3) →
  assert(a) →
  
  // Second absorption law
  lemma Duality_Principle() {
    assert(
      (a = a ∨ (a ∧ b)) ⇒ (a = a ∧ (a ∨ b))
    )
  } →
  apply(Duality_Principle()) →
  assert(a = a ∧ (a ∨ b))
}