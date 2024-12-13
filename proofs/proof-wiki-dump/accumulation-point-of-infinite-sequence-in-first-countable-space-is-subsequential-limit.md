theorem AccumulationPoint_SubsequentialLimit() {
  let X: TopologicalSpace where FirstCountable(X)
  let seq: Sequence(X, ℕ)
  let x: Point(X)
  assert(
    IsAccumulationPoint(x, seq) →
    IsSubsequentialLimit(x, seq)
  )
} ↔

proof AccumulationPoint_SubsequentialLimit() {
  setVar(B: LocalBasis(x)) →
  assert(Countable(B)) →
  lemma SurjectionExists() {
    assert(∃φ: ℕ → B where Surjective(φ))
  } →
  apply(SurjectionExists()) →
  
  defineSet(Un, n: ℕ) {
    Un = ⋂{φ(k) | k ∈ [0,n]}
  } →
  assert(∀n: ℕ, IsOpenNeighborhood(Un, x)) →
  
  constructSequence(nk: ℕ → ℕ) {
    base: {
      assert(∃n0: ℕ, seq(n0) ∈ U0) →
      setVar(nk(0) = n0)
    } →
    step: {
      assert(∀k: ℕ,
        ∃m > nk(k),
        (seq(m) ∈ Uk+1) ∧
        (∀j < m, seq(j) ∉ Uk+1)
      ) →
      setVar(nk(k+1) = m)
    }
  } →
  
  lemma SequenceConverges() {
    assert(∀U: OpenSet(X),
      x ∈ U →
      ∃H ∈ B, (H ⊆ U) →
      ∃m: ℕ, (φ(m) = H) →
      ∀k > m, seq(nk(k)) ∈ U
    )
  } →
  
  apply(SequenceConverges()) →
  assert(IsLimit(x, subsequence(seq, nk)))
}