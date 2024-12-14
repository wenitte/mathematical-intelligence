theorem Closed_Set_Measurable() {
  assert(
    ∀S,τ,ℬ_τ,C: (
      (struct(S,τ) isA TopologicalSpace) ∧
      (ℬ_τ isA BorelSigmaAlgebra(τ)) ∧
      (C isA ClosedSet(S,τ))
    ) ⇒ (C ∈ ℬ_τ)
  )
} ↔

proof Closed_Set_Measurable() {
  setVar(S,τ: TopologicalSpace) →
  setVar(ℬ_τ: BorelSigmaAlgebra(τ)) →
  setVar(C: ClosedSet(S,τ)) →
  
  assert(C isClosedSet ⇒ (S\C) isOpenSet) →
  assert((S\C) isOpenSet ⇒ (S\C) ∈ ℬ_τ) by def(BorelSigmaAlgebra) →
  
  lemma SigmaAlgebraComplement() {
    assert(
      ∀A,Σ: (A ∈ Σ) ⇒ (S\A ∈ Σ)
    )
  } →
  
  apply(SigmaAlgebraComplement(), A:=(S\C), Σ:=ℬ_τ) →
  assert(S\(S\C) ∈ ℬ_τ) →
  
  lemma SetDifferenceWithDifference() {
    assert(
      ∀A,B: (A ⊆ B) ⇒ (B\(B\A) = A)
    )
  } →
  
  apply(SetDifferenceWithDifference(), A:=C, B:=S) →
  assert(S\(S\C) = C) →
  assert(C ∈ ℬ_τ)
}