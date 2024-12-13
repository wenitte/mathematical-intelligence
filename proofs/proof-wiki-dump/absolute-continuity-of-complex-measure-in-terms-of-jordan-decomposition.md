theorem AbsoluteContinuityComplexMeasure() {
  let(X: MeasurableSpace, Σ: SigmaAlgebra) →
  let(μ: Measure(X,Σ)) →
  let(ν: ComplexMeasure(X,Σ)) →
  let((ν₁,ν₂,ν₃,ν₄): JordanDecomposition(ν)) →
  
  assert(
    IsAbsolutelyContinuous(ν,μ) ↔ 
    (IsAbsolutelyContinuous(ν₁,μ) ∧ 
     IsAbsolutelyContinuous(ν₂,μ) ∧
     IsAbsolutelyContinuous(ν₃,μ) ∧ 
     IsAbsolutelyContinuous(ν₄,μ))
  )
}

proof AbsoluteContinuityComplexMeasure() {
  let(|ν|: Variation(ν)) →
  
  // Sufficient condition
  block SufficientCondition {
    assume(∀i∈{1,2,3,4}: IsAbsolutelyContinuous(νᵢ,μ)) →
    assert(∀A∈Σ: μ(A)=0 → (ν₁(A)=0 ∧ ν₂(A)=0 ∧ ν₃(A)=0 ∧ ν₄(A)=0)) →
    apply(BoundForVariation) →
    assert(|ν|(A) ≤ ν₁(A) + ν₂(A) + ν₃(A) + ν₄(A)) →
    assert(|ν|(A) ≤ 0) →
    assert(|ν|(A) = 0) →
    assert(∀A∈Σ: μ(A)=0 → |ν|(A)=0) →
    conclude(IsAbsolutelyContinuous(ν,μ))
  }

  // Necessary condition
  block NecessaryCondition {
    assume(IsAbsolutelyContinuous(ν,μ)) →
    assert(IsAbsolutelyContinuous(|ν|,μ)) →
    let(νᵣ: RealPart(ν)) →
    let(νᵢ: ImaginaryPart(ν)) →
    let((Pᵣ,Nᵣ): HahnDecomposition(νᵣ)) →
    
    // For ν₁ and ν₂
    assert(∀A∈Σ: ν₁(A) = νᵣ(A∩Pᵣ)) →
    assert(∀A∈Σ: ν₂(A) = -νᵣ(A∩Nᵣ)) →
    apply(IntersectionIsSubset) →
    assert(∀A∈Σ: μ(A)=0 → (ν₁(A)=0 ∧ ν₂(A)=0)) →
    
    // For ν₃ and ν₄
    let((Pᵢ,Nᵢ): HahnDecomposition(νᵢ)) →
    assert(∀A∈Σ: ν₃(A) = νᵢ(A∩Pᵢ)) →
    assert(∀A∈Σ: ν₄(A) = -νᵢ(A∩Nᵢ)) →
    apply(IntersectionIsSubset) →
    assert(∀A∈Σ: μ(A)=0 → (ν₃(A)=0 ∧ ν₄(A)=0)) →
    
    conclude(∀i∈{1,2,3,4}: IsAbsolutelyContinuous(νᵢ,μ))
  }
}