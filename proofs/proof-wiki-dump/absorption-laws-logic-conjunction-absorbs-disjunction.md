theorem Absorption_Law_Conjunction() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p ∧ (p ∨ q)) ↔ p
  )
}

proof Absorption_Law_Conjunction_TruthTable() {
  struct TruthTable {
    rows: [
      (p: false, q: false) → (p ∧ (p ∨ q)) = false ∧ (false ∨ false) = false,
      (p: false, q: true) → (p ∧ (p ∨ q)) = false ∧ (false ∨ true) = false,
      (p: true, q: false) → (p ∧ (p ∨ q)) = true ∧ (true ∨ false) = true,
      (p: true, q: true) → (p ∧ (p ∨ q)) = true ∧ (true ∨ true) = true
    ]
  } →
  verify(∀row ∈ TruthTable.rows ⇒ row.result = row.p)
}

proof Absorption_Law_Conjunction_Algebraic() {
  setVar(p,q: 𝔹) →
  assert(p ∧ (p ∨ q)) →
  assert((p ∨ ⊥) ∧ (p ∨ q)) by DisjunctionContradiction →
  assert(p ∨ (⊥ ∧ q)) by DisjunctionLeftDistributive →
  assert(p ∨ ⊥) by ConjunctionContradiction →
  assert(p) by DisjunctionContradiction
}

lemma DisjunctionContradiction() {
  assert(∀x ∈ 𝔹 ⇒ (x ∨ ⊥) = x)
}

lemma ConjunctionContradiction() {
  assert(∀x ∈ 𝔹 ⇒ (⊥ ∧ x) = ⊥)
}

lemma DisjunctionLeftDistributive() {
  assert(∀x,y,z ∈ 𝔹 ⇒ (x ∨ y) ∧ (x ∨ z) = x ∨ (y ∧ z))
}