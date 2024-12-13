theorem Banach_Schauder_Lemma_2() {
  setSpaces(X: BanachSpace, Y: BanachSpace) →
  setMap(T: X → Y, {bounded: true, linear: true, surjective: true}) →
  setVar(r: ℝ⁺) →
  assert(
    BY(0,r) ⊆ closure(T[BX(0,m)])
  ) ⇒
  assert(
    BY(0,r) ⊆ T[BX(0,2m)]
  )
} ↔

proof Banach_Schauder_Lemma_2() {
  lemma InductiveStep() {
    setVar(n: ℕ) →
    assert(
      BY(0,2⁻ⁿr) ⊆ closure(T[BX(0,2⁻ⁿm)])
    ) →
    proof {
      setVar(y: Y, {y ∈ BY(0,2⁻ⁿr)}) →
      assert(‖y‖Y < 2⁻ⁿr) →
      assert(‖2ⁿy‖Y < r) →
      assert(2ⁿy ∈ BY(0,r)) →
      assert(2ⁿy ∈ closure(T[BX(0,m)])) →
      apply(ClosureSequenceCharacterization()) →
      assert(∃{yk}k∈ℕ ∈ T[BX(0,m)]: yk → 2ⁿy) →
      assert(∀k ∈ ℕ, ∃xk ∈ BX(0,m): yk = Txk) →
      assert(T(2⁻ⁿxk) → y) →
      assert(‖2⁻ⁿxk‖X < 2⁻ⁿm) →
      conclude()
    }
  } →

  lemma MainResult() {
    setVar(z: Y, {z ∈ BY(0,r)}) →
    assert(z ∈ closure(T[BX(0,m)])) →
    construct(sequence xn) {
      iterate(n: ℕ) {
        assert(‖z - ∑ᵢ₌₁ⁿ Txᵢ‖Y < 2⁻ⁿr) →
        assert(xn ∈ BX(0,2⁻ⁿ⁺¹m))
      }
    } →
    assert(∑ᵢ₌₁∞ ‖xᵢ‖X < 2m) →
    apply(BanachSpaceConvergence()) →
    setVar(x: X, {x = ∑ᵢ₌₁∞ xᵢ}) →
    assert(‖x‖X < 2m) →
    assert(T(x) = z) →
    conclude()
  } →

  apply(MainResult()) →
  assert(BY(0,r) ⊆ T[BX(0,2m)])
}