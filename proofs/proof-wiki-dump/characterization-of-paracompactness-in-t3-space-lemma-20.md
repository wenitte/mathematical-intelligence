theorem Paracompactness_Characterization() {
  assert(
    ∀T = ⟨X,τ⟩ [TopologicalSpace] ∧
    ∀C[OpenCover(T)] → Even(C) ∧
    let(τ_X×X: ProductTopology(X×X)) ∧
    let(N: Neighborhood(ΔX, ⟨X×X, τ_X×X⟩)) →
    ∃W: Neighborhood(ΔX, ⟨X×X, τ_X×X⟩) ∧
    Symmetric(W) ∧
    W∘W ⊆ N
  )
}

proof Paracompactness_Characterization() {
  setVar(𝕍 = {V ∈ τ : V×V ⊆ N}) →
  
  lemma Diagonal_Cover() {
    assert(OpenCover(𝕍, T))
  } →
  
  apply(Even(𝕍)) →
  
  lemma Even_Cover_Char() {
    assert(∃R: Neighborhood(ΔX, ⟨X×X, τ_X×X⟩) ∧
           {R(x) : x ∈ S} refinement_of 𝕍)
  } →
  
  assert(∀x ∈ X → ∃V ∈ 𝕍 : R(x) ⊆ V) →
  assert(∀x ∈ X → ∃V ∈ 𝕍 : R(x)×R(x) ⊆ V×V) →
  assert(∀x ∈ X : R(x)×R(x) ⊆ N) →
  
  setVar(W = R ∩ R⁻¹) →
  
  lemma Open_Inverse() {
    assert(Open(R⁻¹, ⟨X×X, τ_X×X⟩))
  } →
  
  assert(Open(W, ⟨X×X, τ_X×X⟩)) →
  assert(Reflexive(W)) →
  assert(Neighborhood(W, ΔX)) →
  assert(Symmetric(W)) →
  
  assert(∀x,y,z ∈ X → 
    ⟨y,z⟩ ∈ W(x)×W(x) →
    y,z ∈ W(x) →
    ⟨x,y⟩,⟨x,z⟩ ∈ W →
    ⟨x,y⟩,⟨x,z⟩ ∈ R →
    y,z ∈ R(x) →
    ⟨y,z⟩ ∈ R(x)×R(x) →
    ⟨y,z⟩ ∈ N) →
    
  assert(∀x ∈ X : W(x)×W(x) ⊆ N) →
  assert(W∘W = ⋃_{x∈X} W(x)×W(x)) →
  assert(W∘W ⊆ N)
}