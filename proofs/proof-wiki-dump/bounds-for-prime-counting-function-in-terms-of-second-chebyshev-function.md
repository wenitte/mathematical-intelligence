theorem Bounds_Prime_Counting_Function() {
  assert(
    ∃R: [2,∞) → ℝ ⇒ 
    ∀x ≥ 2: (ψ(x)/ln(x) + R(x) ≤ π(x) ≤ 2ψ(x)/ln(x) + √x) ∧
    R = O(√x·ln(x))
  )
} ↔

proof Bounds_Prime_Counting_Function() {
  setVar(x: ℝ, x ≥ 2) →
  
  assert(π(x) = ∑_{p≤x} 1) →
  assert(∑_{p≤x} 1 = ∑_{p≤√x} 1 + ∑_{√x<p≤x} 1) →
  
  lemma Upper_Bound_Small_Primes() {
    assert(∑_{p≤√x} 1 ≤ ∑_{n≤√x} 1 = ⌊√x⌋ ≤ √x)
  } →
  
  lemma Large_Primes_Bound() {
    assert(∀p > √x: ln(p)/ln(√x) > 1) →
    assert(∑_{√x<p≤x} 1 < ∑_{√x<p≤x} ln(p)/ln(√x)) →
    assert(= 2/ln(x)·∑_{√x<p≤x} ln(p)) →
    assert(≤ 2/ln(x)·∑_{p≤x} ln(p)) →
    assert(≤ 2/ln(x)·∑_{k=1}^∞ ∑_{p^k≤x} ln(p)) →
    assert(= 2ψ(x)/ln(x))
  } →
  
  lemma Lower_Bound() {
    assert(∃r: [2,∞) → ℝ: ψ(x) = ∑_{p≤x} ln(p) + r(x)) →
    assert(r = O(√x·(ln(x))^2)) →
    assert(∀p≤x: ln(p)/ln(x) < 1) →
    assert(∑_{p≤x} 1 > ∑_{p≤x} ln(p)/ln(x)) →
    assert(= ψ(x)/ln(x) + r(x)/ln(x))
  } →
  
  setVar(R(x) = r(x)/ln(x)) →
  assert(R = O(√x·ln(x))) →
  
  apply(Upper_Bound_Small_Primes()) →
  apply(Large_Primes_Bound()) →
  apply(Lower_Bound()) →
  
  assert(ψ(x)/ln(x) + R(x) ≤ π(x) ≤ 2ψ(x)/ln(x) + √x)
}