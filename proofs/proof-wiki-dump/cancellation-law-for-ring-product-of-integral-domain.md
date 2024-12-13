theorem Ring_Cancellation_Law() {
  assert(
    let D be_integral_domain(zero: 0_D) ∧
    let D* = D \ {0_D} ∧
    let a ∈ D* →
    ∀x,y ∈ D: (a ○ x = a ○ y → x = y)
  )
} ↔

proof Ring_Cancellation_Law() {
  lemma Integral_Domain_Property() {
    assert(
      ∀z ∈ D*: ¬is_zero_divisor(z)
    )
  } →
  
  lemma Zero_Divisor_Cancellable() {
    assert(
      ∀z ∈ D: (¬is_zero_divisor(z) ↔ is_cancellable(z))
    )
  } →
  
  apply(Integral_Domain_Property()) →
  apply(Zero_Divisor_Cancellable()) →
  
  assert(
    ∀z ∈ D*: is_cancellable(z)
  ) →
  
  assert(
    a ∈ D* → is_cancellable(a)
  ) →
  
  conclude(
    ∀x,y ∈ D: (a ○ x = a ○ y → x = y)
  )
}