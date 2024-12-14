theorem Closure_In_Subspace() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(H ⊆ S) →
  let(T_H = ⟨H,τ_H⟩: TopologicalSubspace(T)) →
  let(A ⊆ H) →
  assert(
    cl_H(A) = H ∩ cl(A)
  )
}

proof Closure_In_Subspace() {
  setVar(A: Set) →
  setVar(H: Set) →
  
  assert(
    cl_H(A) = ⋂{K ⊆ H : A ⊆ K ∧ K is_closed_in T_H}
  ) by(def_closure) →
  
  assert(
    ⋂{K ⊆ H : A ⊆ K ∧ K is_closed_in T_H} = 
    ⋂{N ∩ H : A ⊆ N ∧ N is_closed_in T}
  ) by(closed_set_subspace) →
  
  assert(
    ⋂{N ∩ H : A ⊆ N ∧ N is_closed_in T} = 
    H ∩ ⋂{N : A ⊆ N ∧ N is_closed_in T}
  ) by(intersection_distributive) →
  
  assert(
    H ∩ ⋂{N : A ⊆ N ∧ N is_closed_in T} = 
    H ∩ cl(A)
  ) by(def_closure)
}

corollary Closure_Intersection() {
  let(K ⊆ S) →
  assert(
    cl_H(K ∩ H) ⊆ cl_T(K) ∩ H
  )
}

corollary Closed_Subspace_Closure() {
  let(H: closed_in T) →
  assert(
    cl_H(A) = cl(A)
  )
}