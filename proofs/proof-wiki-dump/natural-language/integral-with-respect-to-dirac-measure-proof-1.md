# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Dirac_Measure/Proof_1

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $x \in X$, and let $\delta_x$ be the Dirac measure at $x$.

Let $f \in \MM _{\overline \R}, f: X \to \overline \R$ be a measurable function.

Then:

$\ds \int f \rd \delta_x = \map f x$
where the integral sign denotes the $\delta_x$-integral.


Proof
Define the constant function $g : X \to \overline \R$ by: 

$\map g {x'} = \map f x$
for each $x' \in X$. 
From Constant Function is Measurable, we have: 

$g$ is $\Sigma$-measurable.
From Measurable Functions Determine Measurable Sets:

$\set {x' \in X : \map g {x'} \ne \map f {x'} } \in \Sigma$
Further: 

$x \not \in \set {x' \in X : \map g {x'} \ne \map f {x'} }$
So from the definition of the Dirac measure, we have:

$\map {\delta_x} {\set {x' \in X : \map g {x'} \ne \map f {x'} } } = 0$
So:

$g = f$ $\delta_x$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$\ds \int g \rd \delta_x = \int f \rd \delta_x$
We finally have:














\(\ds \int g \rd \delta_x\)

\(=\)







\(\ds \map f x \int \chi_X \rd \delta_x\)





Integral of Integrable Function is Homogeneous














\(\ds \)

\(=\)







\(\ds \map f x \map {\delta_x} X\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(=\)







\(\ds \map f x\)









$\blacksquare$





