theorem Isomorphism_Condition() {
  assert(
    ∀S: Set ∧
    ∀(⊕, ⊗): Operation(S) ∧
    ∀(σ, τ): Permutation(S) ∧
    ∀(⊕_σ, ⊗_τ): InducedOperation(S) ∧
    ∀f: Mapping(S → S) ∧
    ∀x,y ∈ S: (
      x ⊕_σ y = σ(x ⊕ y) ∧
      x ⊗_τ y = τ(x ⊗ y)
    ) ⇒
    (isIsomorphism(f, ⟨S,⊕_σ⟩, ⟨S,⊗_τ⟩) ↔
     isIsomorphism(f, ⟨S,⊕⟩, ⟨S,⊗⟩) ∧ f∘σ = τ∘f)
  )
}

proof Isomorphism_Condition() {
  setVar(S: Set) →
  setVar(⊕,⊗: Operation(S)) →
  setVar(σ,τ: Permutation(S)) →
  setVar(f: Mapping(S → S)) →
  
  // Necessary condition
  lemma Necessary() {
    assume(isIsomorphism(f, ⟨S,⊕⟩, ⟨S,⊗⟩) ∧ f∘σ = τ∘f) →
    ∀x,y ∈ S: (
      f(x ⊕_σ y)
      = f(σ(x ⊕ y))        // by definition of ⊕_σ
      = (f∘σ)(x ⊕ y)       // by composition
      = (τ∘f)(x ⊕ y)       // by hypothesis
      = τ(f(x) ⊗ f(y))     // f is homomorphism
      = f(x) ⊗_τ f(y)      // by definition of ⊗_τ
    ) →
    assert(isIsomorphism(f, ⟨S,⊕_σ⟩, ⟨S,⊗_τ⟩))
  }

  // Sufficient condition
  lemma Sufficient() {
    assume(isIsomorphism(f, ⟨S,⊕_σ⟩, ⟨S,⊗_τ⟩)) →
    setVar(e: Identity(⊕,⊗)) →
    
    ∀x,y ∈ S: (
      τ(f(x ⊕ y))
      = (τ∘f)(x ⊕ y)
      = (f∘σ)(x ⊕ y)
      = f(σ(x ⊕ y))
      = f(x ⊕_σ y)
      = f(x) ⊗_τ f(y)
      = τ(f(x) ⊗ f(y))
    ) →
    
    apply(BijectiveInverse(τ)) →
    assert(f(x ⊕ y) = f(x) ⊗ f(y)) →
    assert(isIsomorphism(f, ⟨S,⊕⟩, ⟨S,⊗⟩)) →
    
    ∀x ∈ S: (
      (τ∘f)(x) = (τ∘f)(x ⊕ e) = (f∘σ)(x ⊕ e) = (f∘σ)(x)
    ) →
    assert(τ∘f = f∘σ)
  }

  apply(Necessary()) →
  apply(Sufficient()) →
  assert(theorem)
}