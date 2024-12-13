theorem Bijection_Open_iff_Closed() {
  assert(
    ∀T₁(S₁,τ₁), T₂(S₂,τ₂) ∈ TopologicalSpaces ∧
    ∀f: T₁ → T₂ [IsBijection(f)] ⇒
    [IsOpen(f) ↔ IsClosed(f)]
  )
}

proof Bijection_Open_iff_Closed() {
  setVar(f: T₁ → T₂) →
  assume(IsBijection(f)) →
  
  // Forward direction
  assume(IsOpen(f)) →
  assert(∀H ∈ τ₁ ⇒ f[H] ∈ τ₂) →
  
  lemma Bijection_Complement() {
    assert(
      ∀H ∈ τ₁ ⇒ 
      f[S₁\H] = f[S₁]\f[H] = S₂\f[H]
    )
  } →
  
  apply(Bijection_Complement()) →
  assert(IsClosed(S₁\H) in T₁) →
  assert(IsClosed(S₂\f[H]) in T₂) →
  conclude(IsClosed(f)) →
  
  // Reverse direction
  assume(IsClosed(f)) →
  apply(Bijection_Complement()) →
  assert(IsClosed(S₁\H) in T₁ ⇒ IsClosed(f[S₁\H]) in T₂) →
  assert(IsClosed(S₂\f[H]) in T₂ ⇒ IsOpen(f[H]) in T₂) →
  conclude(IsOpen(f)) →
  
  conclude(IsOpen(f) ↔ IsClosed(f))
}