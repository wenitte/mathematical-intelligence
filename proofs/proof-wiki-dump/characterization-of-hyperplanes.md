theorem Hyperplane_Characterization() {
  let(F: Field, X: VectorSpace(F), U: Subspace(X))
  assert(
    (U is_hyperplane) ↔
    (U ≠ X ∧ ∀x ∈ (X\U) → span(U ∪ {x}) = X) ↔
    (∃φ: LinearFunctional(X→F) | φ ≠ 0 ∧ U = ker(φ))
  )
}

proof Hyperplane_Characterization() {
  // (1) → (2)
  block OneImpliesTwo() {
    assume(U is_hyperplane) →
    let(x ∈ X\U) →
    assert(span(U ∪ {x}) is_subspace(X)) →
    assert(U ⊆ span(U ∪ {x})) →
    assert(x ∈ span(U ∪ {x}) ∧ x ∉ U) →
    conclude(span(U ∪ {x}) = X)
  }

  // (2) → (1)
  block TwoImpliesOne() {
    assume(U ≠ X ∧ ∀x ∈ X\U → span(U ∪ {x}) = X) →
    let(Z: Subspace(X) | U ⊆ Z ⊆ X) →
    cases {
      case(U = Z): conclude(U is_hyperplane)
      case(∃x ∈ X\U): {
        assert(span(U ∪ {x}) = X) →
        ∀z ∈ span(U ∪ {x}) → ∃u ∈ U, λ ∈ F | z = u + λx →
        assert(u ∈ Z ∧ λx ∈ Z → u + λx ∈ Z) →
        assert(span(U ∪ {x}) ⊆ Z) →
        conclude(Z = X)
      }
    } →
    conclude(U is_hyperplane)
  }

  // (2) → (3)
  block TwoImpliesThree() {
    assume(U ≠ X ∧ ∀x ∈ X\U → span(U ∪ {x}) = X) →
    let(x ∈ X\U) →
    assert(∀v ∈ X → ∃!u ∈ U, λ ∈ F | v = u + λx) →
    define(φ: X→F | φ(u + λx) = λ) →
    assert(φ(x) = 1 → φ ≠ 0) →
    verify_linear(φ) →
    assert(∀v ∈ X → (φ(v) = 0 ↔ v ∈ U)) →
    conclude(U = ker(φ))
  }

  // (3) → (2)
  block ThreeImpliesTwo() {
    assume(∃φ: LinearFunctional(X→F) | φ ≠ 0 ∧ U = ker(φ)) →
    let(x ∈ X\U) →
    assert(φ(x) ≠ 0) →
    ∀z ∈ X\U → {
      let(y = z - (φ(z)/φ(x))x) →
      assert(φ(y) = 0) →
      assert(y ∈ U) →
      assert(z = y + (φ(z)/φ(x))x ∈ span(U ∪ {x}))
    } →
    conclude(span(U ∪ {x}) = X)
  }
}