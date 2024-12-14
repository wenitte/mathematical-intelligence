theorem CompletelyHausdorffPreservation() {
  assert(
    ∀T_A[S_A, τ_A], T_B[S_B, τ_B] ∈ TopologicalSpace ∧
    ∃φ: T_A → T_B (ClosedBijection(φ)) ∧
    isCompletelyHausdorff(T_A) ⇒
    isCompletelyHausdorff(T_B)
  )
} ↔

proof CompletelyHausdorffPreservation() {
  assume(¬isCompletelyHausdorff(T_B)) →
  assert(∃a,b ∈ S_B: a ≠ b ∧ ∀U_B,V_B ∈ τ_B: 
    (a ∈ U_B ∧ b ∈ V_B) ⇒ (U_B⁻ ∩ V_B⁻ ≠ ∅)) →

  lemma ClosedSetProperties() {
    assert(∀U_B,V_B ∈ τ_B: isClosed(U_B⁻) ∧ isClosed(V_B⁻)) ∧
    assert(∀U_B,V_B ∈ τ_B: isClosed(U_B⁻ ∩ V_B⁻))
  } →
  
  setVar(W_B = U_B⁻ ∩ V_B⁻) →
  setVar(H_A = φ⁻¹(U_B⁻)) →
  setVar(K_A = φ⁻¹(V_B⁻)) →
  setVar(W_A = φ⁻¹(W_B)) →
  
  assert(H_A ∩ K_A = W_A ≠ ∅) →
  
  lemma InverseMappingProperties() {
    assert(isOpen(φ)) ∧
    assert(isContinuous(φ⁻¹)) ∧
    assert(∀S ∈ τ_B: isClosed(S) ⇒ isClosed(φ⁻¹(S)))
  } →
  
  setVar(U_A = φ⁻¹(U_B)) →
  setVar(V_A = φ⁻¹(V_B)) →
  
  assert(H_A ⊆ U_A⁻ ∧ K_A ⊆ V_A⁻) →
  assert(U_A⁻ ∩ V_A⁻ ≠ ∅) →
  
  setVar(x = φ⁻¹(a)) →
  setVar(y = φ⁻¹(b)) →
  
  assert(x ≠ y ∧ x ∈ U_A ∧ y ∈ V_A) →
  assert(∃x,y ∈ S_A: x ≠ y ∧ ∀U_A,V_A ∈ τ_A:
    (x ∈ U_A ∧ y ∈ V_A) ⇒ (U_A⁻ ∩ V_A⁻ ≠ ∅)) →
  
  contradiction(isCompletelyHausdorff(T_A)) →
  conclude(isCompletelyHausdorff(T_B))
}