theorem Closure_Subset_Subspace_Cor1() {
  let T = ⟨S,τ⟩: TopSpace
  let H ⊆ S
  let T_H = ⟨H,τ_H⟩: TopSubspace(T)
  let K ⊆ S
  let cl_T(K): Closure(K,T)  
  let cl_H(K∩H): Closure(K∩H,T_H)
  
  assert(
    cl_H(K∩H) ⊆ cl_T(K) ∩ H
  )
} ↔

proof Closure_Subset_Subspace_Cor1() {
  assert(cl_H(K∩H) = cl_T(K∩H) ∩ H) →
  // By Closure of Subset in Subspace theorem
  
  assert(cl_T(K∩H) ⊆ cl_T(K)) →
  // By Topological Closure of Subset is Subset of Topological Closure
  
  assert(
    cl_H(K∩H) = cl_T(K∩H) ∩ H ⊆ cl_T(K) ∩ H
  ) →
  // By substitution and subset transitivity
  
  conclude(cl_H(K∩H) ⊆ cl_T(K) ∩ H)
}