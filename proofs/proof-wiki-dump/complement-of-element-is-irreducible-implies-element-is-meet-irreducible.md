theorem Complement_Element_Irreducible_Meet_Irreducible() {
  let(T: TopologicalSpace) →
  let(S: Set) →
  let(τ: Topology) →
  let(T = ⟨S,τ⟩) →
  let(P = ⟨τ,⊑⟩) →
  let(⊑ = ⊆ ∩ (τ×τ)) →
  let(A ∈ τ) →
  assert(
    isIrreducible(S∖A) → isMeetIrreducible(A,P)
  )
} ↔

proof Complement_Element_Irreducible_Meet_Irreducible() {
  assume(isIrreducible(S∖A)) →
  let(x,y ∈ τ) →
  assume(A = x ∧ y) →
  
  lemma TopSpace_Intersection() {
    assert(x,y ∈ τ → x ∩ y ∈ τ)
  } →
  
  lemma Meet_In_Inclusion() {
    assert(x ∧ y = x ∩ y)
  } →
  
  lemma DeMorgans_Law() {
    assert(S∖(x ∩ y) = (S∖x) ∪ (S∖y))
  } →
  
  apply(Meet_In_Inclusion()) →
  apply(DeMorgans_Law()) →
  assert(S∖A = (S∖x) ∪ (S∖y)) →
  assert(isClosed(S∖x) ∧ isClosed(S∖y)) →
  
  apply(isIrreducible(S∖A)) →
  assert(S∖A = S∖x ∨ S∖A = S∖y) →
  
  lemma Complement_Of_Complement() {
    assert(∀Z⊆S: S∖(S∖Z) = Z)
  } →
  
  apply(Complement_Of_Complement()) →
  assert(A = x ∨ A = y) →
  assert(isMeetIrreducible(A,P))
}