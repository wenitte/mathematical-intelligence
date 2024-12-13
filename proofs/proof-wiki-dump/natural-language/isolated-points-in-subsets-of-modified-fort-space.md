# 

Source: https://proofwiki.org/wiki/Isolated_Points_in_Subsets_of_Modified_Fort_Space

Theorem
Let $T = \struct {S, \tau_{a, b} }$ be a modified Fort space.
Let $H \subseteq S$ contain more than two points.

Then $H$ contains an isolated point.


Proof
Let $H \subseteq S$ contain more than two points.
From Definition of Modified Fort Space, we can write $S = N \cup \set a \cup \set b$, where $N$ is an infinite set.

Suppose $H \cap N \ne \O$.
Let $x \in H \cap N$.
Then:

$\set x \subset N$
Therefore:

$\set x \in \tau_{a, b}$
This shows that $x$ is isolated.

Suppose $H \cap N = \O$.
By Empty Intersection iff Subset of Complement:

$H \subseteq \relcomp S N = \set {a, b}$
Because $H$ contains at least $2$ elements:

$H = \set {a, b}$
Because $a \in \relcomp S {\set b}$ and $\relcomp S {\relcomp S {\set b} } = \set b$ is a finite set:

$\relcomp S {\set b} \in \tau_{a, b}$
Thus:

$H \cap \relcomp S {\set b} = \set a$
This shows that $a$ is isolated.

Therefore $H$ must contain an isolated point.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $6$




