theorem Bolzano_Weierstrass() {
  assert(
    ∀S: Sequence(ℝ) ∧ bounded(S) ⇒ 
    ∃T: Subsequence(S) ∧ convergent(T)
  )
} ↔

proof Bolzano_Weierstrass() {
  setVar(S: Sequence(ℝ)) →
  assume(bounded(S)) →
  
  lemma Peak_Point() {
    assert(
      ∀S: Sequence(ℝ) ⇒ 
      ∃T: Subsequence(S) ∧ monotone(T)
    )
  } →
  
  apply(Peak_Point()) →
  assert(∃T: Subsequence(S) ∧ monotone(T)) →
  
  lemma Bounded_Subsequence() {
    assert(
      bounded(S) ∧ T ⊆ S ⇒ bounded(T)
    )
  } →
  
  apply(Bounded_Subsequence()) →
  assert(bounded(T)) →
  
  lemma Monotone_Convergence() {
    assert(
      ∀T: Sequence(ℝ) ∧ bounded(T) ∧ monotone(T) ⇒
      convergent(T)
    )
  } →
  
  apply(Monotone_Convergence()) →
  assert(convergent(T)) →
  assert(∃T: Subsequence(S) ∧ convergent(T))
}