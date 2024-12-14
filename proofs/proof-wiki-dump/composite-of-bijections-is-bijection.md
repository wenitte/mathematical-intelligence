theorem Composite_Bijections_is_Bijection() {
  assert(
    ∀f,g (
      (Dom(f) = Cdm(g)) ∧
      Bijection(f) ∧ Bijection(g) ⇒
      Bijection(f ∘ g)
    )
  )
} ↔

proof Composite_Bijections_Method1() {
  setVar(f,g: Mapping) →
  assert(Bijection(f) ∧ Bijection(g)) →
  assert(Bijection(x) → Injection(x)) →
  assert(Injection(f) ∧ Injection(g)) →
  lemma Composite_Injections() {
    assert(Injection(f) ∧ Injection(g) → Injection(f ∘ g))
  } →
  assert(Bijection(x) → Surjection(x)) →
  assert(Surjection(f) ∧ Surjection(g)) →
  lemma Composite_Surjections() {
    assert(Surjection(f) ∧ Surjection(g) → Surjection(f ∘ g))
  } →
  assert(Injection(f ∘ g) ∧ Surjection(f ∘ g)) →
  assert(Bijection(f ∘ g))
} ↔

proof Composite_Bijections_Method2() {
  setVar(g: X → Y, f: Y → Z) →
  assert(Bijection(f) ∧ Bijection(g)) →
  lemma Inverse_Bijection() {
    assert(Bijection(f) ↔ Bijection(f⁻¹))
  } →
  assert(Bijection(f⁻¹) ∧ Bijection(g⁻¹)) →
  lemma Inverse_Composite() {
    assert((f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹)
  } →
  assert((f ∘ g) ∘ (g⁻¹ ∘ f⁻¹) = Iₖ) →
  assert((g⁻¹ ∘ f⁻¹) ∘ (f ∘ g) = Iₓ) →
  assert(Bijection(f ∘ g))
}