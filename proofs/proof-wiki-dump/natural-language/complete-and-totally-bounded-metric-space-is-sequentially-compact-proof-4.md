# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact/Proof_4



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be complete and totally bounded.

Then $M$ is sequentially compact.


Proof
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





