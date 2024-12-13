theorem PowerSet_Cardinality() {
  assert(
    ∀S: Set, ∀n ∈ ℕ: |S| = n ⇒ |𝒫(S)| = 2ⁿ
  )
} ↔

proof PowerSet_Cardinality() {
  setVar(P(n): ℕ → Prop) →
  assert(P(n) ↔ [|S| = n ⇒ |𝒫(S)| = 2ⁿ]) →
  
  // Base case
  lemma Base_Case() {
    assert(|∅| = 0) ∧
    assert(𝒫(∅) = {∅}) ∧
    assert(|𝒫(∅)| = 1 = 2⁰) →
    conclude(P(0))
  } →

  // Inductive step
  lemma Inductive_Step() {
    assume(k ≥ 0 ∧ P(k)) →
    setVar(S: Set, |S| = k + 1) →
    setVar(x ∈ S) →
    setVar(S' = S ∖ {x}) →
    assert(|S'| = k) →
    
    // Partition subsets into two groups
    assert(𝒫(S) = {A ⊆ S' | A ∈ 𝒫(S')} ∪ {A ∪ {x} | A ∈ 𝒫(S')}) →
    
    // Apply induction hypothesis to S'
    apply(P(k), |S'| = k) →
    assert(|𝒫(S')| = 2ᵏ) →
    
    // Count total subsets
    assert(|𝒫(S)| = |𝒫(S')| + |𝒫(S')|) →
    assert(|𝒫(S)| = 2ᵏ + 2ᵏ = 2ᵏ⁺¹) →
    conclude(P(k) ⇒ P(k + 1))
  } →

  apply(PrincipleOfInduction(P)) →
  conclude(∀n ∈ ℕ: P(n))
}