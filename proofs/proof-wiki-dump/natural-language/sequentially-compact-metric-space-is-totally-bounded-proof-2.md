# 

Source: https://proofwiki.org/wiki/Sequentially_Compact_Metric_Space_is_Totally_Bounded/Proof_2



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be sequentially compact.

Then $M$ is totally bounded.


Proof
We have by hypothesis that $M$ is a sequentially compact space.
So a fortiori every infinite sequence in $M$ has a subsequence which converges to a point in $A$.

Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
By definition, $M$ is totally bounded if and only if there exists a finite $\epsilon$-net for $M$.

Aiming for a contradiction, suppose there exists no finite $\epsilon$-net for $M$.
The aim is to construct an infinite sequence $\sequence {x_n} _{n \mathop \in \N}$ in $A$ that has no convergent subsequence.

Suppose that $x_0, x_1, \ldots, x_r \in A$ have been defined such that:

$\forall m, n \in \set {0, 1, \ldots, r} : m \ne n \implies \map d {x_m, x_n} \ge \epsilon$
That is, any two distinct elements of $\set {x_0, x_1, \ldots, x_r}$ are at least $\epsilon$ apart.
We have by hypothesis that there exists no finite $\epsilon$-net for $M$.
Specifically, $\set {x_0, x_1, \ldots, x_r}$ is therefore not an $\epsilon$-net for $M$.
So, by definition of a $\epsilon$-net:

$\ds A \nsubseteq \bigcup_{i \mathop = 0}^r \map {B_\epsilon} {x_i}$
where $\map {B_\epsilon} {x_i}$ denotes the open $\epsilon$-ball of $x_i$ in $M$.

Thus there must exist $x_{r + 1} \in A$ such that:

$\ds x_{r + 1} \notin \bigcup_{i \mathop = 0}^r \map {B_\epsilon} {x_i}$
That is:

$\exists x_{r + 1} \in A: \forall m, n \in \set {0, 1, \ldots, r, r + 1} : m \ne n \implies \map d {x_m, x_n} \ge \epsilon$

Thus, by induction, the infinite sequence $\sequence {x_n}$ in $A$ has been constructed such that:

$\forall m, n \in \N: m \ne n \implies \map d {x_m, x_n} \ge \epsilon$
Thus $\sequence {x_n}$ has no Cauchy subsequence.
From Convergent Sequence in Metric Space is Cauchy Sequence, $\sequence {x_n}$ has no convergent subsequence either. 
Thus, by definition, $M$ is not sequentially compact.
But by hypothesis $M$ is sequentially compact.
Hence by Proof by Contradiction there exists a finite $\epsilon$-net for $M$.
Hence a fortiori $M$ is totally bounded.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


This article, or a section of it, needs explaining.In particular: Indicate where ACC is actually used.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Work In ProgressIn particular: use only axiom of countable choice, not axiom of dependent choiceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Also see
Sequentially Compact Metric Space is Compact
Compact Metric Space is Totally Bounded


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Proposition $7.2.9$




