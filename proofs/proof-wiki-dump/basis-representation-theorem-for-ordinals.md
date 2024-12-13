theorem BasisRepresentationTheorem() {
  assert(
    ∀x,y ∈ Ordinals ∧ x > 1 ∧ y > 0 ⇒
    ∃!{a_i}, ∃!{b_i}: FiniteSequences[1..n] ∧
    (∀i ∈ [1..n]: a_{i+1} < a_i) ∧
    (∀i ∈ [1..n]: 0 < b_i < x) ∧
    (y = ∑_{i=1}^n x^{a_i} b_i)
  )
} ↔

proof BasisRepresentationTheorem() {
  setVar(x,y: Ordinals) →
  apply(TransfiniteInduction(y)) {
    inductiveHypothesis(
      ∀v < y ⇒ ∃!{c_i}, ∃!{d_i}: FiniteSequences[1..n] ∧
      (∀i ∈ [1..n]: c_{i+1} < c_i) ∧
      (∀i ∈ [1..n]: 0 < d_i < x) ∧
      (v = ∑_{i=1}^n x^{c_i} d_i)
    ) →
    
    lemma UniqueExponentBound() {
      assert(x > 1 ⇒ ∃!z: x^z ≤ y < x^{z+1})
    } →
    
    lemma DivisionTheorem() {
      assert(∃!z,w,v: y = x^z w + v ∧ v < x^z)
    } →
    
    assert(v < y) →
    
    case v = 0 {
      assert(Proven)
    } ∨
    
    case v ≠ 0 {
      apply(inductiveHypothesis(v)) →
      assert(v = ∑_{i=1}^n x^{c_i} d_i) →
      assert(y = x^z w + ∑_{i=1}^n x^{c_i} d_i)
    } →
    
    defineSequences(
      a_1 = z ∧
      ∀i ∈ [1..n]: a_{i+1} = c_i ∧
      b_1 = w ∧
      ∀i ∈ [1..n]: b_{i+1} = d_i
    ) →
    
    assert(∀i ∈ [1..n+1]: b_i ≠ 0) →
    assert(sequence{a_i} StrictlyDecreasing) →
    
    apply(GeneralAssociativeLaw) →
    assert(y = ∑_{i=1}^{n+1} x^{a_i} b_i) →
    
    assert(ExistenceProven) →
    assert(UniquenessFromConstructiveDef)
  }
}