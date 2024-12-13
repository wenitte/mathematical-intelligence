theorem Bijection_iff_Inverse() {
  assert(
    ∀S,T: Set ∧ ∀f: S → T ⇒
    (isBijection(f) ↔ 
      ∃g: T → S: (g ∘ f = Is ∧ f ∘ g = It))
  )
} ↔

proof Bijection_iff_Inverse() {
  // Necessary Condition
  branch_forward {
    assume(isBijection(f)) →
    assert(∀y ∈ T: ∃!x ∈ S: f(x) = y) →
    constructMap(g: T → S) →
    assert(∀y ∈ T: ∃x ∈ S: g(y) = x) →
    
    forall(y ∈ T) {
      setVar(x = g(g(y))) →
      assert(y = f(g(y))) →
      assert(y = (f ∘ g)(y))
    } →

    forall(x ∈ S) {
      assert(x = g(f(x))) →
      assert(x = (g ∘ f)(x))
    } →

    conclude(g ∘ f = Is ∧ f ∘ g = It)
  }

  // Sufficient Condition
  branch_backward {
    assume(∃g: T → S: (g ∘ f = Is ∧ f ∘ g = It)) →
    
    lemma Composite_Identity_Injection() {
      assert(g ∘ f = Is → isInjection(f))
    } →
    
    lemma Composite_Identity_Surjection() {
      assert(f ∘ g = It → isSurjection(f))
    } →
    
    apply(Composite_Identity_Injection()) →
    apply(Composite_Identity_Surjection()) →
    
    assert(isInjection(f) ∧ isSurjection(f)) →
    conclude(isBijection(f))
  }
}