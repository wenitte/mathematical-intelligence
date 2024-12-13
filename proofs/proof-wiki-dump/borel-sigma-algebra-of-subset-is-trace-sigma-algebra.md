theorem Borel_Trace_Sigma_Algebra() {
  assert(
    ∀X[topological_space] ∧ ∀A ⊆ X ∧
    ∀τ[topology_on(X)] ∧ ∀τ_A[subspace_topology_on(A)] →
    𝔅(A,τ_A) = 𝔅(X,τ)_A
  )
} ↔

proof Borel_Trace_Sigma_Algebra() {
  setVar(X: topological_space) →
  setVar(A: subset(X)) →
  setVar(τ: topology(X)) →
  setVar(τ_A: subspace_topology(A)) →
  
  lemma Borel_Definition() {
    assert(𝔅(X,τ) = σ(τ))
  } →
  
  lemma Subspace_Topology_Definition() {
    assert(τ_A = {A ∩ U: U ∈ τ}) ∧
    assert(τ_A = A ∩ τ)
  } →
  
  apply(Borel_Definition()) →
  apply(Subspace_Topology_Definition()) →
  
  assert(𝔅(A,τ_A) = σ(A ∩ τ)) →
  
  lemma Trace_Sigma_Algebra_Generated() {
    assert(
      ∀𝔊[collection_of_sets] →
      σ(A ∩ 𝔊) = σ(𝔊)_A
    )
  } →
  
  apply(Trace_Sigma_Algebra_Generated(), 𝔊 = τ) →
  assert(𝔅(A,τ_A) = 𝔅(X,τ)_A)
}