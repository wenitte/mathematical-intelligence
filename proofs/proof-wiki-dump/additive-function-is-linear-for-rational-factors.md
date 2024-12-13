theorem Additive_Function_Linear_Rational() {
  assert(
    ∀f: (ℝ → ℝ) ∧ isAdditive(f) →
    ∀r ∈ ℚ, x ∈ ℝ: f(rx) = rf(x)
  )
}

proof Additive_Function_Linear_Rational() {
  setVar(f: ℝ → ℝ, isAdditive(f)) →
  
  assert(∀x ∈ ℝ: f(1·x) = 1·f(x)) →
  
  lemma Natural_Numbers() {
    assert(∀n ∈ ℕ: [f((n+1)x) = f(nx + x)]) →
    apply(isAdditive(f)) →
    assert(f(nx + x) = f(nx) + f(x)) →
    apply(induction_hypothesis) →
    assert(f(nx) + f(x) = n·f(x) + f(x) = (n+1)·f(x))
  } →
  
  apply(Mathematical_Induction, Natural_Numbers()) →
  assert(∀n ∈ ℕ, x ∈ ℝ: f(nx) = n·f(x)) →
  
  lemma Odd_Function() {
    apply(Additive_Function_Is_Odd) →
    apply(Odd_Function_Zero_Is_Zero) →
    assert(∀p ∈ ℤ, x ∈ ℝ: f(px) = p·f(x))
  } →
  
  lemma Rational_Quotients() {
    setVar(p ∈ ℤ\{0}, y ∈ ℝ) →
    substitute(y = px) →
    assert(f(y) = p·f(y/p)) →
    assert(f(y/p) = (1/p)·f(y)) →
    
    setVar(p,q ∈ ℤ, q ≠ 0) →
    assert(f((p/q)x) = f(p(x/q))) →
    apply(Odd_Function()) →
    assert(f(p(x/q)) = p·f(x/q)) →
    assert(p·f(x/q) = p·(1/q)·f(x)) →
    assert(p·(1/q)·f(x) = (p/q)·f(x))
  } →
  
  apply(Rational_Quotients()) →
  assert(∀r ∈ ℚ, x ∈ ℝ: f(rx) = r·f(x))
}