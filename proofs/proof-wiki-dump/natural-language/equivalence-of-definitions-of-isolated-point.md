# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Isolated_Point



Theorem
The following definitions of the concept of isolated point are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be a subset of $S$.

Definition 1
$x \in H$ is an isolated point of $H$ if and only if:

$\exists U \in \tau: U \cap H  = \set x$
That is, if and only if there exists an open set of $T$ containing no points of $H$ other than $x$.

Definition 2
$x \in H$ is an isolated point of $H$ if and only if $x$ is not a limit point of $H$.
That is, if and only if $x$ is not in the derived set of $H$.


Proof
Definition 1 implies Definition 2
Let $x$ be an isolated point of $H$ by definition 1.
Then by definition:

$\exists U \in \tau: U \cap H = \set x$
Thus we have an open set in $T$ such that $x \in U$ contains no other point of $H$ than $x$.
Thus, by definition, $x$ is not a limit point of $H$.

Thus $x$ is an isolated point of $H$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $x$ be an isolated point of $H$ by definition 2.
Aiming for a contradiction, suppose $x$ is a limit point of $H$.
Then by definition every open set $U \in \tau$ such that $x \in U$ contains some point of $H$ other than $x$.
That is:

$\forall U \in \tau: x \in U \implies \exists y \in S, y \ne x: y \in U \cap H$
That is:

$\not \exists U \in \tau: U \cap H = \set x$
because all $U$ with $x$ in them are such that there is at least one point in $U \cap H$ apart from $x$.
Thus by Proof by Contradiction $x$ is not a limit point of $H$.
That is, $x$ is an isolated point of $H$ by definition 1.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points




