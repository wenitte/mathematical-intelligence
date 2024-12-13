theorem PAdicSeriesConvergence() {
  assert(
    ∀p ∈ Primes, k ∈ ℕ ⇒ 
    (∑_{j=0}^∞ p^{jk} = 1/(1-p^k)) in Qₚ
  )
} ↔

proof PAdicSeriesConvergence() {
  setVar(p: Prime, k: ℕ) →
  define(Sₙ := ∑_{j=0}^n p^{jk}) →
  
  lemma PartialSumIdentity() {
    assert((1-p^k)Sₙ = 1-p^{(n+1)k}) →
    proof {
      assert((1-p^k)Sₙ = (1-p^k)(∑_{j=0}^n p^{jk})) →
      assert(= (∑_{j=0}^n p^{jk}) - p^k(∑_{j=0}^n p^{jk})) →
      assert(= (∑_{j=0}^n p^{jk}) - (∑_{j=0}^n p^{(j+1)k})) →
      assert(= 1 - p^{(n+1)k})  # by telescoping
    }
  } →

  lemma NormConvergence() {
    assert(‖(1-p^k)Sₙ - 1‖ₚ = ‖p^{(n+1)k}‖ₚ) →
    proof {
      assert(‖(1-p^k)Sₙ - 1‖ₚ = ‖-p^{(n+1)k}‖ₚ) →
      assert(= ‖p^{(n+1)k}‖ₚ)  # by norm properties →
      assert(= 1/p^{(n+1)k})   # by p-adic norm definition →
      assert(→ 0 as n→∞)
    }
  } →

  apply(PartialSumIdentity()) →
  apply(NormConvergence()) →
  assert(lim_{n→∞}(1-p^k)Sₙ = 1) →
  assert(lim_{n→∞}Sₙ = 1/(1-p^k)) →
  assert(∑_{j=0}^∞ p^{jk} = 1/(1-p^k))  # by series definition
}