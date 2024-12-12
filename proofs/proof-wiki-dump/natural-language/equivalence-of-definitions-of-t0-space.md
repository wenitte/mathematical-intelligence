# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_T0_Space



Theorem
The following definitions of the concept of $T_0$ (Kolmogorov) space are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.

Definition by Open Sets
$\struct {S, \tau}$ is a Kolmogorov space or $T_0$ space if and only if:

$\forall x, y \in S$ such that $x \ne y$, either:
$\exists U \in \tau: x \in U, y \notin U$
or:
$\exists U \in \tau: y \in U, x \notin U$
Definition by Limit Points
$\struct {S, \tau}$ is a Kolmogorov space or $T_0$ space if and only if no two points can be limit points of each other.


Proof
Definition by Open Sets implies Definition by Limit Points
Let $T = \struct {S, \tau}$ be a topological space for which:

$\forall x, y \in S$, either:
$(1): \quad \exists U \in \tau: x \in U, y \notin U$
$(2): \quad \exists U \in \tau: y \in U, x \notin U$

Let $x, y \in S$ such that $x \ne y$.
By the definition of limit point of a point:

$(3): \quad x$ is a limit point of $y$ if every open set $U \in \tau$ such that $x \in U$ contains $y$.
$(4): \quad y$ is a limit point of $x$ if every open set $U \in \tau$ such that $y \in U$ contains $x$.

Thus:

If $(3)$ holds then $(1)$ is false.
If $(4)$ holds then $(2)$ is false.
So both $(3)$ and $(4)$ can not both hold at once.

Hence $T = \struct {S, \tau}$ is a topological space for which no two points can be limit points of each other.
$\Box$


Definition by Limit Points implies Definition by Open Sets
Let $T = \struct {S, \tau}$ be a topological space for which no two points can be limit points of each other.

Let $x, y \in S$ such that $x \ne y$.
Aiming for a contradiction, suppose that:

$(1): \quad \nexists U \in \tau: x \in U, y \notin U$
and

$(2): \quad \nexists U \in \tau: y \in U, x \notin U$

Expressing this in different terms:

$(3): \quad$ Every open set $U \in \tau$ such that $x \in U$ contains $y$.
$(4): \quad$ Every open set $U \in \tau$ such that $y \in U$ contains $x$.
That is, by definition:

$x$ is a limit point of $y$ and $y$ is a limit point of $x$.

From this contradiction we deduce that:

$\forall x, y \in S$, either:
$\exists U \in \tau: x \in U, y \notin U$
or:
$\exists U \in \tau: y \in U, x \notin U$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms




