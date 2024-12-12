# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact/Proof_1

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be complete and totally bounded.

Then $M$ is sequentially compact.


Proof
Let $\sequence {x_m}_{m \mathop \in \N}$ be an infinite sequence in $A$.

By the definition of a totally bounded metric space, we can use the axiom of countable choice to obtain a sequence $\sequence {F_n}_{n \mathop \in \N}$ such that:

For all $n \in \N$, $F_n$ is a finite $2^{-n}$-net for $M$.
For all $n \in \N$ and $y \in F_n$, define:

$\map {S_n} y = \set {m \in \N: \map d {x_m, y} < 2^{-n} }$
It follows from the definition of a net that:

$(1): \quad \ds \N = \bigcup_{y \mathop \in F_n} \map {S_n} y$

For all $n \in \N$, define:

$G_n = \leftset {y \in F_n: \map {S_n} y}$ is infinite$\rightset{}$
Since $F_n$ is finite by definition, it follows by $(1)$ that $G_n$ is non-empty.
For all $y \in G_n$, define:

$\ds \map {T_n} y = \leftset {z \in G_{n + 1}: \map {S_n} y \cap \map {S_{n + 1} } z}$ is infinite$\rightset{}$
By $(1)$, it follows from the distributivity of intersection over union that:

$\ds \map {S_n} y = \bigcup_{z \mathop \in F_{n + 1} } \paren {\map {S_n} y \cap \map {S_{n + 1} } z}$
Hence, by the definition of $G_n$, it follows that $\map {T_n} y$ is non-empty.

From Countable Union of Countable Sets is Countable, it follows that the disjoint union $\ds \bigsqcup_{n \mathop \in \N} G_n$ is countable.
Using the axiom of countable choice, there exists a sequence $\sequence {\phi_n: G_n \to G_{n + 1} }_{n \mathop \in \N}$ of mappings such that:

$\forall n \in \N: \forall y \in G_n: \map {\phi_n} y \in \map {T_n} y$

This article, or a section of it, needs explaining.In particular: It is rather unclear what the connection with PoRD is hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now, we use the Principle of Recursive Definition to construct a strictly increasing sequence $\sequence {m_k}_{k \mathop \in \N}$ in $\N$.
Let $y_0 \in G_0$.
Let $m_0 \in \map {S_0} {y_0}$.
For all $k \in \N$, let:

$y_{k + 1} = \map {\paren {\phi_k \circ \cdots \circ \phi_1 \circ \phi_0} } {y_0}$
where $\circ$ denotes composition of mappings.
Let $m_{k + 1} > m_k$ be the smallest natural number such that:

$m_{k + 1} \in \map {S_k} {y_k} \cap \map {S_{k + 1} } {y_{k + 1} }$
Such an $m_{k + 1}$ exists by:

the well-ordering principle
and because:

$\map {S_k} {y_k} \cap \map {S_{k + 1} } {y_{k + 1} }$ is infinite by the definitions of $\map {T_k} {y_k}$ and $\phi_k$.
Note that:

$m_k, m_{k + 1} \in \map {S_k} {y_k}$
Let $\hat x_k = x_{m_k}$.

Let $i < j$, where $i, j \in \N$.
Then, by Sum of Infinite Geometric Progression:

$\ds \map d {\hat x_i, \hat x_j} \le \sum_{k \mathop = i}^{j - 1} \paren {\map d {\hat x_k, y_k} + \map d {\hat x_{k + 1}, y_k} } < \sum_{k \mathop = i}^\infty 2^{1 - k} = 2^{2 - i}$
Hence, by Sequence of Powers of Number less than One, the sequence $\sequence {\hat x_k}_{k \mathop \in \N}$ is Cauchy.

By the assumption that $M$ is complete, the sequence $\sequence {\hat x_k}$ converges in $M$.
Since $\sequence {\hat x_k}$ is a convergent subsequence of $\sequence {x_m}$, it follows that $M$ is sequentially compact by definition.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





