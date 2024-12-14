theorem GroupEndomorphismCommute() {
  assert(
    ∀G: Group ∧
    ∀φ: G → G (isEndomorphism(φ)) ∧
    (∀a ∈ G: κ_a ∘ φ = φ ∘ κ_a) →
    [
      H := {x ∈ G: φ(φ(x)) = φ(x)} ∧
      isNormalSubgroup(H,G) ∧
      isAbelian(G/H)
    ]
  )
} ↔

proof GroupEndomorphismCommute() {
  setVar(a,g: G) →
  assert(
    a·φ(g)·a⁻¹ = κ_a(φ(g)) →
    κ_a ∘ φ(g) →
    φ ∘ κ_a(g) →
    φ(κ_a(g)) →
    φ(a·g·a⁻¹)
  ) →
  
  lemma H_Normal() {
    setVar(x ∈ H) →
    assert(
      φ(φ(a·x·a⁻¹)) = φ(a·φ(x)·a⁻¹) →
      φ(a)·φ(φ(x))·φ(a⁻¹) →
      φ(a)·φ(x)·φ(a⁻¹) →
      φ(a·x·a⁻¹)
    ) →
    conclude(a·x·a⁻¹ ∈ H) →
    conclude(isNormalSubgroup(H,G))
  } →

  lemma G_H_Abelian() {
    setVar(a,b: G) →
    assert(
      φ(φ(a⁻¹·b⁻¹·a·b)) = φ(φ(a⁻¹·b⁻¹·a)·φ(b)) →
      φ(a⁻¹·φ(b⁻¹)·a·φ(b)) →
      φ(a⁻¹)·φ(φ(b⁻¹)·a·φ(b)) →
      φ(a⁻¹)·φ(φ(b⁻¹))·φ(a)·φ(b) →
      φ(a⁻¹)·φ(b⁻¹)·φ(a)·φ(b) →
      φ(a⁻¹·b⁻¹·a·b)
    ) →
    conclude(a⁻¹·b⁻¹·a·b ∈ H) →
    conclude(a·H·b·H = b·H·a·H) →
    conclude(isAbelian(G/H))
  } →

  apply(H_Normal()) →
  apply(G_H_Abelian()) →
  conclude(isNormalSubgroup(H,G) ∧ isAbelian(G/H))
}