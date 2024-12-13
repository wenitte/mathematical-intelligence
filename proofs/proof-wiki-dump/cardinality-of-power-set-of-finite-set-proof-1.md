theorem PowerSetCardinality() {
  assert(
    ∀S(S: Set ∧ |S| = n → |𝒫(S)| = 2^n)
  )
} ↔

proof PowerSetCardinality() {
  setVar(S: Set, n: ℕ) →
  assume(|S| = n) →
  
  let(T = {0,1}) →
  define(χ_A: S → T, 
    ∀x ∈ S → χ_A(x) = 
      case(x ∈ A → 1,
           x ∉ A → 0)
  ) →
  
  define(f: 𝒫(S) → T^S,
    ∀A ∈ 𝒫(S) → f(A) = χ_A
  ) →
  
  define(g: T^S → 𝒫(S),
    ∀φ ∈ T^S → g(φ) = φ^{-1}({1})
  ) →
  
  lemma CompositionIdentityTS() {
    assert(
      ∀φ ∈ T^S →
        (f∘g)(φ) = f(g(φ)) = f(φ^{-1}({1})) = χ_{φ^{-1}({1})} = φ
    )
  } →
  
  lemma CompositionIdentityPS() {
    assert(
      ∀A ∈ 𝒫(S) →
        (g∘f)(A) = g(f(A)) = g(χ_A) = χ_A^{-1}({1}) = A
    )
  } →
  
  apply(CompositionIdentityTS()) →
  apply(CompositionIdentityPS()) →
  assert(f∘g = I_{T^S} ∧ g∘f = I_{𝒫(S)}) →
  
  lemma Bijection() {
    assert(
      (f∘g = I_{T^S} ∧ g∘f = I_{𝒫(S)}) → 
      f: 𝒫(S) ↔ T^S
    )
  } →
  
  apply(Bijection()) →
  apply(CardinalityOfMappings(|T| = 2, |S| = n)) →
  assert(|𝒫(S)| = |T^S| = 2^n)
}