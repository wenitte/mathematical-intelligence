theorem Basic_Primitive_Recursive_Functions_Definable() {
  let(f: ℕᵏ → ℕ) →
  assert(
    ∃φ(y, x₁, ..., xₖ) ∈ WFF ∧
    ¬∃Q[φ] ∧  // No quantifiers in φ
    (y = f(x₁, ..., xₖ) ↔ 
     ℕ ⊨ φ(y ← [y], x₁ ← [x₁], ..., xₖ ← [xₖ]))
  )
}

proof Basic_Primitive_Recursive_Functions_Definable() {
  case Zero_Function() {
    let(f: ℕ → ℕ) →
    assume(∀x ∈ ℕ: f(x) = 0) →
    define(φ(y,x) := (y = 0)) →
    assert(
      y = f(x) ↔ ℕ ⊨ φ(y ← [y], x ← [x])
    )
  } →

  case Successor_Function() {
    let(f: ℕ → ℕ) →
    assume(∀x ∈ ℕ: f(x) = s(x)) →
    define(φ(y,x) := (y = s(x))) →
    assert(
      y = f(x) ↔ ℕ ⊨ φ(y ← [y], x ← [x])
    )
  } →

  case Projection_Function() {
    let(j,k ∈ ℕ) →
    let(f: ℕᵏ → ℕ) →
    assume(∀x₁,...,xₖ ∈ ℕ: f(x₁,...,xₖ) = xⱼ) →
    define(φ(y,x₁,...,xₖ) := (y = xⱼ)) →
    assert(
      y = f(x₁,...,xₖ) ↔ ℕ ⊨ φ(y ← [y], x₁ ← [x₁], ..., xₖ ← [xₖ])
    )
  }
}