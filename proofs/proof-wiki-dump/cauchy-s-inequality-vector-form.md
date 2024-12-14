theorem CauchyInequality_VectorForm() {
  assert(
    ∀a,b ∈ V (where V is vector space) ⇒
    (a⋅b)² ≤ (a⋅a)(b⋅b)
  )
} ↔

proof CauchyInequality_VectorForm() {
  setVar(a,b: V) →
  setVar(e₁,...,eₙ: standard_basis(V)) →
  
  assert(
    a = ∑ᵢ₌₁ⁿ aᵢeᵢ ∧
    b = ∑ᵢ₌₁ⁿ bᵢeᵢ
  ) →
  
  assert(
    (a⋅b)² = (∑ᵢ₌₁ⁿ aᵢbᵢ)²
  ) by(DotProduct_Definition) →
  
  lemma Cauchy_ScalarForm() {
    assert(
      (∑ᵢ₌₁ⁿ aᵢbᵢ)² ≤ (∑ᵢ₌₁ⁿ aᵢ²)(∑ᵢ₌₁ⁿ bᵢ²)
    )
  } →
  
  apply(Cauchy_ScalarForm()) →
  
  assert(
    (∑ᵢ₌₁ⁿ aᵢ²)(∑ᵢ₌₁ⁿ bᵢ²) = (a⋅a)(b⋅b)
  ) by(DotProduct_Definition) →
  
  conclude(
    (a⋅b)² ≤ (a⋅a)(b⋅b)
  )
}