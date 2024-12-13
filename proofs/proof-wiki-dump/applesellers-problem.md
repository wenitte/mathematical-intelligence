theorem Applesellers_Trust_Analysis() {
  assert(
    ∀a,b,c,d ∈ ℝ⁺ ⇒ (
      let trust_profitable := (b+d)/(a+c) > (bc+ad)/(2ac) ∧
      let price1 := b/a ∧
      let price2 := d/c ∧
      trust_profitable ↔ (bc-ad)(a-c) > 0
    )
  )
}

proof Applesellers_Trust_Analysis() {
  setVars(a,b,c,d: ℝ⁺) →
  
  lemma Average_Price() {
    assert(
      avg_price = (price1 + price2)/2 →
      avg_price = (b/a + d/c)/2 →
      avg_price = (bc + ad)/(2ac)
    )
  } →
  
  lemma Trust_Price() {
    assert(
      trust_price = (total_cents)/(total_apples) →
      trust_price = (b + d)/(a + c)
    )
  } →
  
  assert(
    trust_profitable ↔ (b + d)/(a + c) > (bc + ad)/(2ac)
  ) →
  
  assert(
    (b + d)/(a + c) > (bc + ad)/(2ac) →
    (b + d)(2ac) > (bc + ad)(a + c) →
    2abc + 2acd > abc + adc + bc² + c²d →
    abc + acd > bc² + c²d →
    ac(b + d) > c²(b + d) →
    (a - c)c(b + d) > 0 →
    (bc - ad)(a - c) > 0
  ) →
  
  lemma Success_Conditions() {
    assert(
      trust_profitable ↔ (
        bc - ad > 0 ∧ 
        a - c > 0 ↔
        price1 > price2 ∧
        denom_higher > denom_lower
      )
    )
  }
}

theorem Example_Trust1() {
  assert(
    let a=3, b=2, c=2, d=1 →
    bc-ad = 1 > 0 ∧ a-c = 1 > 0 →
    trust_profitable = true
  )
}

theorem Example_Trust2() {
  assert(
    let a=3, b=1, c=2, d=1 →
    bc-ad = -1 < 0 ∧ a-c = 1 > 0 →
    trust_profitable = false
  )
}