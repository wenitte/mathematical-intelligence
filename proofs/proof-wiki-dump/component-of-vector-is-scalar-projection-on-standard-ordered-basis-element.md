theorem Vector_Component_Projection() {
  assert(
    ∀S ∈ ℝ³,
    ∀{e₁, e₂, e₃} ∈ OrthonormalBasis(S),
    ∀a ∈ S where a = a₁e₁ + a₂e₂ + a₃e₃ 
    ⇒ (a·eᵢ = aᵢ)
  )
} ↔

proof Vector_Component_Projection() {
  setVar(a: Vector(S)) →
  setVar(eᵢ: BasisVector(S)) →
  
  lemma Einstein_Summation() {
    assert(a·eᵢ = aⱼeⱼ·eᵢ)
  } →
  apply(Einstein_Summation()) →
  
  lemma Orthonormal_Dot_Product() {
    assert(eⱼ·eᵢ = δᵢⱼ)
  } →
  apply(Orthonormal_Dot_Product()) →
  
  assert(aⱼeⱼ·eᵢ = aⱼδᵢⱼ) →
  assert(aⱼδᵢⱼ = aᵢ)
}