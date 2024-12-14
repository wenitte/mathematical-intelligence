theorem Catalans_Identity() {
  assert(
    ∀n,r ∈ ℕ₊ where n > r ⇒
    F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²
    where F_k is kth Fibonacci number
  )
} ↔

proof Catalans_Identity() {
  // Proof 1 using Honsberger's Identity
  setDef(Fibonacci_Numbers, {F₁=1, F₂=1, F₃=2, F₄=3}) →
  apply(Honsberger_Identity) →
  assert(F_n = F_{n-r}F_{r-1} + F_{n-r+1}F_r) ∧
  assert(F_{n+r} = F_{n-r}F_{2r-1} + F_{n-r+1}F_{2r}) →
  
  expand(F_{n+r}) →
  assert(F_{n+r} = F_{n-r}(F_{r-1}² + F_r²) + F_{n-r+1}(F_{r-1}F_r + F_rF_{r+1})) →
  apply(Fibonacci_Definition) →
  assert(F_{r+1} = F_{r-1} + F_r) →
  
  simplify() →
  assert(F_n² - F_{n-r}F_{n+r} = F_r²(F_{n-r+1}(F_{n-r-1}) - F_{n-r}²)) →
  apply(Cassini_Identity) →
  assert(F_{n-r+1}F_{n-r-1} - F_{n-r}² = (-1)^{n-r}) →
  
  conclude(F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²)
} ∧

proof Catalans_Identity_Inductive() {
  // Proof 2 using induction
  setInductionBase() →
  verify(n=2, r=1): {
    assert(F₂² - F₁F₃ = 1² - 2×1 = -1 = -1×F₁²)
  } ∧
  verify(n=3, r={1,2}): {
    assert(F₃² - F₂F₄ = 2² - 1×3 = 1 = 1×F₁²) ∧
    assert(F₃² - F₁F₅ = 2² - 1×5 = -1 = -1×F₂²)
  } →
  
  setInductionHypothesis() →
  assert(∀r<n: F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²) →
  
  proveInductiveStep() →
  assert(∀r<n: F_{n+1}² - F_{n-r+1}F_{n+r+1} = (-1)^{n-r+1}F_r²) →
  
  apply(Fibonacci_Definition) →
  apply(InductionHypothesis) →
  simplify() →
  
  conclude(F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²)
}