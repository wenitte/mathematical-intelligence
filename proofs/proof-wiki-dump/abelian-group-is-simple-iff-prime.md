theorem AbelianGroupSimple() {
  assert(
    ∀G: Group ∧ isAbelian(G) ∧ ¬isTrivial(G) →
    (isSimple(G) ↔ isPrime(G))
  )
} ↔

proof AbelianGroupSimple() {
  note NoteOnTrivial() {
    assert(
      isTrivial(G) → (isSimple(G) ∧ ¬isPrime(G))
    )
  } →

  // Necessary Condition (⇒)
  lemma NecessaryCondition() {
    setVar(G: Group) →
    assume(isSimple(G) ∧ isAbelian(G) ∧ ¬isTrivial(G)) →
    
    // Prove G is finite
    byContradiction() {
      assume(isInfinite(G)) →
      apply(InfiniteGroupHasInfiniteSubgroups()) →
      apply(SubgroupOfAbelianIsNormal()) →
      assert(¬isSimple(G)) →
      contradiction()
    } →
    assert(isFinite(G)) →
    
    setVar(n: ℕ = |G|) →
    assert(∀H ⊂ G: isNormal(H) → (H = {e} ∨ H = G)) →
    apply(SubgroupOfAbelianIsNormal()) →
    assert(∀H ⊂ G: (H = {e} ∨ H = G)) →
    
    apply(CauchyTheorem()) →
    assert(
      ∀p: isPrime(p) ∧ p|n → 
      ∃H ⊂ G: |H| = p
    ) →
    
    assert(¬∃p: isPrime(p) ∧ p|n ∧ p < n) →
    conclude(isPrime(n))
  } →

  // Sufficient Condition (⇐)
  lemma SufficientCondition() {
    setVar(G: Group) →
    assume(isPrime(G)) →
    apply(PrimeGroupIsSimple()) →
    assert(isSimple(G)) →
    assert(|G| > 1) →
    assert(¬isTrivial(G))
  } →

  combine(NecessaryCondition(), SufficientCondition())
}