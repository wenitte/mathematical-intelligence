theorem Stopping_Times_Characterization() {
  let(Ω, Σ, {ℱₜ}_{t≥0}, ℙ: FilteredProbabilitySpace) →
  let(T: Ω → [0,∞]: RandomVariable) →
  let({𝒢ₜ}_{t≥0}: RightLimitFiltration({ℱₜ}_{t≥0})) →
  assert(
    (1) ⟺ (2) ⟺ (3) where
    (1): isStoppingTime(T, {𝒢ₜ}_{t≥0}) ∧
    (2): ∀t∈(0,∞) ⇒ {ω∈Ω: T(ω)<t} ∈ ℱₜ ∧
    (3): ∀t∈(0,∞) ⇒ isMeasurable(T∧t, ℱₜ)
  )
}

proof One_Implies_Two() {
  assume(isStoppingTime(T, {𝒢ₜ}_{t≥0})) →
  setVar(t: (0,∞)) →
  assert(∀n∈ℕ ⇒ {ω∈Ω: T(ω)≤t-1/n} ∈ 𝒢ₜ₋₁/ₙ) →
  assert(𝒢ₜ₋₁/ₙ = ⋂_{s>t-1/n} ℱₛ) →
  assert(𝒢ₜ₋₁/ₙ ⊆ ℱₜ) →
  assert({ω∈Ω: T(ω)≤t-1/n} ∈ ℱₜ) →
  assert({ω∈Ω: T(ω)<t} = ⋃_{n=1}^∞ {ω∈Ω: T(ω)≤t-1/n}) →
  apply(CountableUnionClosure(ℱₜ)) →
  conclude({ω∈Ω: T(ω)<t} ∈ ℱₜ)
}

proof Two_Implies_One() {
  assume(∀t∈(0,∞) ⇒ {ω∈Ω: T(ω)<t} ∈ ℱₜ) →
  setVar(t: (0,∞), s>t) →
  assert(∀n∈ℕ ⇒ {ω∈Ω: T(ω)<t+1/n} ∈ ℱₜ₊₁/ₙ) →
  assert(∃Nₜ∈ℕ: ∀n≥Nₜ ⇒ t+1/n<s) →
  assert(∀n≥Nₜ ⇒ {ω∈Ω: T(ω)<t+1/n} ∈ ℱₛ) →
  assert({ω∈Ω: T(ω)≤t} = ⋂_{n=Nₜ}^∞ {ω∈Ω: T(ω)<t+1/n}) →
  apply(CountableIntersectionClosure(ℱₛ)) →
  assert({ω∈Ω: T(ω)≤t} ∈ ℱₛ) →
  conclude(isStoppingTime(T, {𝒢ₜ}_{t≥0}))
}

proof One_Implies_Three() {
  assume(isStoppingTime(T, {𝒢ₜ}_{t≥0})) →
  setVar(t: (0,∞)) →
  assert(∀s<t ⇒ {ω∈Ω: T(ω)≤s} ∈ 𝒢ₛ ⊆ ℱₜ) →
  assert(∀s<t ⇒ [{ω∈Ω: T(ω)≤s} ↔ {ω∈Ω: min{T(ω),t}≤s}]) →
  assert(∀s≥t ⇒ {ω∈Ω: min{T(ω),t}≤s} = Ω ∈ ℱₜ) →
  conclude(isMeasurable(T∧t, ℱₜ))
}

proof Three_Implies_Two() {
  assume(∀t∈(0,∞) ⇒ isMeasurable(T∧t, ℱₜ)) →
  setVar(t: (0,∞)) →
  assert(∀s<t ⇒ {ω∈Ω: min{T(ω),t}≤s} ∈ ℱₜ) →
  assert(∀n∈ℕ ⇒ {ω∈Ω: T(ω)≤t-1/n} ∈ ℱₜ) →
  assert({ω∈Ω: T(ω)<t} = ⋃_{n=1}^∞ {ω∈Ω: T(ω)≤t-1/n}) →
  apply(CountableUnionClosure(ℱₜ)) →
  conclude({ω∈Ω: T(ω)<t} ∈ ℱₜ)
}