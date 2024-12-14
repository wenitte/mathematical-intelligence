theorem CauchysGroupTheorem() {
  let G: FiniteGroup
  let e: Identity(G)
  let p: Prime
  let |G|: Order(G)
  assert(
    (p | |G|) ⇒ ∃H ⊆ G: |H| = p
  )
} ↔

proof CauchysGroupTheorem() {
  lemma PrimePowerFactors() {
    assert(
      ∀G: FiniteGroup, ∀p: Prime, ∀k: ℕ ⇒
      (p^k | |G|) ⇒ ∃H ⊆ G: |H| = p^k
    )
  } →
  setVar(k = 1) →
  apply(PrimePowerFactors()) →
  assert(∃H ⊆ G: |H| = p)
}