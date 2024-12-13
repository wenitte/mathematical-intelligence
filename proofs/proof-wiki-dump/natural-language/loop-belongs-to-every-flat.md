# 

Source: https://proofwiki.org/wiki/Loop_Belongs_to_Every_Flat

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $A \subseteq S$.
Let $x \in S$.

If $x$ is a loop and $A$ is a flat subset then $x \in A$.


Proof
Let $\rho: \powerset S \to \Z$ denote the rank function of $M$.
We proceed by Proof by Contraposition.
That is, it is shown that:

if $x \notin A$ then either $x$ is not a loop or $A$ is not a flat subset

Let $x \notin A$.
Let $x$ be a loop.
By definition of a loop:

$\set x$ is a dependent subset.
From Rank Function is Increasing:

$\map \rho A \le \map \rho {A \cup \set x}$

Let $X \in \mathscr I$ such that $X \subseteq A \cup \set x$.
From Superset of Dependent Set is Dependent:

$\set x \nsubseteq X$
From Singleton of Element is Subset:

$x \notin X$
So:

$X \subseteq A$
By definition of the rank function:

$\size X \le \map \rho A$

From Max Operation Yields Supremum of Parameters:

$\map \rho {A \cup \set x} = \max \set{\size X : X \in \mathscr I \land X \subseteq A \cup \set x} \le \map \rho A$

Then:

$\map \rho A = \map \rho {A \cup \set x}$
If follows that $A$ is not a flat subset by definition.
It has been shown that:

if $x \notin A$ then either $x$ is not a loop or $A$ is not a flat subset

The theorem holds by the Rule of Transposition.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




