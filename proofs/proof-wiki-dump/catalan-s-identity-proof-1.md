theorem Catalans_Identity() {
  assert(
    ∀n,r ∈ ℤ ⇒ F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²
  )
} ↔

proof Catalans_Identity() {
  setVar(n,r: ℤ) →
  lemma Fibonacci_Definition() {
    assert(F_1 = 1 ∧ F_2 = 1 ∧ 
           ∀k>2: F_k = F_{k-1} + F_{k-2})
  } →
  
  lemma Honsberger_Identity() {
    assert(∀n,r: F_n = F_{n-r}F_{r-1} + F_{n-r+1}F_r)
  } →
  
  apply(Honsberger_Identity()) →
  assert(F_{n+r} = F_{n-r}F_{2r-1} + F_{n-r+1}F_{2r}) →
  assert(F_{n+r} = F_{n-r}(F_{r-1}² + F_r²) + F_{n-r+1}(F_{r-1}F_r + F_rF_{r+1})) →
  
  apply(Fibonacci_Definition()) →
  assert(F_{n+r} = F_{n-r}(F_{r-1}² + F_r²) + F_{n-r+1}(F_rF_{r-1} + F_r(F_{r-1} + F_r))) →
  assert(F_{n+r} = F_{n-r}(F_{r-1}² + F_r²) + F_{n-r+1}(2F_rF_{r-1} + F_r²)) →
  
  lemma Cassinis_Identity() {
    assert(∀k: F_{k+1}F_{k-1} - F_k² = (-1)^k)
  } →
  
  assert(F_n² - F_{n-r}F_{n+r} = 
         (F_{n-r}F_{r-1} + F_{n-r+1}F_r)² - 
         F_{n-r}(F_{n-r}(F_{r-1}² + F_r²) + F_{n-r+1}(2F_rF_{r-1} + F_r²))) →
  assert(F_n² - F_{n-r}F_{n+r} = 
         F_{n-r+1}²F_r² - (F_{n-r}²F_r² + F_{n-r}F_{n-r+1}F_r²)) →
  assert(F_n² - F_{n-r}F_{n+r} = 
         F_r²(F_{n-r+1}²  - F_{n-r}² - F_{n-r}F_{n-r+1})) →
  
  apply(Cassinis_Identity()) →
  assert(F_n² - F_{n-r}F_{n+r} = (-1)^{n-r}F_r²)
}