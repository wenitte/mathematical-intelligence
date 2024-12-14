theorem Complex_Arithmetic_Example() {
  assert(
    (((√3 - i)/(√3 + i))^4 * ((1 + i)/(1 - i))^5) = (-√3/2 - (1/2)i)
  )
}

proof Complex_Arithmetic_Example() {
  step1() {
    assert(
      ((√3 - i)/(√3 + i))^4 * ((1 + i)/(1 - i))^5 =
      ((((√3 - i)^2)/((√3 + i)(√3 - i)))^4 * (((1 + i)^2)/((1 - i)(1 + i)))^5)
    )
  } →

  step2() {
    assert(
      ((((√3 - i)^2)/((√3 + i)(√3 - i)))^4 * (((1 + i)^2)/((1 - i)(1 + i)))^5) =
      ((3 + i^2 - 2√3i)/(√3^2 + 1^2))^4 * ((1 + i^2 + 2i)/(1^2 + 1^2))^5)
    )
  } →

  step3() {
    assert(
      ((3 + i^2 - 2√3i)/(√3^2 + 1^2))^4 * ((1 + i^2 + 2i)/(1^2 + 1^2))^5 =
      ((2 - 2√3i)/4)^4 * ((2i)/2)^5
    )
  } →

  step4() {
    assert(
      ((2 - 2√3i)/4)^4 * ((2i)/2)^5 =
      (1/2 - (√3/2)i)^4 * i^5
    )
  } →

  step5() {
    assert(
      (1/2 - (√3/2)i)^4 * i^5 =
      (cis(5π/3))^4 * i
    )
  } →

  lemma DeMoivre() {
    assert(
      (cis(5π/3))^4 * i =
      cis(20π/3) * i
    )
  } →

  step6() {
    assert(
      cis(20π/3) * i =
      cis(18π/3) * cis(2π/3) * i
    )
  } →

  step7() {
    assert(
      cis(18π/3) * cis(2π/3) * i =
      cis(2π/3) * cis(π/2)
    )
  } →

  step8() {
    assert(
      cis(2π/3) * cis(π/2) =
      cis(7π/6)
    )
  } →

  step9() {
    assert(
      cis(7π/6) =
      cos(7π/6) + i*sin(7π/6)
    )
  } →

  step10() {
    assert(
      cos(7π/6) + i*sin(7π/6) =
      -√3/2 - (1/2)i
    )
  }
}