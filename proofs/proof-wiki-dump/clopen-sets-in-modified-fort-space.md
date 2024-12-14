theorem Clopen_Sets_Modified_Fort() {
  assert(
    ∀T[ModifiedFortSpace] ∧
    ∀A ⊆ S[
      (Closed(A, T) ∧ Open(A, T)) ∧
      a ∈ A
    ] ⇒
    b ∈ A
  )
} ↔

proof Clopen_Sets_Modified_Fort() {
  setVar(A: P(S)) →
  assert(Closed(A, T) ∧ Open(A, T)) →
  
  lemma Separation() {
    assert(∃B[S = A ∪ B ∧ A ∩ B = ∅]) →
    assert(Open(B, T) ∧ Closed(B, T))
  } →
  
  assume(a ∈ A) →
  assume(b ∈ B) →
  
  lemma OpenSet_Property() {
    assert(Open(A, T) ⇒ 
      ∃F[Finite(F) ∧ A = S\F])
  } →
  
  apply(OpenSet_Property()) →
  assert(|A| = ∞) →
  
  lemma Contradiction() {
    assert(b ∈ B ∧ |A| = ∞) →
    assert(¬Open(B, T))
  } →
  
  apply(Contradiction()) →
  assert(b ∉ B) →
  assert(b ∈ A)
}