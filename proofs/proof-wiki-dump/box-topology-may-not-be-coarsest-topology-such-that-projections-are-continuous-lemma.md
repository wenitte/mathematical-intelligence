theorem ProductTopologyLemma() {
  assert(
    ∀X(TopologicalSpace(X, τ) ∧
    ∃U(U ∈ τ ∧ U ≠ ∅ ∧ U ≠ X) →
    let(Y = ∏_{n∈ℕ} X) ∧
    let(τ_T = ProductTopology(Y)) ∧
    let(τ_b = BoxTopology(Y)) ∧
    let(V = ∏_{n∈ℕ} U) →
    (V ∈ τ_b ∧ V ∉ τ_T))
  )
} ↔

proof ProductTopologyLemma() {
  setVar(X: TopologicalSpace, τ: Topology, U: Set) →
  assert(V ∈ τ_b) by(BoxTopologyDef) →
  
  lemma ProveNotInProductTopology() {
    setVar(W: Set, W ∈ τ_T) →
    
    case W∩V=∅ {
      assert(∃x(x ∈ U)) by(U≠∅) →
      assert({x}_{n∈ℕ} ∈ V) →
      assert({x}_{n∈ℕ} ∉ W) by(W∩V=∅) →
      assert(W ≠ V) by(SetEqualityDef)
    } →
    
    case W∩V≠∅ {
      assert(W = ∏_{n∈ℕ} W_n ∧ 
             ∀n(W_n ∈ τ) ∧
             ∃k(∀n>k(W_n = X))) by(ProductTopologyBasisDef) →
      setVar(m = max{n: W_n ≠ X}) →
      assert(W_{m+1} = X) →
      assert(∃{z_n}({z_n} ∈ W∩V)) by(W∩V≠∅) →
      assert(∃y(y ∈ X∖U)) by(U≠X) →
      
      define({y_n} where
        y_n = case(n≠m+1: z_n, n=m+1: y)) →
      
      assert({y_n} ∈ W) by(y_{m+1}∈W_{m+1}) →
      assert({y_n} ∉ V) by(y_{m+1}∉U) →
      assert(W ≠ V) by(SetEqualityDef)
    }
  } →
  
  apply(ProveNotInProductTopology()) →
  assert(∀W∈τ_T(W≠V)) →
  assert(V ∉ τ_T)
}