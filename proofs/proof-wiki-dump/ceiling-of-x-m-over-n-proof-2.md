theorem Ceiling_X_Plus_M_Over_N() {
  assert(
    ∀m,n ∈ ℤ ∧ n > 0 ∧ ∀x ∈ ℝ ⇒
    ⌈(x + m)/n⌉ = ⌈(⌈x⌉ + m)/n⌉
  )
} ↔

proof Ceiling_X_Plus_M_Over_N() {
  setFun(f: ℝ → ℝ, f(x) = (x + m)/n) →
  assert(f is strictly_increasing ∧ continuous on ℝ) →
  
  lemma Divisibility_Implication() {
    assume((x + m)/n ∈ ℤ) →
    setVar(s ∈ ℤ) →
    assert((x + m)/n = s) →
    assert(x + m = ns) →
    assert(x = ns - m) →
    conclude(x ∈ ℤ)
  } →
  
  assert(∀x ∈ ℝ: f(x) ∈ ℤ ⇒ x ∈ ℤ) →
  
  lemma McEliece_Integer_Functions() {
    assert(
      ∀f: ℝ → ℝ, ∀x ∈ ℝ:
      (f(x) ∈ ℤ ⇒ x ∈ ℤ) ⇔ ⌈f(x)⌉ = ⌈f(⌈x⌉)⌉
    )
  } →
  
  apply(McEliece_Integer_Functions()) →
  substitute(f(x) = (x + m)/n) →
  conclude(⌈(x + m)/n⌉ = ⌈(⌈x⌉ + m)/n⌉)
}