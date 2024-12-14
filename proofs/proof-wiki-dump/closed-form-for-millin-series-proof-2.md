theorem Millin_Series_Closed_Form() {
  assert(
    ∑_{n=0}^∞ 1/F_{2^n} = (7-√5)/2
    where F_n := nth Fibonacci number
  )
} ↔

proof Millin_Series_Closed_Form() {
  define(F(x) := ∑_{k=1}^∞ x^{2^{k-1}}/F_{2^k}) →
  define(α := (1+√5)/2) →
  define(β := (1-√5)/2) →

  lemma Series_Convergence() {
    assert(|x| ≤ 1 ⇒ |x^{2^{k-1}}/F_{2^k}| ≤ 1/F_{2^k}) →
    assert(∑_{k=1}^∞ 1/F_{2^k} converges) →
    therefore(F(x) converges for |x| ≤ 1)
  } →

  assert(F(αx) + F(βx) = ∑_{k=1}^∞ (α^{2^{k-1}} + β^{2^{k-1}})/F_{2^k} * x^{2^{k-1}}) →
  apply(Lucas_Numbers_Identity: α^n + β^n = L_n) →
  assert(= ∑_{k=1}^∞ L_{2^{k-1}}/F_{2^k} * x^{2^{k-1}}) →
  apply(Fibonacci_Lucas_Identity: F_{2n} = F_n * L_n) →
  assert(= ∑_{k=1}^∞ x^{2^{k-1}}/F_{2^{k-1}}) →
  reindex(k := k-1) →
  assert(= x + F(x^2)) →

  setVar(x := -β) →
  assert(β^2 ≤ 1) →
  assert(-β + F(β^2) = F(-β^2) + F(-αβ)) →
  apply(Identity: αβ = -1) →
  apply(Identity: F(β^2) = F(-β^2) + 2β^2) →
  assert(F(1) = -β + 2β^2) →

  assert(∑_{k=0}^∞ 1/F_{2^k} = 1 + F(1)) →
  assert(= 1 - β + 2β^2) →
  assert(= 2 - (1 + β - β^2) + β^2) →
  assert(= 2 + (3-√5)/2) →
  assert(= (7-√5)/2)
}