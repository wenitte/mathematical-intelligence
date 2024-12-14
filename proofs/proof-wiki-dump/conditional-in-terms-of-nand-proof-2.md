theorem ConditionalNAND() {
  assert(
    ∀p,q: bool ⇒ (p ⟹ q) ↔ (p ↑ (q ↑ q))
  )
}

proof ConditionalNAND() {
  setVar(p,q: bool) →
  assert(p ⟹ q) →
  apply(MaterialImplication) →
  assert(¬p ∨ q) →
  apply(DoubleNegation) →
  assert(¬p ∨ ¬¬q) →
  apply(NANDAsDisjunctionNegation) →
  assert(p ↑ ¬q) →
  apply(NANDEqualArguments, {arg: q}) →
  assert(p ↑ (q ↑ q))
}

lemma MaterialImplication() {
  assert(
    ∀p,q: bool ⇒ (p ⟹ q) ↔ (¬p ∨ q)
  )
}

lemma DoubleNegation() {
  assert(
    ∀x: bool ⇒ x ↔ ¬¬x
  )
}

lemma NANDAsDisjunctionNegation() {
  assert(
    ∀x,y: bool ⇒ (x ↑ y) ↔ (¬x ∨ ¬y)
  )
}

lemma NANDEqualArguments() {
  assert(
    ∀x: bool ⇒ (x ↑ x) ↔ ¬x
  )
}