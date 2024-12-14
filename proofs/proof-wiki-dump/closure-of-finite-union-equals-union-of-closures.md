theorem Closure_Finite_Union_Equals_Union_Closures() {
  assert(
    ∀T[TopologicalSpace] ∧ ∀n ∈ ℕ ∧
    (∀i ∈ {1,...,n}: H_i ⊆ T) ⇒
    (⋃_{i=1}^n cl(H_i) = cl(⋃_{i=1}^n H_i))
  )
} ↔

proof Closure_Finite_Union_Equals_Union_Closures() {
  setVar(T: TopologicalSpace, n: ℕ, H_i: Set) →
  
  lemma Forward_Inclusion() {
    assert(⋃_{i=1}^n cl(H_i) ⊆ cl(⋃_{i=1}^n H_i))
  } →
  
  lemma Reverse_Inclusion() {
    setVar(K: Set = ⋃_{i=1}^n cl(H_i)) →
    setVar(H: Set = ⋃_{i=1}^n H_i) →
    
    assert(∀i ∈ [1,n]: cl(H_i) is_closed) by(Topological_Closure_Is_Closed) →
    assert(K is_closed) by(Topology_Defined_By_Closed_Sets) →
    
    assert(∀i ∈ [1,n]: H_i ⊆ cl(H_i)) by(Set_Is_Subset_Of_Closure) →
    assert(H ⊆ K) →
    
    assert(cl(H) ⊆ cl(K)) by(Closure_Of_Subset_Is_Subset) →
    assert(cl(H) ⊆ K) by(K_is_closed) →
    assert(cl(⋃_{i=1}^n H_i) ⊆ ⋃_{i=1}^n cl(H_i))
  } →
  
  apply(Forward_Inclusion()) →
  apply(Reverse_Inclusion()) →
  assert(⋃_{i=1}^n cl(H_i) = cl(⋃_{i=1}^n H_i))
}