theorem BoundedGeneralizedSumAbsolutelyConvergent() {
  let(V: BanachSpace)
  let(I: IndexSet)
  let(v[i]: Family[V, I])
  let(𝔽: Set[FiniteSubsets[I]])
  
  assert(
    (∃ absNetConvergence[∑(i∈I) v[i]]) ↔
    (∃M ∈ ℝ≥0: ∀F ∈ 𝔽 → ∑(i∈F) ||v[i]|| ≤ M)
  )
}

proof BoundedGeneralizedSumAbsolutelyConvergent() {
  # Necessary Condition
  assume(absNetConvergence[∑(i∈I) v[i]]) →
  let(M = ∑(i∈I) ||v[i]||) →
  
  byContradiction() {
    assume(∃F₀ ∈ 𝔽: ∑(i∈F₀) ||v[i]|| > M) →
    let(ε ∈ ℝ>0: ε < ∑(i∈F₀) ||v[i]|| - M) →
    
    fromDef(absNetConvergence) {
      assert(∃F ∈ 𝔽: ∀E ∈ 𝔽: E ⊇ F → |∑(i∈E) ||v[i]|| - M| < ε)
    } →
    
    let(E = F ∪ F₀) →
    assert(E ⊇ F) →
    
    chain() {
      ∑(i∈E) ||v[i]|| < M + ε →
      ∑(i∈E) ||v[i]|| < ∑(i∈F₀) ||v[i]|| →
      ∑(i∈E) ||v[i]|| ≤ ∑(i∈F₀) ||v[i]|| + ∑(i∈E∖F₀) ||v[i]|| →
      ∑(i∈E) ||v[i]|| = ∑(i∈E) ||v[i]||
    } →
    assert(contradiction)
  }

  # Sufficient Condition
  assume(∃M ∈ ℝ≥0: ∀F ∈ 𝔽 → ∑(i∈F) ||v[i]|| ≤ M) →
  let(S = {∑(i∈F) ||v[i]|| : F ∈ 𝔽}) →
  let(c = sup(S)) →
  
  assert(∀F ∈ 𝔽: ∑(i∈F) ||v[i]|| ≤ c) →
  assert(∀ε ∈ ℝ>0: ∃F ∈ 𝔽: ∑(i∈F) ||v[i]|| > c - ε) →
  
  forAll(ε ∈ ℝ>0) {
    exists(F ∈ 𝔽: ∑(i∈F) ||v[i]|| > c - ε) →
    forAll(E ∈ 𝔽: E ⊇ F) {
      chain() {
        c ≥ ∑(i∈E) ||v[i]|| →
        ∑(i∈E) ||v[i]|| = ∑(i∈F) ||v[i]|| + ∑(i∈E∖F) ||v[i]|| →
        ∑(i∈E) ||v[i]|| ≥ ∑(i∈F) ||v[i]|| →
        ∑(i∈E) ||v[i]|| > c - ε
      }
    }
  } →
  
  assert(netConvergence[∑(i∈I) ||v[i]|| → c])
}