theorem BiconditionalWithTautology() {
  assert(
    (p ↔ ⊤) ≡ p
  )
} ↔

proof BiconditionalWithTautology() {
  setDomain(p: 𝔹) →
  method(TruthTable) →
  assert(
    table: [
      row(p: F, (p ↔ ⊤): F, ⊤: T, p: F),
      row(p: T, (p ↔ ⊤): T, ⊤: T, p: T)
    ]
  ) →
  verify(∀row ∈ table: (p ↔ ⊤) = p) →
  conclude((p ↔ ⊤) ≡ p)
}