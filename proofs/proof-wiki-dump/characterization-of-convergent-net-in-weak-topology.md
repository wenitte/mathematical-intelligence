theorem Convergent_Net_Weak_Star_Topology() {
  let(GF ∈ {ℝ,ℂ}) ∧
  let(X: TopologicalVectorSpace) ∧
  let(X*: TopologicalDual(X)) ∧
  let(w*: WeakStarTopology(X*)) ∧
  let(f ∈ X*) ∧
  let(Λ: DirectedSet) ∧
  let({fλ}λ∈Λ: Net) →
  assert(
    ({fλ}λ∈Λ convergesTo f in (X*,w*)) ↔
    (∀x ∈ X ⇒ {fλ(x)}λ∈Λ convergesTo f(x) in GF)
  )
}

proof Convergent_Net_Weak_Star_Topology() {
  // Necessary Condition
  let({fλ}λ∈Λ convergesTo f in (X*,w*)) →
  forall(x ∈ X) {
    lemma Continuity_Linear_Functional() {
      assert(x^: (X*,w*) → GF is continuous)
    } →
    lemma Net_Continuity() {
      assert({x^(fλ)}λ∈Λ = {fλ(x)}λ∈Λ convergesTo f(x))
    }
  }

  // Sufficient Condition
  let(∀x ∈ X ⇒ {fλ(x)}λ∈Λ convergesTo f(x)) →
  forall(U: OpenNeighborhood(f) in (X*,w*)) {
    exists(x₁,...,xₙ ∈ X, ε > 0) {
      assert({g ∈ X* : |f(xᵢ) - g(xᵢ)| < ε, ∀i ∈ [1,n]} ⊆ U) →
      forall(i ∈ [1,n]) {
        assert({fλ(xᵢ)}λ∈Λ convergesTo f(xᵢ)) →
        exists(λᵢ ∈ Λ) {
          assert(∀λ ≽ λᵢ ⇒ |fλ(xᵢ) - f(xᵢ)| < ε)
        }
      } →
      exists(λ* ∈ Λ) {
        assert(∀i ∈ [1,n] ⇒ λᵢ ≼ λ*) →
        forall(λ ≽ λ*) {
          assert(∀i ∈ [1,n] ⇒ |fλ(xᵢ) - f(xᵢ)| < ε) →
          assert(fλ ∈ U)
        } →
        assert({fλ}λ∈Λ convergesTo f in (X*,w*))
      }
    }
  }
}