# 

Source: https://proofwiki.org/wiki/Generalized_Hilbert_Sequence_Space_is_Metric_Space/Metric_Space_Axiom_M4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\alpha$ be an infinite cardinal number.
Let $I$ be an indexed set of cardinality $\alpha$.

Let $A$ be the set of all real-valued functions $x : I \to \R$ such that:

$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.

Let $d_2: A \times A \to \R$ be the real-valued function defined as:

$\ds \forall x = \family {x_i}, y = \family {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$

Then $d_2$ satisfies Metric Space Axiom $(\text M 4)$.


Proof
Let $H = \struct{\ell^2, d_{\ell^2}}$ denote the Hilbert sequence space, where:

$\ell^2$ denotes the real $2$-sequence space, that is, the set of all real sequences $\sequence {x_n}$ such that the series $\ds \sum_{n \mathop = 0}^\infty x_n^2$ is convergent
$d_{\ell^2}$ denotes the real $2$-sequence metric, that is, the real-valued function $d_{\ell^2}: \ell^2 \times \ell^2: \to \R$ defined as:
$\ds \forall x = \sequence {x_n}, y = \sequence {y_n} \in \ell^2: \map {d_{\ell^2}} {x, y} := \paren {\sum_{n \mathop = 0}^\infty \paren {x_n - y_n}^2}^{\frac 1 2}$
Lemma
Let $x_1, x_2, \ldots, x_m \in A$.

Then there exists $y_1, y_2, \ldots, y_m \in \ell^2$:

$\forall a,b \in \closedint 1 m : y_a \ne y_b \iff x_a \ne x_b$
$\forall a,b \in \closedint 1 m : \map {d_{\ell^2} } {y_a, y_b} = \map {d_2} {x_a, x_b}$
$\Box$

Let $x_1, x_2 \in A : x_1 \ne x_2$.
From Lemma:

$\exists y_1, y_2 \in \ell^2 :$
$y_1 \ne y_2$
$\map {d_2} {x_1, x_2} = \map {d_{\ell^2}} {y_1, y_2}$

We have:














\(\ds \map {d_2} {x_1, x_2}\)

\(=\)







\(\ds \map {d_{\ell^2} } {y_1, y_2}\)





Lemma














\(\ds \)

\(>\)







\(\ds 0\)





Metric Space Axiom $(\text M 4)$ applied to $d_{\ell^2}$




The result follows.
$\blacksquare$





