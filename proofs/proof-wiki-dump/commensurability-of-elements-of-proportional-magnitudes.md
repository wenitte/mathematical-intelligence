theorem Proportional_Magnitudes_Commensurability() {
  assert(
    ∀A,B,C,D ∈ Magnitudes,
    (A:B = C:D) ∧
    ((isCommensurable(A,B) → isCommensurable(C,D)) ∧
     (isIncommensurable(A,B) → isIncommensurable(C,D)))
  )
} ↔

proof Proportional_Magnitudes_Commensurability() {
  setVar(A,B,C,D: Magnitudes) →
  assume(A:B = C:D) →
  
  // First part: Commensurable case
  branch_1 {
    assume(isCommensurable(A,B)) →
    lemma Ratio_Of_Commensurable() {
      assert(isCommensurable(A,B) → ∃m,n ∈ ℕ, A:B = m:n)
    } →
    apply(Ratio_Of_Commensurable()) →
    assert(∃m,n ∈ ℕ, A:B = m:n) →
    assert(C:D = m:n) →
    lemma Rational_Ratio_Commensurable() {
      assert(∀X,Y(∃p,q ∈ ℕ, X:Y = p:q) → isCommensurable(X,Y))
    } →
    apply(Rational_Ratio_Commensurable()) →
    assert(isCommensurable(C,D))
  } ∧

  // Second part: Incommensurable case
  branch_2 {
    assume(isIncommensurable(A,B)) →
    lemma Incommensurable_Irrational_Ratio() {
      assert(isIncommensurable(A,B) → ¬∃m,n ∈ ℕ, A:B = m:n)
    } →
    apply(Incommensurable_Irrational_Ratio()) →
    assert(¬∃m,n ∈ ℕ, A:B = m:n) →
    assert(¬∃m,n ∈ ℕ, C:D = m:n) →
    lemma Irrational_Ratio_Incommensurable() {
      assert(¬∃m,n ∈ ℕ, X:Y = m:n → isIncommensurable(X,Y))
    } →
    apply(Irrational_Ratio_Incommensurable()) →
    assert(isIncommensurable(C,D))
  }
}