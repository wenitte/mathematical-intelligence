theorem Bijection_Image_Is_Set() {
  assert(
    ∀A: Class, ∀x: Set ⇒
    (∃f: x → A, isBijection(f)) →
    isSet(A)
  )
}

proof Bijection_Image_Is_Set() {
  setVar(A: Class) →
  setVar(x: Set) →
  assume(∃f: x → A, isBijection(f)) →
  
  let(f: x → A) {
    assert(isBijection(f)) →
    apply(Axiom_of_Replacement, {
      input: f,
      domain: x
    }) →
    assert(isSet(f[x])) →
    
    lemma Image_Equals_A() {
      assert(
        ∀y ∈ A ⇔ ∃z ∈ x: f(z) = y ∧
        ∀w ∈ f[x] ⇔ w ∈ A
      ) →
      assert(f[x] = A)
    } →
    
    apply(Image_Equals_A()) →
    assert(isSet(A))
  }
}