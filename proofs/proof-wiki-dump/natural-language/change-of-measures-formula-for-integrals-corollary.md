# 

Source: https://proofwiki.org/wiki/Change_of_Measures_Formula_for_Integrals/Corollary

Corollary
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$ such that: 

$\nu$ is absolutely continuous with respect to $\mu$.
Let $g$ be a Radon-Nikodym derivative of $\nu$ with respect to $\mu$.
Let $f : X \to \overline \R$ be a $\nu$-integrable function.

Then $f \cdot g$ is $\mu$-integrable with: 

$\ds \int f \rd \nu = \int \paren {f \cdot g} \rd \mu$
where:

$f \cdot g$ is the pointwise product of $f$ and $g$
$\ds \int \cdot \rd \nu$ denotes the integral of a $\nu$-integrable function with respect to $\nu$.


Proof
From Pointwise Product of Measurable Functions is Measurable, we have: 

$f \cdot g$ is $\Sigma$-measurable.
We show that: 

$\ds \int \paren {f \cdot g}^+ \rd \mu < \infty$
and:

$\ds \int \paren {f \cdot g}^- \rd \mu < \infty$
where $\paren {f \cdot g}^+$ and $\paren {f \cdot g}^-$ denote the positive part and negative part of $f \cdot g$ respectively. 
We have:














\(\ds \int \paren {f \cdot g}^+ \rd \mu\)

\(=\)







\(\ds \int \paren {f^+ \cdot g} \rd \mu\)





Positive Part of Pointwise Product of Functions, noting that $g \ge 0$














\(\ds \)

\(=\)







\(\ds \int f^+ \rd \nu\)





Change of Measures Formula for Integrals














\(\ds \)

\(<\)







\(\ds \infty\)





Definition of Integrable Function



and: 














\(\ds \int \paren {f \cdot g}^- \rd \mu\)

\(=\)







\(\ds \int \paren {f^- \cdot g} \rd \mu\)





Negative Part of Pointwise Product of Functions, noting that $g \ge 0$














\(\ds \)

\(=\)







\(\ds \int f^- \rd \nu\)





Change of Measures Formula for Integrals














\(\ds \)

\(<\)







\(\ds \infty\)





Definition of Integrable Function



So $f \cdot g$ is $\mu$-integrable.
Then: 














\(\ds \int \paren {f \cdot g} \rd \mu\)

\(=\)







\(\ds \int \paren {f \cdot g}^+ \rd \mu - \int \paren {f \cdot g}^- \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \int f^+ \rd \nu - \int f^- \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int f \rd \nu\)





Definition of Integral of Integrable Function



$\blacksquare$





