# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Additive/Complex_Function

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f, g : X \to \C$ be a $\mu$-integrable function.

Then $f + g$ is $\mu$-integrable and:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$


Proof
From Addition of Real and Imaginary Parts, we have:

$\map \Re {f + g} = \map \Re f + \map \Re g$
and:

$\map \Im {f + g} = \map \Im f + \map \Im g$
Since $f$ is $\mu$-integrable:

$\map \Re f$ and $\map \Im f$ are $\mu$-integrable.
Similarly since $g$ is $\mu$-integrable:

$\map \Re g$ and $\map \Im g$ are $\mu$-integrable.
From Integral of Integrable Function is Additive, we have:

$\map \Re f + \map \Re g = \map \Re {f + g}$ is $\mu$-integrable
with:

$\ds \int \map \Re {f + g} \rd \mu = \int \map \Re f \rd \mu + \int \map \Re g \rd \mu$
Also from Integral of Integrable Function is Additive, we have:

$\map \Im f + \map \Im g = \map \Im {f + g}$ is $\mu$-integrable
with:

$\ds \int \map \Im {f + g} \rd \mu = \int \map \Im f \rd \mu + \int \map \Im g \rd \mu$
Hence $f + g$ is $\mu$-integrable.
Further, we have:














\(\ds \int \paren {f + g} \rd \mu\)

\(=\)







\(\ds \int \map \Re {f + g} \rd \mu + i \int \map \Im {f + g} \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \paren {\int \map \Re f \rd \mu + \int \map \Re g \rd \mu} + i \paren {\int \map \Im f \rd \mu + \int \map \Im g \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \paren {\int \map \Re f \rd \mu + i \int \map \Im f \rd \mu} + \paren {\int \map \Re g \rd \mu + i \int \map \Im g \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \int f \rd \mu + \int g \rd \mu\)









$\blacksquare$





