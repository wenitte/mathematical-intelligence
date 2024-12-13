theorem Algebra_Sets_Closed_Under_Intersection() {
  assume(S: Set, R: AlgebraOfSets(S))
  assert(
    ∀A,B ∈ R ⇒ (A ∩ B) ∈ R
  )
} ↔

proof Algebra_Sets_Closed_Under_Intersection() {
  setVar(S: Set, R: AlgebraOfSets(S), A: Set, B: Set) →
  
  lemma AlgebraProperties() {
    assert(
      (∀X,Y ∈ R ⇒ X ∪ Y ∈ R) ∧  // AS2
      (∀X ∈ R ⇒ S\X ∈ R)         // AS3
    )
  } →

  assume(A ∈ R ∧ B ∈ R) →
  apply(AlgebraProperties()) →
  assert((S\A) ∪ (S\B) ∈ R) →     // By AS2
  
  lemma DeMorganLaw() {
    assert(
      (S\A) ∪ (S\B) = S\(A ∩ B)
    )
  } →
  
  apply(DeMorganLaw()) →
  assert(S\(A ∩ B) ∈ R) →         // By substitution
  apply(AlgebraProperties()) →
  assert((S\(S\(A ∩ B))) ∈ R) →   // By AS3
  assert(A ∩ B ∈ R)               // Double complement
}