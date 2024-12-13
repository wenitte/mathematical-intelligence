# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_Extends_Integral_of_Positive_Simple_Function

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \R, f \in \EE^+$ be a positive simple function.

Then:

$\ds \int f \rd \mu = \map {I_\mu} f$
where:

$\ds \int \cdot \rd \mu$ denotes the $\mu$-integral of positive measurable functions
$I_\mu$ denotes the $\mu$-integral of positive simple functions.

That is:

$\ds \int \cdot \rd \mu \restriction_{\EE^+} = I_\mu$
using the notion of restriction, $\restriction$.


Proof
From the definition of the integral of a positive measure function, we have: 

$\ds \int f \rd \mu = \sup \set {\map {I_\mu} g: g \le f, g \in \EE^+}$
Let $g \in \EE^+$ be such that $g \le f$. 
Then, from Integral of Positive Simple Function is Increasing, we have: 

$\map {I_\mu} g \le \map {I_\mu} f$
So $\map {I_\mu} f$ is an upper bound of $\set {\map {I_\mu} g: g \le f, g \in \EE^+}$. 
Since $f \in \EE^+$, and $f \le f$, we have: 

$\map {I_\mu} f \in \set {\map {I_\mu} g: g \le f, g \in \EE^+}$
So:

$\map {I_\mu} f$ is the greatest element of $\set {\map {I_\mu} g: g \le f, g \in \EE^+}$.
so, from Greatest Element is Supremum:

$\map {I_\mu} f = \sup \set {\map {I_\mu} g: g \le f, g \in \EE^+}$
So:

$\ds \int f \rd \mu = \map {I_\mu} f$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.5$




