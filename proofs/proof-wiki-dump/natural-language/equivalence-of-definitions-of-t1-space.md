# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T1_Space



Theorem
The following definitions of the concept of $T_1$ (Fréchet) space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition by Open Sets
$\struct {S, \tau}$ is a Fréchet space or $T_1$ space if and only if:

$\forall x, y \in S$ such that $x \ne y$, both:
$\exists U \in \tau: x \in U, y \notin U$
and:
$\exists V \in \tau: y \in V, x \notin V$
Definition by Closed Points
$\struct {S, \tau}$ is a Fréchet space or $T_1$ space if and only if all points of $S$ are closed in $T$.


Proof
Definition by Open Sets implies Definition by Closed Points
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall x, y \in S$, both:
$(1): \quad \exists U \in \tau: x \in U, y \notin U$
and:

$(2): \quad \exists U \in \tau: y \in U, x \notin U$

Let $x, y \in S$.
By the definition of limit point of a point, the above condition means:

$(3): \quad y$ is a limit point of $x$ if every open set $U \in \tau$ such that $y \in U$ contains $x$.

Thus $(2)$ and $(3)$ give us that $y$ is not a limit point of $x$.

As $x$ and $y$ are any two points in $S$, it follows that $x$ has no limit points.
Thus it holds vacuously that all the limit point of $x$ are in $\set x$.

By Closed Set iff Contains all its Limit Points, we have that $\set x$ is a closed set in $T$.
This holds for all $x \in S$.
Hence $T = \struct {S, \tau}$ is a topological space for which all points are closed.
$\Box$


Definition by Closed Points implies Definition by Open Sets
$T = \struct {S, \tau}$ is a topological space for which all points are closed.
Let $x, y \in S$.
By Closed Set iff Contains all its Limit Points, we have that:

all the limit points of $x$ are in $\set x$
all the limit points of $y$ are in $\set y$.
It follows by definition of limit point (reversing the above argument) that:

$\exists U \in \tau: x \in U, y \notin U$
and

$\exists U \in \tau: y \in U, x \notin U$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.): Problems: $\S 2: \ 7$




