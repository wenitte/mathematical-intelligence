theorem Binary_Product_Is_Limit() {
  assert(
    ∀C:Metacategory ∧ ∀C₁,C₂:Obj(C) ∧ exists(C₁×C₂) →
    [C₁×C₂ = lim(D:2→C) where D₀:=C₁ ∧ D₁:=C₂ ∧ 2=DiscreteCategory({0,1})]
  )
} ↔

proof Binary_Product_Is_Limit() {
  setVar(C:Metacategory, C₁:Obj(C), C₂:Obj(C)) →
  
  lemma Cone_Structure() {
    assert(
      Cone(D) ↔ ∃C:Obj(C) ∧ ∃f₁:C→C₁ ∧ ∃f₂:C→C₂
    )
  } →
  
  lemma UMP_Product() {
    assert(
      ∀cone∈Cone(D) → ∃!u:C→(C₁×C₂) ∧
      [p₁∘u = f₁ ∧ p₂∘u = f₂]
    )
  } →
  
  apply(Cone_Structure()) →
  apply(UMP_Product()) →
  
  assert(
    ∀u:C→(C₁×C₂) →
    [p₁∘u = f₁ ∧ p₂∘u = f₂] ↔ 
    [u is_cone_morphism]
  ) →
  
  assert(
    ∀cone∈Cone(D) →
    ∃!morphism:cone→⟨C₁×C₂,p₁,p₂⟩
  ) →
  
  assert(
    ⟨C₁×C₂,p₁,p₂⟩ is_terminal_in Cone(D)
  ) →
  
  conclude(
    C₁×C₂ = lim(D)
  )
}