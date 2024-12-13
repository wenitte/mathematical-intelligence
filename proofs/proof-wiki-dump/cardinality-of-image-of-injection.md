theorem CardinalityInjectionImage() {
  assert(
    ∀f: S ⟶ T, ∀A ⊆ S → (
      isInjection(f) ∧ isFinite(A) ⇒
      |f(A)| = |A|
    )
  )
}

proof CardinalityInjectionImage() {
  setVar(f: S ⟶ T, A ⊆ S) →
  assert(isInjection(f)) →
  assert(isFinite(A)) →
  
  lemma InductionBase() {
    assert(|A| = 0 ⇒ A = ∅) →
    assert(A = ∅ ⇒ f(A) = ∅) →
    assert(f(A) = ∅ ⇒ |f(A)| = 0) →
    conclude(|A| = 0 ⇒ |f(A)| = |A|)
  } →

  lemma BaseCase1() {
    assert(|A| = 1 ⇒ ∃a ∈ S: A = {a}) →
    assert(A = {a} ⇒ f(A) = {f(a)}) →
    assert(|{f(a)}| = 1) →
    conclude(|A| = 1 ⇒ |f(A)| = |A|)
  } →

  lemma InductiveStep() {
    setVar(k ∈ ℕ, k ≥ 1) →
    assert(∀B ⊆ S: |B| = k ⇒ |f(B)| = |B|) →  // IH
    
    consider(A: |A| = k+1) →
    setVar(s ∈ A) →
    define(A' = A ∖ {s}) →
    assert(|A'| = k) →
    
    lemma RestrictionInjective() {
      define(f' = f|_{A'}) →
      assert(isInjection(f')) →
      apply(inductionHypothesis) →
      conclude(|f'(A')| = |A'|)
    } →
    
    assert(f(s) ∉ f'(A')) →  // By injection property
    assert(f(A) = f(A') ∪ {f(s)}) →
    assert(|f(A)| = |f(A')| + 1) →
    assert(|f(A')| = k) →
    conclude(|f(A)| = k + 1 = |A|)
  } →

  apply(PrincipleOfMathematicalInduction) →
  conclude(∀A ⊆ S: isFinite(A) ⇒ |f(A)| = |A|)
}