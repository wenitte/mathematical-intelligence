theorem LSC_Characterization() {
  assert(
    ∀f: S → R̄, ∀S with topology τ ⇒
    (LSC(f) ↔ Closed(epi(f)) ↔ ∀α∈ℝ(Closed(lev_α(f))))
  )
} ↔

proof LSC_Characterization() {
  // Part 1: LSC ⇒ Closed Epigraph
  lemma LSC_to_Closed_Epi() {
    setVar(f: S → R̄, LSC(f)) →
    setVar(sequence((xₙ,aₙ) ∈ epi(f))ₙ∈ℕ) →
    assume((xₙ,aₙ) → (x̄,ā)) →
    assert(xₙ → x̄ ∧ aₙ → ā) →
    assert(
      f(x̄) = liminf(x→x̄)f(x) ≤ 
      liminf(n→∞)f(xₙ) ≤ 
      liminf(n→∞)aₙ = ā
    ) →
    conclude((x̄,ā) ∈ epi(f))
  } →

  // Part 2: Closed Epigraph ⇒ Closed Level Sets
  lemma Closed_Epi_to_Closed_Lev() {
    setVar(Closed(epi(f))) →
    setVar(α ∈ ℝ) →
    assert(lev_α(f) = epi(f) ∩ (S × {α})) →
    assert(Closed(S × {α})) →
    conclude(Closed(lev_α(f)))
  } →

  // Part 3: Closed Level Sets ⇒ LSC
  lemma Closed_Lev_to_LSC() {
    assume(∀α∈ℝ(Closed(lev_α(f)))) →
    setVar(x ∈ S) →
    setVar(a := liminf(t→x)f(t)) →
    
    case a = ∞ {
      conclude(f(x) ≤ a)
    } →
    
    case a < ∞ {
      setVar(sequence(xₙ)ₙ∈ℕ: xₙ→x ∧ f(xₙ)→a) →
      assert(∀b>a(∀n(xₙ ∈ lev_b(f)))) →
      assert(∀b>a(x ∈ lev_b(f))) →
      conclude(f(x) ≤ a)
    } →
    
    conclude(LSC(f))
  } →

  apply(LSC_to_Closed_Epi()) →
  apply(Closed_Epi_to_Closed_Lev()) →
  apply(Closed_Lev_to_LSC()) →
  conclude(LSC(f) ↔ Closed(epi(f)) ↔ ∀α∈ℝ(Closed(lev_α(f))))
}