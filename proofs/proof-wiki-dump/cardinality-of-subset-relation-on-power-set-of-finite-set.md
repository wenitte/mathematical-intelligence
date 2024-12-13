theorem Cardinality_Subset_Relation_PowerSet() {
  assert(
    ∀S: Set ∧ card(S) = n →
    card(⊆) = 3^n
    where ⊆ is relation on 𝒫(S)
  )
} ↔

proof Cardinality_Subset_Relation_PowerSet() {
  setVar(S: Set, n: ℕ) →
  assert(card(S) = n) →
  
  lemma PowerSet_Properties() {
    assert(⟨𝒫(S), ⊆⟩ is ordered set) →
    assert(∀X ∈ 𝒫(S) ∧ ∀X' ∈ 𝒫(S): X' ⊆ X → X' ∈ 𝒫(S))
  } →
  
  lemma Subset_Cardinality() {
    assert(∀X ∈ 𝒫(S): card({X' ∈ 𝒫(S): X' ⊆ X}) = 2^card(X))
  } →
  
  assert(card(⊆) = ∑_{X ⊆ S} 2^card(X)) →
  
  assert(∑_{X ⊆ S} 2^card(X) = ∑_{k=0}^n ∑_{X ⊆ S, card(X)=k} 2^k) →
  
  lemma Binomial_Sum() {
    assert(∑_{X ⊆ S, card(X)=k} 1 = binom(n,k))
  } →
  
  assert(card(⊆) = ∑_{k=0}^n binom(n,k) 2^k) →
  
  lemma Binomial_Theorem() {
    assert(∑_{k=0}^n binom(n,k) 2^k = (1 + 2)^n)
  } →
  
  assert(card(⊆) = 3^n)
}