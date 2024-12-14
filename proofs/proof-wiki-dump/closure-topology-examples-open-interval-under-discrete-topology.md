theorem Closure_Discrete_Topology_Open_Interval() {
  assert(
    ∀T(T = ⟨ℝ,τ_d⟩ ∧ T is_topological_space ∧ τ_d is_discrete_topology) ∧
    ∀H,a,b∈ℝ(H = (a,b)) ⇒
    closure(H,T) = (a,b)
  )
} ↔

proof Closure_Discrete_Topology_Open_Interval() {
  setVar(T: topological_space) →
  setVar(H,a,b: ℝ) →
  assert(T = ⟨ℝ,τ_d⟩) →
  assert(H = (a,b)) →
  
  lemma Discrete_Topology_Is_Clopen() {
    assert(
      ∀S⊆ℝ(S ∈ τ_d ⇒ S is_open ∧ S is_closed)
    )
  } →
  
  apply(Discrete_Topology_Is_Clopen()) →
  assert(H is_open ∧ H is_closed) →
  
  lemma Closed_Iff_Equals_Closure() {
    assert(
      ∀S⊆ℝ(S is_closed ↔ closure(S,T) = S)
    )
  } →
  
  apply(Closed_Iff_Equals_Closure()) →
  assert(closure(H,T) = H) →
  assert(closure(H,T) = (a,b))
}