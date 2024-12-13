# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Pushforward_Measure/Corollary

Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {X', \Sigma'}$ be a measurable space.
Let $T: X \to X'$ be a $\Sigma \, / \, \Sigma'$-measurable mapping.
Let $f: X' \to \overline \R$ be a positive $\Sigma'$-measurable function.
Let $\map T \mu$ be the pushforward measure of $\mu$ under $T$.

Then $f \circ T : X \to \overline \R$ is $\mu$-integrable if and only if $f : X' \to \overline \R$ is $\map T \mu$-integrable.
In this case, we have: 

$\ds \int_{X'} f \rd \map T \mu = \int_X f \circ T \rd \mu$


Proof
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$f^+$ and $f^-$ are $\Sigma'$-measurable.
From Composition of Measurable Mappings is Measurable, we have: 

$f \circ T$ is $\Sigma$-measurable.
Then from Function Measurable iff Positive and Negative Parts Measurable, we have:

$\paren {f \circ T}^+$ and $\paren {f \circ T}^-$ are $\Sigma$-measurable.
Then, we have: 














\(\ds \int_X \paren {f \circ T}^+ \rd \mu\)

\(=\)







\(\ds \int_X f^+ \circ T \rd \mu\)





Positive Part of Composition of Functions














\(\ds \)

\(=\)







\(\ds \int_{X'} f^+ \rd \map T \mu\)





Integral with respect to Pushforward Measure



and:














\(\ds \int_X \paren {f \circ T}^- \rd \mu\)

\(=\)







\(\ds \int_X f^- \circ T \rd \mu\)





Negative Part of Composition of Functions














\(\ds \)

\(=\)







\(\ds \int_{X'} f^- \rd \map T \mu\)





Integral with respect to Pushforward Measure



So:

$\ds \int_X \paren {f \circ T}^+ \rd \mu < \infty$ and $\ds \int_X \paren {f \circ T}^- \rd \mu <\infty$
if and only if:

$\ds \int_{X'} f^+ \rd \map T \mu < \infty$ and $\ds \int_{X'} f^- \rd \map T \mu < \infty$.
So $f \circ T : X \to \overline \R$ is $\mu$-integrable if and only if $f : X' \to \overline \R$ is $\map T \mu$-integrable
In this case: 














\(\ds \int_{X'} f \rd \map T \mu\)

\(=\)







\(\ds \int_{X'} f^+ \rd \map T \mu - \int_{X'} f^- \rd \map T \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \int_X \paren {f \circ T}^+ \rd \mu - \int_X \paren {f \circ T}^- \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X f \circ T \rd \mu\)





Definition of Integral of Integrable Function



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $14.2$




