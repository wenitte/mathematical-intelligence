theorem Altitude_North_Celestial_Pole() {
  assert(
    ∀O,P ∈ CelestialSphere,
    ∀a,φ ∈ ℝ,
    (isObserver(O) ∧ 
     isNorthCelestialPole(P) ∧
     a = altitude(P) ∧
     φ = latitude(O)) ⇒
    a = φ
  )
}

proof Altitude_North_Celestial_Pole() {
  setVar(z: ℝ, zenithDistance(P)) →
  setVar(ψ: ℝ, colatitude(O)) →
  
  assert(a = 90° - z) →
  assert(φ = 90° - ψ) →
  
  lemma Zenith_Distance_Equals_Colatitude() {
    assert(z = ψ)
  } →
  
  apply(Zenith_Distance_Equals_Colatitude()) →
  assert(90° - z = 90° - ψ) →
  assert(a = φ) →
  
  QED()
}