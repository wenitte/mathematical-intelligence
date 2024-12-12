# 

Source: https://proofwiki.org/wiki/Compact_Subsets_of_T3_Spaces


It has been suggested that this page be renamed.In particular: Find some way to describe what is happening here succinctlyTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $T = \struct {S, \tau}$ be a $T_3$ space.
Let $A \subseteq S$ be compact in $T$.

Then for each $U \in \tau$ such that $A \subseteq U$:

$\exists V \in \tau: A \subseteq V \subseteq V^- \subseteq U$
where $V^-$ denotes the closure of $V$.


Proof
Let $A \subseteq S$ be compact in $T$.
Let $U \in \tau$ such that $A \subseteq U$.

Since $T$ is $T_3$:

Each open set contains a closed neighborhood around each of its points:
$\forall x \in U: \exists N_x: \relcomp S {N_x} \in \tau: \exists V_x \in \tau: x \in V_x \subseteq N_x \subseteq U$

Note that $\set {V_x: x \in A}$ forms an open cover for $A$.
By compactness of $A$, $\set {V_x: x \in A}$ has a finite subcover.
Therefore there is a finite subset $I \subseteq A$ such that: 

$\set {V_x: x \in I}$ is an open cover for $A$.

Let $V = \ds \bigcup_{i \mathop \in I} V_x$, $N = \ds \bigcup_{i \mathop \in I} N_x$.
By definition of a topology, the set $\ds \bigcup_{i \mathop \in I} V_x$ is open since it is a  union of open sets.
By Finite Union of Closed Sets is Closed in Topological Space, the set $\ds \bigcup_{i \mathop \in I} N_x$ is closed since it is a finite union of closed sets.
By Set Union Preserves Subsets, since $V_x \subseteq N_x \; \forall x \in I \subseteq U$:

$V \subseteq N$
By Set Closure is Smallest Closed Set in Topological Space:

$V \subseteq V^- \subseteq N$
Thus:














\(\ds A\)

\(\subseteq\)







\(\ds V\)





Definition of Open Cover














\(\ds \)

\(\subseteq\)







\(\ds V^-\)




















\(\ds \)

\(\subseteq\)







\(\ds N\)




















\(\ds \)

\(\subseteq\)







\(\ds U\)





Union of Subsets is Subset: $\forall x \in I \subseteq U: N_x \subseteq U$



satisfies our claim.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Compactness Properties and the $T_i$ Axioms




