theorem Combination_Sequence_Multiple_Rule(R: NormedDivisionRing) {
  assert(
    ∀x_n ∈ Sequence(R) ∧
    ∀λ ∈ R ∧
    ∃l ∈ R ∧
    (lim[n→∞](x_n) = l) ⇒
    (lim[n→∞](λx_n) = λl)
  )
} ↔

proof Combination_Sequence_Multiple_Rule() {
  setVar(x_n: Sequence(R)) →
  setVar(λ: R) →
  setVar(l: R) →
  
  define(x̃_n: Sequence(R)) {
    x̃_n = (λ, λ, λ, ...) 
  } →
  
  define(y_n: Sequence(R)) {
    y_n = x_n
  } →
  
  assert(λx_n = x̃_n y_n) →
  
  apply(Product_Rule_Normed_Division_Ring()) {
    premise(lim[n→∞](x̃_n) = λ) ∧
    premise(lim[n→∞](y_n) = l) →
    conclude(lim[n→∞](x̃_n y_n) = λl)
  } →
  
  assert(lim[n→∞](λx_n) = λl)
}