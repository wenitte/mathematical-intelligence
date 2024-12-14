theorem Compact_Convex_Sets_Homeomorphic() {
  assert(
    ∀n ∈ ℕ_{>0} ∧
    ∀T,T' ⊆ ℝ^n ∧
    isCompact(T) ∧ isCompact(T') ∧
    isConvex(T) ∧ isConvex(T') ⇒
    T ∼ T'
  )
} ↔

proof Compact_Convex_Sets_Homeomorphic() {
  setVar(n: ℕ_{>0}, T,T': ℝ^n) →
  
  lemma Boundary_Homeomorphic_Sphere() {
    assert(∂T ∼ 𝕊^{n-1}) ∧
    assert(∂T' ∼ 𝕊^{n-1})
  } →
  
  apply(Homeomorphism_Is_Equivalence) →
  assert(∂T ∼ ∂T') →
  
  lemma Cones_Homeomorphic() {
    assert(
      ∂T ∼ ∂T' ⇒ C∂T ∼ C∂T'
    )
  } →
  
  lemma Convex_Homeomorphic_Cone() {
    assert(T ∼ C∂T) ∧
    assert(T' ∼ C∂T')
  } →
  
  apply(Homeomorphism_Is_Equivalence) →
  assert(T ∼ T')
}