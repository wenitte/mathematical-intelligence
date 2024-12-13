theorem Adjoint_Finite_Rank_Operator() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(H: HilbertSpace(GF), ⟨·,·⟩_H) ∧
  let(K: HilbertSpace(GF), ⟨·,·⟩_K) ∧
  let(T ∈ B₀₀(H,K)) →
  assert(
    T* ∈ B₀₀(K,H)
  )
}

proof Adjoint_Finite_Rank_Operator() {
  apply(Characterization_Finite_Rank_Operators) →
  assert(∃{e₁,...,eₙ} ⊂ H, {g₁,...,gₙ} ⊂ K) →
  assert(∀x ∈ H: T(x) = ∑ᵢ₌₁ⁿ ⟨x,eᵢ⟩_H gᵢ) →
  
  let(x ∈ H, y ∈ K) →
  chain_equation() {
    ⟨T(x),y⟩_K
    = ⟨∑ᵢ₌₁ⁿ ⟨x,eᵢ⟩_H gᵢ, y⟩_K
    = ∑ᵢ₌₁ⁿ ⟨⟨x,eᵢ⟩_H gᵢ, y⟩_K
    = ∑ᵢ₌₁ⁿ ⟨x,eᵢ⟩_H ⟨gᵢ,y⟩_K
    = ∑ᵢ₌₁ⁿ ⟨x,eᵢ ⟨gᵢ,y⟩_K⟩_H
    = ⟨x,∑ᵢ₌₁ⁿ ⟨y,gᵢ⟩_K eᵢ⟩_H
  }
  
  apply(Adjoint_Existence_Uniqueness_Lemma1) →
  assert(∀y ∈ K: T*(y) = ∑ᵢ₌₁ⁿ ⟨y,gᵢ⟩_K eᵢ) →
  assert(∀y ∈ K: T*(y) ∈ span{e₁,...,eₙ}) →
  conclude(T* ∈ B₀₀(K,H))
}