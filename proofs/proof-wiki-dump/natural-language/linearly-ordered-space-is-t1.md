# 

Source: https://proofwiki.org/wiki/Linearly_Ordered_Space_is_T1

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.
Then $T$ is a $T_1$ (Fréchet) space.


Proof
Let $p \in S$.
By definition of linearly ordered space, the rays:

$R_1 := \set {x \in S: x \prec p}$
$R_2 := \set {x \in S: p \prec x}$
are open in $T$.
Thus their union:

$R_1 \cup R_2 = \set {x \in S: x \prec p \lor p \prec x}$
is also open in $T$.
Consider the complement in $S$ of $R_1 \cup R_2$:

$\relcomp S {R_1 \cup R_2} = \set {y \in S: y \notin R_1 \cup R_2}$
By definition of closed set, $\relcomp S {R_1 \cup R_2}$ is closed in $T$
But $\relcomp S {R_1 \cup R_2} = \set p$.
Thus $p$ is a closed point of $T$.
Hence the result, by definition of $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $6$




