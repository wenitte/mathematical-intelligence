theorem CanonicalInjection_Is_Injection() {
  let(S[1..n]: AlgebraicStructures, ∘[1..n]: Operations, e[1..n]: Identities)
  assert(
    ∀j ∈ [1..n],
    ∀x ∈ Sⱼ,
    inj_j: Sⱼ → ∏[i=1..n](Sᵢ) ∧
    inj_j(x) = (e₁, e₂, ..., e_{j-1}, x, e_{j+1}, ..., eₙ) ⇒
    isInjection(inj_j)
  )
} ↔

proof CanonicalInjection_Is_Injection() {
  setVar(j: ℕ, j ∈ [1..n]) →
  setVar(x,y: Sⱼ) →
  
  assume(inj_j(x) = inj_j(y)) →
  assert(
    (e₁, e₂, ..., e_{j-1}, x, e_{j+1}, ..., eₙ) = 
    (e₁, e₂, ..., e_{j-1}, y, e_{j+1}, ..., eₙ)
  ) →
  
  lemma EqualityOrderedTuples() {
    assert(
      ∀k ∈ [1..n],
      (aₖ = bₖ ∀k) ⇒ (a₁,...,aₙ) = (b₁,...,bₙ) ⇒
      aⱼ = bⱼ
    )
  } →
  
  apply(EqualityOrderedTuples()) →
  assert(x = y) →
  conclude(isInjection(inj_j))
}