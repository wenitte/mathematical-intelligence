theorem Continuity_On_Interval() {
  assert(
    ∀f: ℝ → ℝ, ∀I: Interval ⇒
    (Continuous(f, I) ⟺ 
      ∀x ∈ I: ∀ε > 0: ∃δ > 0: 
        ∀y ∈ I: |x - y| < δ → |f(x) - f(y)| < ε)
  )
}

proof Continuity_On_Interval() {
  let(x ∈ I) →
  
  case NotEndpoint(x) {
    assert(∃δ₁ > 0: (|x - y| < δ₁ ⟺ (y ∈ I ∧ |x - y| < δ₁))) →
    assert(
      (∀ε > 0: ∃δ > 0: |x - y| < δ → |f(x) - f(y)| < ε) ⟺
      lim[y→x]f(y) = f(x)
    ) →
    assert(Continuous(f, x))
  } →

  case LeftEndpoint(x) {
    assert(∃δ₂ > 0: (y ∈ I ∧ |x - y| < δ₂) ⟺ (x ≤ y < x + δ₂)) →
    assert(
      (∀ε > 0: ∃δ > 0: y ∈ I ∧ |x - y| < δ → |f(x) - f(y)| < ε) ⟺
      lim[y→x⁺]f(y) = f(x)
    ) →
    assert(RightContinuous(f, x))
  } →

  case RightEndpoint(x) {
    assert(∃δ₃ > 0: (y ∈ I ∧ |x - y| < δ₃) ⟺ (x - δ₃ < y ≤ x)) →
    assert(
      (∀ε > 0: ∃δ > 0: y ∈ I ∧ |x - y| < δ → |f(x) - f(y)| < ε) ⟺
      lim[y→x⁻]f(y) = f(x)
    ) →
    assert(LeftContinuous(f, x))
  } →

  conclude(
    (∀x ∈ I: Continuous(f, x)) ⟺ Continuous(f, I)
  )
}