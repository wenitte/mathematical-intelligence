# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact/Proof_2

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be complete and totally bounded.

Then $M$ is sequentially compact.


Proof
The results:

Compact Space is Countably Compact
Countably Compact Metric Space is Sequentially Compact
show that it suffices to prove that $M$ is compact.

Aiming for a contradiction, suppose that $M$ is not compact.
Let $\CC$ be an open cover for $A$ such that $\CC$ does not have a finite subcover for $A$.

By the definition of a totally bounded metric space, we can use the axiom of countable choice to obtain a sequence $\sequence {F_n}_{n \mathop \in \N}$ such that:

For all $n \in \N$, $F_n$ is a finite $2^{-n}$-net for $M$.
For the sake of notational brevity, let $\map {B'_n} a$ denote the open $2^{-n}$-ball of $a$ in $M$.

For all $n \in \N$, define:

$G_n = \leftset {y \in F_n: \map {B'_n} y}$ is not covered by any finite subset of $\rightset \CC$
Since $F_n$ is finite by definition, it follows by the definition of a net that $G_n$ is non-empty.
For all $y \in G_n$, define:

$\map {T_n} y = \leftset {z \in G_{n + 1}: \map {B'_n} y \cap \map {B'_{n + 1} } z}$ is not covered by any finite subset of $\rightset \CC$
By the definition of a net, it follows from the distributivity of intersection over union that:

$\ds \map {B'_n} y = \bigcup_{z \mathop \in F_{n + 1} } \paren {\map {B'_n} y \cap \map {B'_{n + 1} } z}$
Hence, by the definition of $G_n$, it follows that $\map {T_n} y$ is non-empty.

From Countable Union of Countable Sets is Countable, it follows that the disjoint union $\ds \bigsqcup_{n \mathop \in \N} G_n$ is countable.
Using the axiom of countable choice, we can obtain a sequence $\sequence {\phi_n: G_n \to G_{n + 1} }_{n \mathop \in \N}$ of mappings such that:

$\forall n \in \N: \forall y \in G_n: \map {\phi_n} y \in \map {T_n} y$

Let $x_0 \in G_0$.
For all $n \in \N$, define:

$x_{n + 1} = \map {\paren {\phi_n \circ \cdots \circ \phi_1 \circ \phi_0} } {x_0}$
where $\circ$ denotes composition of mappings.

For all $n \in \N$, define:

$A_n = \map {B'_n} {x_n} \cap \map {B'_{n + 1} } {x_{n + 1} }$
Note that $A_n$ is non-empty; otherwise, by Union of Empty Set, $\O$ would be a cover for $A_n$.
Let $y \in A_n$.
Then:














\(\ds \map d {x_n, x_{n + 1} }\)

\(\le\)







\(\ds \map d {x_n, y} + \map d {x_{n + 1}, y}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {2^n} + \frac 1 {2^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 3 {2^{n + 1} }\)










Let $i < j$, where $i, j \in \N$.
Then, by Sum of Infinite Geometric Progression:














\(\ds \map d {x_i, x_j}\)

\(\le\)







\(\ds \sum_{k \mathop = i}^{j - 1} \map d {x_k, x_{k + 1} }\)




















\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = i}^\infty \frac 3 {2^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 3 {2^i}\)










Hence, by Sequence of Powers of Number less than One, the sequence $\sequence {x_k}$ is Cauchy.
By the assumption that $M$ is complete, the sequence $\sequence {x_k}$ converges to some limit $x \in A$.

Choose $U \in \CC$ such that $x \in U$ (which can be done because $\CC$ covers $A$).
By the definition of an open set, we can choose a strictly positive real number $\epsilon$ such that $\map {B_\epsilon} x \subseteq U$.
By Sequence of Powers of Number less than One, we can choose a natural number $n$ such that:

$\dfrac 1 {2^n} < \dfrac \epsilon 2$
By the definition of a limit, we can choose a natural number $m > n$ such that:

$\map d {x_m, x} < \dfrac 1 {2^n}$
For all $y \in A_m$, we have:














\(\ds \map d {y, x}\)

\(\le\)







\(\ds \map d {y, x_m} + \map d {x_m, x}\)




















\(\ds \)

\(<\)







\(\ds \dfrac 1 {2^m} + \dfrac 1 {2^n}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









That is:

$A_m \subseteq \map {B_\epsilon} x \subseteq U$
Since $\subseteq$ is a transitive relation, it follows that $A_m \subseteq U$.
That is, $A_m$ is covered by the singleton $\set U \subseteq \CC$.
But this contradicts the definitions of $\map {T_m} {x_m}$ and $\phi_m$.
Hence our initial assumption that $M$ is not compact was false.
Hence the result.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





