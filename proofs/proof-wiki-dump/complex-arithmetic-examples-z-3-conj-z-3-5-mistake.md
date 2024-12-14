theorem Complex_Difference_Power() {
  assert(
    let z₃ = √3 - 2i →
    (z₃ - conj(z₃))⁵ = -1024i
  )
}

proof Complex_Difference_Power() {
  setVar(z₃ = √3 - 2i) →
  assert(conj(z₃) = √3 + 2i) →
  
  step1: {
    (z₃ - conj(z₃))⁵ = ((√3 - 2i) - (√3 + 2i))⁵
  } →
  
  step2: {
    ((√3 - 2i) - (√3 + 2i))⁵ = (-4i)⁵
  } →
  
  step3: {
    (-4i)⁵ = (-1)⁵ × 4⁵ × i⁵
  } →
  
  step4: {
    (-1)⁵ × 4⁵ × i⁵ = (-1) × 1024 × i
  } →
  
  conclude: {
    (-1) × 1024 × i = -1024i
  }
}