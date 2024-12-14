theorem Complex_Cosine_Unbounded() {
  assert(
    ∀K ∈ ℝ₊ ∃z ∈ ℂ: |cos(z)| > K
  )
} ↔

proof Complex_Cosine_Unbounded_Direct() {
  setVar(K: ℝ₊) →
  let(p = ln(2K)) →
  let(z = ip) →
  
  assert(cos(z) = (exp(iz) + exp(-iz))/2) →  // Euler's Cosine Identity
  assert(cos(z) = (exp(i(ip)) + exp(-i(ip)))/2) →
  assert(cos(z) = (exp(p) + exp(-p))/2) →  // i² = -1
  assert(cos(z) > exp(p)/2) →  // exp(-p) > 0
  assert(cos(z) = exp(ln(2K))/2) →
  assert(cos(z) = K) →
  assert(|cos(ip)| > K) →
  conclude()
}

proof Complex_Cosine_Unbounded_Contradiction() {
  assume(∃M ∈ ℝ₊: ∀z ∈ ℂ |cos(z)| ≤ M) →
  
  lemma Cos_Entire() {
    assert(cos: ℂ → ℂ is entire)
  } →
  
  apply(Liouville_Theorem) →
  assert(cos is constant) →
  
  assert(cos(0) = 1) →
  assert(cos(π/2) = 0) →
  assert(cos(0) ≠ cos(π/2)) →
  assert(contradiction: cos is not constant) →
  
  conclude(¬(cos is bounded)) →
  assert(cos is unbounded)
}