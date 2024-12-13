theorem Adjoint_Composition() {
  let(𝔽 ∈ {ℝ, ℂ}) ∧
  let(ℍ, 𝕂, 𝕃: HilbertSpace(𝔽)) ∧
  let(A: BoundedLinearTransformation(𝕂 → 𝕃)) ∧
  let(B: BoundedLinearTransformation(ℍ → 𝕂)) →
  assert(
    (A ∘ B)* = B* ∘ A*
  )
} ↔

proof Adjoint_Composition() {
  let(⟨·,·⟩_ℍ: InnerProduct(ℍ)) ∧
  let(⟨·,·⟩_𝕂: InnerProduct(𝕂)) ∧
  let(⟨·,·⟩_𝕃: InnerProduct(𝕃)) ∧
  
  setVar(h ∈ ℍ) ∧
  setVar(l ∈ 𝕃) →
  
  assert(
    ⟨(A ∘ B)h, l⟩_𝕃 = ⟨Bh, A*l⟩_𝕂
  ) →
  
  lemma Adjoint_Definition_A() {
    assert(
      ∀x ∈ 𝕂, y ∈ 𝕃 →
      ⟨Ax, y⟩_𝕃 = ⟨x, A*y⟩_𝕂
    )
  } →
  
  assert(
    ⟨Bh, A*l⟩_𝕂 = ⟨h, B*(A*l)⟩_ℍ
  ) →
  
  lemma Adjoint_Definition_B() {
    assert(
      ∀x ∈ ℍ, y ∈ 𝕂 →
      ⟨Bx, y⟩_𝕂 = ⟨x, B*y⟩_ℍ
    )
  } →
  
  lemma Adjoint_Uniqueness() {
    assert(
      ⟨(A ∘ B)h, l⟩_𝕃 = ⟨h, (A ∘ B)*l⟩_ℍ
    )
  } →
  
  apply(Adjoint_Uniqueness()) →
  assert(
    (A ∘ B)* = B* ∘ A*
  )
}