theorem PowerSet_Cardinality() {
  assert(
    ∀S: Set →
    (card(S) = n) →
    (card(𝒫(S)) = 2^n)
  )
}

proof PowerSet_Cardinality_Bijection() {
  setVar(S: Set, T: Set = {0,1}) →
  
  lemma CharacteristicFunction() {
    assert(
      ∀A ∈ 𝒫(S) →
      ∃χ_A: S → T →
      ∀x ∈ S: χ_A(x) = (x ∈ A ? 1 : 0)
    )
  } →
  
  define(f: 𝒫(S) → T^S) {
    ∀A ∈ 𝒫(S): f(A) = χ_A
  } →
  
  define(g: T^S → 𝒫(S)) {
    ∀φ ∈ T^S: g(φ) = φ^(-1)({1})
  } →
  
  assert(
    ∀φ ∈ T^S →
    χ_(φ^(-1)({1}))(x) = φ(x)
  ) →
  
  lemma CompositionIdentity() {
    assert(f ∘ g = I_(T^S)) ∧
    assert(g ∘ f = I_(𝒫(S)))
  } →
  
  apply(BijectionTheorem()) →
  assert(f is_bijection) →
  apply(CardinalityOfMappings()) →
  assert(card(T^S) = 2^n) →
  assert(card(𝒫(S)) = 2^n)
}

proof PowerSet_Cardinality_Combinatorial() {
  assert(
    card(𝒫(S)) = ∑_(k=0)^n (n choose k)
  ) →
  apply(BinomialTheorem()) →
  assert(
    (1 + 1)^n = ∑_(k=0)^n (n choose k)
  ) →
  assert(2^n = card(𝒫(S)))
}

proof PowerSet_Cardinality_Induction() {
  define(P(n): Proposition) {
    ∀S: (card(S) = n) → (card(𝒫(S)) = 2^n)
  } →
  
  base_case(n = 0) {
    assert(S = ∅) →
    assert(𝒫(∅) = {∅}) →
    assert(card(𝒫(∅)) = 1 = 2^0)
  } →
  
  inductive_step(k ≥ 0) {
    assume(P(k)) →
    setVar(S: card(S) = k+1) →
    setVar(x ∈ S) →
    setVar(S' = S ∖ {x}) →
    assert(card(S') = k) →
    assert(
      𝒫(S) = 𝒫(S') ∪ {A ∪ {x} | A ∈ 𝒫(S')}
    ) →
    assert(card(𝒫(S)) = 2^k + 2^k = 2^(k+1))
  } →
  
  apply(MathematicalInduction()) →
  assert(∀n ∈ ℕ: P(n))
}