theorem Acceleration_Second_Derivative() {
  assert(
    ∀M[Body] ∃a[Vector] ∃s[Vector] ∃t[ℝ] ⇒
    (a = (d²s)/(dt²))
  )
} ↔

proof Acceleration_Second_Derivative() {
  setDef(acceleration: a = dv/dt) →
  setDef(velocity: v = ds/dt) →
  
  lemma Substitute_Velocity() {
    assert(
      a = dv/dt ∧ v = ds/dt ⇒
      a = d(ds/dt)/dt
    )
  } →
  
  apply(Substitute_Velocity()) →
  
  lemma Second_Derivative_Definition() {
    assert(
      d(ds/dt)/dt ↔ (d²s)/(dt²)
    )
  } →
  
  apply(Second_Derivative_Definition()) →
  
  assert(a = (d²s)/(dt²))
}