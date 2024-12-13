# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Homogeneous/Complex_Function

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f : X \to \C$ be a $\mu$-integrable function.
Let $\lambda \in \C$. 

Then $\lambda f$ is $\mu$-integrable and:

$\ds \int \lambda f \rd \mu = \lambda \int f \rd \mu$


Proof
We have:














\(\ds \lambda \int f \rd \mu\)

\(=\)







\(\ds \paren {\map \Re \lambda + i \Im \lambda} \int \map \Re f \rd \mu + i \paren {\map \Re \lambda + i \map \Im \lambda} \int \Im f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Re \lambda \int \map \Re f \rd \mu - \map \Im \lambda \int \map \Im f \rd \mu} + i \paren {\map \Im \lambda \int \map \Re f \rd \mu + \map \Re \lambda \int \map \Im f \rd \mu}\)









From Real Part of Complex Product, we have:

$\map \Re {\lambda f} = \map \Re \lambda \map \Re f - \map \Im \lambda \map \Im f$
From Imaginary Part of Complex Product, we have:

$\map \Im {\lambda f} = \map \Im \lambda \map \Re f + \map \Re \lambda \map \Im f$
Since $f$ is $\mu$-integrable, $\map \Re f$ and $\map \Im f$ are $\mu$-integrable by definition.
From Integral of Integrable Function is Additive and Integral of Integrable Function is Homogeneous, $\map \Re {\lambda f}$ and $\map \Im {\lambda f}$ are both $\mu$-integrable and we have:

$\ds \int \map \Re {\lambda f} \rd \mu = \map \Re \lambda \int \map \Re f \rd \mu - \map \Im \lambda \int \map \Im f \rd \mu$
and:

$\ds \int \map \Im {\lambda f} \rd \mu = \map \Im \lambda \int \map \Re f \rd \mu + \map \Re \lambda \int \map \Im f \rd \mu$
Then $\lambda f$ is $\mu$-integrable.
We then have:














\(\ds \int \lambda f \rd \mu\)

\(=\)







\(\ds \paren {\map \Re \lambda \int \map \Re f \rd \mu - \map \Im \lambda \int \map \Im f \rd \mu} + i \paren {\map \Im \lambda \int \map \Re f \rd \mu + \map \Re \lambda \int \map \Im f \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f \rd \mu\)









$\blacksquare$





