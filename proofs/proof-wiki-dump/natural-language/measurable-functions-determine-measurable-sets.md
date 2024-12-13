# 

Source: https://proofwiki.org/wiki/Measurable_Functions_Determine_Measurable_Sets

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g: X \to \overline \R$ be $\Sigma$-measurable functions.

Then the following sets are measurable:

$\set {f < g}$
$\set {f \le g}$
$\set {f = g}$
$\set {f \ne g}$
where, for example, $\set {f < g}$ is short for $\set {x \in X: \map f x < \map g x}$.


Proof
From Pointwise Difference of Measurable Functions is Measurable, $f - g: X \to \overline \R$ is $\Sigma$-measurable.
Now we have the following evident identities:

$\set {f < g} = \set {f - g < 0}$
$\set {f \ge g} = \set {f - g \le 0}$
$\set {f = g} = \set {f - g = 0}$
$\set {f \ne g} = \set {f - g \ne 0}$
Subsequently, using the preimage under $f - g$, the latter may respectively be expressed as:

$\set {f - g < 0} = \paren {f - g}^{-1} \sqbrk {\openint {-\infty} 0}$
$\set {f - g \ge 0} = \paren {f - g}^{-1} \sqbrk {\hointl {-\infty} 0}$
$\set {f - g = 0} = \paren {f - g}^{-1} \sqbrk {\set 0}$
$\set {f - g \ne 0} = \paren {f - g}^{-1} \sqbrk {\R \setminus \set 0}$

Now the sets:

$\openint {-\infty} 0$
$\hointl {-\infty} 0$
$\set 0$
$\R \setminus \set 0$
are all open or closed in the Euclidean topology.
Hence by definition of Borel $\sigma$-algebra, and by Closed Set Measurable in Borel Sigma-Algebra, they are $\map \BB \R$-measurable.

Since $f - g$ is $\Sigma$-measurable, it follows that:

$\set {f < g}$
$\set {f \le g}$
$\set {f = g}$
$\set {f \ne g}$
are all $\Sigma$-measurable sets.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.12$, $\S 8$: Problem $11$




