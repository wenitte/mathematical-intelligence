# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Additive/Corollary_2

Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R$ be $\mu$-integrable functions.
Suppose that the pointwise difference $f - g$ is well-defined.

Then $f - g$ is $\mu$-integrable, with:

$\ds \int \paren {f - g} \rd \mu = \int f \rd \mu - \int g \rd \mu$


Proof
From Integral of Integrable Function is Homogeneous, we have that: 

$-g$ is $\mu$-integrable.
From Integral of Integrable Function is Additive: Corollary $1$, we therefore have:

$f - g$ is $\mu$-integrable
with:

$\ds \int \paren {f - g} \rd \mu = \int f \rd \mu + \int \paren {-g} \rd \mu$
Then, from Integral of Integrable Function is Homogeneous, we have: 

$\ds \int \paren {-g} \rd \mu = -\int g \rd \mu$
so:

$\ds \int \paren {f - g} \rd \mu = \int f \rd \mu - \int g \rd \mu$
$\blacksquare$





