theorem BarbersParadox() {
  let U: Set
  let S: U → {T,F}
  let B: U → {T,F}
  let b ∈ U
  
  assert(
    (U = {x | x is a man in community}) ∧
    (∀x ∈ U: S(x) ↔ x shaves x) ∧
    (∀x ∈ U: B(x) ↔ x is shaved by b) ∧
    (∀x ∈ U: ¬S(x) ↔ B(x)) ∧
    (B(b) ↔ S(b))
    → contradiction
  )
} ↔

proof BarbersParadox() {
  setVar(U: Set) →
  setVar(S: U → {T,F}) →
  setVar(B: U → {T,F}) →
  setVar(b ∈ U) →
  
  assert(∀x ∈ U: ¬S(x) ↔ B(x)) {premise 1} →
  assert(B(b) ↔ S(b)) {premise 2} →
  
  lemma TransitiveChain() {
    assert(
      S(b) ↔ B(b) ↔ ¬S(b)
    )
  } →
  
  apply(TransitiveChain()) →
  assert(S(b) ↔ ¬S(b)) →
  
  lemma ContradictionLemma() {
    assert(
      (p ↔ ¬p) → contradiction
    )
  } →
  
  apply(ContradictionLemma(), p := S(b)) →
  assert(contradiction) →
  conclude(premises lead to contradiction)
}