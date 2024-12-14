theorem Commensurability_Transitive() {
  assert(
    ∀A,B,C ∈ Magnitudes ⇒
    (isCommensurable(A,C) ∧ isCommensurable(B,C)) →
    isCommensurable(A,B)
  )
} ↔

proof Commensurability_Transitive() {
  setVar(A,B,C: Magnitudes) →
  assume(isCommensurable(A,C) ∧ isCommensurable(B,C)) →
  
  lemma Ratio_Of_Commensurable_1() {
    assert(
      isCommensurable(A,C) →
      ∃D,E ∈ ℕ ⇒ ratio(A,C) = ratio(D,E)
    )
  } →

  lemma Ratio_Of_Commensurable_2() {
    assert(
      isCommensurable(C,B) →
      ∃F,G ∈ ℕ ⇒ ratio(C,B) = ratio(F,G)
    )
  } →

  apply(Construction_Of_Sequence()) →
  setVar(H,K,L: ℕ) →
  assert(ratio(D,E) = ratio(H,K)) →
  assert(ratio(F,G) = ratio(K,L)) →

  apply(Equality_Of_Ratios_Transitive()) →
  assert(ratio(A,C) = ratio(H,K)) →
  assert(ratio(C,B) = ratio(K,L)) →

  apply(Equality_Of_Ratios_Ex_Aequali()) →
  assert(ratio(A,B) = ratio(H,L)) →

  lemma Magnitudes_With_Rational_Ratio() {
    assert(
      ∀X,Y ∈ Magnitudes ⇒
      (∃m,n ∈ ℕ ⇒ ratio(X,Y) = ratio(m,n)) →
      isCommensurable(X,Y)
    )
  } →

  apply(Magnitudes_With_Rational_Ratio()) →
  assert(isCommensurable(A,B))
}