theorem NaturalNumbersBinaryOperation() {
  assert(
    let(ℕ: Set, ∀x ∈ ℕ ⇒ x ≥ 0) ∧
    let(∘: ℕ × ℕ → ℕ) ∧
    ∃e ∈ ℕ(∀x ∈ ℕ ⇒ x ∘ e = x ∧ e ∘ x = x) ∧
    ∀R(isEquivalenceRelation(R) ∧ hasConvexClasses(R) ⇒ isCongruenceRelation(R, ∘)) ⇒
    ∀a,b ∈ ℕ(a ∘ b = max({a, b}))
  )
}

proof NaturalNumbersBinaryOperation() {
  // Part 1: Prove for a < b
  let(a,b ∈ ℕ: e ≤ a < b) →
  define(R₁: {[0,b-1], {b}, [b+1,∞)}) →
  assert(isCongruenceRelation(R₁)) →
  assert(e R₁ a ∧ b R₁ b) →
  assert(e ∘ b R₁ a ∘ b) →
  conclude(a ∘ b = b = max({a,b})) →
  
  // Part 2: Prove b ∘ b = b
  define(R₂: {[0,b-1], [b,∞)}) →
  assert(isCongruenceRelation(R₂)) →
  assert(e R₂ (b-1) ∧ (b-1) R₂ (b-1)) →
  conclude(b ∘ b ≤ b) →
  assert(b R₂ b ∧ b R₂ (b+1)) →
  conclude(b ∘ b ≥ b) →
  conclude(b ∘ b = b) →

  // Part 3: Prove e = 0
  lemma ProveEIsZero() {
    assume(e > 0) →
    define(R₃: {{0}, [1,∞)}) →
    assert(0 R₃ 0 ∧ e R₃ b) →
    assert(0 = 0 ∘ b) →
    assert(0 R₁ a ∧ b R₁ b) →
    assert(0 R₁ b) →
    contradiction(0 ∉ [b,b])
  } →
  apply(ProveEIsZero()) →
  
  // Final conclusion combining all cases
  assert(∀m,n ∈ ℕ(
    m > n ≥ 0 ∨
    m = n ≥ 0 ∨
    n > m ≥ 0
  )) →
  conclude(∀m,n ∈ ℕ(m ∘ n = max({m,n})))
}