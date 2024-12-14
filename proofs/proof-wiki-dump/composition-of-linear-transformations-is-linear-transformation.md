theorem Composition_Linear_Transformations() {
  let(K: Field) ∧
  let(X,Y,Z: VectorSpace(K)) ∧
  let(T₁: LinearTransform(X → Y)) ∧
  let(T₂: LinearTransform(Y → Z)) →
  assert(
    T₂ ∘ T₁ ∈ LinearTransform(X → Z)
  )
}

proof Composition_Linear_Transformations() {
  let(λ ∈ K) ∧
  let(u,v ∈ X) →
  
  assert(
    (T₂ ∘ T₁)(λu + v) = 
    T₂(T₁(λu + v))
  ) →
  
  apply(LinearProperty(T₁)) →
  assert(
    T₂(T₁(λu + v)) = 
    T₂(λT₁(u) + T₁(v))
  ) →
  
  apply(LinearProperty(T₂)) →
  assert(
    T₂(λT₁(u) + T₁(v)) = 
    λT₂(T₁(u)) + T₂(T₁(v))
  ) →
  
  apply(CompositionDef) →
  assert(
    λT₂(T₁(u)) + T₂(T₁(v)) = 
    λ(T₂ ∘ T₁)(u) + (T₂ ∘ T₁)(v)
  ) →
  
  conclude(
    ∀λ∈K, ∀u,v∈X: (T₂ ∘ T₁)(λu + v) = λ(T₂ ∘ T₁)(u) + (T₂ ∘ T₁)(v)
  ) →
  
  assert(T₂ ∘ T₁ ∈ LinearTransform(X → Z))
}