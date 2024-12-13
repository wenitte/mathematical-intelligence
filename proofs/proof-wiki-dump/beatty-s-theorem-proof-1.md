theorem BeattysTheorem() {
  setVar(r,s: ℝ\ℚ) →
  assert(r > 1 ∧ s > 1) →
  define(Bᵣ := {⌊nr⌋: n ∈ ℤ₊}) →
  define(Bₛ := {⌊ns⌋: n ∈ ℤ₊}) →
  assert(
    (Bᵣ,Bₛ are complementary) ↔ (1/r + 1/s = 1)
  )
}

proof BeattysTheorem() {
  assume(1/r + 1/s = 1) →
  assert(s = r/(r-1)) →
  
  lemma NoOverlap() {
    assume(∃j,k ∈ ℤ₊: j/r = k/s) →
    assert(r/s = j/k) →
    assert(r/s = r(1 - 1/r) = r - 1) →
    assert(j/k ∈ ℚ ∧ (r-1) ∉ ℚ) →
    conclude(contradiction)
  } →

  lemma PositionAnalysis() {
    setVar(j: ℤ₊) →
    define(nums_leq_j_over_r := {i/r: i ≤ j}) →
    define(nums_leq_j_over_s := {k/s: k ≤ ⌊js/r⌋}) →
    assert(|nums_leq_j_over_r| = j) →
    assert(|nums_leq_j_over_s| = ⌊js/r⌋) →
    assert(position(j/r) = j + ⌊js/r⌋) →
    assert(j + ⌊js/r⌋ = j + ⌊j(s-1)⌋ = ⌊js⌋)
  } →

  lemma CompleteCoverage() {
    setVar(n: ℤ₊) →
    assert(∀n ∈ ℤ₊: (n = ⌊mr⌋ ∨ n = ⌊ks⌋) for some m,k ∈ ℤ₊) →
    assert(∀n ∈ ℤ₊: ¬(n = ⌊mr⌋ ∧ n = ⌊ks⌋) for any m,k ∈ ℤ₊)
  } →

  apply(NoOverlap()) →
  apply(PositionAnalysis()) →
  apply(CompleteCoverage()) →
  conclude(Bᵣ,Bₛ are complementary)
}