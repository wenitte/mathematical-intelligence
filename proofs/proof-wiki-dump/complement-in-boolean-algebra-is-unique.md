theorem ComplementUniqueness() {
  assert(
    ∀S(isBooleanAlgebra(S) ⇒
      ∀a ∈ S ∃!b ∈ S(
        (a ∧ b = ⊥) ∧ (a ∨ b = ⊤)
      )
    )
  )
} ↔

proof ComplementUniqueness() {
  setVar(S: BooleanAlgebra) →
  setVar(a,b,c: S) →
  assume(
    (a ∧ b = ⊥) ∧ (a ∨ b = ⊤) ∧
    (a ∧ c = ⊥) ∧ (a ∨ c = ⊤)
  ) →
  
  assert(b = b ∧ ⊤) by(identityLaw) →
  assert(b ∧ ⊤ = b ∧ (a ∨ c)) by(hypothesis) →
  assert(b ∧ (a ∨ c) = (b ∧ a) ∨ (b ∧ c)) by(distributiveLaw) →
  assert((b ∧ a) ∨ (b ∧ c) = ⊥ ∨ (b ∧ c)) by(hypothesis) →
  assert(⊥ ∨ (b ∧ c) = (a ∧ c) ∨ (b ∧ c)) by(axiomBA4) →
  assert((a ∧ c) ∨ (b ∧ c) = (a ∨ b) ∧ c) by(distributiveLaw) →
  assert((a ∨ b) ∧ c = ⊤ ∧ c) by(hypothesis) →
  assert(⊤ ∧ c = c) by(identityLaw) →

  conclude(b = c) →
  conclude(∃!b ∈ S((a ∧ b = ⊥) ∧ (a ∨ b = ⊤)))
}