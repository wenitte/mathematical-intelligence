theorem CStarAlgebraHomomorphismNormDecreasing() {
  let(A: CStar_Algebra, B: CStar_Algebra) →
  let(φ: A → B, StarAlgebraHomomorphism(φ)) →
  assert(
    ∀x ∈ A ⇒ ‖φ(x)‖_B ≤ ‖x‖_A
  )
} ↔

proof CStarAlgebraHomomorphismNormDecreasing() {
  setVar(x: A) →
  assert(‖φ(x)‖_B = ‖φ(x)(φ(x))†‖_B) by(CStarAlgebraDefinition) →
  assert(‖φ(x)(φ(x))†‖_B = r_B(φ(x)(φ(x))†)) by(SpectralRadiusNormalElement) →
  assert(r_B(φ(x)(φ(x))†) = r_B(φ(xx*))) by(StarAlgebraHomomorphismDef) →

  lemma SpectrumInclusion() {
    assert(σ_B(φ(xx*)) ∪ {0} ⊆ σ_A(xx*) ∪ {0})
  } →

  apply(SpectrumInclusion()) →
  assert(r_B(φ(xx*)) = sup{|z| : z ∈ σ_B(φ(xx*))}) by(SpectralRadiusDef) →
  assert(sup{|z| : z ∈ σ_B(φ(xx*)) ∪ {0}} ≤ sup{|z| : z ∈ σ_A(xx*) ∪ {0}}) →
  assert(sup{|z| : z ∈ σ_A(xx*) ∪ {0}} = sup{|z| : z ∈ σ_A(xx*)}) →
  assert(sup{|z| : z ∈ σ_A(xx*)} = r_A(xx*)) by(SpectralRadiusDef) →
  assert(r_A(xx*) = ‖xx*‖_A) by(SpectralRadiusNormalElement) →
  assert(‖xx*‖_A = ‖x‖_A²) by(CStarAlgebraDefinition) →

  conclude(
    ‖φ(x)‖_B² ≤ ‖x‖_A² →
    ‖φ(x)‖_B ≤ ‖x‖_A
  )
}