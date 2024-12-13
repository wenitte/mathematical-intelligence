theorem Square_Extreme_Mean_Ratio() {
  assert(
    ∀AB ∈ Line, ∃C ∈ AB | 
    (C divides AB in extreme_mean_ratio ∧ 
     AC > BC) ⇒ 
    (AB² + BC² = 3⋅AC²)
  )
} ↔

proof Square_Extreme_Mean_Ratio() {
  setVar(AB: Line, C: Point) →
  assume(C divides AB in extreme_mean_ratio) →
  assume(AC > BC) →
  
  construct(ADEB: Square on AB) →
  
  lemma Proportional_Lines() {
    apply(Book_VI_Prop_17) →
    apply(Book_VI_Def_3) →
    assert(AB⋅BC = AC²)
  } →
  
  assert(AK = AB⋅BC) →
  assert(HG = AC²) →
  apply(Proportional_Lines()) →
  assert(AK = HG) →
  
  assert(AF = FE) →
  assert(AF + CK = FE + CK) →
  assert(AK = CE) →
  assert(AK + CE = 2⋅CE) →
  
  let(LMN: gnomon) →
  assert(AK + CE = LMN + CK) →
  assert(LMN + CK = 2⋅AK) →
  
  apply(AK = HG) →
  assert(LMN + CK + HG = 3⋅HG) →
  
  assert(LMN + CK + HG = AE + CK) →
  assert(HG = AC²) →
  
  conclude(AB² + BC² = 3⋅AC²)
}