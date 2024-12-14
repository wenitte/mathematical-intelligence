theorem CompositionOfSurjections() {
  assert(
    ∀f,g [ 
      (f: S₁ → S₂ ∧ g: S₂ → S₃) ∧
      (isSurjective(f) ∧ isSurjective(g)) 
      ⇒ isSurjective(g ∘ f)
    ]
  )
} ↔

proof CompositionOfSurjections() {
  setVar(f: S₁ → S₂, g: S₂ → S₃) →
  assume(isSurjective(f) ∧ isSurjective(g)) →
  
  lemma SurjectiveG() {
    assert(∀z ∈ S₃ ⇒ ∃y ∈ S₂: g(y) = z)
  } →
  
  lemma SurjectiveF() {
    assert(∀y ∈ S₂ ⇒ ∃x ∈ S₁: f(x) = y)
  } →
  
  forAll(z ∈ S₃) {
    apply(SurjectiveG()) →
    exists(y ∈ S₂: g(y) = z) →
    apply(SurjectiveF()) →
    exists(x ∈ S₁: f(x) = y) →
    
    assert(
      (g ∘ f)(x) = g(f(x)) = g(y) = z
    ) →
    
    conclude(∃x ∈ S₁: (g ∘ f)(x) = z)
  } →
  
  conclude(isSurjective(g ∘ f))
}