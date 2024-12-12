# 

Source: https://proofwiki.org/wiki/Characterization_of_T0_Space_by_Distinct_Closures_of_Singletons



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Then

$T$ is a $T_0$ space if and only if
$\forall x, y \in S: x \ne y \implies \set x^- \ne \set y^-$
where $\set y^-$ denotes the closure of $\set y$.


Proof
Sufficient Condition
Let $T$ be a $T_0$ space.
Let $x, y \in S$ such that

$x \ne y$
By definition of $T_0$ space:

$\paren {\exists U \in \tau: x \in U \land y \notin U} \lor \paren {\exists U \in \tau: x \notin U \land y \in U}$
Without loss of generality, suppose

$\exists U \in \tau: x \in U \land y \notin U$
By definition of singleton:

$x \in \set x$
By Set is Subset of its Topological Closure:

$\set x \subseteq \set x^-$
Then by definition of subset:

$x \in \set x^-$
Hence by definition of intersection:

$\set x^- \cap U \ne \O$
By definition of singleton:

$\forall z: z \in \set y \implies z = y$
Then by definition of intersection:

$\set y \cap U = \O$
Hence by Open Set Disjoint from Set is Disjoint from Closure

$\set y^- \cap U = \O$
Thus:

$\set x^- \ne \set y^-$
$\Box$


Necessary Condition
Assume that:

$(1): \quad \forall x, y \in S: x \ne y \implies \set x^- \ne \set y^-$
By Characterization of $T_0$ Space by Closed Sets it suffices to prove that

$\leftparen {\exists F \subseteq S: F}$ is closed $\rightparen {\land x \in F \land y \notin F}$
or

$\leftparen {\exists F \subseteq S: F}$ is closed $\rightparen {\land x \notin F \land y \in F}$
Then assume:

$(2): \quad \forall F \subseteq S: F$ is closed $\land x \in F \implies y \in F$
Define $F := \set y^-$
By Topological Closure is Closed:

$F$ is closed.
We will prove now that

$x \notin F$
Aiming for a contradiction, suppose

$x \in F$
Then:

$\set x \subseteq F$
By Topological Closure of Subset is Subset of Topological Closure:

$\set x^- \subseteq F^-$
By Set is Closed iff Equals Topological Closure:

$(3): \quad \set x^- \subseteq F$
By definition of singleton:

$x \in \set x$
By Set is Subset of its Topological Closure:

$\set x \subseteq \set x^-$
Then by definition of subset:

$x \in \set x^-$
Because $\set x^-$ is closed therefore by $(2)$:

$y \in \set x^-$
Then:

$\set y \subseteq \set x^-$
By Topological Closure of Subset is Subset of Topological Closure:

$F \subseteq \paren {set x^-}^-$
Then by Closure of Topological Closure equals Closure:

$F \subseteq \set x^-$
Hence by $(3)$ and definition of set equality:

$F = \set x^-$
This contradicts the assumption $(1)$.
Thus $x \notin F$.
By definition of singleton:

$y \in \set y$
By Set is Subset of its Topological Closure:

$\set y \subseteq \set y^- = F$
Thus by definition of subset:

$y \in F$
Hence

$\exists F \subseteq S: F$ is closed $\land x \notin F \land y \in F$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TSP_1:def 5




