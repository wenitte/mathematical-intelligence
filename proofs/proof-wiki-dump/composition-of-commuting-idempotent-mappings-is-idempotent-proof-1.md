theorem ComposingCommutingIdempotents() {
  assert(
    ∀S: Set ∧ 
    ∀f,g: S → S ∧
    (∀x ∈ S: f(f(x)) = f(x)) ∧ 
    (∀x ∈ S: g(g(x)) = g(x)) ∧
    (f ∘ g = g ∘ f) 
    ⇒ 
    ∀x ∈ S: (f ∘ g)(f ∘ g)(x) = (f ∘ g)(x)
  )
}

proof ComposingCommutingIdempotents() {
  setVar(S: Set) →
  setVar(f,g: S → S) →
  assume(∀x ∈ S: f(f(x)) = f(x)) →
  assume(∀x ∈ S: g(g(x)) = g(x)) →
  assume(f ∘ g = g ∘ f) →
  
  assert((f ∘ g) ∘ (f ∘ g) = f ∘ (g ∘ f) ∘ g) by AssociativityOfComposition() →
  
  assert(f ∘ (g ∘ f) ∘ g = f ∘ (f ∘ g) ∘ g) by CommutativityHypothesis() →
  
  assert(f ∘ (f ∘ g) ∘ g = (f ∘ f) ∘ (g ∘ g)) by AssociativityOfComposition() →
  
  assert((f ∘ f) ∘ (g ∘ g) = f ∘ g) by IdempotenceHypothesis() →
  
  conclude((f ∘ g) ∘ (f ∘ g) = f ∘ g)
}