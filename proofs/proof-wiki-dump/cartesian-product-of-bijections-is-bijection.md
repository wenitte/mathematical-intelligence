theorem CartesianProductBijection() {
  assert(
    ∀S₁,S₂,T₁,T₂ ∈ Set ∧
    ∀f₁: S₁ → T₁, f₂: S₂ → T₂ ∈ Bijection ∧
    let f₁×f₂: S₁×S₂ → T₁×T₂ ∧
    ∀(s₁,s₂) ∈ S₁×S₂: (f₁×f₂)(s₁,s₂) = (f₁(s₁), f₂(s₂)) 
    ⇒ (f₁×f₂) ∈ Bijection
  )
}

proof CartesianProductBijection() {
  // Prove surjectivity
  assert(f₁,f₂ ∈ Bijection ⇒ f₁,f₂ ∈ Surjection) →
  setVar((t₁,t₂) ∈ T₁×T₂) →
  assert(∃s₁ ∈ S₁: f₁(s₁) = t₁) ∧
  assert(∃s₂ ∈ S₂: f₂(s₂) = t₂) →
  assert(∃(s₁,s₂) ∈ S₁×S₂: (f₁×f₂)(s₁,s₂) = (t₁,t₂)) →
  conclude(f₁×f₂ ∈ Surjection) →

  // Prove injectivity
  assert(f₁,f₂ ∈ Bijection ⇒ f₁,f₂ ∈ Injection) →
  setVar((a₁,a₂),(b₁,b₂) ∈ S₁×S₂) →
  setVar((c₁,c₂) = (f₁×f₂)(a₁,a₂)) →
  setVar((d₁,d₂) = (f₁×f₂)(b₁,b₂)) →
  
  lemma OrderedPairEquality() {
    assert((c₁,c₂) = (d₁,d₂) ⇒ c₁ = d₁ ∧ c₂ = d₂)
  } →
  
  assert(f₁(a₁) = c₁ ∧ f₁(b₁) = d₁) →
  assert(f₂(a₂) = c₂ ∧ f₂(b₂) = d₂) →
  
  assert(f₁ ∈ Injection ⇒ (c₁ = d₁ ⇒ a₁ = b₁)) →
  assert(f₂ ∈ Injection ⇒ (c₂ = d₂ ⇒ a₂ = b₂)) →
  
  conclude((c₁,c₂) = (d₁,d₂) ⇒ (a₁,a₂) = (b₁,b₂)) →
  conclude(f₁×f₂ ∈ Injection) →

  // Final conclusion
  assert(f₁×f₂ ∈ Surjection ∧ f₁×f₂ ∈ Injection ⇒ f₁×f₂ ∈ Bijection) →
  conclude(f₁×f₂ ∈ Bijection)
}