theorem Celestial_Body_Movement() {
  assert(
    ∀ C: CelestialSphere, O: Observer, B: CelestialBody, δ: Declination, Pδ: ParallelOfDeclination ⇒
    (Observer(O, C) ∧ Body(B, C) ∧ Declination(B) = δ ∧ ParallelOf(Pδ, δ)) →
    (Moves(B, Path(Pδ), Direction(N→E→S→W)) ∧ Duration(Movement) = 1_SiderealDay)
  )
}

proof Celestial_Body_Movement() {
  setVar(C: CelestialSphere, O: Observer, B: CelestialBody, δ: Declination) →
  
  lemma Earth_Rotation() {
    assert(
      Rotation(Earth, Axis) → 
      ApparentMovement(C)
    )
  } →

  lemma Sidereal_Day_Definition() {
    assert(
      Duration(Earth_Rotation) = 1_SiderealDay ↔
      ReturnPosition(PrincipalVerticalCircle)
    )
  } →

  assert(Movement(O, Direction(East))) →
  assert(ApparentMovement(C, Direction(N→E→S→W))) →

  lemma Constant_Declination() {
    assert(
      Distance(B, NorthCelestialPole, t₁) = Distance(B, NorthCelestialPole, t₂) →
      Declination(B, t₁) = Declination(B, t₂)
    )
  } →

  apply(Earth_Rotation()) →
  apply(Sidereal_Day_Definition()) →
  apply(Constant_Declination()) →
  
  assert(
    (Moves(B, Path(Pδ), Direction(N→E→S→W)) ∧ Duration(Movement) = 1_SiderealDay)
  )
}