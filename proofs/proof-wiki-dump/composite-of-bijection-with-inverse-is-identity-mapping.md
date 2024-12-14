theorem CompositeOfBijectionWithInverse() {
  assert(
    ∀f: S → T, f is_bijection ⇒
    (f⁻¹ ∘ f = Is ∧ f ∘ f⁻¹ = It)
  )
} ↔

proof CompositeOfBijectionWithInverse() {
  setVar(f: S → T, f is_bijection) →
  apply(InverseOfBijectionIsBijection()) →
  assert(f⁻¹ is_bijection) →
  
  lemma FirstComposition() {
    setVar(x ∈ S) →
    assert(∃y ∈ T: y = f(x) ⇒ x = f⁻¹(y)) →
    assert((f⁻¹ ∘ f)(x) = f⁻¹(f(x))) by_def(CompositionOfMappings) →
    assert(f⁻¹(f(x)) = f⁻¹(y)) by_substitution →
    assert(f⁻¹(y) = x) by_hypothesis →
    assert(x = Is(x)) by_def(IdentityMapping) →
    apply(DomainAndCodomainOfComposite()) →
    assert(dom(f⁻¹ ∘ f) = S ∧ cod(f⁻¹ ∘ f) = S) →
    assert(f⁻¹ ∘ f = Is) by_def(EqualityOfMappings)
  } →

  lemma SecondComposition() {
    setVar(y ∈ T) →
    assert(∃x ∈ S: x = f⁻¹(y) ⇒ y = f(x)) →
    assert((f ∘ f⁻¹)(y) = f(f⁻¹(y))) by_def(CompositionOfMappings) →
    assert(f(f⁻¹(y)) = f(x)) by_substitution →
    assert(f(x) = y) by_hypothesis →
    assert(y = It(y)) by_def(IdentityMapping) →
    apply(DomainAndCodomainOfComposite()) →
    assert(dom(f ∘ f⁻¹) = T ∧ cod(f ∘ f⁻¹) = T) →
    assert(f ∘ f⁻¹ = It) by_def(EqualityOfMappings)
  } →

  assert(f⁻¹ ∘ f = Is ∧ f ∘ f⁻¹ = It)
}