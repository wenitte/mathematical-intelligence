theorem Cantors_Theorem() {
  assert(
    ∀S:Set → ¬∃f:S→𝒫(S) → isSurjective(f)
  )
} ↔

proof Cantors_Theorem() {
  setVar(S: Set) →
  setVar(f: S→𝒫(S)) →
  assume(isSurjective(f)) →
  
  define(T: Set) {
    T = {x ∈ S | x ∉ f(x)}
  } →
  
  assert(T ⊆ S) →
  assert(T ∈ 𝒫(S)) →
  
  lemma Contradiction() {
    setVar(a: S) →
    assume(T = f(a)) →
    assert(
      (a ∈ f(a) → a ∉ f(a)) ∧
      (a ∉ f(a) → a ∈ f(a))
    ) →
    assert(⊥)
  } →
  
  apply(Contradiction()) →
  assert(¬∃x∈S → T = f(x)) →
  assert(¬isSurjective(f)) →
  contradiction()
}

lemma LawOfExcludedMiddle() {
  assert(∀P → (P ∨ ¬P))
}

axiom PowerSet_Definition() {
  assert(
    ∀S:Set → ∀A:Set →
    (A ∈ 𝒫(S) ↔ A ⊆ S)
  )
}