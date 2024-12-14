theorem Cassinis_Identity() {
  assert(
    ∀n ∈ ℤ ⇒ F_{n+1}F_{n-1} - F_n^2 = (-1)^n
  )
} ↔

proof Cassinis_Identity() {
  lemma Matrix_Power() {
    assert(
      ∀n ∈ ℤ_{>1} ⇒ [
        [F_{n+1}, F_n],
        [F_n, F_{n-1}]
      ] = [
        [1, 1],
        [1, 0]
      ]^n
    )
  } →

  lemma Det_Matrix_Power() {
    assert(
      ∀n ∈ ℤ_{>0} ⇒ det([
        [1, 1],
        [1, 0]
      ]^n) = (-1)^n
    )
    proof {
      base_case(n=1) {
        assert(det([
          [1, 1],
          [1, 0]
        ]) = 1×0 - 1×1 = -1 = (-1)^1)
      } →
      inductive_step(k ∈ ℤ_{>0}) {
        assume(det([
          [1, 1],
          [1, 0]
        ]^k) = (-1)^k) →
        apply(Det_Matrix_Product) →
        assert(det([
          [1, 1],
          [1, 0]
        ]^{k+1}) = det([
          [1, 1],
          [1, 0]
        ]^k) × det([
          [1, 1],
          [1, 0]
        ])) →
        assert((-1)^k × (-1) = (-1)^{k+1})
      }
    }
  } →

  apply(Matrix_Power()) →
  apply(Det_Matrix_Power()) →
  apply(Det_Order_2) →
  assert(
    F_{n+1}F_{n-1} - F_n^2 = det([
      [F_{n+1}, F_n],
      [F_n, F_{n-1}]
    ]) = det([
      [1, 1],
      [1, 0]
    ]^n) = (-1)^n
  )
}