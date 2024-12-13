theorem Accumulation_Point_Reciprocal_Sequence() {
  let R = TopologicalSpace(ℝ, τ_euclidean)
  let sequence a_n = {
    when n is odd: 2/(n+1)
    when n is even: 1 + 2/n
  }
  assert(
    0 is_accumulation_point_of sequence(a_n)
  )
} ↔

proof Accumulation_Point_Reciprocal_Sequence() {
  setVar(ε: ℝ>0) →
  let I = openInterval(-ε, ε) →
  assert(0 ∈ I) →
  
  lemma Elements_In_Interval() {
    setVar(m: ℕ) →
    assert(
      ∀n ∈ ℕ: n ≥ m →
      0 < 1/n < ε
    )
  } →
  
  lemma Infinite_Terms() {
    assert(
      ∀ε > 0 →
      ∃S ⊆ sequence(a_n): 
        |S| = ℵ₀ ∧
        ∀x ∈ S: x ∈ openInterval(-ε, ε)
    )
  } →
  
  apply(Elements_In_Interval()) →
  apply(Infinite_Terms()) →
  
  assert(
    ∀ε > 0 →
    ∃infinitely_many n: a_n ∈ openInterval(-ε, ε)
  ) →
  
  conclude(
    0 is_accumulation_point_of sequence(a_n)
  )
}