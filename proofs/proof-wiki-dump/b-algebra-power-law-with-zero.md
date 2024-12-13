theorem BAlgebraPowerLaw() {
  assert(
    ∀X: BAlgebra ∧ ∀n,m ∈ ℕ>0 ∧ n > m ⇒
    ∀x ∈ X: x^m ∘ x^n = 0 ∘ x^(n-m)
  )
} ↔

proof BAlgebraPowerLaw() {
  lemma BasePowerCase() {
    assert(∀x ∈ X: x ∘ x^2 = 0 ∘ x) →
    setVar(x: X) →
    assert(x ∘ x^2 = x ∘ (x^1 ∘ (0 ∘ x)))     by def_Power →
    assert(= x ∘ (x ∘ (0 ∘ x)))               by def_FirstPower →
    assert(= (x ∘ x) ∘ x)                      by axiom_A3 →
    assert(= 0 ∘ x)                            by axiom_A1
  } →

  lemma GeneralPowerCase() {
    assert(∀x ∈ X: ∀m ∈ ℕ>0: x ∘ x^m = 0 ∘ x^(m-1)) →
    setVar(x: X, m: ℕ>0) →
    assert(x ∘ x^m = x ∘ (x^(m-1) ∘ (0 ∘ x))) by def_Power →
    assert(= (x ∘ x) ∘ x^(m-1))               by axiom_A3 →
    assert(= 0 ∘ x^(m-1))                      by axiom_A1
  } →

  proof MainInduction() {
    apply(BasePowerCase()) →
    assume(x^m ∘ x^n = 0 ∘ x^(n-m)) →
    assert(x^(m+1) ∘ x^n = (x^m ∘ (0 ∘ x)) ∘ x^n) by def_Power →
    assert(= x^m ∘ (x^n ∘ x))                     by identity_BAlgebra →
    assert(= x^m ∘ x^(n-1))                       by def_Power →
    assert(= x^0 ∘ x^(n-m-1))                     by lemma_GeneralPowerCase →
    assert(= 0 ∘ x^(n-m-1))                       by def_ZerothPower
  }
}