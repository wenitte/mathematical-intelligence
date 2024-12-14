theorem CompositionOfComputableRealFunctions() {
  assert(
    ∀f,g: ℝ → ℝ ⇒ 
    (isComputable(f) ∧ isComputable(g)) ∧
    (h: ℝ → ℝ) ∧ 
    (∀x ∈ ℝ, h(x) = f(g(x))) ⇒
    isComputable(h)
  )
} ↔

proof CompositionOfComputableRealFunctions() {
  setVar(f,g: ℝ → ℝ) →
  assume(isComputable(f) ∧ isComputable(g)) →
  setVar(h: ℝ → ℝ) →
  define(h(x) = f(g(x))) →
  
  lemma SequentiallyComputable() {
    assert(
      isSequentiallyComputable(f) ∧ 
      isSequentiallyComputable(g) ⇒
      isSequentiallyComputable(h)
    )
  } →
  
  lemma UniformlyContinuous() {
    assert(
      isComputableUniformlyContinuous(f) ∧ 
      isComputableUniformlyContinuous(g) ⇒
      isComputableUniformlyContinuous(h)
    )
  } →
  
  apply(SequentiallyComputable()) →
  apply(UniformlyContinuous()) →
  conclude(isComputable(h))
}