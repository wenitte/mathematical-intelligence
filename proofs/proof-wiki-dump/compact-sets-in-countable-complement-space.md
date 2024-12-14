theorem Compact_Sets_Countable_Complement() {
  let(T = ⟨S,τ⟩)
  assert(
    (T is_countable_complement_topology ∧ S is_uncountable) →
    ∀K⊆S(K is_compact ↔ K is_finite)
  )
}

proof Compact_Sets_Countable_Complement() {
  lemma Finite_Is_Compact() {
    assert(∀F⊆S(F is_finite → F is_compact))
  } →

  proof_by_contradiction() {
    assume(∃H⊆S(H is_infinite ∧ H is_compact)) →
    
    construct(sequence(a_n)_{n≥0}) {
      assert(∀n≥0(a_n ∈ H)) ∧
      assert(∀i,j(i≠j → a_i≠a_j))
    } →

    define(V_m := S\{a_{m+n}}_{n≥0}) →
    assert(∀m₁,m₂(m₁<m₂ → V_{m₁}⊂V_{m₂})) →
    
    assert(H ⊆ ⋃_{m≥0}V_m) →
    
    apply_compactness(H) {
      ∃N∃{m_i}_{i=0}^N(
        m_0<m_1<...<m_N ∧
        H ⊆ ⋃_{i=0}^N V_{m_i}
      )
    } →
    
    assert(⋃_{i=0}^N V_{m_i} = V_{m_N}) →
    
    assert(∀k>0(a_{m_N+k} ∉ V_{m_N})) →
    assert(∀k>0(a_{m_N+k} ∉ H)) →
    
    contradiction() {
      assert(sequence_elements_in_H ∧ sequence_elements_not_in_H)
    }
  } →
  
  conclude(∀K⊆S(K is_compact ↔ K is_finite))
}