theorem BoundedContinuousFunctionsBanachSpace() {
  assert(
    (∀X: TopologicalSpace, Y: BanachSpace, GF ∈ {ℝ,ℂ}) ⇒
    let Cb(X,Y) := {f: X→Y | f continuous ∧ f bounded} ∧
    let ∥·∥∞ := supremum_norm ⇒
    (Cb(X,Y), ∥·∥∞) is_a BanachSpace over GF
  )
} ↔

proof BoundedContinuousFunctionsBanachSpace() {
  // Part 1: Vector Space Property
  lemma VectorSpaceProperty() {
    assert(Cb(X,Y) ⊆ YX) →
    setVar(f0(x) = 0Y, ∀x ∈ X) →
    apply(ConstantFunctionContinuous()) →
    assert(f0 ∈ Cb(X,Y)) →
    
    setVar(f,g ∈ Cb(X,Y), λ ∈ GF) →
    apply(LinearCombinationContinuous()) →
    assert(
      ∥f(x) + λg(x)∥Y ≤ ∥f(x)∥Y + |λ|∥g(x)∥Y ∧
      ∥f + λg∥∞ ≤ ∥f∥∞ + |λ|∥g∥∞ < ∞
    ) →
    conclude(Cb(X,Y) is_a VectorSpace)
  } →

  // Part 2: Normed Space Property
  lemma NormedSpaceProperty() {
    assert(∀f ∈ Cb(X,Y): supx∈X ∥f(x)∥Y < ∞) →
    define(∥f∥∞ := supx∈X ∥f(x)∥Y) →
    apply(SupremumNormIsNorm()) →
    conclude(Cb(X,Y) is_a NormedSpace)
  } →

  // Part 3: Completeness
  lemma CompletenessProperty() {
    setVar(sequence {fn}n∈ℕ: CauchySequence in Cb(X,Y)) →
    assert(∀ε>0 ∃N∈ℕ: ∀n,m≥N: ∥fn - fm∥∞ < ε) →
    assert(∀x∈X: {fn(x)}n∈ℕ is_a CauchySequence in Y) →
    apply(Y.BanachProperty()) →
    define(f(x) := limn→∞ fn(x)) →
    
    lemma ContinuityOfLimit() {
      setVar(x∈X, ε>0) →
      assert(
        ∥f(x) - f(y)∥Y ≤ ∥f(x) - fn(x)∥Y + 
        ∥fn(x) - fn(y)∥Y + ∥fn(y) - f(y)∥Y < ε
      ) →
      conclude(f is_continuous)
    } →
    
    lemma BoundednessOfLimit() {
      assert(
        ∥f(x)∥Y ≤ ∥f(x) - fn(x)∥Y + ∥fn(x)∥Y ∧
        supx∈X ∥f(x)∥Y < ∞
      ) →
      conclude(f is_bounded)
    } →
    
    conclude(f ∈ Cb(X,Y) ∧ fn→f)
  } →
  
  conclude(Cb(X,Y) is_a BanachSpace)
}