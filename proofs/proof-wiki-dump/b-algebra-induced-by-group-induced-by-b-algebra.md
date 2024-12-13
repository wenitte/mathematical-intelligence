theorem BAG_Identity() {
  assert(
    ∀S ∀* (B_algebra(S,*) ∧ 
    ∃○ (group_induced_by_B(S,○,*) ∧
    ∃*' group_induces_B(S,*',○))) ⇒
    ∀a,b ∈ S: (a *' b = a * b)
  )
} ↔

proof BAG_Identity() {
  setVar(S: Set) →
  setVar(*: BinaryOp) →
  setVar(○: BinaryOp) →
  setVar(*': BinaryOp) →
  assume(B_algebra(S,*)) →
  assume(group_induced_by_B(S,○,*)) →
  assume(group_induces_B(S,*',○)) →
  
  setVar(a,b: S) →
  
  lemma GroupInducesDef() {
    assert(a *' b = a ○ b⁻¹)
  } →
  
  lemma BAlgebraInducesGroup() {
    assert(x ○ y = x * (0 * y))
  } →
  
  apply(GroupInducesDef()) →
  substitute(a *' b = a ○ b⁻¹) →
  apply(BAlgebraInducesGroup()) →
  substitute(a *' b = a * (0 * b⁻¹)) →
  
  lemma InverseProperty() {
    assert(b⁻¹ = 0 * b)
  } →
  
  apply(InverseProperty()) →
  substitute(a *' b = a * (0 * (0 * b))) →
  
  lemma BAlgebraIdentity() {
    assert(∀x ∈ S: 0 * (0 * x) = x)
  } →
  
  apply(BAlgebraIdentity()) →
  substitute(a *' b = a * b) →
  conclude(∀a,b ∈ S: (a *' b = a * b))
}