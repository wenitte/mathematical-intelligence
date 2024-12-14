theorem Closure_Densely_Defined_Bounded_Linear_Operator() {
  let(H: HilbertSpace(ℂ)) →
  let((D_T, T): DenselyDefinedLinearOperator(H)) →
  let(T̃: BoundedLinearOperator(H → H)) →
  assert(
    isExtension(T̃, T) ∧
    isBounded(T) →
    isClosable((D_T, T)) ∧
    closure((D_T, T)) = (H, T̃)
  )
} ↔

proof Closure_Densely_Defined_Bounded_Linear_Operator() {
  setVar(G_T: Graph(T)) →
  setVar(G_T̃: Graph(T̃)) →
  
  lemma Main_Equality() {
    assert(cl(G_T) = G_T̃)
  } →

  proof Main_Equality() {
    // First inclusion
    forall((x,y) ∈ cl(G_T)) {
      exists(sequence((xₙ, T(xₙ))ₙ∈ℕ) ∈ G_T) →
      assert((xₙ, T(xₙ)) → (x,y)) →
      assert(xₙ → x) ∧ assert(T̃(xₙ) = T(xₙ) → y) →
      apply(BoundedContinuity(T̃)) →
      assert(T̃(xₙ) → T̃(x)) →
      apply(UniqueLimit()) →
      assert(y = T̃(x)) →
      assert((x,y) ∈ G_T̃)
    } →
    
    // Second inclusion
    forall((x,T̃(x)) ∈ G_T̃) {
      exists(sequence(xₙ)ₙ∈ℕ ∈ D_T) →
      assert(xₙ → x) →
      assert(T(xₙ) = T̃(xₙ) → T̃(x)) →
      assert((xₙ,T(xₙ)) → (x,T̃(x))) →
      assert((x,T̃(x)) ∈ cl(G_T))
    }
  } →
  
  apply(CharacterizationClosableOperators()) →
  apply(SmallestClosedExtension()) →
  assert(closure((D_T, T)) = (H, T̃))
}