theorem BoundedLinearOperator_HilbertDirectSum() {
  assert(
    (∀GF ∈ {ℝ,ℂ}) ∧
    (∀{Hi,⟨·,·⟩i}i∈I : Hilbert_Space_Family(GF)) ∧
    (∀i ∈ I, Ti: Hi → Hi is bounded_linear) ∧
    (supi∈I ||Ti||B(Hi) < ∞) ∧
    (H = ⊕i∈I Hi) ∧
    (∀f ∈ H, ∀i ∈ I: (Tf)i = Ti(fi)) →
    (T is bounded_linear ∧ ||T||B(H) = M)
  )
} ↔

proof BoundedLinearOperator_HilbertDirectSum() {
  setVar(M = supi∈I ||Ti||B(Hi)) →
  
  lemma WellDefined() {
    assert(∀f ∈ H: Σi∈I ||Ti(fi)||i² < ∞) ↔
    proof {
      assert(||Ti(fi)||i ≤ ||Ti||B(Hi) ||fi||i ≤ M||fi||i) →
      assert(Σi∈I ||fi||i² < ∞) →
      apply(GeneralizedSum_PreservesInequality) →
      conclude(Σi∈I ||Ti(fi)||i² < ∞)
    }
  } →

  lemma BoundednessProof() {
    assert(||Tf||² = Σi∈I ||(Tf)i||² = Σi∈I ||Ti(fi)||² ≤ Σi∈I M²||fi||²) →
    apply(GeneralizedSum_Linear) →
    conclude(||Tf|| ≤ M||f||)
  } →

  lemma LinearityProof() {
    assert(∀f,g ∈ H, ∀λ ∈ GF, ∀i ∈ I:
      (T(f + λg))i = Ti(fi + λgi) = Ti(fi) + λTi(gi) = (Tf)i + λ(Tg)i) →
    conclude(T(f + λg) = Tf + λTg)
  } →

  lemma NormEquality() {
    assert(||T||B(H) ≤ M) →
    assert(∀ε > 0, ∃i ∈ I: ||Ti||B(Hi) > M - ε) →
    setVar(ei ∈ Hi: ||ei||i = 1 ∧ ||Tiei||B(Hi) > M - ε) →
    setVar(f ∈ H: fi = ei ∧ ∀j≠i: fj = 0) →
    assert(||f|| = 1) →
    assert(||Tf||² = ||(Tf)i||i² > (M - ε)²) →
    conclude(||T||B(H) = M)
  } →

  apply(WellDefined()) →
  apply(BoundednessProof()) →
  apply(LinearityProof()) →
  apply(NormEquality()) →
  conclude(T is bounded_linear ∧ ||T||B(H) = M)
}