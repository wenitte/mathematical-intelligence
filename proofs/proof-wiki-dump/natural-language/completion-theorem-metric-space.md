# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)



Theorem
Let $M = \struct {A, d}$ be a metric space.

Then there exists a completion $\tilde M = \struct {\tilde A, \tilde d}$ of $\struct {A, d}$.
Moreover, this completion is unique up to isometry.

That is, if $\struct {\hat A, \hat d}$ is another completion of $\struct {A, d}$, then there is a bijection $\tau: \tilde A \leftrightarrow \hat A$ such that:

$(1): \quad \tau$ restricts to the identity on $x$:
$\forall x \in A: \map \tau x = x$
$(2): \quad \tau$ preserves metrics:
$\forall x_1, x_2 \in A : \map {\hat d} {\map \tau {x_1}, \map \tau {x_2} } = \map {\tilde d} {x_1, x_2}$


Proof
We construct the completion of a metric space as equivalence classes of the set of Cauchy sequences in the space under a suitable equivalence relation.

Let $\struct {A, d}$ be a metric space.
Let $\CC \sqbrk A$ denote the set of all Cauchy sequences in $A$.
Define a relation $\sim$ on $\CC \sqbrk A$ by:

$\ds \sequence {x_n} \sim \sequence {y_n} \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$
By Equivalence Relation on Cauchy Sequences, $\sim$ is an equivalence relation on $\CC \sqbrk A$.

Denote the equivalence class of $\sequence {x_n} \in \CC \sqbrk A$ by $\eqclass {x_n} \sim$.
Denote the set of equivalence classes under $\sim$ by $\tilde A$.
By Relation Partitions Set iff Equivalence this is a partition of $\CC \sqbrk A$.
That is, each $\sequence {x_n} \in \CC \sqbrk A$ lies in one and only one equivalence class under $\sim$.

Define $\tilde d: \tilde A \to \R_{\ge 0}$ by:

$\ds \map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} = \lim_{n \mathop \to \infty} \map d {x_n, y_n}$


Lemma 1: $\tilde d$ is Well-Defined
$\tilde d$ is well-defined on $\tilde A$.

We claim that $\struct {\tilde A, \tilde d}$ is a completion of $\struct {A, d}$.
Therefore we must show that:

$\tilde d$ is a metric on $\tilde A$
There exists an everywhere dense inclusion $\struct {A, d} \to \struct {\tilde A, \tilde d}$ preserving $d$.
In addition the theorem claims that $\struct {\tilde A, \tilde d}$ is unique up to isometry.


Lemma 2: $\tilde d$ is a Metric
$\tilde d$ is a metric on $\tilde A$.


Lemma 3: $\tilde A$ is a Completion of $A$
$\tilde M = \struct {\tilde A, \tilde d}$ is a completion of $M$.


Lemma 4: Uniqueness of $\tilde A$
$\tilde M = \struct {\tilde A, \tilde d}$ is unique up to isometry.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Completion Theorem (Metric Space)/Lemma 3.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces




