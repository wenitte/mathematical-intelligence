theorem LinearDependenceKernel() {
  assert(
    ∀V: VectorSpace[F] ∧
    ∀f,f₁,...,fₙ: LinearFunctional(V → F) ∧
    (⋂ᵢ₌₁ⁿ ker(fᵢ) ⊆ ker(f)) →
    ∃α₁,...,αₙ ∈ F: ∀v ∈ V: f(v) = Σᵢ₌₁ⁿ αᵢfᵢ(v)
  )
} ↔

proof LinearDependenceKernel() {
  lemma VectorConstruction() {
    setVar(i: 1...n) →
    assert(∃wᵢ ∈ V:
      wᵢ ∉ ker(fᵢ) ∧
      ∀j≠i: wᵢ ∈ ker(fⱼ)
    )
  } →

  case ExistentVectors() {
    setVar(vᵢ = wᵢ/fᵢ(wᵢ)) →
    assert(fᵢ(vᵢ) = 1) ∧
    assert(∀j≠i: fⱼ(vᵢ) = 0) →
    
    setVar(v: V) →
    setVar(w = v - Σᵢ₌₁ⁿ fᵢ(v)vᵢ) →
    
    assert(
      ∀j: fⱼ(w) = fⱼ(v) - Σᵢ₌₁ⁿ fᵢ(v)fⱼ(vᵢ) = fⱼ(v) - fⱼ(v) = 0
    ) →
    
    apply(Premise: ⋂ᵢ₌₁ⁿ ker(fᵢ) ⊆ ker(f)) →
    assert(f(w) = 0) →
    
    setVar(αᵢ = f(vᵢ)) →
    assert(f(v) = Σᵢ₌₁ⁿ αᵢfᵢ(v))
  } →
  
  case NonExistentVector() {
    assert(∃i: ⋂ₖ₌₁ⁿ ker(fₖ) = ⋂ⱼ≠ᵢ ker(fⱼ)) →
    apply(Induction[n-1]) →
    setVar(αᵢ = 0) →
    assert(f(v) = Σᵢ₌₁ⁿ αᵢfᵢ(v))
  }
}