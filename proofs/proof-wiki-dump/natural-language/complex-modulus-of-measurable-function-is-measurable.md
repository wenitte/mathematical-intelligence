# 

Source: https://proofwiki.org/wiki/Complex_Modulus_of_Measurable_Function_is_Measurable

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f : X \to \C$ be a $\Sigma/\map \BB \C$-measurable mapping.
Let $\struct {\R, \map \BB \R}$ be the real numbers made into a measurable space with its Borel $\sigma$-algebra.

Then $\cmod f : X \to \R$ is $\Sigma/\map \BB \R$-measurable.


Proof
From Complex Modulus Function is Continuous, the mapping $\cmod {\, \cdot \,} : \C \to \R$ is continuous.
From Continuous Mapping is Measurable, $\cmod {\, \cdot \,} : \C \to \R$ is $\map \BB C/\map \BB \R$-measurable.
Hence from Composition of Measurable Mappings is Measurable, $\cmod f : X \to \R$ is $\Sigma/\map \BB \R$-measurable.
$\blacksquare$





