theorem Sequence_1_Minus_Reciprocals_Is_Bounded() {
  assert(
    ∀n ∈ ℕ, n ≥ 1 ⇒
    let s_n = 1 - 1/n ⇒
    ∃M,m ∈ ℝ : ∀n ≥ 1, m ≤ s_n ≤ M
  )
} ↔

proof Sequence_1_Minus_Reciprocals_Is_Bounded() {
  setVar(n: ℕ, n ≥ 1) →
  
  lemma Reciprocal_Bounds() {
    assert(n ≥ 1 ⇒ 0 < 1/n ≤ 1)
  } →
  
  apply(Reciprocal_Bounds()) →
  
  assert(0 < 1/n ≤ 1) →
  assert(-1 ≤ -1/n < 0) →
  assert(0 ≤ 1 - 1/n < 1) →
  
  setVar(m = 0, M = 1) →
  
  assert(
    ∀n ≥ 1: 
    m ≤ s_n ≤ M ∧
    m = 0 ∧
    M = 1
  ) →
  
  conclude(
    sequence(s_n) is bounded by definition of bounded sequence
  )
}