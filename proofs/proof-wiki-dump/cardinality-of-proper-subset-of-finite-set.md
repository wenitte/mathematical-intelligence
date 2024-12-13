theorem Cardinality_Proper_Subset_Finite() {
  assert(
    ∀A,B: Set[T] ∧ Finite(B) ∧ (A ⊂ B) ∧ (|B| = n) →
    |A| < n
  )
} ↔

proof Cardinality_Proper_Subset_Finite() {
  setVar(S: {n ∈ ℕ | ∀X,Y: Set[T], |X| = n ∧ Y ⊂ X → |Y| < n}) →
  
  lemma Base_Case() {
    assert(0 ∈ S) ↔
    proof {
      assert(|B| = 0 → B = ∅) →
      assert(¬∃A: A ⊂ ∅) →
      conclude(0 ∈ S)
    }
  } →

  lemma Inductive_Step() {
    setVar(k: ℕ, k ≥ 0) →
    assume(k ∈ S) →
    assert(
      ∀B: |B| = k+1 ∧ ∀A: A ⊂ B →
      ∃b ∈ B: b ∉ A
    ) →
    assert(A ⊆ B\{b}) →
    assert(|B\{b}| = k) →
    
    cases {
      case A = B\{b}: 
        assert(|A| = k < k+1)
      case A ⊂ B\{b}:
        apply(Induction_Hypothesis) →
        assert(|A| < k < k+1)
    } →
    
    conclude(k+1 ∈ S)
  } →

  apply(Mathematical_Induction(Base_Case(), Inductive_Step())) →
  assert(∀n ∈ ℕ: n ∈ S) →
  conclude(∀A,B: Set[T], A ⊂ B ∧ |B| = n → |A| < n)
}