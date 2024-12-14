theorem Complement_Lower_Closure_Prime() {
  assert(
    ∀L(isCompleteScottTopologicalLattice(L) ∧ L = ⟨S,⪯,τ⟩) ∧
    ∀D(D = ⟨σ(L),⪯⟩ ∧ isInclusionOrderedSet(D)) ∧
    ∀x ∈ S ⇒
    (isPrimeElement(S∖x⪯, D) ∧ S∖x⪯ ≠ S)
  )
} ↔

proof Complement_Lower_Closure_Prime() {
  setVar(L: CompleteScottTopologicalLattice) →
  setVar(D: InclusionOrderedSet) →
  setVar(x: S) →
  
  lemma Scott_Topology_Equals_Sigma() {
    assert(τ = σ(L))
  } →
  
  lemma Closure_Singleton_Lower_Closure() {
    assert(x⪯ = {x}⁻)
  } →
  
  lemma Topological_Closure_Singleton_Irreducible() {
    assert(isTopologicallyIrreducible(x⪯))
  } →
  
  lemma Complement_Irreducible_Prime() {
    assert(
      isTopologicallyIrreducible(x⪯) ⇒ isPrimeElement(S∖x⪯, D)
    )
  } →
  
  apply(Topological_Closure_Singleton_Irreducible()) →
  apply(Complement_Irreducible_Prime()) →
  assert(isPrimeElement(S∖x⪯, D)) →
  
  lemma Element_In_Lower_Closure() {
    assert(∀y ∈ S: y ∈ y⪯)
  } →
  
  apply(Element_In_Lower_Closure()) →
  assert(x ∈ x⪯) →
  assert(x ∉ S∖x⪯) →
  assert(S∖x⪯ ≠ S)
}