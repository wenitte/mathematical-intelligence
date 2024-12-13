theorem Biholomorphic_Unit_Disk_To_Half_Plane() {
  let(𝔻 := {z ∈ ℂ : |z| < 1}) ∧
  let(ℍr := {z ∈ ℂ : Re(z) > 0}) ∧
  let(f: 𝔻 → ℂ) ∧
  def(f(z) := (1-z)/(1+z)) →
  assert(f is_biholomorphic_map(𝔻 → ℍr))
} ↔

proof Biholomorphic_Unit_Disk_To_Half_Plane() {
  lemma Mobius_Bijection() {
    def(f*(z) := {
      (1-z)/(1+z) if z ≠ -1,
      ∞ if z = -1,
      -1 if z = ∞
    }) →
    assert(f* is_bijection(ℂ̄ → ℂ̄)) →
    conclude(f is_injection(𝔻 → ℂ))
  } →
  
  lemma Image_In_Half_Plane() {
    setVar(z ∈ ℂ, z ∉ {-1, ∞}) →
    assert(f*(z) = (1-z)/(1+z)) →
    assert(f*(z) = ((1-z)(1+z̄))/((1+z)(1+z)̄)) →
    assert(f*(z) = (1-(z-z̄)-zz̄)/|1+z|²) →
    assert(f*(z) = (1-2iIm(z)-|z|²)/|1+z|²) →
    assert(f*(z) = ((1-|z|²)/|1+z|²) + 2i(Im(z)/|1+z|²)) →
    conclude(Re(f*(z)) > 0 ↔ |z| < 1)
  } →
  
  lemma Surjectivity() {
    apply(Image_In_Half_Plane()) →
    assert(∀w ∈ ℍr ∃z ∈ 𝔻: f(z) = w) →
    conclude(f is_surjection(𝔻 → ℍr))
  } →
  
  lemma Inverse_Function() {
    def(f⁻¹: ℍr → 𝔻) →
    setVar(z ∈ 𝔻) →
    assert((f⁻¹∘f)(z) = (1-((1-z)/(1+z)))/(1+((1-z)/(1+z)))) →
    assert((f⁻¹∘f)(z) = ((1+z)-(1-z))/((1+z)+(1-z))) →
    assert((f⁻¹∘f)(z) = 2z/2) →
    assert((f⁻¹∘f)(z) = z)
  } →
  
  apply(Complex_Derivatives_Quotient_Rule()) →
  assert(f is_holomorphic(𝔻)) ∧
  assert(f⁻¹ is_holomorphic(ℍr)) →
  conclude(f is_biholomorphic(𝔻 → ℍr))
}