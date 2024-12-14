theorem EulerCharacterization() {
  assert(
    ∀a ∈ ℝ₊ → [a = e ↔ (∀x ∈ ℝ → a^x ≥ x + 1)]
  )
}

proof EulerCharacterization() {
  // Forward direction already proven elsewhere
  
  // Reverse direction
  setVar(fa(x) = a^x - x - 1) →
  setVar(fa'(x) = a^x ln(a) - 1) →
  setVar(fa''(x) = a^x (ln(a))²) →

  case1(0 < a ≤ 1) {
    setVar(x = 1) →
    assert(fa(1) = a - 2) →
    assert(a ≤ 1) →
    assert(fa(1) ≤ -1 < 0) →
    conclude(¬(∀x ∈ ℝ → fa(x) ≥ 0))
  }

  case2(a > 1) {
    assert(ln(a) > 0) →
    assert((ln(a))² > 0) →
    assert(∀x ∈ ℝ → a^x > 0) →
    assert(∀x ∈ ℝ → fa''(x) > 0) →
    apply(StrictlyConvexFunction) →
    
    // Find minimum
    solve(fa'(x) = 0) {
      assert(a^x ln(a) = 1) →
      assert(x = -loga(ln(a)))
    } →
    
    setVar(min = fa(-loga(ln(a)))) →
    assert(min = (1 + ln(ln(a)))/(ln(a)) - 1) →
    
    lemma MinimumAtE() {
      assert(a = e → min = 0) ∧
      assert(a ≠ e → min < 0)
    } →
    
    apply(MinimumAtE) →
    conclude(a = e)
  }

  conclude(∀a ∈ ℝ₊ → [a = e ↔ (∀x ∈ ℝ → a^x ≥ x + 1)])
}