theorem Inflationary_Idempotent_Composition() {
  let(S: OrderedSet) →
  let(f,g: Mapping(S → S)) →
  assume(
    isInflationary(f) ∧ isIdempotent(f) ∧
    isInflationary(g) ∧ isIdempotent(g)
  ) →
  assert(
    (isIdempotent(f∘g) ∧ isIdempotent(g∘f)) ↔
    (f∘g = g∘f) ↔
    (Img(f∘g) = Img(g∘f))
  )
}

proof Inflationary_Idempotent_Composition() {
  // (2) → (1)
  lemma TwoImpliesOne() {
    assume(f∘g = g∘f) →
    apply(Commuting_Idempotent_Mappings_Theorem()) →
    assert(isIdempotent(f∘g) ∧ isIdempotent(g∘f))
  }

  // (1) → (2)
  lemma OneImpliesTwo() {
    assume(isIdempotent(f∘g) ∧ isIdempotent(g∘f)) →
    ∀x ∈ S: {
      assert((f∘g)∘(f∘g)(x) = (f∘g)(x)) →
      assert(f(g(f(g(x)))) = f(g(x))) →
      
      // By reflexivity and inflationarity
      assert(f(g(f(g(x)))) ≼ f(g(x))) →
      assert(g(f(g(x))) ≼ f(g(f(g(x))))) →
      
      // By transitivity
      assert(g(f(g(x))) ≼ f(g(x))) →
      
      // By inflationarity of g
      assert(f(g(x)) ≼ g(f(g(x)))) →
      
      // By antisymmetry
      assert(g(f(g(x))) = f(g(x)))
    } →
    assert(g∘f∘g = f∘g) →
    
    // Symmetric argument
    assert(f∘g∘f = g∘f) →
    
    // Combining results
    assert(f∘g = f∘(g∘f∘g) = f∘(g∘f) = g∘f)
  }

  // (2) → (3)
  lemma TwoImpliesThree() {
    assume(f∘g = g∘f) →
    assert(Img(f∘g) = Img(g∘f))
  }

  // (3) → (1)
  lemma ThreeImpliesOne() {
    assume(Img(f∘g) = Img(g∘f)) →
    apply(Idempotent_Mappings_Composition_Theorem()) →
    assert(isIdempotent(f∘g) ∧ isIdempotent(g∘f))
  }

  // Chain implications
  apply(TwoImpliesOne()) →
  apply(OneImpliesTwo()) →
  apply(TwoImpliesThree()) →
  apply(ThreeImpliesOne())
}