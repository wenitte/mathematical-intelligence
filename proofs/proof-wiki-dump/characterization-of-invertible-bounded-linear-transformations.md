theorem BoundedLinearTransformInverse() {
  let(U: NormedVectorSpace, V: NormedVectorSpace) →
  let(A: LinearTransform(V → U)) →
  let(A⁻¹: LinearTransform(U → V)) →
  assert(
    (A⁻¹ is BoundedLinearTransform) ↔ 
    (∃c ∈ ℝ⁺)(∀x ∈ V)(‖Ax‖_U ≥ c‖x‖_V)
  )
}

proof BoundedLinearTransformInverse() {
  // Necessary condition
  lemma NecessaryCondition() {
    assume(A⁻¹ is BoundedLinearTransform) →
    assert(∃M ∈ ℝ⁺)(∀y ∈ U)(‖A⁻¹y‖_V ≤ M‖y‖_U) →
    let(x ∈ V) →
    let(y = Ax) →
    assert(‖A⁻¹y‖_V ≤ M‖y‖_U) →
    assert(‖A⁻¹y‖_V = ‖A⁻¹(Ax)‖_V = ‖x‖_V) →
    assert(‖y‖_U = ‖Ax‖_U) →
    assert(‖x‖_V ≤ M‖Ax‖_U) →
    assert(‖Ax‖_U ≥ (1/M)‖x‖_V) →
    let(c = 1/M) →
    conclude((∃c ∈ ℝ⁺)(∀x ∈ V)(‖Ax‖_U ≥ c‖x‖_V))
  }

  // Sufficient condition
  lemma SufficientCondition() {
    assume((∃c ∈ ℝ⁺)(∀x ∈ V)(‖Ax‖_U ≥ c‖x‖_V)) →
    let(y ∈ U) →
    let(x = A⁻¹y) →
    assert(‖Ax‖_U ≥ c‖x‖_V) →
    assert(‖Ax‖_U = ‖A(A⁻¹y)‖_U = ‖y‖_U) →
    assert(‖x‖_V = ‖A⁻¹y‖_V) →
    assert(‖y‖_U ≥ c‖A⁻¹y‖_V) →
    assert(‖A⁻¹y‖_V ≤ (1/c)‖y‖_U) →
    conclude(A⁻¹ is BoundedLinearTransform)
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude((A⁻¹ is BoundedLinearTransform) ↔ 
          (∃c ∈ ℝ⁺)(∀x ∈ V)(‖Ax‖_U ≥ c‖x‖_V))
}