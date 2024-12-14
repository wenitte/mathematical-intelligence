theorem Closed_Extension_Space_Is_Irreducible() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(T*_p = ⟨S*_p,τ*_p⟩: ClosedExtensionSpace(T)) →
  assert(
    isIrreducible(T*_p)
  )
} ↔

proof Closed_Extension_Space_Is_Irreducible() {
  apply(Closure_Of_Open_Set_Of_Closed_Extension_Space) →
  assert(∀U ∈ τ*_p: (U ≠ ∅ → closure(U) = S)) →
  assert(
    ∀U ∈ τ*_p: (U ≠ ∅ → closure(U) = S) ↔ 
    isIrreducible(T*_p)
  ) →
  therefore(isIrreducible(T*_p))
}