theorem Biconditional_iff_DisjunctionImpliesConjunction() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p ↔ q) ≡ ((p ∨ q) → (p ∧ q))
  )
} ↔

proof Biconditional_iff_DisjunctionImpliesConjunction() {
  setVar(p,q: 𝔹) →
  method(TruthTable) →
  define(truthTable) {
    row(p=F, q=F): (F ↔ F) = T, ((F ∨ F) → (F ∧ F)) = T →
    row(p=F, q=T): (F ↔ T) = F, ((F ∨ T) → (F ∧ T)) = F →
    row(p=T, q=F): (T ↔ F) = F, ((T ∨ F) → (T ∧ F)) = F →
    row(p=T, q=T): (T ↔ T) = T, ((T ∨ T) → (T ∧ T)) = T
  } →
  assert(
    ∀rows: truthValue(p ↔ q) = truthValue((p ∨ q) → (p ∧ q))
  ) →
  conclude(
    (p ↔ q) ≡ ((p ∨ q) → (p ∧ q))
  )
}