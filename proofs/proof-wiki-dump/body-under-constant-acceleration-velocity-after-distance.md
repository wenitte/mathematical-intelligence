theorem Velocity_After_Distance() {
  assert(
    ∀B[body], ∀a[acceleration], ∀v[velocity], ∀u[initial_velocity], ∀s[displacement] ⇒
    (constant(a) ∧ B.acceleration = a) →
    (v·v = u·u + 2a·s)
  )
} ↔

proof Velocity_After_Distance() {
  reference(Velocity_After_Time) →
  assert(v = u + at) →
  
  step_1: {
    assert(v·v = (u + at)·(u + at)) →
    apply(Dot_Product_Distribution) →
    assert(v·v = u·u + u·(at) + (at)·u + (at)·(at))
  } →
  
  step_2: {
    apply(Dot_Product_Commutativity) →
    assert(v·v = u·u + 2u·(at) + (at)·(at))
  } →
  
  step_3: {
    apply(Dot_Product_Scalar_Association) →
    assert(v·v = u·u + 2u·(at) + a·a(t²))
  } →
  
  step_4: {
    apply(Dot_Product_Distribution) →
    assert(v·v = u·u + a·(2ut + at²))
  } →
  
  step_5: {
    reference(Distance_After_Time) →
    assert(s = ut + (at²)/2) →
    assert(2s = 2ut + at²)
  } →
  
  conclusion: {
    substitute(2s, 2ut + at²) →
    assert(v·v = u·u + 2a·s)
  }
}