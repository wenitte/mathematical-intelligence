theorem Automorphism_Group_C3() {
  assert(
    ∀ξ ∈ Aut(C₃) ⇒ Aut(C₃) = {φ, θ} ∧
    C₃ = ⟨ℤ₃, +₃⟩
  )
} ↔

proof Automorphism_Group_C3() {
  setVar(ξ: Aut(C₃)) →
  
  lemma Identity_Preservation() {
    assert(
      ∀ξ ∈ Aut(C₃) ⇒ ξ([0]₃) = [0]₃
    )
  } →
  
  apply(Identity_Preservation()) →
  
  lemma Generator_Image() {
    assert(
      ξ([1]₃) ∈ {[1]₃, [2]₃} ∧
      (ξ([1]₃) = [1]₃ ∨ ξ([1]₃) = [2]₃)
    )
  } →
  
  let φ := {
    φ([0]₃) = [0]₃ ∧
    φ([1]₃) = [1]₃ ∧
    φ([2]₃) = [2]₃
  } →
  
  let θ := {
    θ([0]₃) = [0]₃ ∧
    θ([1]₃) = [2]₃ ∧
    θ([2]₃) = [1]₃
  } →
  
  lemma Bijection_Check() {
    assert(
      (φ, θ ∈ Bij(C₃)) ∧
      (φ, θ ∈ Hom(C₃, C₃))
    )
  } →
  
  apply(Subgroup_Of_Symmetric_Group) →
  
  assert(
    {φ, θ} ≤ Sym(C₃) ∧
    |Aut(C₃)| = 2 ∧
    Aut(C₃) = {φ, θ}
  )
}