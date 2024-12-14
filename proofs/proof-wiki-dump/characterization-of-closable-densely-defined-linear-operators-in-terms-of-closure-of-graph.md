theorem Closable_Densely_Defined_Linear_Operators() {
  let(H: HilbertSpace(ℂ)) →
  let(H×H: DirectProduct(H, normProduct)) →
  let(T: DenselyDefinedLinearOperator(D_T → H)) →
  let(G_T: Graph(T)) →
  assert(
    isClosable(T) ↔ 
    ∀y ∈ H: ((0_H, y) ∈ cl(G_T) → y = 0_H)
  )
}

proof Closable_Densely_Defined_Linear_Operators() {
  // Necessary Condition
  branch NecessaryCondition() {
    assume(isClosable(T)) →
    apply(Set_Closed_Iff_Equals_Closure()) →
    assert(cl(G_T) = G_T) →
    forall(y ∈ H) {
      assume((0_H, y) ∈ G_T) →
      assert(y = T(0_H)) by(graphDefinition) →
      assert(y = 0_H) by(linearityOfT)
    }
  } ∧

  // Sufficient Condition
  branch SufficientCondition() {
    assume(∀y ∈ H: ((0_H, y) ∈ cl(G_T) → y = 0_H)) →
    
    define(D_S := {x ∈ H: ∃y ∈ H: (x,y) ∈ cl(G_T)}) →
    
    lemma Graph_Properties() {
      apply(Graph_Is_Vector_Subspace()) →
      assert(isVectorSubspace(G_T, H×H)) →
      apply(Closure_Of_Subspace_Is_Subspace()) →
      assert(isVectorSubspace(cl(G_T), H×H))
    } →
    
    define(S: D_S → H) {
      forall(x ∈ D_S) {
        exists!(y ∈ H) {
          assert((x,y) ∈ cl(G_T)) →
          assert(S(x) = y)
        }
      }
    } →
    
    assert(G_S = cl(G_T)) →
    assert(isClosed(G_S)) →
    assert(isDenselyDefined(S)) →
    
    forall(x ∈ D_T) {
      assert((x,T(x)) ∈ cl(G_T) ∧ (x,S(x)) ∈ cl(G_T)) →
      assert(T(x) = S(x)) by(uniqueness)
    } →
    
    assert(extends(S,T)) →
    assert(isClosable(T))
  }
}