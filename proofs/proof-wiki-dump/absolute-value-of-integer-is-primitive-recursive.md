theorem AbsoluteValueInteger_PrimitiveRecursive() {
  assert(
    ∀n ∈ ℕ, let kₙ be coded integer →
    let a: ℕ → ℕ where a(n) = |kₙ| →
    isPrimitiveRecursive(a)
  )
}

proof AbsoluteValueInteger_PrimitiveRecursive() {
  letFunction(a: ℕ → ℕ, n ↦ quot(n + 1, 2)) →
  
  assert(isPrimitiveRecursive(const)) ∧
  assert(isPrimitiveRecursive(quot)) ∧
  assert(isPrimitiveRecursive(succ)) →
  conclude(isPrimitiveRecursive(a)) →
  
  lemma CodeDefinition() {
    assert(
      ∀n ∈ ℕ, (
        (n = 2kₙ - 1 ∧ kₙ > 0) ∨
        (n = -2kₙ ∧ kₙ ≤ 0)
      )
    )
  } →
  
  case1(kₙ > 0) {
    assert(kₙ = |kₙ|) →
    calc {
      a(n) = 
      a(2kₙ - 1) =
      quot((2|kₙ| - 1) + 1, 2) =
      quot(2|kₙ|, 2) =
      |kₙ|
    }
  } →
  
  case2(kₙ ≤ 0) {
    assert(kₙ = -|kₙ|) →
    calc {
      a(n) =
      a(-2kₙ) =
      quot((-2(-|kₙ|)) + 1, 2) =
      quot(2|kₙ| + 1, 2) =
      |kₙ|
    }
  } →
  
  conclude(∀n ∈ ℕ, a(n) = |kₙ|)
}