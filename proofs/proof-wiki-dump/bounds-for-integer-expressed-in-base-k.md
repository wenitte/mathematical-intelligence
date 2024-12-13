theorem Bounds_For_Integer_Base_k() {
  let(n: ℤ, k: ℤ, s: ℤ) →
  assert(k ≥ 2) ∧
  assert(n = ∑[j=1→s](aⱼ × k^j)) ∧
  assert(∀j ∈ [1,s]: aⱼ ∈ {0,1,...,k-1}) →
  assert(0 ≤ n < k^(s+1))
} ↔

proof Bounds_For_Integer_Base_k() {
  // Lower bound proof
  assert(∀j ∈ [1,s]: aⱼ ≥ 0) →
  assert(∑[j=1→s](aⱼ × k^j) ≥ 0) →
  conclude(0 ≤ n) →
  
  // Upper bound proof
  assert(∀j ∈ [1,s]: aⱼ ≤ k-1) →
  step1: {
    n = ∑[j=1→s](aⱼ × k^j) →
    n ≤ (k-1)∑[j=1→s](k^j)
  } →
  
  lemma Geometric_Sum() {
    assert(∑[j=1→s](k^j) = (k^(s+1) - 1)/(k-1))
  } →
  
  apply(Geometric_Sum()) →
  step2: {
    n ≤ (k-1)((k^(s+1) - 1)/(k-1)) →
    n ≤ k^(s+1) - 1 →
    n < k^(s+1)
  } →
  
  conclude(0 ≤ n < k^(s+1))
}