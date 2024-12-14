theorem FiniteRankOperator_Characterization() {
  let(GF ∈ {ℝ, ℂ})
  let(H, K: HilbertSpace(GF))
  let(T ∈ B₀₀(H,K))
  let(n = dim(ran(T)))
  
  assert(
    ∃(e₁,...,eₙ ∈ H) ∧ ∃(g₁,...,gₙ ∈ K) ⇒
    (∀i,j ∈ {1,...,n}: ⟨eᵢ,eⱼ⟩_H = δᵢⱼ) ∧
    (∀h ∈ H: T(h) = ∑ᵢ₌₁ⁿ ⟨h,eᵢ⟩_H gᵢ)
  )
} ↔

proof FiniteRankOperator_Characterization() {
  step1: {
    let({e₁,...,eₙ}: basis(ran(T))) →
    apply(GramSchmidt_Orthogonalization()) →
    assert(∃{g₁,...,gₙ}: orthonormal_basis(ran(T)))
  } →

  step2: {
    assert(∀x ∈ H: T(x) ∈ span{g₁,...,gₙ}) →
    assert(∀x ∈ H: T(x) = ∑ᵢ₌₁ⁿ αᵢ(x)gᵢ)
    where(αᵢ: H → GF)
  } →

  lemma LinearFunctionals() {
    assert(∀i,λ,μ ∈ GF, ∀x,y ∈ H:
      αᵢ(λx + μy) = λαᵢ(x) + μαᵢ(y))
  } →

  lemma BoundedFunctionals() {
    apply(Pythagoras_Theorem()) →
    assert(∀x ∈ H: ‖T(x)‖²_K = ∑ᵢ₌₁ⁿ |αᵢ(x)|²) →
    assert(∀x ∈ H, ∀i: |αᵢ(x)| ≤ ‖T‖ ‖x‖_H)
  } →

  step3: {
    apply(Riesz_Representation_Theorem()) →
    assert(∀i ∃eᵢ ∈ H: αᵢ(x) = ⟨x,eᵢ⟩_H)
  } →

  conclude: {
    assert(∀x ∈ H: T(x) = ∑ᵢ₌₁ⁿ ⟨x,eᵢ⟩_H gᵢ)
  }
}