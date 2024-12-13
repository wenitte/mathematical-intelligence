theorem SetLogicAnalog() {
  assert(
    ∀P,Q: PropositionalFunction,
    ∀S,T: Set,
    ∀𝕌: Universe →
    [SetLogicCorrespondence(P,Q,S,T,𝕌)]
  )
} ↔

proof SetLogicAnalog() {
  setVar(P,Q: PropositionalFunction) →
  setVar(S,T: Set) →
  setVar(𝕌: Universe) →
  
  define(S = {x ∈ 𝕌 : P(x)}) →
  define(T = {x ∈ 𝕌 : Q(x)}) →
  
  lemma Correspondence() {
    assert(
      (S ∩ T = {x ∈ 𝕌 : P(x) ∧ Q(x)}) ∧
      (S ∪ T = {x ∈ 𝕌 : P(x) ∨ Q(x)}) ∧
      (S ⊆ T ↔ ∀x ∈ 𝕌 : P(x) → Q(x)) ∧
      (S ∆ T = {x ∈ 𝕌 : P(x) ⊕ Q(x)}) ∧
      (S' = {x ∈ 𝕌 : ¬P(x)}) ∧
      (S = T ↔ ∀x ∈ 𝕌 : P(x) ↔ Q(x))
    )
  } →
  
  apply(Correspondence()) →
  assert(
    [SetLogicCorrespondence(P,Q,S,T,𝕌)]
  )
}