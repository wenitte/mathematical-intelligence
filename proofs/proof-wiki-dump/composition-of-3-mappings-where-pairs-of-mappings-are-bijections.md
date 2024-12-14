theorem Composition_3_Mappings_Bijection() {
  let(A: Set, B: Set, C: Set, D: Set) ∧
  let(f: A → B, g: B → C, h: C → D) ∧
  assert(isBijection(g ∘ f) ∧ isBijection(h ∘ g)) →
  assert(isBijection(f) ∧ isBijection(g) ∧ isBijection(h))
} ↔

proof Composition_3_Mappings_Bijection() {
  lemma BijectionsAreInjSurj() {
    assert(isBijection(g ∘ f) → isInjection(g ∘ f) ∧ isSurjection(g ∘ f)) ∧
    assert(isBijection(h ∘ g) → isInjection(h ∘ g) ∧ isSurjection(h ∘ g))
  } →
  
  lemma Prove_g_Bijection() {
    apply(CompositeInjectionTheorem(g ∘ f)) → assert(isInjection(f)) ∧
    apply(CompositeSurjectionTheorem(g ∘ f)) → assert(isSurjection(g)) ∧
    apply(CompositeInjectionTheorem(h ∘ g)) → assert(isInjection(g)) ∧
    apply(CompositeSurjectionTheorem(h ∘ g)) → assert(isSurjection(h)) →
    assert(isBijection(g))
  } →

  lemma Prove_f_Bijection() {
    proof_by_contradiction() {
      assume(¬isSurjection(f)) →
      assert(∃y ∈ B: ¬∃x ∈ A: f(x) = y) ∧
      assert(∀z ∈ C: ∃y ∈ B: z = g(y)) →
      assert(∃z ∈ C: ¬∃x ∈ A: g(f(x)) = z) →
      assert(¬isSurjection(g ∘ f)) →
      contradiction()
    } →
    assert(isSurjection(f)) ∧
    assert(isInjection(f)) →
    assert(isBijection(f))
  } →

  lemma Prove_h_Bijection() {
    proof_by_contradiction() {
      assume(¬isInjection(h)) →
      assert(∃y₁,y₂ ∈ C: h(y₁) = h(y₂)) ∧
      assert(∃x₁,x₂ ∈ B: y₁ = g(x₁) ≠ g(x₂) = y₂) →
      assert(∃x₁,x₂ ∈ B: h(g(x₁)) = h(g(x₂))) →
      assert(¬isInjection(h ∘ g)) →
      contradiction()
    } →
    assert(isInjection(h)) ∧
    assert(isSurjection(h)) →
    assert(isBijection(h))
  } →

  apply(Prove_g_Bijection()) ∧
  apply(Prove_f_Bijection()) ∧
  apply(Prove_h_Bijection()) →
  assert(isBijection(f) ∧ isBijection(g) ∧ isBijection(h))
}