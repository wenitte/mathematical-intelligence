theorem Basel_Problem() {
  assert(
    ∑(n=1 to ∞)[1/n²] = π²/6
  )
} ↔

proof Basel_Problem() {
  define(fn(x): ℝ → ℝ) {
    fn(x) = 1/2 + ∑(k=1 to n)[cos(kx)]
  } →
  
  apply(Lagrange_Cosine_Identity) {
    fn(x) = sin((2n+1)x/2)/(2sin(x/2))
  } →
  
  define(En: ℝ) {
    En = ∫(0 to π)[x·fn(x)dx]
  } →
  
  assert(
    En = π²/4 + ∑(k=1 to n)[((-1)^k - 1)/k²]
  ) →
  
  assert(
    1/2·E(2n-1) = π²/8 - ∑(k=1 to n)[1/(2k-1)²]
  ) →
  
  define(g(x): ℝ → ℝ) {
    g(x) = d/dx[(x/2)/sin(x/2)]
  } →
  
  apply(Integration_By_Parts) {
    E(2n-1) = 1/(4n-1)·(2 + 2∫(0 to π)[g(x)·cos((4n-1)x/2)dx])
  } →
  
  lemma Limit_Zero() {
    assert(
      lim(n→∞)[E(2n-1)] = 0
    )
  } →
  
  apply(Limit_Zero) {
    π²/8 = ∑(k=1 to ∞)[1/(2k-1)²]
  } →
  
  assert(
    ∑(k=1 to ∞)[1/k²] = ∑(k=1 to ∞)[1/(2k)²] + ∑(k=1 to ∞)[1/(2k-1)²]
  ) →
  
  assert(
    ∑(k=1 to ∞)[1/k²] = 1/4·∑(k=1 to ∞)[1/k²] + π²/8
  ) →
  
  solve(∑(k=1 to ∞)[1/k²]) {
    3/4·∑(k=1 to ∞)[1/k²] = π²/8 →
    ∑(k=1 to ∞)[1/k²] = 4/3·π²/8 →
    ∑(k=1 to ∞)[1/k²] = π²/6
  }
}