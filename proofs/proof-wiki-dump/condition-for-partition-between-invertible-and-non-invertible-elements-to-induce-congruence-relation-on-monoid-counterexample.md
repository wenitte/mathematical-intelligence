theorem Partition_Noncongruence() {
  assert(
    ∀S(isMonoid(S,∘) ∧ ¬isGroup(S,∘) ∧ 
    H ⊆ S(isSubgroup(H,∘) ∧ ∀x∈H(isInvertible(x))) ∧
    N = {x∈S | ¬isInvertible(x)} ∧
    ℛ = partitionEquivRelation({N,H}) ∧
    ¬isCancellable(∘) ∧ ¬isCommutative(∘)) ⇒
    (¬isCongruence(ℛ,∘) ∨ ¬isIsomorphic(S/ℛ, ℤ₂×))
  )
} ↔

proof Partition_Noncongruence() {
  setStruct(S = ℕ^ℕ) →
  setOp(∘ = composition) →
  
  lemma Structure_Properties() {
    assert(isMonoid(ℕ^ℕ,∘)) ∧
    assert(¬isCommutative(∘))
  } →

  define(g: ℕ→ℕ) {
    ∀x∈ℕ: g(x) = case(x>0: x-1, x=0: 0)
  } →
  
  assert(¬isInjective(g)) {
    prove(g(0) = g(1) = 0)
  } →
  
  assert(¬isCancellable(∘)) {
    apply(Injection_iff_Left_Cancellable(g))
  } →

  lemma One_Sided_Inverses() {
    ∃f,g∈ℕ^ℕ(
      g∘f = Iℕ ∧
      isSurjective(g) ∧ ¬isInjective(g) ∧
      isInjective(f) ∧ ¬isSurjective(f)
    )
  } →

  assert(f,g ∈ N) {
    prove(¬isBijective(f) ∧ ¬isBijective(g))
  } →
  
  assert(g∘f ∈ H) {
    prove(g∘f = Iℕ)
  } →
  
  assert(f∘f ∈ N) {
    prove(¬isSurjective(f∘f))
  } →

  define(ℛ) {
    x ℛ y ↔ ({x,y}⊆N ∨ {x,y}⊆H)
  } →

  assert(g ℛ f ∧ f ℛ f) →
  assert(¬((g∘f) ℛ (f∘f))) →
  
  conclude(¬isCongruence(ℛ,∘))
}