theorem BoundedFunctionMinimum() {
  assert(
    ∀S: Set ∧ ∀f,g: S → ℝ ∧ isBounded(f) ∧ isBounded(g) ⇒
    let(f∧g := λs∈S. min{f(s), g(s)}) ⇒
    isBounded(f∧g)
  )
}

proof BoundedFunctionMinimum() {
  setVar(S: Set, f,g: S → ℝ) →
  assume(isBounded(f) ∧ isBounded(g)) →
  assert(∃Mf ∈ ℝ≥0: ∀s∈S: |f(s)| ≤ Mf) →
  assert(∃Mg ∈ ℝ≥0: ∀s∈S: |g(s)| ≤ Mg) →
  
  lemma NegAbsValue() {
    assert(∀s∈S: f(s) ≤ |f(s)| ∧ g(s) ≤ |g(s)|)
  } →
  
  setVar(M := min{Mf, Mg}) →
  
  assert(
    ∀s∈S: |(f∧g)(s)| = 
    |min{f(s), g(s)}| =
    min{|f(s)|, |g(s)|} ≤
    min{Mf, Mg} =
    |M| = 
    M
  ) →
  
  conclude(isBounded(f∧g))
}