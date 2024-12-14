theorem Complex_Cosine_Unbounded() {
  assert(
    ∀K ∈ ℝ_{>0} ∃z ∈ ℂ : |cos(z)| > K
  )
} ↔

proof Complex_Cosine_Unbounded() {
  setVar(K: ℝ_{>0}) →
  setVar(p = ln(2K)) →
  setVar(z = ip) →
  
  assert(
    cos(z) = (exp(i(ip)) + exp(-i(ip)))/2
  ) →
  
  lemma Euler_Cosine() {
    assert(
      cos(z) = (e^{iz} + e^{-iz})/2
    )
  } →
  
  assert(
    cos(z) = (exp(p) + exp(-p))/2
  ) →
  apply(i² = -1) →
  
  assert(
    cos(z) > exp(p)/2
  ) →
  apply(exp(-p) > 0) →
  
  assert(
    cos(z) = exp(ln(2K))/2
  ) →
  apply(exp(ln(x)) = x) →
  
  assert(
    cos(z) = K
  ) →
  
  assert(
    |cos(ip)| > K
  ) →
  
  conclude(
    ∀K ∈ ℝ_{>0} ∃z ∈ ℂ : |cos(z)| > K ↔ cos(z) is unbounded
  )
}