theorem AngleBisectorVector() {
  assert(
    ∀u,v ∈ V³ where (‖u‖ ≠ 0 ∧ ‖v‖ ≠ 0) ⇒
    let a = ‖u‖v + ‖v‖u ⇒
    a is_angle_bisector_of(u,v)
  )
} ↔

proof AngleBisectorVector() {
  setVar(u,v: V³, ‖u‖ ≠ 0, ‖v‖ ≠ 0) →
  let(a = ‖u‖v + ‖v‖u) →
  
  assert(cos∠(u,a) = (u·a)/(‖u‖‖a‖)) by CosineFormula() →
  assert((u·a)/(‖u‖‖a‖) = (u·(‖u‖v + ‖v‖u))/(‖u‖‖a‖)) by Substitution() →
  assert(
    = (‖u‖(u·v) + ‖v‖(u·u))/(‖u‖‖a‖)
  ) by DotProductScalar() →
  assert(
    = (‖u‖(u·v) + ‖v‖‖u‖²)/(‖u‖‖a‖)
  ) by DotProductSelf() →
  assert(
    = ((u·v) + ‖u‖‖v‖)/‖a‖
  ) by Simplification() →

  let(angle1 = ((u·v) + ‖u‖‖v‖)/‖a‖) →
  
  assert(cos∠(a,v) = (v·a)/(‖v‖‖a‖)) by CosineFormula() →
  assert(
    = (v·(‖u‖v + ‖v‖u))/(‖v‖‖a‖)
  ) by Substitution() →
  assert(
    = (‖u‖(v·v) + ‖v‖(u·v))/(‖v‖‖a‖)
  ) by DotProductScalar() →
  assert(
    = (‖v‖(u·v) + ‖u‖‖v‖²)/(‖v‖‖a‖)
  ) by DotProductSelf() →
  assert(
    = ((u·v) + ‖u‖‖v‖)/‖a‖
  ) by Simplification() →

  let(angle2 = ((u·v) + ‖u‖‖v‖)/‖a‖) →
  
  assert(angle1 = angle2) →
  assert(cos∠(u,a) = cos∠(a,v)) →
  assert(∠(u,a) = ∠(a,v)) by CosineInjectivity(0,π) →
  assert(a is_angle_bisector_of(u,v))
}