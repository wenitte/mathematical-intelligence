theorem Localic_Mapping_Characterization() {
  let(T1 = ⟨S1,τ1⟩: TopologicalSpace) ∧
  let(T2 = ⟨S2,τ2⟩: TopologicalSpace) ∧
  let(f: T1 → T2, continuous) ∧
  let(Ω(T1), Ω(T2): Locale) ∧
  let(F: Ω(T1) → Ω(T2), localicMapping(f)) →
  assert(
    ∀U ∈ τ1 ⇒ F(U) = S2 \ cl(f[S1 \ U])
  )
}

proof Localic_Mapping_Characterization() {
  let(G: Ω(T2) → Ω(T1), frameHomomorphism(f)) →
  
  lemma GaloisConnection() {
    assert(⟨F,G⟩: GaloisConnection) →
    assert(
      ∀U ∈ τ1, V ∈ τ2 ⇒ 
      (V ⊆ F(U) ↔ G(V) ⊆ U) ∧
      (G(V) = f⁻¹[V]) ∧
      (V ⊆ S2 \ f[S1 \ U])
    )
  } →

  lemma FirstInclusion() {
    assert(∀U ∈ τ1 ⇒ F(U) ⊆ S2 \ cl(f[S1 \ U])) →
    assert(F(U) ⊆ F(U)) →
    assert(F(U) ⊆ S2 \ f[S1 \ U]) →
    assert(f[S1 \ U] ⊆ S2 \ F(U)) →
    assert(cl(f[S1 \ U]) ⊆ S2 \ F(U))
  } →

  lemma SecondInclusion() {
    assert(∀U ∈ τ1 ⇒ f[S1 \ U] ⊆ cl(f[S1 \ U])) →
    assert(S2 \ cl(f[S1 \ U]) ⊆ S2 \ f[S1 \ U]) →
    assert(S2 \ cl(f[S1 \ U]) ⊆ F(U))
  } →

  apply(FirstInclusion()) ∧
  apply(SecondInclusion()) →
  conclude(
    ∀U ∈ τ1 ⇒ F(U) = S2 \ cl(f[S1 \ U])
  )
}