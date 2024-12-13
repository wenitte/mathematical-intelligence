theorem Euler_Phi_Growth() {
  assert(
    ∀ε > 0 ∃N ∈ ℕ ∀n > N →
    [n^(1-ε) < φ(n) < n]
  )
} ↔

proof Euler_Phi_Growth() {
  setVar(ε: ℝ, ε > 0) →
  assert(∀n ∈ ℕ: φ(n) < n) →
  
  lemma Reduction_To_Limit() {
    assert(
      [n^(1-ε) < φ(n)] ↔
      [lim(n→∞) n^(1-ε)/φ(n) = 0]
    )
  } →

  lemma Prime_Power_Reduction() {
    assert(
      [lim(n→∞) n^(1-ε)/φ(n) = 0] ↔
      [lim(p^k→∞) p^(k(1-ε))/φ(p^k) = 0]
    )
  } →

  apply(Euler_Phi_Prime_Power_Formula) {
    assert(φ(p^k) = p^k - p^(k-1))
  } →

  setExpr(ratio := p^(k(1-ε))/φ(p^k)) →
  assert(
    ratio = p^(k(1-ε))/(p^k - p^(k-1)) →
    ratio = (p/(p-1)) * (p^(k(1-ε))/p^k) →
    ratio = (p/(p-1)) * (1/p^(kε))
  ) →

  lemma Prime_Bound() {
    assert(∀p prime: p/(p-1) ≤ 2)
  } →

  apply(Prime_Bound) →
  assert(ratio ≤ 2/p^(kε)) →
  
  assert(
    lim(p^k→∞) p^(k(1-ε))/φ(p^k) ≤ lim(p^k→∞) 2/p^(kε) = 0
  )
}