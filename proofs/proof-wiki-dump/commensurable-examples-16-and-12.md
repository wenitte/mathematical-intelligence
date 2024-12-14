theorem Commensurable_16_12() {
  assert(
    CommensurableNumbers(16, 12)
  )
} ↔

proof Commensurable_16_12() {
  let D = {x ∈ ℕ : x|16 ∧ x|12} →
  assert(1 ∈ D) →
  assert(2 ∈ D) →
  assert(4 ∈ D) →
  assert(D ≠ ∅) →
  assert(∃d ∈ ℕ: d|16 ∧ d|12) →
  apply(Definition_Commensurable) →
  assert(CommensurableNumbers(16, 12))
}