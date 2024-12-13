# 

Source: https://proofwiki.org/wiki/Mappings_Between_Residue_Classes

Theorem
Let $\eqclass a m$ be the residue class of $a$ (modulo $m$).
Let $\phi: \Z_m \to \Z_n$ be a mapping given by:

$\map \phi {\eqclass x m} = \eqclass x n$

Then $\phi$ is well defined if and only if $m$ is a divisor of $n$.


Proof
For $\phi$ to be well defined, we require that:

$\forall x, y \in \Z_m: \eqclass x m = \eqclass y m \implies \map \phi {\eqclass x m} = \map \phi {\eqclass y m}$

Now:

$\eqclass x m = \eqclass y m \implies x - y \divides m$
For $\map \phi {\eqclass x m} = \map \phi {\eqclass y m}$ we require that:

$\eqclass x n = \eqclass y n \implies x - y \divides n$

Thus $\phi$ is well defined if and only if:

$x - y \divides m \implies x - y \divides n$
That is, if and only if $m \divides n$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 19 \alpha$




