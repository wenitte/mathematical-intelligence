theorem CastingOutNines_Examples() {
  assert(
    let n₁ = 61934 ∧ n₂ = 38247 →
    (dr(n₁) = 5) ∧
    (dr(n₂) = 6) ∧
    (dr(n₁ + n₂) = 2) ∧
    (dr(n₁ - n₂) = 8) ∧
    (dr(n₁ × n₂) = 3)
  )
} ↔

proof CastingOutNines_Examples() {
  # Addition proof
  setVar(sum = n₁ + n₂ = 100181) →
  assert(dr(100181) = dr(1 + 0 + 0 + 1 + 8 + 1)) →
  assert(dr(100181) = dr(11) = 2) ∧
  assert(dr(n₁ + n₂) = dr(5 + 6) = dr(11) = 2) →

  # Subtraction proof
  setVar(diff = n₁ - n₂ = 23687) →
  assert(dr(23687) = dr(2 + 3 + 6 + 8 + 7)) →
  assert(dr(23687) = dr(26) = 8) ∧
  assert(dr(n₁ - n₂) = dr(5 - 6) = dr(-1) = dr(8) = 8) →

  # Multiplication proof
  setVar(prod = n₁ × n₂ = 2368789698) →
  assert(dr(2368789698) = dr(2 + 3 + 6 + 8 + 7 + 8 + 9 + 6 + 9 + 8)) →
  assert(dr(2368789698) = dr(48) = dr(4 + 8) = dr(12) = 3) ∧
  assert(dr(n₁ × n₂) = dr(5 × 6) = dr(30) = 3)
}

where dr() represents the digital root function (casting out nines)