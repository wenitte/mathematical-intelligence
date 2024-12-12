# 

Source: https://proofwiki.org/wiki/Baire_Category_Theorem



Theorem
Let $M = \struct {A, d}$ be a complete metric space.

Then $M = \struct {A, d}$ is also a Baire space.


Corollary
The real number line $\R$ with the usual (Euclidean) metric is non-meager.


Proof
Let $U_n$ be a countable set of open sets of $M$ all of which are everywhere dense.
The strategy of this proof is to show that the intersection $\ds \bigcap U_n$ is everywhere dense.

Let $W \subseteq A$ be a non-empty open set of $M$.
From Open Set Characterization of Denseness, since $U_1$ is everywhere dense:

$W \cap U_1 \ne \O$
Thus, there is a point $x_1 \in A$ and $\epsilon_1 \in \R_{>0}$ such that:

$\map {\overline B} {x_1, \epsilon_1} \subset W \cap U_1$
where $\map B {x, \epsilon}$ and $\map {\overline B} {x, \epsilon}$ denote an open $\epsilon$-ball of $x$ and its closure, respectively.

Recall that the $U_n$ are everywhere dense.
Hence we can use Axiom of Dependent Choice in a recursive manner to find a pair of sequences $\sequence {x_n}$ and $\sequence {\epsilon_n} > 0$ such that:

$\map {\overline B} {x_n, \epsilon_n} \subset \map B {x_{n - 1}, \epsilon_{n - 1} } \cap U_n$
as well as $\epsilon_n < 1/n $.

Since $x_n \in \map B {x_m, \epsilon_m}$ when $n > m$, we have that $x_n$ is a Cauchy Sequence.
Thus $x_n$ converges to some limit $x$ by definition of completeness.
For any $n$, by closedness:

$x \in \map {\overline B} {x_{n + 1}, \epsilon_{n + 1} } \subset \map B {x_n, \epsilon_n}$
Thus:

$\forall n \in \N: x \in W \cap U_n$
From Open Set Characterization of Denseness it follows that $\ds \bigcap U_n$ is (everywhere) dense.
So, by definition, $\struct {M, d}$ is a Baire space.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Source of Name
This entry was named for René-Louis Baire.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces
1993: Serge Lang: Real and Functional Analysis (3rd ed.): Chapter XV, $\S1$. Theorem 1.1 Baire's Theorem
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $22.1$: The Baire Category Theorem




