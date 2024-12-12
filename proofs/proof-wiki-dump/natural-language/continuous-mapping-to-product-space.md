# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_to_Product_Space



Theorem
Let $T = T_1 \times T_2$ be the product space of two topological spaces $T_1$ and $T_2$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Let $T'$ be a topological space.
Let $f: T' \to T$ be a mapping.

Then $f$ is continuous if and only if $\pr_1 \circ f$ and $\pr_2 \circ f$ are continuous.


Corollary
Let $T = T_1 \times T_2$ be the product space of two topological spaces $T_1$ and $T_2$.

Let $T'$ be a topological space.
Let $f: T' \to T_1$ be a mapping.
Let $g: T' \to T_2$ be a mapping.

Let $f \times g : T' \to T$ be the mapping defined by:

$\forall x \in T' : \map {\paren {f \times g}} x = \tuple {\map f x, \map g x}$

Then $f \times g$ is continuous if and only if $f$ and $g$ are continuous.


General Result
Let $X$ be a topological space.
Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
For each $i \in I$, let $\pr_i: X \to X_i$ denote the $i$th projection on $X$:

$\forall \family {x_j}_{j \mathop \in I} \in X: \map {\pr_i} {\family {x_j}_{j \mathop \in I} } = x_i$

Let $f$ be a mapping from $X$ to $Y$. 

Then $f$ is continuous if and only if $\pr_i \circ f$ is continuous for all $i \in I$.


Proof
Necessary Condition
Let $f$ be continuous.
Then by:

Projection from Product Topology is Continuous
Composite of Continuous Mappings is Continuous
so are $\pr_1 \circ f$ and $\pr_2 \circ f$.
$\Box$


Sufficient Condition
Suppose $\pr_1 \circ f$ and $\pr_2 \circ f$ are continuous.
Let $U_1 \subseteq T_1$ and $U_2 \subseteq T_2$.
Then we have:














\(\ds \map {f^{-1} } {U_1 \times U_2}\)

\(=\)







\(\ds \map {f^{-1} } {\paren {U_1 \times T_2} \cap \paren {T_1 \times U_2} }\)





Cartesian Product of Intersections














\(\ds \)

\(=\)







\(\ds \map {f^{-1} } {U_1 \times T_2} \cap \map {f^{-1} } {T_1 \times U_2}\)




















\(\ds \)

\(=\)







\(\ds \map {f^{-1} } {\map {\pr_1^{-1} } {U_1} } \cap \map {f^{-1} } {\map {\pr_2^{-1} } {U_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\pr_1 \circ f}^{-1} } {U_1} \cap \map {\paren {\pr_2 \circ f}^{-1} } {U_2}\)









Let $U_1$ and $U_2$ be open in $T_1$ and $T_2$ respectively.
Then by continuity of $\pr_1 \circ f$ and $\pr_2 \circ f$:

$\map {\paren {\pr_1 \circ f}^{-1} } {U_1}$ and $\map {\paren {\pr_2 \circ f}^{-1} } {U_2}$ are open in $T'$.
So $\map {f^{-1} } {U_1 \times U_2}$ is open in $T'$.
From Natural Basis of Product Topology of Finite Product, a basis for the product space $T$ is:

$\BB = \set {U_1 \times U_2 : U_1 \text { is open in } T_1, U_2 \text { is open in } T_2}$
Then we have shown that:

$\forall B \in \BB : \map {f^{-1} } B$ is open in $T'$
It follows from Continuity Test using Basis that $f$ is continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products: Proposition $3.5.4$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




