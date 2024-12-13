theorem AngleBisector_DistanceLocus() {
  let(L₁, L₂: Line) →
  let(E: Set := {P | dist(P,L₁) = dist(P,L₂)}) →
  let(F: Set := {P | P ∈ angleBisectors(L₁,L₂)}) →
  assert(E = F)
} ↔

proof AngleBisector_DistanceLocus() {
  // First show F ⊆ E
  lemma F_subset_E() {
    let(P ∈ F) →
    let(M := perpFoot(P,L₁)) →
    let(N := perpFoot(P,L₂)) →
    let(S := intersection(L₁,L₂)) →
    assert(∠PSM = ∠PSN) ∧
    assert(∠PMS = ∠PNS = 90°) ∧
    assert(PS = PS) →
    apply(CongruentTriangles(△PSM,△PSN)) →
    assert(PM = PN) →
    assert(P ∈ E) →
    assert(∀P ∈ F ⇒ P ∈ E) →
    assert(F ⊆ E)
  }

  // Then show E ⊆ F
  lemma E_subset_F() {
    let(S := intersection(L₁,L₂)) →
    assert(S ∈ E ∧ S ∈ F) →
    let(P ∈ E, P ≠ S) →
    assert(P ∉ L₁ ∧ P ∉ L₂) →
    let(M := perpFoot(P,L₁)) →
    let(N := perpFoot(P,L₂)) →
    assert(PM = PN) ∧
    assert(∠PMS = ∠PNS = 90°) →
    apply(PythagoreanTheorem()) →
    assert(SN² + PN² = PS² = SM² + PM²) →
    assert(PM = PN) →
    assert(SM = SN) →
    apply(CongruentTriangles(△PSM,△PSN)) →
    assert(∠PSM = ∠PSN) →
    assert(P ∈ F) →
    assert(∀P ∈ E ⇒ P ∈ F) →
    assert(E ⊆ F)
  }

  apply(F_subset_E()) →
  apply(E_subset_F()) →
  apply(SetEquality(E,F)) →
  assert(E = F)
}