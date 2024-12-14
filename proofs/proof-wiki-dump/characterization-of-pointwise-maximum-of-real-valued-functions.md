theorem PointwiseMaximum_Characterization() {
  assert(
    ∀S ∀f,g: S → ℝ ⇒
    (f ∨ g = (1/2)(f + g + |f - g|)) ∧
    (∀s ∈ S: (f ∨ g)(s) = max{f(s), g(s)})
  )
} ↔

proof PointwiseMaximum_Characterization() {
  setVar(S: Set, f,g: S → ℝ) →
  
  lemma PointwiseEquality() {
    assert(∀s ∈ S: 
      (f ∨ g)(s) = max{f(s), g(s)} ↔
      max{f(s), g(s)} = (1/2)(f(s) + g(s) + |f(s) - g(s)|)
    )
  } →

  ∀s ∈ S: {
    assert((f ∨ g)(s) = max{f(s), g(s)}) →
    assert(max{f(s), g(s)} = (1/2)(f(s) + g(s) + |f(s) - g(s)|)) →
    assert((1/2)(f(s) + g(s) + |f(s) - g(s)|) = 
           (1/2)(f + g + |f - g|)(s)) →
    apply(PointwiseEquality())
  } →

  assert(∀s ∈ S: (f ∨ g)(s) = (1/2)(f + g + |f - g|)(s)) →
  assert(f ∨ g = (1/2)(f + g + |f - g|))
}