theorem Adjoint_Identity() {
  let(H: HilbertSpace) →
  let(I_H: IdentityTransform(H)) →
  assert(
    I_H^* = I_H
  )
} ↔

proof Adjoint_Identity() {
  let(H: HilbertSpace) →
  let(I_H: IdentityTransform(H)) →
  
  lemma Identity_Is_Bounded() {
    assert(I_H ∈ BoundedLinearTransform(H))
  } →
  
  apply(Identity_Is_Bounded()) →
  apply(Existence_Uniqueness_Adjoint()) →
  assert(∃I_H^*) →
  
  assert(
    ∀h,g ∈ H ⇒ 
    ⟨I_H h, g⟩_H = ⟨h, I_H^* g⟩_H
  ) →
  
  lemma Identity_Transform_Property() {
    assert(
      ∀h,g ∈ H ⇒
      ⟨I_H h, g⟩_H = ⟨h, I_H g⟩_H
    )
  } →
  
  apply(Identity_Transform_Property()) →
  apply(Existence_Uniqueness_Adjoint()) →
  assert(I_H = I_H^*)
}