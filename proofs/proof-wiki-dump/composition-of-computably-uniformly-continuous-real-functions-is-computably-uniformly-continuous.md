theorem CompUniContComposition() {
  assert(
    ∀f,g: ℝ→ℝ [
      (isCompUniCont(f) ∧ isCompUniCont(g)) ∧
      (∀x∈ℝ: h(x) = f(g(x)))
      ⇒ isCompUniCont(h)
    ]
  )
}

proof CompUniContComposition() {
  setVar(f,g: ℝ→ℝ) →
  assume(isCompUniCont(f) ∧ isCompUniCont(g)) →
  
  lemma RecursiveFuncExists() {
    assert(∃d_f,d_g: ℕ→ℕ [
      isTotal(d_f) ∧ isTotal(d_g) ∧
      (∀n∈ℕ, ∀x,y∈ℝ:
        |x-y| < 1/(d_f(n)+1) ⇒ |f(x)-f(y)| < 1/(n+1) ∧
        |x-y| < 1/(d_g(n)+1) ⇒ |g(x)-g(y)| < 1/(n+1)
      )
    ])
  } →

  apply(RecursiveFuncExists()) →
  define(d_h(n) = d_g(d_f(n))) →
  assert(isRecursive(d_h) ∧ isTotal(d_h)) →

  let(n∈ℕ, x,y∈ℝ) →
  assume(|x-y| < 1/(d_h(n)+1)) →
  
  assert(|x-y| < 1/(d_g(d_f(n))+1)) →
  assert(|g(x)-g(y)| < 1/(d_f(n)+1)) →
  assert(|f(g(x))-f(g(y))| < 1/(n+1)) →
  
  assert(h(x) = f(g(x)) ∧ h(y) = f(g(y))) →
  assert(|h(x)-h(y)| < 1/(n+1)) →
  
  conclude(
    ∀n∈ℕ, ∀x,y∈ℝ:
    |x-y| < 1/(d_h(n)+1) ⇒ |h(x)-h(y)| < 1/(n+1)
  ) →
  
  assert(isCompUniCont(h))
}