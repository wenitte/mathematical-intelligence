theorem Absolute_Value_Many_To_One() {
  let f: ℝ → ℝ
  assert(
    ∀x ∈ ℝ ⇒ f(x) = {
      x  if x ≥ 0
      -x if x < 0
    }
  ) →
  assert(f is_many_to_one)
} ↔

proof Absolute_Value_Many_To_One() {
  assume_contradiction(¬(f is_many_to_one)) →
  setVar(y₁, y₂: ℝ) →
  assert(y₁ ≠ y₂) ∧
  assert(∃x ∈ ℝ: f(x) = y₁ ∧ f(x) = y₂) →
  
  cases {
    case(x ≥ 0) {
      assert(y₁ = f(x) = x) ∧
      assert(y₂ = f(x) = x) →
      conclude(y₁ = y₂ = x)
    }
    
    case(x < 0) {
      assert(y₁ = f(x) = -x) ∧
      assert(y₂ = f(x) = -x) →
      conclude(y₁ = y₂ = -x)
    }
  } →
  
  by_cases_conclude(y₁ = y₂) →
  contradiction(y₁ = y₂ ∧ y₁ ≠ y₂) →
  therefore(f is_many_to_one)
}