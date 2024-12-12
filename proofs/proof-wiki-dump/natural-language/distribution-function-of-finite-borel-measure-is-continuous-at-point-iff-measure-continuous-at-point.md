# 

Source: https://proofwiki.org/wiki/Distribution_Function_of_Finite_Borel_Measure_is_Continuous_at_Point_iff_Measure_Continuous_at_Point

Theorem
Let $\mu$ be a finite Borel measure.
Let $F_\mu$ be the distribution function of $\mu$.
Let $x \in \R$.

Then $F_\mu$ is continuous at $x$ if and only if $\map \mu {\set x} = 0$.


Proof
From Distribution Function of Finite Borel Measure is Right-Continuous, $F_\mu$ is right-continuous at $x$.
Hence from Continuous at Point iff Left-Continuous and Right-Continuous, the claim is equivalent to:

$F_\mu$ is left-continuous at $x$ if and only if $\map \mu {\set x} = 0$.
That is:

$\ds \lim_{y \to x^-} \map {F_\mu} y = \map {F_\mu} x$
if and only if:

$\map \mu {\set x} = 0$
From Left Limit of Distribution Function of Finite Borel Measure, this is equivalent to:

$\map \mu {\hointl {-\infty} x} = \map \mu {\openint {-\infty} x}$ if and only if $\map \mu {\set x} = 0$.
From Measure of Set Difference with Subset, we indeed have that:

$\map \mu {\hointl {-\infty} x} = \map \mu {\openint {-\infty} x}$ if and only if $\map \mu {\hointl {-\infty} x} - \map \mu {\openint {-\infty} x} = \map \mu {\set x} = 0$
as required.
$\blacksquare$





