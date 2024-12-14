theorem Abs_Value_Bounded_Function() {
  assert(
    ∀S ∈ Set() ∧
    ∀f: S → ℝ ∧ 
    isBounded(f) ∧
    ∀s ∈ S: |f|(s) = |f(s)| ⇒
    isBounded(|f|)
  )
}

proof Abs_Value_Bounded_Function() {
  setVar(S: Set()) →
  setVar(f: S → ℝ) →
  assert(isBounded(f)) →
  assert(∃M ∈ ℝ≥0: ∀s ∈ S: |f(s)| ≤ M) →
  
  let(s ∈ S) →
  assert(||f|(s)| = |f|(s)) →
  assert(|f|(s) = |f(s)|) →   
  assert(|f(s)| ≤ M) →
  
  conclude(
    ∀s ∈ S: ||f|(s)| ≤ M ⇒
    isBounded(|f|)
  )
}