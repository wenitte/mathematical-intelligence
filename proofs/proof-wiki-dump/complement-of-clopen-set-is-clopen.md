theorem Complement_Clopen_Is_Clopen(T: TopologicalSpace, H: Set) {
  assert(
    (T = ⟨S, τ⟩) ∧
    (H ⊆ S) ∧
    isClopen(H, T) →
    isClopen(S∖H, T)
  )
} ↔

proof Complement_Clopen_Is_Clopen() {
  setVar(T: TopologicalSpace) →
  setVar(H: Set) →
  
  // First part: proving complement is closed
  assert(isClopen(H, T)) →
  assert(isOpen(H, T)) by def(clopen) →
  assert(isClosed(S∖H, T)) by def(closed_set) →
  
  // Second part: proving complement is open
  assert(isClosed(H, T)) by def(clopen) →
  assert(isOpen(S∖H, T)) by def(closed_set) →
  
  // Conclusion
  assert(isOpen(S∖H, T) ∧ isClosed(S∖H, T)) →
  assert(isClopen(S∖H, T)) by def(clopen)
}