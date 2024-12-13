theorem BoundedLinearTransformation_InducesBoundedSesquilinearForm() {
  let(𝔽: SubField(ℂ))
  let(V, U: InnerProductSpace(𝔽))
  let(A: BoundedLinearTransform(V → U))
  let(B: BoundedLinearTransform(U → V))
  let(u: Function(V × U → ℂ))
  let(v: Function(V × U → ℂ))
  assert(
    ∀h,k [u(h,k) = ⟨Ah,k⟩_U ∧ v(h,k) = ⟨h,Bk⟩_V] →
    [IsBoundedSesquilinear(u) ∧ IsBoundedSesquilinear(v)]
  )
} ↔

proof BoundedLinearTransformation_InducesBoundedSesquilinearForm() {
  // Prove sesquilinearity
  lemma SesquilinearityFirstArg() {
    setVar(α: 𝔽, h₁,h₂: V, k: U) →
    assert(u(αh₁ + h₂, k) = ⟨A(αh₁ + h₂),k⟩_U) →
    assert(= α⟨Ah₁,k⟩_U + ⟨Ah₂,k⟩_U) →
    assert(= αu(h₁,k) + u(h₂,k)) ∧
    
    assert(v(αh₁ + h₂, k) = ⟨αh₁ + h₂,Bk⟩_V) →
    assert(= α⟨h₁,Bk⟩_V + ⟨h₂,Bk⟩_V) →
    assert(= αv(h₁,k) + v(h₂,k))
  } →

  lemma SesquilinearitySecondArg() {
    setVar(h: V, k₁,k₂: U, α: 𝔽) →
    assert(u(h, αk₁ + k₂) = ⟨Ah,αk₁ + k₂⟩_U) →
    assert(= ᾱ⟨Ah,k₁⟩_U + ⟨Ah,k₂⟩_U) →
    assert(= ᾱu(h,k₁) + u(h,k₂)) ∧

    assert(v(h, αk₁ + k₂) = ⟨h,B(αk₁ + k₂)⟩_V) →
    assert(= ⟨h,αBk₁ + Bk₂⟩_V) →
    assert(= ᾱv(h,k₁) + v(h,k₂))
  } →

  // Prove boundedness
  lemma Boundedness() {
    setVar(h: V, k: U) →
    apply(CauchyBunyakovskySchwarz) →
    assert(|u(h,k)| = |⟨Ah,k⟩_U| ≤ ‖Ah‖_U‖k‖_U) →
    assert(≤ ‖A‖‖h‖_V‖k‖_U) ∧

    assert(|v(h,k)| = |⟨h,Bk⟩_V| ≤ ‖h‖_V‖Bk‖_V) →
    assert(≤ ‖B‖‖h‖_V‖k‖_U)
  } →

  conclude(IsBoundedSesquilinear(u) ∧ IsBoundedSesquilinear(v))
}