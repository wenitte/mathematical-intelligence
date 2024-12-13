# 

Source: https://proofwiki.org/wiki/Integral_of_Bounded_Measurable_Function_with_respect_to_Finite_Signed_Measure_is_Well-Defined

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f : X \to \R$ be a bounded $\Sigma$-measurable function.
Let $\mu$ be a finite signed measure on $\struct {X, \Sigma}$. 
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$. 

Then the $\mu$-integral of $f$ defined by: 

$\ds \int f \rd \mu = \int f \rd \mu^+ - \int f \rd \mu^-$
is well-defined.


Proof
We show that $f$ is $\mu^+$-integrable and $\mu^-$-integrable.
We will then have: 

$\ds -\infty < \int f \rd \mu^+ < \infty$
and:

$\ds -\infty < \int f \rd \mu^- < \infty$
So that: 

$\ds \int f \rd \mu^+ - \int f \rd \mu^-$
is well-defined.

Since $f$ is bounded, there exists $M > 0$ such that: 

$\size {\map f x} \le M$
for each $x \in X$.
From Jordan Decomposition of Finite Signed Measure, we have: 

$\mu^+$ and $\mu^-$ are finite.
That is: 

$\map {\mu^+} X < \infty$
and:

$\map {\mu^-} X < \infty$
We therefore have: 














\(\ds \int \size f \rd \mu^+\)

\(\le\)







\(\ds \int M \rd \mu^+\)





Measure is Monotone














\(\ds \)

\(=\)







\(\ds M \int \rd \mu^+\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds M \map {\mu^+} X\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(<\)







\(\ds \infty\)









so:














\(\ds \int \size f \rd \mu^-\)

\(\le\)







\(\ds \int M \rd \mu^-\)





Measure is Monotone














\(\ds \)

\(=\)







\(\ds M \int \rd \mu^-\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds M \map {\mu^-} X\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(<\)







\(\ds \infty\)









So:

$\size f$ is $\mu^+$-integrable
and:

$\size f$ is $\mu^-$-integrable.
From Characterization of Integrable Functions, we have: 

$f$ is $\mu^+$-integrable and $\mu^-$-integrable
as required.
$\blacksquare$





