# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be complete and totally bounded.

Then $M$ is sequentially compact.


Proof 1
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


Proof 2
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


Proof 3
Let $M$ be both complete and totally bounded.
Let $\sequence {a_k}$ be any infinite sequence in $A$.
Let $\epsilon \in \R_{>0}$.
Let $x_1, \ldots, x_n \in X$ be a finite set of points such that:

$\ds A = \bigcup_{i \mathop = 1}^n \map {B_\epsilon} {x_i}$
where $\map {B_\epsilon} {x_i}$ represents the open $\epsilon$-ball of $x_i$.
This is known to exist as $M$ is totally bounded.
Then for every $k \in \N$, there is some $j_k \in \set {0, \dots, n}$ such that $\map d {a_k, x_{j_k} } \le \epsilon$.
For some $j \in \set {0, \dots, n}$, we must have $j_k = j$ for infinitely many $k$, and it follows by setting $x := x_{j_k}$.
Setting $x := x_{j_k}$, we see that:

$(1): \quad$ There is some $x \in X$ such that $\map d {a_k, x} \le \epsilon$ for infinitely many $k$.

Now let $\sequence {a_k}$ be any infinite sequence in $A$.
By $(1)$, there is some $x_1 \in X$ such that $\map d {a_k, x_1} \le \dfrac 1 2$ for infinitely many $k$. 


The dependence on a certain axiom has to be clarified.In particular: use only axiom of countable choice, not axiom of dependent choiceKeep this in case someone out there can figure out a way to fix this without making it like Proof 1To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{AxiomReview}} from the code.
Now we can apply $(1)$ to the subsequence of $\sequence {a_k}$ which consisting of those elements for which $\map d {a_k, x_1} \le \dfrac 1 2$.
Thus we can find $x_2 \in A$ such that infinitely many $k$ satisfy both $\map d {a_k, x_2} \le \dfrac 1 4$ and $\map d {a_k, x_1} \le \dfrac 1 2$.
Now we proceed inductively, to obtain a sequence $\sequence {x_m}$ with the property that there exist infinitely many $k$ such that, for $1 \le j \le m$:

$(2) \quad \map d {a_k, x_j} \le 2^{-j}$
Now define a subsequence $\sequence {a_{k_m} }$ inductively by letting $k_0$ be arbitrary, and choosing $k_{m + 1}$ minimal such that $k_{m + 1} > k_m$ and such that $(2)$ holds for $k = k_m$ and all $1 \le j \le m$. 
Let $\epsilon > 0$, and choose $n$ sufficiently large that $\paren {\dfrac 1 2}^{n - 1} < \epsilon$.
Then:

$\map d {a_{k_r}, a_{k_s} } \le \map d {a_{k_r}, x_n} + \map d {a_{k_s}, x_n} \le 2 \cdot 2^{-n} < \epsilon$
whenever $r, s \ge n$.

So this subsequence is a Cauchy sequence and hence, because $M$ is complete by assumption, it is convergent.
Thus we see that $\sequence {a_k}$ has a convergent subsequence.
Hence, by definition, $M$ is sequentially compact.
$\blacksquare$


Proof 4
We use the following lemma, that depends on the axiom of countable choice.

Lemma
Let $\struct {A , d}$ be a totally bounded metric space.

There exists a mapping $f : \Z_{>0} \times A^\N \to A^\N$ such that:

for all $N \in \Z_{>0}$ and $\sequence {x_n}_{n \mathop \in \N}\in A^\N$:
$\sequence {y_n}_{n \mathop \in \N} := \map f {N, \sequence {x_n}_{n \mathop \in \N}}$ is a subsequence of $\sequence {x_n}_{n \mathop \in \N}$
and:
$\forall k, l \in \N: \map d {y_k, y_l} \le \dfrac 1 N$
$\Box$

Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $A$.
In the following, we will construct recursively nested subsequences:

$\sequence {x^{\paren 0}_n}_{n \mathop \in \N}\supseteq \sequence {x^{\paren 1}_n}_{n \mathop \in \N}\supseteq \sequence {x ^{\paren 2}_n}_{n \mathop \in \N} \supseteq\cdots$
such that:

$\forall N\in\Z_{>0} : \forall k,l \in \N: \map d {x^{\paren N}_k, x^{\paren N}_l} \le \dfrac 1 N$

First, let:

$\sequence {x^{\paren 0}_n}_{n \mathop \in \N} = \sequence {x_n}_{n \mathop \in \N}$
Then, for each $N \in \Z_{>0}$, applying $f$ from lemma, let:

$\sequence {x^{\paren N}_n}_{n \mathop \in \N} := \map f {N, \sequence {x^{\paren {N - 1} }_n}_{n \mathop \in \N}}$

Now, let:

$y_n := x^{\paren n}_n$
for all $n \in \N$.

By construction:

$\sequence {y_n}_{n \mathop \in \N}$ is a subsequence of $\sequence {x_n}_{n \mathop \in \N}$
and:

$\forall N \in \Z_{>0}: \sequence {y_n}_{n \mathop \ge N}$ is a subsequence of $\sequence {x^{\paren N}_n}_{n \mathop \in \N}$
From the latter follows:

$\forall N\in\Z_{>0} : \forall m, n \ge N : \map d {y_m, y_n} \le \dfrac 1 N $
that implies that $\sequence {y_n}_{n \mathop \ge N}$ is a Cauchy sequence.
As $\struct {A, d}$ is complete, $\sequence {y_n}_{n \mathop \in \N}$ is convergent.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces




