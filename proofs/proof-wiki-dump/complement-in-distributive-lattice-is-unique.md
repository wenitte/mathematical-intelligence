theorem ComplementUniqueness() {
  assert(
    ∀L[L is bounded distributive lattice] ∧
    ∀a ∈ L ⇒ 
    ∀b,c ∈ L[isComplement(b,a) ∧ isComplement(c,a)] ⇒
    b = c
  )
} ↔

proof ComplementUniqueness() {
  setVar(L: BoundedDistributiveLattice) →
  setVar(a,b,c: Element(L)) →
  assume(isComplement(b,a) ∧ isComplement(c,a)) →
  
  assert(b = ⊤ ∧ b) by identityLaw(∧) →
  assert(b = (c ∨ a) ∧ b) by complementDef(c,a) →
  assert(b = (c ∧ b) ∨ (a ∧ b)) by distributiveLaw() →
  assert(b = (c ∧ b) ∨ ⊥) by complementDef(b,a) →
  assert(b = c ∧ b) by identityLaw(∨) →

  lemma SymmetricArgument() {
    assert(c = c ∧ b) by sameSteps(interchange(b,c))
  } →

  apply(SymmetricArgument()) →
  assert(b = c) by antisymmetry(∧)
}

corollary BooleanLatticeUniqueComplement() {
  assert(
    ∀L[L is Boolean lattice] ⇒
    ∀a ∈ L ⇒ ∃!b[b = ¬a ∧ isComplement(b,a)]
  )
}