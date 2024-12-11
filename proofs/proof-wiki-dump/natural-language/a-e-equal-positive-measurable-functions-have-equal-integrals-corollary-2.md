# 

Source: https://proofwiki.org/wiki/A.E._Equal_Positive_Measurable_Functions_have_Equal_Integrals/Corollary_2

Corollary to A.E. Equal Positive Measurable Functions have Equal Integrals
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g : X \to \overline \R$ be positive $\Sigma$-measurable functions. 
Suppose that $f = g$ $\mu$-almost everywhere. 
Let $A \in \Sigma$. 

Then: 

$\ds \int_A f \rd \mu = \int_A g \rd \mu$


Proof
From the definition of a $\mu$-integral over $A$, we have: 

$\ds \int_A f \rd \mu = \int \paren {f \times \chi_A} \rd \mu$
and:

$\ds \int_A f \rd \mu = \int \paren {g \times \chi_A} \rd \mu$
We show that: 

$f \times \chi_A = g \times \chi_A$ $\mu$-almost everywhere.
Since: 

$f = g$ $\mu$-almost everywhere
there exists a $\mu$-null set $N \subseteq X$ such that:

whenever $x \in X$ has $\map f x \ne \map g x$, we have $x \in N$.
Suppose that $x \in X$ is such that: 

$\map {\paren {f \times \chi_A} } x \ne \map {\paren {g \times \chi_A} } x$
From the definition of pointwise multiplication, we have: 

$\map f x \map {\chi_A} x \ne \map g x \map {\chi_A} x$
So:

$\map f x \ne \map g x$
Hence: 

$x \in N$
So:

$f \times \chi_A = g \times \chi_A$ $\mu$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we therefore have: 

$\ds \int \paren {f \times \chi_A} \rd \mu = \int \paren {g \times \chi_A} \rd \mu$
and so:

$\ds \int_A f \rd \mu = \int_A g \rd \mu$
$\blacksquare$





