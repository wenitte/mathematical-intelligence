# 

Source: https://proofwiki.org/wiki/A.E._Equal_Positive_Measurable_Functions_have_Equal_Integrals/Corollary_1

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a $\mu$-integrable function.
Let $g: X \to \overline \R$ be $\Sigma$-measurable.
Suppose that $f = g$ almost everywhere.

Then $g$ is also $\mu$-integrable, and:

$\ds \int f \rd \mu = \int g \rd \mu$


Proof
From Function Measurable iff Positive and Negative Parts Measurable, we have that: 

$g^+$, $f^+$, $g^-$ and $f^-$ are all $\Sigma$-measurable.
From Functions A.E. Equal iff Positive and Negative Parts A.E. Equal, we have that: 

$f^+ = g^+$ and $f^- = g^-$ $\mu$-almost everywhere.
Since $f^+$ and $g^+$ are positive $\Sigma$-measurable functions that are equal $\mu$-almost everywhere, we have: 

$\ds \int f^+ \rd \mu = \int g^+ \rd \mu$
from A.E. Equal Positive Measurable Functions have Equal Integrals.
Similarly, we have that $f^-$ and $g^-$ are positive $\Sigma$-measurable functions that are equal $\mu$-almost everywhere, and so:

$\ds \int f^- \rd \mu = \int g^- \rd \mu$
Since $f$ is $\mu$-integrable, we have that: 

$\ds \int f^+ \rd \mu < \infty$
and:

$\ds \int f^- \rd \mu < \infty$
Hence: 

$\ds \int g^+ \rd \mu < \infty$
and:

$\ds \int g^- \rd \mu < \infty$
So $g$ is $\mu$-integrable.
We also have: 














\(\ds \int g \rd \mu\)

\(=\)







\(\ds \int g^+ \rd \mu - \int g^- \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \int f^+ \rd \mu - \int f^- \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int f \rd \mu\)





Definition of Integral of Integrable Function



$\blacksquare$





