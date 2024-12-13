theorem SetDifferenceClosedInAlgebra() {
  assert(
    ∀S(S: Set) ∧
    ∀ℜ(ℜ: AlgebraOfSets(S)) →
    ∀A,B ∈ ℜ ⇒ (A \ B) ∈ ℜ
  )
} ↔

proof SetDifferenceClosedInAlgebra() {
  setVar(S: Set) →
  setVar(ℜ: AlgebraOfSets(S)) →
  
  lemma ComplementClosure() {
    assert(
      ∀A ∈ ℜ ⇒ (S \ A) ∈ ℜ
    )
  } →
  
  lemma IntersectionClosure() {
    assert(
      ∀A,B ∈ ℜ ⇒ (A ∩ B) ∈ ℜ
    )
  } →
  
  setVar(A,B: ℜ) →
  assert(B ∈ ℜ ⇒ (S \ B) ∈ ℜ) by(ComplementClosure()) →
  assert(A ∩ (S \ B) ∈ ℜ) by(IntersectionClosure()) →
  assert(A \ B = A ∩ (S \ B)) by(SetDifferenceDefinition()) →
  assert(A \ B ∈ ℜ)
}