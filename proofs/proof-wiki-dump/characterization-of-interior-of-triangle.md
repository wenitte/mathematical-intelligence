theorem Triangle_Interior_Characterization() {
  define(
    Triangle(T: ℝ²),
    Vertices(A₁,A₂,A₃: ℝ²),
    i ∈ {1,2,3},
    j = i mod 3 + 1,
    k = (i + 1) mod 3 + 1,
    Uᵢ = {Aᵢ + st(Aⱼ - Aᵢ) + (1-s)t(Aₖ - Aᵢ) : s ∈ (0,1), t ∈ ℝ₊}
  ) →
  assert(
    Int(T) = ∩ᵢ₌₁³ Uᵢ
  )
}

proof Triangle_Interior_Characterization() {
  lemma Interior_Is_Subset() {
    setVar(q ∈ Int(T)) →
    setVar(i ∈ {1,2,3}) →
    define(
      v = Aⱼ - Aᵢ,
      w = Aₖ - Aᵢ,
      u = v - w,
      L = {q + su : s ∈ ℝ₊},
      L' = {q + s'(-u) : s' ∈ ℝ₊}
    ) →
    assert(¬(L ∪ L' crosses Sⱼ)) →
    assert(∃p₁,p₂ ∈ ℝ² : p₁ = Aᵢ + r₁v = q + r(v-w) ∧ p₂ = Aᵢ + r₂w = q + r'(v-w)) →
    assert(r₁ = r₂) by LinearIndependence(v,w) →
    solve(q = Aᵢ + (½r₁ - ½r - ½r')v + (½r₁ + ½r + ½r')w) →
    conclude(q ∈ Uᵢ) →
    conclude(q ∈ ∩ᵢ₌₁³ Uᵢ)
  }

  lemma Interior_Is_Superset() {
    setVar(q ∈ ∩ᵢ₌₁³ Uᵢ) →
    define(
      L = {q + r(-v) : r ∈ ℝ₊},
      q = Aᵢ + stv + (1-s)tw
    ) →
    assert(L crosses Sₖ) →
    assert(∃r₂ ∈ [0,1] : Aᵢ + r₂w = q - rv) →
    solve(r = st ∧ r₂ = (1-s)t) →
    assert(r₂ < 1) →
    assert(par(q) = 1) →
    conclude(q ∈ Int(T))
  }

  apply(Interior_Is_Subset()) →
  apply(Interior_Is_Superset()) →
  conclude(Int(T) = ∩ᵢ₌₁³ Uᵢ) by SetEquality()
}