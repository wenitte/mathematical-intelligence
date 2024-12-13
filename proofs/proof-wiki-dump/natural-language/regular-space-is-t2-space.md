# 

Source: https://proofwiki.org/wiki/Regular_Space_is_T2_Space

Theorem
Let $\struct {S, \tau}$ be a regular space.

Then $\struct {S, \tau}$ is also a $T_2$ (Hausdorff) space.


Proof
Let $T = \struct {S, \tau}$ be a regular space.
From the definition of regular space:

$\struct {S, \tau}$ is a $T_3$ space
$\struct {S, \tau}$ is a $T_0$ (Kolmogorov) space.

Let $x, y \in S$.
As $T$ is $T_0$, it follows that either:

$\exists V \in \tau: x \in V, y \notin V$
or:

$\exists V \in \tau: y \in V, x \notin V$
that is, there exists $V$, an open set, containing one but not the other.
Without loss of generality, suppose that $\exists V \in \tau: y \in V, x \notin V$.
Then by definition of relative complement:

$x \in \relcomp S V$

Let $F := \relcomp S V$.
As $V$ is open, by definition of closed set we have that $F = \relcomp S V$ is closed.
That is:

$\relcomp S V \in \tau$
As $y \in V$ it follows that $y \notin F$, that is:

$y \in \relcomp S F$

Now $\struct {S, \tau}$ is a $T_3$ space, and so:

$\forall F \subseteq S: \relcomp S F \in \tau, y \in \relcomp S F: \exists U, V \in \tau: F \subseteq U, y \in V: U \cap V = \O$
So we have that:

$x \in F \subseteq U \implies x \in U$
$y \notin F, y \in V$
such that $U \cap V = \O$.

So:

$\forall x, y \in S: x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
which is precisely the definition of a $T_2$ (Hausdorff) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Regular and Normal Spaces




