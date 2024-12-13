theorem Alternating_Series_Test() {
  assert(
    ∀{an}n≥0 ∈ ℝ ⇒ (
      (∀n ∈ ℕ: an ≥ 0) ∧
      (∀n ∈ ℕ: an+1 ≤ an) ∧
      (lim[n→∞] an = 0)
    ) →
    converges(∑[n=1→∞] (-1)^(n-1) an)
  )
} ↔

proof Alternating_Series_Test() {
  lemma Partial_Sum_Bound() {
    setVar(n,m: ℕ) →
    assert(n > m → |∑[k=m+1→n] (-1)^k ak| ≤ am+1)
  } →

  setVar({sn}: sequence_of_partial_sums) →
  setVar(ϵ > 0) →
  
  assert(lim[n→∞] an = 0) →
  assert(∃N ∈ ℕ: ∀n > N: an < ϵ) →
  
  setVar(n,m: ℕ, n > m > N) →
  assert(
    |sn - sm| = 
    |∑[k=m+1→n] (-1)^(k-1) ak|
  ) →
  
  apply(Partial_Sum_Bound()) →
  assert(|sn - sm| ≤ am+1) →
  assert(am+1 < ϵ) →
  assert(|sn - sm| < ϵ) →
  
  conclude(is_Cauchy_sequence({sn})) →
  apply(Cauchy_Sequence_Convergence_Theorem()) →
  conclude(converges(∑[n=1→∞] (-1)^(n-1) an))
}