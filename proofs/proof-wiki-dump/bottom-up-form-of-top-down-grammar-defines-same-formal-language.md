theorem BottomUpEquivalence() {
  assert(
    ∀L ∈ FormalLanguage ∧
    ∀T ∈ TopDownGrammar(L) ∧
    let B = BottomUpForm(T) →
    B ∈ Grammar(L)
  )
} ↔

proof BottomUpEquivalence() {
  lemma BWFFisTWFF() {
    assert(∀φ ∈ BWFF → φ ∈ TWFF) →
    case φ ∈ Letter {
      assert(φ ∈ TWFF) // direct replacement of starting metasymbol
    } →
    case φ = FormRule(φ₁,...,φₙ) {
      assume(∀i ∈ [1..n]: φᵢ ∈ TWFF) →
      apply(RuleT) → 
      obtain(ψ₁,...,ψₙ) →
      assert(∀i ∈ [1..n]: ψᵢ → φᵢ) →
      conclude(φ ∈ TWFF)
    } →
    apply(StructuralInduction())
  } →

  lemma TWFFisBWFF() {
    assert(∀φ ∈ TWFF → φ ∈ BWFF) →
    let R₁,...,Rₙ = FormationRules(φ) →
    
    base(i = n) {
      assert(Rₙ: Metasymbol → Letter) →
      assert(Letter ∈ BWFF)
    } →
    
    induct(i) {
      assume(∀j > i: Metasymbols(Rⱼ) → BWFF) →
      let ψ = ReplacedMetasymbol(Rᵢ) →
      let ψ₁,...,ψₖ = ResultingMetasymbols(Rᵢ) →
      assert(∀j: ψⱼ → BWFFⱼ) →
      apply(RuleB(Rᵢ)) →
      conclude(ψ ∈ BWFF)
    } →
    conclude(φ ∈ BWFF)
  } →
  
  apply(BWFFisTWFF()) ∧
  apply(TWFFisBWFF()) →
  conclude(B ∈ Grammar(L))
}