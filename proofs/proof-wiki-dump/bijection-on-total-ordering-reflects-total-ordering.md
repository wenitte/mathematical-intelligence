theorem Bijection_Total_Ordering_Reflection() {
  assert(
    ∀S,T: Set, ∀≤: Relation, ∀f: S → T,
    let R = {(f(x), f(y)) | x ≤ y} →
    (isBijection(f) ↔ isTotalOrdering(R))
  )
}

proof Bijection_Total_Ordering_Reflection() {
  // Sufficient condition
  setBlock Sufficient() {
    assume(isBijection(f)) →
    assert(isSurjection(f)) →
    apply(Surjection_Reflects_Preordering) →
    assert(isPreordering(R)) →
    
    // Prove antisymmetry
    lemma Antisymmetry() {
      setVar(a,b: T) →
      assume(aRb ∧ bRa) →
      assert(∃x∈S: f(x)=a) ∧ assert(∃y∈S: f(y)=b) →
      assert(x ≤ y ∧ y ≤ x) →
      apply(Antisymmetry_Of_≤) →
      assert(x = y) →
      assert(f(x) = f(y)) →
      assert(a = b)
    }

    // Prove connectedness
    lemma Connectedness() {
      setVar(a,b: T) →
      assert(∃x∈S: f(x)=a) ∧ assert(∃y∈S: f(y)=b) →
      apply(Connectedness_Of_≤) →
      assert(x ≤ y ∨ y ≤ x) →
      assert(f(x)Rf(y) ∨ f(y)Rf(x)) →
      assert(aRb ∨ bRa)
    }

    apply(Antisymmetry()) →
    apply(Connectedness()) →
    assert(isTotalOrdering(R))
  }

  // Necessary condition
  setBlock Necessary() {
    assume(isTotalOrdering(R)) →
    assert(isPreordering(R)) →
    apply(Surjection_Reflects_Preordering) →
    assert(isSurjection(f)) →
    
    lemma Injection() {
      setVar(x,y: S) →
      assume(x ≠ y) →
      assert(x ≤ y ∨ y ≤ x) →
      assert(¬(x ≤ y ∧ y ≤ x)) →
      assert(f(x)Rf(y) ∨ f(y)Rf(x)) →
      assert(¬(f(x)Rf(y) ∧ f(y)Rf(x))) →
      assert(f(x) ≠ f(y))
    }

    apply(Injection()) →
    assert(isInjection(f)) →
    assert(isBijection(f))
  }

  apply(Sufficient()) →
  apply(Necessary()) →
  assert(isBijection(f) ↔ isTotalOrdering(R))
}