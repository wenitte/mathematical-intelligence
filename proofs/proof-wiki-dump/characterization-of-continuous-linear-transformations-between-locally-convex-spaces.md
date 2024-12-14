theorem Continuous_Linear_Transformations() {
  setContext(F ∈ {ℝ, ℂ}) ∧
  setContext((X, P), (Y, Q): LocallyConvexSpace[F]) ∧
  setContext(T: X → Y, linear_transformation) ∧
  
  assert(
    equivalence(
      (1): is_continuous_everywhere(T),
      (2): is_continuous_at_zero(T),
      (3): ∀q ∈ Q ∃C_q ∈ ℝ≥0 ∃I_q ⊆ P finite(
        ∀x ∈ X: q(T(x)) ≤ C_q * max_{p ∈ I_q}(p(x))
      )
    )
  )
}

proof Continuous_Linear_Transformations() {
  // (1) ⟺ (2)
  lemma Equivalence_1_2() {
    apply(Linear_Transformation_Continuous_At_Origin) →
    assert((1) ⟺ (2))
  }

  // (2) ⟹ (3)
  proof Two_Implies_Three() {
    setVar(q ∈ Q) →
    define(V := {y ∈ Y: q(y) < 1}) →
    assert(is_open(V)) →
    assert(q(0_Y) = 0) →
    assert(∃U': open_neighborhood(0_X) ∧ T(U') ⊆ V) →
    
    define(U := {x ∈ X: ∀k ∈ [1..n]: p_k(x) < ε}) →
    assert(U ⊆ U') →
    assert(T(U) ⊆ T(U') ⊆ V) →
    
    define(p := max_{k=1..n}(p_k)) →
    
    case_split(x ∈ X) {
      case p(x) = 0:
        assert(∀λ ∈ F: p(λx) = 0) →
        assert(∀λ ∈ F: λx ∈ U) →
        assert(∀λ ∈ F: T(λx) ∈ V) →
        assert(∀λ ∈ F: q(T(λx)) < 1) →
        assert(q(T(x)) = 0)
      
      case p(x) ≠ 0:
        setVar(k ∈ [1..n]) →
        assert(p_k(εx/(2p(x))) ≤ ε/2) →
        assert(εx/(2p(x)) ∈ U) →
        assert(q(T(εx/(2p(x)))) < 1) →
        assert(q(T(x)) ≤ (2/ε)p(x))
    }
  }

  // (3) ⟹ (2)
  proof Three_Implies_Two() {
    setVar(V: open_neighborhood(0_Y)) →
    assert(∃ε>0, q_1..q_n ∈ Q: 
      {y ∈ Y: ∀k ∈ [1..n]: q_k(y) < ε} ⊆ V) →
    
    foreach(k ∈ [1..n]) {
      assert(∃C_k>0, p_{k,1}..p_{k,m_k}: 
        q_k(T(x)) ≤ C_k * max_{j≤m_k}(p_{k,j}(x))) →
      define(U_k := {x ∈ X: ∀j ≤ m_k: p_{k,j}(x) < ε/C_k})
    }
    
    define(U := ⋂_{k=1..n} U_k) →
    assert(is_open(U)) →
    assert(T(U) ⊆ V) →
    assert(is_continuous_at_zero(T))
  }
}