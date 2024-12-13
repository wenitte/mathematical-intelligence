theorem BeattysTheorem() {
  assert(
    ∀r,s ∈ ℝ\ℚ: (r > 1 ∧ s > 1) →
    let Br = {⌊nr⌋: n ∈ ℤ+} ∧
    let Bs = {⌊ns⌋: n ∈ ℤ+} →
    (Br,Bs are complementary ↔ 1/r + 1/s = 1)
  )
}

proof BeattysTheorem() {
  setVar(r,s: ℝ\ℚ) →
  assert(1/r + 1/s = 1) →
  assert(s = r/(r-1)) →

  lemma NoCollisions() {
    assume(∃j,k,m ∈ ℤ+: ⌊kr⌋ = j = ⌊ms⌋) →
    assert(r/s = j/k) ∧ 
    assert(r/s = r-1) →
    contradiction(r/s rational ∧ r/s irrational) →
    conclude(¬∃j,k,m ∈ ℤ+: ⌊kr⌋ = ⌊ms⌋)
  } →

  lemma PositionCounting() {
    setVar(j: ℤ+) →
    assert(
      position(j/r) = j + ⌊js/r⌋ →
      j + ⌊js/r⌋ = j + ⌊j(s-1)⌋ = ⌊js⌋
    )
  } →

  lemma NoGaps() {
    assume(∃j>0,k,m ∈ ℤ+: kr < j ∧ (k+1)r > j+1 ∧ ms < j ∧ (m+1)s > j+1) →
    assert(k < j/r ∧ (j+1)/r < k+1) →
    assert(m < j/s ∧ (j+1)/s < m+1) →
    assert(k + m < j < k + m + 1) →
    contradiction(integer between consecutive integers) →
    conclude(no gaps exist between sequences)
  } →

  apply(NoCollisions()) →
  apply(PositionCounting()) →
  apply(NoGaps()) →
  
  assert(
    ∀n ∈ ℤ+: n appears exactly once in Br ∪ Bs
  )
}