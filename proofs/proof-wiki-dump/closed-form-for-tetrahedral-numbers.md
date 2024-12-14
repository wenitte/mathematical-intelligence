theorem TetrahedralNumber() {
  assert(
    ∀n ∈ ℕ+ ⇒ (Hn = (n(n+1)(n+2))/6)
  )
} ↔

proof TetrahedralNumber() {
  setVar(n: ℕ+) →
  assert(Hn = ∑(k=1 to n)(Tk)) by def_tetrahedral →
  assert(Hn = ∑(k=1 to n)((k(k+1))/2)) by triangular_closed_form →
  assert(Hn = ∑(k=1 to n)((1/2)k² + (1/2)k)) by algebra →
  assert(Hn = (1/2)∑(k=1 to n)(k²) + (1/2)∑(k=1 to n)(k)) by sum_linearity →
  assert(Hn = (1/2)∑(k=1 to n)(k²) + (1/2)Tn) by def_triangular →
  lemma SumSquares() {
    assert(∑(k=1 to n)(k²) = (n(n+1)(2n+1))/6)
  } →
  lemma TriangularNumber() {
    assert(Tn = (n(n+1))/2)
  } →
  apply(SumSquares(), TriangularNumber()) →
  assert(Hn = (1/2)((n(n+1)(2n+1))/6) + (1/2)((n(n+1))/2)) →
  assert(Hn = (n(n+1)/12)((2n+1) + 3)) by algebra →
  assert(Hn = (n(n+1)(n+2))/6) by algebra
}