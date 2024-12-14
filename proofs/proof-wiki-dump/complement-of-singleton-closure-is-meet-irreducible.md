theorem Complement_Singleton_Closure_Is_Meet_Irreducible() {
  let(S: TopologicalSpace, τ: Topology, x: Element) →
  assume(x ∈ S) →
  assert(
    IsMeetIrreducible(S \ {x}⁻)
  )
} ↔

proof Complement_Singleton_Closure_Is_Meet_Irreducible() {
  lemma CharacterizationMeetIrreducible() {
    assert(
      IsMeetIrreducible(S \ {x}⁻) ↔ 
      ∀U,V ∈ τ: (U ∩ V ⊆ S \ {x}⁻ → (U ⊆ S \ {x}⁻ ∨ V ⊆ S \ {x}⁻))
    )
  } →

  setVar(U,V: Set) →
  assume(U,V ∈ τ) →
  assume(U ∩ V ⊆ S \ {x}⁻) →

  lemma SetInClosure() {
    assert(x ∈ {x}⁻)
  } →
  
  apply(SetInClosure()) →
  assert(x ∉ S \ {x}⁻) →
  assert(x ∉ U ∩ V) →
  assert(x ∉ U ∨ x ∉ V) →
  
  assume(x ∉ U) →
  assert(x ∈ S \ U) →
  
  lemma ClosedComplement() {
    assert(IsClosed(S \ U))
  } →
  
  lemma ClosureSubset() {
    assert(
      IsClosed(S \ U) →
      {x}⁻ ⊆ S \ U
    )
  } →
  
  apply(ClosedComplement()) →
  apply(ClosureSubset()) →
  assert({x}⁻ ⊆ S \ U) →
  assert(U ⊆ S \ {x}⁻) →
  
  conclude(
    IsMeetIrreducible(S \ {x}⁻)
  )
}