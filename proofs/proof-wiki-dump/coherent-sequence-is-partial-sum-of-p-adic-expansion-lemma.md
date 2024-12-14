theorem CoherentSequencePartialSum() {
  let(p: Prime)
  let(α[n]: CoherentSequence)
  let(b[j,n]: Sequence, 0 ≤ j ≤ n)
  assert(
    (∀n ∈ ℕ: α[n] = ∑[j=0→n](b[j,n] * p^j)) ∧
    (∀n ∈ ℕ: ∀j ∈ [0,n]: 0 ≤ b[j,n] < p)
  ) →
  assert(
    ∀n ∈ ℕ: α[n] = ∑[i=0→n](b[i,i] * p^i)
  )
} ↔

proof CoherentSequencePartialSum() {
  induction(n: ℕ) {
    base(n = 0) {
      assert(α[0] = b[0,0]) →
      assert(∑[i=0→0](b[i,i] * p^i) = b[0,0])
    } →

    hypothesis(k: ℕ) {
      assert(α[k] = ∑[i=0→k](b[i,i] * p^i))
    } →

    step(k → k+1) {
      lemma CoherentSequenceDifference() {
        assert(∃c[k+1] ∈ ℤ:
          (0 ≤ c[k+1] < p) ∧
          (α[k+1] = c[k+1] * p^(k+1) + α[k])
        )
      } →
      
      apply(hypothesis(k)) →
      assert(α[k+1] = c[k+1] * p^(k+1) + ∑[j=0→k](b[j,j] * p^j)) →

      lemma ZeroPaddedBasis() {
        assert(
          ∀j ∈ [0,k+1]: b[j,k+1] = b[j,j]
        )
      } →

      assert(α[k+1] = ∑[i=0→k+1](b[i,i] * p^i))
    }
  } →
  conclude(∀n ∈ ℕ: α[n] = ∑[i=0→n](b[i,i] * p^i))
}