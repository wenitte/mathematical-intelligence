theorem AbelsGeneralisation() {
  assert(
    ∀n ∈ ℤ≥0, ∀x ∈ ℝ\{0}, ∀y,z ∈ ℝ ⇒ 
    (x + y)^n = ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k)
  )
}

proof AbelsGeneralisation() {
  setVar(n: ℤ≥0, x: ℝ\{0}, y,z: ℝ) →
  
  # Substitution step
  assert(y = (x + y) - x) →
  
  # Initial expansion
  assert((x + y)^n = (x + ((x + y) - x))^n) →
  
  # Expand RHS in powers of (x + y)
  assert(
    ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k) = 
    ∑_k (n choose k)x(x - kz)^(k-1)(x + (x + y) + kz)^(n-k)
  ) →
  
  # Binomial expansion of inner term
  assert(
    RHS = ∑_k (n choose k)x(x - kz)^(k-1) ∑_j (x + y)^j(-x + kz)^(n-k-j)(n-k choose j)
  ) →
  
  # Rearrange summation
  assert(
    RHS = ∑_j (n choose j)(x + y)^j ∑_k (n-j choose n-j-k)x(x - kz)^(k-1)(-x + kz)^(n-k-j)
  ) →
  
  # Final simplification
  assert(
    RHS = ∑_{j≤n} (n choose j)(x + y)^j 0^(n-j)
  ) →
  
  # Apply Binomial Theorem
  assert(RHS = (x + y)^n)
}

lemma SpecialCase() {
  assert(
    ∀n ∈ ℤ≥0, ∀x ∈ ℝ\{0}, ∀z ∈ ℝ ⇒
    (x + y = 0) → AbelsGeneralisation() holds
  )
}

lemma NegativeN() {
  assert(
    ∀n ∈ ℤ<0 ⇒ AbelsGeneralisation() does not hold
  )
}