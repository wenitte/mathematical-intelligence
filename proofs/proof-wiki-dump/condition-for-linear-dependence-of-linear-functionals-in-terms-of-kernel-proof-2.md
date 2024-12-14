theorem LinearDependenceFunctionals() {
  let(V: VectorSpace, F: Field) →
  let(f,f₁,...,fₙ: V → F | LinearFunctional) →
  assert(
    (⋂ᵢ₌₁ⁿ ker(fᵢ) ⊆ ker(f)) →
    ∃(α₁,...,αₙ ∈ F) ⇒ 
    (∀v ∈ V: f(v) = ∑ᵢ₌₁ⁿ αᵢfᵢ(v))
  )
} ↔

proof LinearDependenceFunctionals() {
  define(T: V → Fⁿ) {
    ∀x ∈ V: T(x) = (f₁(x),...,fₙ(x))
  } →

  lemma T_Linearity() {
    let(x,y ∈ V, α,β ∈ F) →
    assert(
      T(αx + βy) = (f₁(αx + βy),...,fₙ(αx + βy)) →
      = (αf₁(x) + βf₁(y),...,αfₙ(x) + βfₙ(y)) →
      = αT(x) + βT(y)
    )
  } →

  assert(ker(T) = ⋂ᵢ₌₁ⁿ ker(fᵢ)) →
  assert(ker(T) ⊆ ker(f)) →

  lemma WellDefined_f_tilde() {
    let(x,y ∈ V | T(x) = T(y)) →
    assert(
      T(x-y) = 0 →
      x-y ∈ ker(T) →
      x-y ∈ ker(f) →
      f(x) = f(y)
    )
  } →

  define(f̃: Im(T) → F) {
    ∀x ∈ V: f̃(T(x)) = f(x)
  } →

  let({v₁,...,vₖ}: Basis(Im(T))) →
  let({v₁,...,vₙ}: Basis(Fⁿ) | k ≤ n) →

  define(h: Fⁿ → F) {
    ∀i ∈ {1,...,k}: h(vᵢ) = f̃(vᵢ) ∧
    ∀i ∈ {k+1,...,n}: h(vᵢ) = 0 ∧
    ∀(α₁,...,αₙ ∈ F): h(∑ᵢ₌₁ⁿ αᵢvᵢ) = ∑ᵢ₌₁ⁿ αᵢh(vᵢ)
  } →

  assert(
    ∀x ∈ V:
      f(x) = f̃(T(x)) →
      = h(T(x)) →
      = h(∑ᵢ₌₁ⁿ fᵢ(x)eᵢ) →
      = ∑ᵢ₌₁ⁿ fᵢ(x)h(eᵢ)
  ) →

  conclude(f ∈ span{f₁,...,fₙ})
}