theorem Composition_Distance_Preserving() {
  assert(
    ∀(X₁,d₁), (X₂,d₂), (X₃,d₃) ∈ MetricSpaces,
    ∀φ: (X₁,d₁) → (X₂,d₂),
    ∀ψ: (X₂,d₂) → (X₃,d₃),
    (isDistancePreserving(φ) ∧ isDistancePreserving(ψ)) →
    isDistancePreserving(ψ ∘ φ)
  )
}

proof Composition_Distance_Preserving() {
  setVar(x,y: X₁) →
  assert(
    d₁(x,y) = d₂(φ(x),φ(y))
  ) by(isDistancePreserving(φ)) →
  
  assert(
    d₂(φ(x),φ(y)) = d₃(ψ(φ(x)),ψ(φ(y)))
  ) by(isDistancePreserving(ψ)) →
  
  assert(
    d₃(ψ(φ(x)),ψ(φ(y))) = d₃((ψ ∘ φ)(x),(ψ ∘ φ)(y))
  ) by(composition_definition) →
  
  conclude(
    d₁(x,y) = d₃((ψ ∘ φ)(x),(ψ ∘ φ)(y))
  ) →
  
  conclude(
    isDistancePreserving(ψ ∘ φ)
  ) by(distance_preserving_definition)
}