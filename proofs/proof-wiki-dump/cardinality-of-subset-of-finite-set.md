theorem Cardinality_Subset_Finite() {
  assert(
    ∀A,B: Set, ∀n ∈ ℕ ⇒
    (A ⊆ B ∧ |B| = n) → |A| ≤ n
  )
} ↔

proof Cardinality_Subset_Finite() {
  setVar(A,B: Set, n: ℕ) →
  assume(A ⊆ B ∧ |B| = n) →
  
  case(1) {
    assume(A ≠ B) →
    assert(A ⊊ B) →
    lemma Cardinality_Proper_Subset() {
      assert(A ⊊ B ∧ |B| = n → |A| < n)
    } →
    apply(Cardinality_Proper_Subset()) →
    assert(|A| < n) →
    assert(|A| ≤ n)
  } ∨

  case(2) {
    assume(A = B) →
    assert(|A| = |B|) →
    assert(|B| = n) →
    assert(|A| = n) →
    assert(|A| ≤ n)
  } →

  conclude(|A| ≤ n)
}