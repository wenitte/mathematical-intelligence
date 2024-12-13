theorem Bezout_Identity_PID() {
  assert(
    ∀D(isPrincipalIdealDomain(D) ∧
    ∀S⊆D(S = {a₁,...,aₙ} ∧ ∀i(aᵢ ≠ 0)) ∧
    ∀y∈D(isGCD(y,S)) →
    ∃d₁,...,dₙ∈D(y = d₁a₁ + d₂a₂ + ... + dₙaₙ))
  )
} ↔

proof Bezout_Identity_PID() {
  setVar(D: PrincipalIdealDomain) →
  setVar(S: {a₁,...,aₙ} ⊆ D) →
  setVar(y: GCD(S)) →
  
  lemma Finite_GCD_Exists() {
    assert(∃g∈D(isGCD(g,S)))
  } →

  setVar(J: {Σdᵢaᵢ | dᵢ∈D}) →
  
  lemma Linear_Combinations_Principal() {
    assert(∃x∈D(J = ⟨x⟩))
  } →
  
  apply(Linear_Combinations_Principal()) →
  setVar(x: D, J = ⟨x⟩) →
  
  lemma GCD_Properties() {
    assert(isGCD(x,S) ∧ areAssociates(x,y))
  } →
  
  assert(⟨y⟩ = ⟨x⟩) →
  assert(y ∈ J) →
  assert(∃d₁,...,dₙ∈D(y = d₁a₁ + d₂a₂ + ... + dₙaₙ))
}