theorem Boolean_Algebra_As_Boolean_Lattice() {
  setStruct(S: BooleanAlgebra, ∨, ∧, ¬) →
  define(⪯: Ordering) {
    ∀a,b ∈ S: (a ⪯ b ↔ a ∨ b = b)
  } →
  assert(
    struct(S, ∨, ∧, ⪯) is_a BooleanLattice
  )
}

proof Boolean_Algebra_As_Boolean_Lattice() {
  recall(BooleanLattice_Def2) {
    struct(S, ∨, ∧, ⪯) is_a BooleanLattice ↔
    (struct(S, ∨, ∧) is_a BooleanAlgebra ∧
     ∀a,b ∈ S: a ∧ b ⪯ a ∨ b)
  } →
  
  lemma Ordering_Properties() {
    // Reflexivity
    assert(∀a ∈ S: a ∨ a = a) →
    conclude(∀a ∈ S: a ⪯ a) →
    
    // Transitivity
    setVar(a,b,c: S) →
    assume(a ⪯ b ∧ b ⪯ c) →
    assert(a ∨ b = b ∧ b ∨ c = c) →
    substitute((a ∨ b) ∨ c = c) →
    apply(Associativity) →
    assert(a ∨ c = c) →
    conclude(a ⪯ c) →
    
    // Antisymmetry
    assume(a ⪯ b ∧ b ⪯ a) →
    assert(a ∨ b = b ∧ b ∨ a = a) →
    apply(Commutativity) →
    conclude(a = b)
  } →

  lemma Compatibility_Meet() {
    setVar(a,b,c: S) →
    assume(a ⪯ b) →
    assert(a ∨ b = b) →
    assert((c ∧ a) ∨ (c ∧ b) = c ∧ (a ∨ b)) by Distributivity →
    assert((c ∧ a) ∨ (c ∧ b) = c ∧ b) →
    conclude(c ∧ a ⪯ c ∧ b)
  } →

  lemma Compatibility_Join() {
    setVar(a,b,c: S) →
    assume(a ⪯ b) →
    assert(a ∨ b = b) →
    assert((c ∨ a) ∨ (c ∨ b) = (c ∨ c) ∨ (a ∨ b)) by Associativity →
    assert((c ∨ a) ∨ (c ∨ b) = c ∨ b) by Idempotence →
    conclude(c ∨ a ⪯ c ∨ b)
  } →

  lemma Meet_Join_Order() {
    setVar(a,b: S) →
    assert((a ∧ b) ∨ (a ∨ b) = (a ∨ (a ∨ b)) ∧ (b ∨ (a ∨ b))) by Distributivity →
    apply(Idempotence) →
    assert((a ∧ b) ∨ (a ∨ b) = a ∨ b) →
    conclude(a ∧ b ⪯ a ∨ b)
  } →

  apply(Ordering_Properties()) →
  apply(Compatibility_Meet()) →
  apply(Compatibility_Join()) →
  apply(Meet_Join_Order()) →
  conclude(struct(S, ∨, ∧, ⪯) is_a BooleanLattice)
}