theorem Argument_Of_Quotient() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ arg(z₁/z₂) = arg(z₁) - arg(z₂) + 2kπ 
    where k ∈ {-1,0,1}
  )
}

proof Argument_Of_Quotient() {
  setVar(z₁,z₂: ℂ) →
  setPolar(z₁ = r₁∠θ₁) →
  setPolar(z₂ = r₂∠θ₂) →
  
  lemma Complex_Division_Polar() {
    assert(
      z₁/z₂ = (r₁/r₂)(cos(θ₁-θ₂) + i·sin(θ₁-θ₂))
    )
  } →
  
  assert(arg(z₁) = θ₁) ∧
  assert(arg(z₂) = θ₂) →
  assert(arg(z₁/z₂) = θ₁-θ₂) →
  
  case_analysis {
    case θ₁-θ₂ > π {
      assert(-π < θ₁-θ₂-2π ≤ π) →
      assert(cos(θ₁-θ₂) = cos(θ₁-θ₂-2π)) ∧
      assert(sin(θ₁-θ₂) = sin(θ₁-θ₂-2π)) →
      assert(arg(z₁/z₂) = θ₁-θ₂-2π) where k = -1
    }
    
    case θ₁-θ₂ ≤ -π {
      assert(-π < θ₁-θ₂+2π ≤ π) →
      assert(cos(θ₁-θ₂) = cos(θ₁-θ₂+2π)) ∧
      assert(sin(θ₁-θ₂) = sin(θ₁-θ₂+2π)) →
      assert(arg(z₁/z₂) = θ₁-θ₂+2π) where k = 1
    }
    
    case -π < θ₁-θ₂ ≤ π {
      assert(arg(z₁/z₂) = θ₁-θ₂) where k = 0
    }
  }
}