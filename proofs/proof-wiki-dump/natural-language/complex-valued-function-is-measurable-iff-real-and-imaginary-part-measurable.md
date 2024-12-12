# 

Source: https://proofwiki.org/wiki/Complex-Valued_Function_is_Measurable_iff_Real_and_Imaginary_Part_Measurable



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $\struct {\R, \map \BB \R}$ be the real numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f : X \to \C$ be a function.
Let $\map \Re f : X \to \R$ and $\map \Im f : X \to \R$ be the pointwise real part and imaginary part of $f$ respectively.

Then $f$ is $\Sigma/\map \BB \C$-measurable if and only if $\map \Re f$ and $\map \Im f$ are $\Sigma/\map \BB \R$-measurable.


Proof
Necessary Condition
Suppose that $f$ is $\struct {X, \Sigma}$/$\struct {\C, \map \BB \C}$-measurable.
From Real and Imaginary Part Projections are Continuous and Continuous Mapping is Measurable, the real part and imaginary part are $\map \BB \C/\map \BB \R$-measurable as mappings $\C \to \R$.
Hence from Composition of Measurable Mappings is Measurable, $\map \Re f$ and $\map \Im f$ are $\Sigma/\map \BB \R$-measurable.
$\Box$


Sufficient Condition
Suppose that $\map \Re f$ and $\map \Im f$ are $\Sigma/\map \BB \R$-measurable.
Then from Measurability in Trace Sigma-Algebra, we have that $\map \Re f$ and $\map \Im f$ are $\Sigma/\map \BB \C$-measurable.
From Linear Combination of Measurable Functions valued in Topological Vector Space is Measurable, $f = \map \Re f + i \map \Im f$ is $\Sigma/\map \BB \C$-measurable.
$\blacksquare$





