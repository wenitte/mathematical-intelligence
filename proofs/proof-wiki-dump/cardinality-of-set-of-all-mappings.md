theorem Cardinality_Of_Mappings() {
  assert(
    ∀S,T: Sets ⇒ card(T^S) = card(T)^card(S)
  )
} ↔

proof Cardinality_Of_Mappings_Finite() {
  setVar(S: Set, T: Set) →
  setVar(n: ℕ = card(S), m: ℕ = card(T)) →
  
  lemma Empty_Domain() {
    assert(n = 0 ⇒ card(T^∅) = 1 = m^0)
  } →

  lemma Empty_Codomain() {
    assert(m = 0 ∧ n > 0 ⇒ card(∅^S) = 0 = 0^n) ∧
    assert(m = 0 ∧ n = 0 ⇒ card(T^S) = 1 = 0^0)
  } →

  lemma Non_Empty_Sets() {
    assert(m > 0 ∧ n > 0) →
    setVar(σ: ℕn → S, τ: T → ℕm) as Bijections →
    define(Φ: T^S → (ℕm)^(ℕn), f ↦ τ ∘ f ∘ σ) →
    assert(Φ is Bijection)
  } →

  lemma Inductive_Step() {
    setVar(m ∈ ℕ>0) →
    define(𝕋(n,m) = {f: ℕn → ℕm}) →
    define(𝕊 = {n ∈ ℕ: card(𝕋(n,m)) = m^n}) →
    assert(0 ∈ 𝕊) →
    setVar(n ∈ 𝕊) →
    define(ρ: 𝕋(n+1,m) → 𝕋(n,m), f ↦ f|ℕn) →
    assert(∀g ∈ 𝕋(n,m): card(ρ^(-1)({g})) = m) →
    assert(card(𝕋(n+1,m)) = m·m^n = m^(n+1)) →
    apply(Mathematical_Induction) →
    assert(𝕊 = ℕ)
  } →

  apply(Empty_Domain()) ∧
  apply(Empty_Codomain()) ∧
  apply(Non_Empty_Sets()) ∧
  apply(Inductive_Step())
}