theorem Catalan_Identity() {
  assert(
    ∀n,r ∈ ℕ>0 (n > r) ⇒ 
    (Fn²) - (Fn-r × Fn+r) = (-1)^(n-r) × (Fr)²
  )
} ↔

proof Catalan_Identity() {
  setVar(n,r: ℕ>0) →
  let(P(n,r) = ((Fn²) - (Fn-r × Fn+r) = (-1)^(n-r) × (Fr)²)) →
  
  lemma Base_Cases() {
    assert(P(2,1): F2² - F1×F3 = 1² - 2×1 = -1 = -1×F1²) ∧
    assert(P(3,1): F3² - F2×F4 = 2² - 1×3 = 1 = 1×F1²) ∧
    assert(P(3,2): F3² - F1×F5 = 2² - 1×5 = -1 = -1×F2²)
  } →

  lemma First_Induction() {
    setInductionHyp(∀r<n: P(n,r)) →
    assert(r=1 case: 
      (Fn+1)² - Fn×Fn+2 
      = (Fn+1)² - Fn(Fn+1 + Fn)  [by FibDef]
      = (Fn+1)² - FnFn+1 - Fn² 
      = Fn+1(Fn+1 - Fn) - Fn²
      = Fn+1Fn-1 - Fn² 
      = (-1)(Fn² - Fn-1Fn+1)
      = (-1)(-1)^(n-1)F1²
      = (-1)^n F1²
    ) →
    assert(∀r<n: P(n,r) ⇒ P(n+1,r))
  } →

  lemma Second_Induction() {
    setInductionHyp(P(n+1,r)) →
    assert(
      (Fn+1)² - Fn-rFn+r+2
      = (Fn+1)² - Fn-r+1Fn+r+1 + Fn-r+1Fn+r+1 - Fn-rFn+r+2
      = (-1)^(n-r+1)Fr² + Fn-r+1Fn+r+1 - Fn-r(Fn+r + Fn+r+1)
      = (-1)^(n-r+1)Fr² + (Fn-r+1 - Fn-r)Fn+r+1 - Fn-rFn+r
      = (-1)^(n-r)Fr+1²
    ) →
    assert(P(n+1,r) ⇒ P(n+1,r+1))
  } →

  apply(Base_Cases()) →
  apply(First_Induction()) →
  apply(Second_Induction()) →
  conclude(∀n,r: P(n,r))
}