# 

Source: https://proofwiki.org/wiki/Exterior_of_Union_of_Singleton_Rationals_is_Empty

Theorem
Let $B_\alpha$ be the singleton containing the rational number $\alpha$.
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology $\tau_d$.

Then the exterior in $\struct {\R, \tau_d}$ of the union of all $B_\alpha$ is the empty set:

$\ds \paren {\bigcup_{\alpha \mathop \in \Q} B_\alpha}^e = \O$


Proof
By definition:

$B_\alpha = \set \alpha$
Thus:

$\ds \bigcup_{\alpha \mathop \in \Q} B_\alpha = \Q$
By definition, the exterior of $\Q$ is the complement of the closure of $\Q$ in $\R$.
By Closure of Rational Numbers is Real Numbers:

$\Q^- = \R$
By Relative Complement with Self is Empty Set:

$\relcomp \R \R = \O$
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Rational Numbers: $1$




