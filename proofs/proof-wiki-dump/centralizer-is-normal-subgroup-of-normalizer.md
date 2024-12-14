theorem Centralizer_Normal_In_Normalizer() {
  setContext(G: Group) →
  assert(
    ∀H ≤ G ⇒ (
      let CG(H) := centralizer(H, G) ∧
      let NG(H) := normalizer(H, G) ∧
      let Aut(H) := automorphismGroup(H) →
      (CG(H) ⟨ NG(H)) ∧
      (NG(H)/CG(H) ≅ K where K ≤ Aut(H))
    )
  )
} ↔

proof Centralizer_Normal_In_Normalizer() {
  setVar(H ≤ G) →
  construct(φ: NG(H) → Aut(H)) {
    define(φ(x) := (g ↦ xgx⁻¹)) →
    assert(φ(x) ∈ Aut(H)) by Inner_Automorphism_Is_Automorphism()
  } →
  
  lemma Homomorphism_Property() {
    assert(
      ∀x,y ∈ NG(H) ⇒ (
        φ(x)∘φ(y) = (g ↦ x(ygy⁻¹)x⁻¹) =
        (g ↦ (xy)g(xy)⁻¹) = φ(xy)
      )
    )
  } →

  lemma Kernel_Equals_Centralizer() {
    assert(
      ∀x ∈ NG(H) ⇒ (
        x ∈ ker(φ) ↔ 
        (∀g ∈ H ⇒ g = xgx⁻¹) ↔
        (∀g ∈ H ⇒ gx = xg) ↔
        x ∈ CG(H)
      )
    )
  } →

  apply(Kernel_Is_Normal_Subgroup()) →
  assert(CG(H) ⟨ NG(H)) →
  
  apply(First_Isomorphism_Theorem()) →
  assert(NG(H)/CG(H) ≅ Im(φ)) →
  
  apply(Image_Is_Subgroup()) →
  assert(Im(φ) ≤ Aut(H)) →
  
  conclude(
    (CG(H) ⟨ NG(H)) ∧ 
    (NG(H)/CG(H) ≅ K where K ≤ Aut(H))
  )
}