theorem Automorphism_Group_Is_Subgroup() {
  let(S: AlgebraicStructure, *: Operation) →
  let(AutS: Set := AutomorphismGroup(S, *)) →
  let(ΓS: Set := SymmetricGroup(S)) →
  assert(
    AutS ≤ ΓS
  )
} ↔

proof Automorphism_Group_Is_Subgroup() {
  lemma Automorphism_Definition() {
    assert(
      ∀φ ∈ AutS ↔ [φ: S → S ∧ isIsomorphism(φ)]
    )
  } →
  
  lemma Identity_In_AutS() {
    let(id: Mapping := IdentityMap(S)) →
    assert(id ∈ AutS) →
    assert(AutS ≠ ∅)
  } →
  
  lemma Closure_Property() {
    assert(
      ∀φ₁,φ₂ ∈ AutS → [φ₁ ∘ φ₂ ∈ AutS]
    )
  } →
  
  lemma Inverse_Property() {
    assert(
      ∀φ ∈ AutS → [
        isBijective(φ) ∧
        isIsomorphism(φ) →
        isIsomorphism(φ⁻¹) ∧
        φ⁻¹ ∈ AutS
      ]
    )
  } →
  
  apply(Identity_In_AutS()) →
  apply(Closure_Property()) →
  apply(Inverse_Property()) →
  apply(Two_Step_Subgroup_Test(AutS, ΓS)) →
  assert(AutS ≤ ΓS)
}