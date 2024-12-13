# 

Source: https://proofwiki.org/wiki/Sequentially_Compact_Metric_Space_is_Totally_Bounded



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be sequentially compact.

Then $M$ is totally bounded.


Proof 1
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
By definition, $M$ is totally bounded only if there exists a finite $\epsilon$-net for $M$.

Aiming for a contradiction, suppose there exists no finite $\epsilon$-net for $M$.
The aim is to construct an infinite sequence $\sequence {x_n}_{n \ge 1}$ in $A$ that has no convergent subsequence.

For all natural numbers $n \ge 1$, define the set:

$\SS_n = \set {F \subseteq A: \size F = n: \forall x, y \in F: x \ne y \implies \map d {x, y} \ge \epsilon}$
where $\size F$ denotes the cardinality of $F$.
We use the Principle of Mathematical Induction to prove that $\SS_n$ is non-empty.

It is vacuously true that any singleton $\set x \subseteq A$ is an element of $\SS_1$.
Since $A$ is non-empty by the definition of a metric space, it follows from Existence of Singleton Set that $\SS_1$ is non-empty.

Let $F \in \SS_n$.
By definition, $F$ is finite.
So $F$ is not an $\epsilon$-net for $M$, by hypothesis.
Hence, there exists an $x \in A$ such that:

$\forall y \in F: \map d {x, y} \ge \epsilon$
Note that, by Metric Space Axiom $(\text M 1)$:

$x \notin F$
Consider the set:

$F' := F \cup \set x$.
Then:

$\size {F'} = n + 1$
and by Metric Space Axiom $(\text M 3)$:

$F' \in \SS_{n + 1}$

Thus, we have proven that $\SS_n$ is non-empty for all natural numbers $n \ge 1$.

Therefore, using the axiom of countable choice, we can obtain an infinite sequence $\sequence {F_n}_{n \ge 1}$ such that:

$\forall n \in \N_{\ge 1}: F_n \in \SS_n$
From Countable Union of Countable Sets is Countable, there exists an injection:

$\ds \phi: \bigcup_{n \mathop \ge 1} F_n \to \N$

We now construct an infinite sequence $\sequence {x_n}_{n \ge 1}$ in $A$.


This article, or a section of it, needs explaining.In particular: This seems a colloquial sense of PoRD, which needs to be formalised in some wayYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
To do this, we use the Principle of Recursive Definition to define the sequence $\sequence {\tuple {x_1, x_2, \ldots, x_n} }_{n \ge 1}$ of ordered $n$-tuples.
Let $x_1 \in F_1$.
Suppose that $x_1, x_2, \ldots, x_n$ have been defined, and let:

$T_n = \set {x_1, x_2, \ldots, x_n}$
Define:

$D_n = \set {x \in F_{n + 1}: \forall y \in T_n: \map d {x, y} \ge \dfrac \epsilon 2}$

Using a Proof by Contradiction, we show that $D_n$ is non-empty.
For all $x \in F_{n + 1}$, define:

$\map {C_n} x = \set {y \in T_n: \map d {x, y} < \dfrac \epsilon 2}$
Let $x, x' \in F_{n + 1}$ be distinct.
Let $y \in \map {C_n} x$.
Then it follows from:

the definition of $F_{n + 1}$
Metric Space Axiom $(\text M 2)$: Triangle Inequality and Metric Space Axiom $(\text M 3)$:
that:

$\map d {x', y} \ge \map d {x, x'} - \map d {x, y} > \dfrac \epsilon 2$
Hence, $y \notin \map {C_n} {x'}$.
That is, the indexed family of sets:

$\sequence {\map {C_n} x}_{x \in F_{n + 1}}$
is pairwise disjoint.
Suppose that $D_n$ is empty.
That is:

$\forall x \in F_{n + 1}: \map {C_n} x$ is non-empty
Then, from Cardinality is Additive Function, Finite Union of Sets in Additive Function, and Cardinality of Subset of Finite Set, we have:

$\ds \size {F_{n + 1} } \le \sum_{x \mathop \in F_{n + 1} } \size {\map {C_n} x} \le \size {T_n} < \size {F_{n + 1} }$
which is a contradiction.


This article, or a section of it, needs explaining.In particular: "Therefore ..." and explain what assumption was made so as to give rise to this contradiction.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From the well-ordering principle, we have that $\struct {\N, \le}$ is a well-ordered set.
Let $\le_{\phi}$ be the ordering induced by $\phi$.
Then $\le_{\phi}$ is a well-ordering.
We define $x_{n + 1}$ as the (unique) $\le_{\phi}$-smallest element of $D_n$.

By construction:

$\forall m, n \in \N_{>0}: m \le n \implies \map d {x_{n + 1}, x_m} \ge \dfrac \epsilon 2$
Hence, by induction, it follows from Metric Space Axiom $(\text M 3)$ that:

$\forall m, n \in \N_{>0}: m \ne n \implies \map d {x_m, x_n} \ge \dfrac \epsilon 2$
Therefore, the sequence $\sequence {x_n}$ has no Cauchy subsequence.
From Convergent Sequence in Metric Space is Cauchy Sequence, $\sequence {x_n}$ has no convergent subsequence either.
Thus, by definition, $M$ is not sequentially compact.
But this contradicts the original assumption that $M$ is sequentially compact.
Thus the assumption that there exists no finite $\epsilon$-net for $M$ was false.
Therefore, by definition, $M$ is totally bounded.
Hence the result.
$\blacksquare$


Proof 2
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


Also see
Sequentially Compact Metric Space is Compact
Compact Metric Space is Totally Bounded




