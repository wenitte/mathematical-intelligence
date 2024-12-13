theorem AbelsLimitTheorem() {
  assert(
    ∀{ak: ℝ}(Series(∑_{k=0}^∞ ak) ∧ Convergent(∑_{k=0}^∞ ak)) ⇒
    lim_{x→1^-}(∑_{k=0}^∞ ak*x^k) = ∑_{k=0}^∞ ak
  )
} ↔

proof AbelsLimitTheorem() {
  setVar(ε > 0) →
  setVar(s: ℝ, s = lim(∑_{k=0}^∞ ak)) →
  setVar(sN = ∑_{n=1}^N an) →
  assert(CauchySequence({sN})) →
  
  assert(∃N ∈ ℕ: ∀k,m ∈ ℕ: 
    (k ≥ m ≥ N) ⇒ |∑_{l=m}^k al| < ε/3
  ) →
  
  lemma AbelsLemma() {
    assert(
      ∑_{k=m}^n uk*vk = 
      ∑_{k=m}^{n-1}((∑_{l=m}^k ul)(vk - v_{k+1})) + 
      vn*∑_{k=m}^n uk
    )
  } →
  
  apply(AbelsLemma(), uk := ak, vk := x^k) →
  
  assert(∀n,m ∈ ℕ: n ≥ m ≥ N: ∀x ∈ (0,1):
    |∑_{k=m}^n ak*x^k| < 
    (1-x)*∑_{k=m}^{n-1} (ε/3)*x^k + (ε/3)*x^n
  ) →
  
  assert(|∑_{k=N}^∞ ak*x^k| ≤ ε/3) →
  
  assert(∀x ∈ (0,1):
    |∑_{k=0}^∞ ak*x^k - ∑_{k=0}^∞ ak| ≤
    ∑_{k=0}^{N-1} |an|(1-x^n) + 2ε/3
  ) →
  
  assert(lim_{x→1^-}(∑_{k=0}^{N-1} |an|(1-x^n)) = 0) →
  
  assert(∃δ > 0: ∀x ∈ (1-δ,1):
    ∑_{k=0}^{N-1} |an|(1-x^n) < ε/3
  ) →
  
  assert(∀ε > 0: ∃δ > 0: ∀x ∈ (1-δ,1):
    |∑_{k=0}^∞ ak*x^k - ∑_{k=0}^∞ ak| < ε
  ) →
  
  conclude(
    lim_{x→1^-}(∑_{k=0}^∞ ak*x^k) = ∑_{k=0}^∞ ak
  )
}