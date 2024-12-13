theorem Wine_Division() {
  assert(
    ∃sequence ∈ Operations: (
      (barrel = 12 ∧ jug₁ = 7 ∧ jug₂ = 5) →
      (final_state: barrel = 6 ∧ separate = 6)
    )
  )
}

proof Wine_Division() {
  setVar(barrel: ℕ = 12) ∧
  setVar(jug₁: ℕ = 7) ∧
  setVar(jug₂: ℕ = 5) →
  
  step₁() {
    assert(fill(jug₂, barrel)) →
    assert(pour(jug₂, jug₁)) →
    state₁: (barrel = 7 ∧ jug₁ = 5 ∧ jug₂ = 0)
  } →

  step₂() {
    assert(fill(jug₂, barrel)) →
    assert(pour(jug₂, jug₁)) →
    state₂: (barrel = 2 ∧ jug₁ = 7 ∧ jug₂ = 3)
  } →

  step₃() {
    assert(pour(jug₁, barrel)) →
    assert(pour(jug₂, jug₁)) →
    state₃: (barrel = 9 ∧ jug₁ = 3 ∧ jug₂ = 0)
  } →

  step₄() {
    assert(fill(jug₂, barrel)) →
    assert(pour(jug₂, jug₁)) →
    state₄: (barrel = 4 ∧ jug₁ = 7 ∧ jug₂ = 1)
  } →

  step₅() {
    assert(pour(jug₁, barrel)) →
    assert(pour(jug₂, jug₁)) →
    assert(fill(jug₂, barrel)) →
    assert(pour(jug₂, jug₁)) →
    state₅: (barrel = 6 ∧ jug₁ = 6 ∧ jug₂ = 0)
  } →

  conclusion() {
    assert(state₅ ↔ (barrel = 6 ∧ separate = 6))
  }
}