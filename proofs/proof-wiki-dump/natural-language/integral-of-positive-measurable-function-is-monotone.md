# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_is_Monotone



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R$ be positive $\Sigma$-measurable functions.

Suppose that $f \le g$, where $\le$ denotes pointwise inequality.
Then:

$\ds \int f \rd \mu \le \int g \rd \mu$
where the integral sign denotes $\mu$-integration.

This can be summarized by saying that $\ds \int \cdot \rd \mu$ is monotone.


Corollary
Let $A \in \Sigma$.

Suppose that $f \le g$, where $\le$ denotes pointwise inequality.
Then:

$\ds \int_A f \rd \mu \le \int_A g \rd \mu$
where the integral sign denotes $\mu$-integration over $A$.

This can be summarized by saying that $\ds \int_A \cdot \rd \mu$ is monotone.


Proof
By the definition of $\mu$-integration, we have: 

$\ds \int f \rd \mu = \sup \set {\map {I_\mu} h: h \le f, h \in \EE^+}$
and:

$\ds \int g \rd \mu = \sup \set {\map {I_\mu} h : h \le g, h \in \EE^+}$
where:

$\EE^+$ denotes the space of positive simple functions
$\map {I_\mu} g$ denotes the $\mu$-integral of the positive simple function $g$.

Since $f \le g$:

if $h \in \EE^+$ satisfies $h \le f$ then it satisfies $h \le g$.
So:

$\set {\map {I_\mu} h: h \le f, h \in \EE^+} \subseteq \set {\map {I_\mu} h : h \le g, h \in \EE^+}$
From Supremum of Subset, we therefore have: 

$\sup \set {\map {I_\mu} h: h \le f, h \in \EE^+} \le \sup \set {\map {I_\mu} h : h \le g, h \in \EE^+}$
That is: 

$\ds \int f \rd \mu \le \int g \rd \mu$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.8 \ \text{(iv)}$, $\S 9$: Problem $2$




