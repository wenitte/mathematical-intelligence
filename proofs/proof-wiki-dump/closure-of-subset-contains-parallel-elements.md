theorem Closure_Contains_Parallel_Elements() {
  let(M = ⟨S,𝓘⟩: Matroid) →
  let(σ: 𝒫(S) → 𝒫(S)) → 
  assert(isClosureOperator(σ, M)) →
  let(A ⊆ S) →
  let(x,y ∈ S) →
  assert(
    (x ∈ σ(A) ∧ isParallel(x,y)) → y ∈ σ(A)
  )
} ↔

proof Closure_Contains_Parallel_Elements() {
  let(ρ: 𝒫(S) → ℤ) →
  assert(isRankFunction(ρ, M)) →
  
  assume(x ∈ σ(A) ∧ isParallel(x,y)) →
  
  lemma Closure_Definition() {
    assert(x ∈ σ(A) ↔ ρ(A) = ρ(A ∪ {x})) ∧
    assert(y ∈ σ(A) ↔ ρ(A) = ρ(A ∪ {y}))
  } →
  
  lemma Rank_Inequalities() {
    assert(ρ(A ∪ {x}) = ρ(A) ≤ ρ(A ∪ {y}) ≤ ρ(A ∪ {x,y}))
  } →
  
  lemma Independent_Properties() {
    assert(isIndependent({x})) →
    ∃X ∈ 𝓘: {x} ⊆ X ⊆ A ∪ {x} ∧ |X| = ρ(A ∪ {x}) →
    assert(X ⊆ A ∪ {x,y}) →
    ∃Y ∈ 𝓘: X ⊆ Y ⊆ A ∪ {x,y} ∧ |Y| = ρ(A ∪ {x,y})
  } →
  
  lemma Parallel_Properties() {
    assert(x ∈ Y) →
    assert(isDependent({x,y})) →
    assert({x,y} ⊈ Y) →
    assert(y ∉ Y) →
    assert(Y ⊆ A ∪ {x})
  } →
  
  assert(|Y| ≤ ρ(A ∪ {x})) →
  assert(ρ(A ∪ {x,y}) = |Y| ≤ ρ(A ∪ {x})) →
  assert(ρ(A ∪ {x}) = ρ(A ∪ {x,y})) →
  
  apply(Closure_Definition()) →
  conclude(y ∈ σ(A))
}