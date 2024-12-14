theorem Characteristic_Floor_Ceiling() {
  assert(
    ∀f: ℝ → ℤ ⇒ [
      (∀x ∈ ℝ: f(x+1) = f(x)+1) ∧
      (∀n ∈ ℤ₊: f(x) = f(f(nx)/n))
    ] ⇒
    [(∀x ∈ ℚ: f(x) = ⌊x⌋) ∨ (∀x ∈ ℚ: f(x) = ⌈x⌉)]
  )
} ↔

proof Characteristic_Floor_Ceiling() {
  lemma Induction_Property() {
    setVar(f: ℝ → ℤ) →
    assert(∀n ∈ ℕ: f(x+n) = f(x)+n) ∧
    assert(∀n ∈ ℕ: f(x-n) = f(x)-n)
  } →

  lemma Integer_Values() {
    apply(Induction_Property()) →
    assert(∀n ∈ ℤ: f(n) = f(0) + n)
  } →

  lemma Zero_Base() {
    assert(f(0) = f(f(0))) →
    assert(f(0) = f(0) + f(0)) →
    assert(f(0) = 0)
  } →

  lemma Half_Value_Case() {
    setVar(k: ℤ = f(1/2)) →
    case k ≤ 0 {
      assert(k = f(1/(1-2k) * f(1/2-k))) →
      assert(k = f(0)) →
      assert(k = 0) →
      
      subproof Rational_Induction() {
        assert(∀n ∈ ℕ: f(1/n) = 0) ∧
        assert(∀m,n ∈ ℕ, m < n: f(m/n) = 0)
      } →
      
      conclude(f(x) = ⌊x⌋ for x ∈ ℚ)
    } →

    case k > 0 {
      setVar(g(x) = -f(-x)) →
      assert(g(1/2) ≥ 0) →
      assert(f(x) = -g(-x)) →
      assert(f(x) = -⌊-x⌋) →
      assert(f(x) = ⌈x⌉) →
      conclude(f(x) = ⌈x⌉ for x ∈ ℚ)
    }
  }
}