# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_Contains_Parallel_Elements

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\sigma: \powerset S \to \powerset S$ denote the closure operator of $M$.
Let $A \subseteq S$.
Let $x, y \in S$.

If $x \in \map \sigma A$ and $y$ is parallel to $x$ then:

$y \in \map \sigma A$


Proof
Let $\rho: \powerset S \to \Z$ denote the rank function of $M$.

Let $x \in \map \sigma A$
Let $y$ be parallel to $x$.

By the definitions of the closure operator and depends depends:

$\map \rho A = \map \rho {A \cup \set x}$
and:

$y \in \map \sigma A$ if and only if $\map \rho A = \map \rho {A \cup \set y}$

From Rank Function is Increasing:

$\map \rho {A \cup \set x} = \map \rho A \le \map \rho {A \cup \set y} \le \map \rho {A \cup \set {x, y} }$
To show $\map \rho A = \map \rho {A \cup \set y}$ it is sufficient to show:

$\map \rho {A \cup \set {x, y} } = \map \rho {A \cup \set x}$
From Rank Function is Increasing:

$\map \rho {A \cup \set x} \le \map \rho {A \cup \set {x, y} }$

By the definition of parallel:

$\set x$ is independent
From Independent Subset is Contained in Maximal Independent Subset:

$\exists X \in \mathscr I : \set x \subseteq X \subseteq A \cup \set x : \size X = \map \rho {A \cup \set x}$
From Subset Relation is Transitive:

$X \subseteq A \cup \set {x, y}$
From Independent Subset is Contained in Maximal Independent Subset:

$\exists Y \in \mathscr I : X \subseteq Y \subseteq A \cup \set {x, y} : \size Y = \map \rho {A \cup \set {x, y} }$
By definition of a subset:

$x \in Y$
By definition of parallel:

$\set {x, y}$ is dependent
From Superset of Dependent Set is Dependent:

$\set {x, y} \nsubseteq Y$
Then:

$y \notin Y$
So:

$Y \subseteq A \cup \set x$
By definition of the rank function:

$\size Y \le \map \rho {A \cup \set x}$

As $\size Y = \map \rho {A \cup \set {x, y} }$ then:

$\map \rho {A \cup \set {x, y} } \le \map \rho {A \cup \set x}$
As $\map \rho {A \cup \set x} \le \map \rho {A \cup \set {x, y} }$ then:

$\map \rho {A \cup \set {x, y} } = \map \rho {A \cup \set x}$
The result follows.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




