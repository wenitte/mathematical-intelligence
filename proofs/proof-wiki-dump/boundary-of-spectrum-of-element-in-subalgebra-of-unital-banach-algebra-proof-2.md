theorem BoundaryOfSpectrum() {
  let(A: UnitBanachAlgebra(ℂ)) →
  let(B: ClosedUnitalSubalgebra(A)) →
  let(x ∈ B) →
  let(σ_A(x): Spectrum(x,A)) →
  let(σ_B(x): Spectrum(x,B)) →
  assert(
    ∂σ_B(x) ⊆ ∂σ_A(x)
  )
} ↔

proof BoundaryOfSpectrum() {
  let(λ ∈ ∂σ_B(x)) →
  
  lemma BoundaryIntersection() {
    assert(∂σ_B(x) = σ_B(x) ∩ cl(ρ_B(x)))
  } →
  
  let(ρ_B(x): ResolventSet(x,B)) →
  let(ρ_A(x): ResolventSet(x,A)) →
  
  assume(λ ∈ ρ_A(x)) →
  assert(λ ∈ cl(ρ_B(x)) ∩ ρ_A(x)) →
  assert(λ ∈ cl_ρ_A(x)(ρ_B(x))) →
  
  lemma ResolventClopen() {
    assert(ρ_B(x) isClopen in ρ_A(x))
  } →
  
  lemma ClosedSetClosure() {
    assert(cl_ρ_A(x)(ρ_B(x)) = ρ_B(x))
  } →
  
  assert(λ ∈ σ_B(x) ∩ ρ_B(x)) →
  assert(ρ_B(x) = ℂ ∖ σ_B(x)) →
  assert(contradiction()) →
  assert(λ ∈ ℂ ∖ ρ_A(x) = σ_A(x)) →
  
  lemma ResolventInclusion() {
    assert(ρ_B(x) ⊆ ρ_A(x)) →
    assert(cl(ρ_B(x)) ⊆ cl(ρ_A(x)))
  } →
  
  assert(λ ∈ σ_A(x) ∩ cl(ρ_A(x)) = ∂σ_A(x)) →
  conclude(∂σ_B(x) ⊆ ∂σ_A(x))
}