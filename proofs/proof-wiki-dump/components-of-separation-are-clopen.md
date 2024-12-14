theorem Components_of_Separation_are_Clopen() {
  let T: TopologicalSpace(S, τ)
  let A,B: Subset(S)
  assert(
    isSeparation(A|B, T) ⇒ 
    (isClopen(A, T) ∧ isClopen(B, T))
  )
} ↔

proof Components_of_Separation_are_Clopen() {
  setVar(T: TopologicalSpace(S, τ)) →
  setVar(A,B: Subset(S)) →
  
  lemma RelativeComplement() {
    assert(
      isSeparation(A|B, T) ⇒
      (A = complementS(B) ∧ B = complementS(A))
    )
  } →
  
  apply(RelativeComplement()) →
  
  assert(isSeparation(A|B, T)) →
  assert(isOpen(A, T) ∧ isOpen(B, T)) →
  
  assert(A = complementS(B) ∧ B = complementS(A)) →
  assert(isOpen(complementS(B), T) ∧ isOpen(complementS(A), T)) →
  
  assert(isClosed(A, T) ∧ isClosed(B, T)) →
  
  assert(
    (isOpen(A, T) ∧ isClosed(A, T)) ∧
    (isOpen(B, T) ∧ isClosed(B, T))
  ) →
  
  assert(isClopen(A, T) ∧ isClopen(B, T))
}