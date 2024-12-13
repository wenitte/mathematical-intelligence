theorem Sequence_Limit_Sierpinski() {
  let T = ⟨{0,1}, τ₀⟩
  let σ = (0,1,0,1,...)
  assert(
    isSierpinskiSpace(T) ∧
    isSequence(σ,T) →
    isLimit(1,σ,T)
  )
}

proof Sequence_Limit_Sierpinski() {
  lemma Limit_Definition() {
    assert(
      ∀α ∈ T(
        isLimit(α,σ,T) ↔
        ∀U ∈ τ₀(
          α ∈ U →
          isFinite({n ∈ ℕ : xₙ ∉ U})
        )
      )
    )
  } →
  
  assert(OpenSets(T) = {∅, {0,1}, {1}}) →
  assert(1 ∈ {0,1}) →
  
  lemma Only_Open_Set() {
    assert(
      ∀U ∈ τ₀(
        1 ∈ U →
        U = {0,1}
      )
    )
  } →
  
  assert(|{n ∈ ℕ : xₙ ∉ {0,1}}| = 0) →
  assert(isFinite({n ∈ ℕ : xₙ ∉ {0,1}})) →
  
  apply(Limit_Definition()) →
  assert(isLimit(1,σ,T))
}