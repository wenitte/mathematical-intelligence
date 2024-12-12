# 

Source: https://proofwiki.org/wiki/Generalized_Hilbert_Sequence_Space_is_Metric_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\alpha$ be an infinite cardinal number.
Let $I$ be an indexed set of cardinality $\alpha$.

Let $H^\alpha$ be the generalized Hilbert sequence space of weight $\alpha$.

Then:

$H^\alpha$ is a metric space.
Proof
Recall $H^\alpha$ is the structure $\struct{A, d_2}$ where:

$A$ is the set of all real-valued functions $x : I \to \R$ such that:
$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.
$d_2: A \times A \to \R$ is the real-valued function defined as:
$\ds \forall x = \family {x_i}, y = \family {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$


$d_2$ is Well-defined
From Characterization of Hausdorff Property in terms of Nets:

a convergent net in $\R$ has a unique limit.
To show that $d_2$ is well-defined, it is sufficient to show:

$\ds \forall x = \family {x_i}, y = \family {y_i} \in A:$ the generalized sum $\ds \sum_{i \mathop \in I} \paren {x_i - y_i}^2$ converges

Let $x = \family {x_i}, y = \family {y_i} \in A$.

Let $\ds \sum_{i \mathop \in I} x_i^2$ and $\ds \sum_{i \mathop \in I} y_i^2$ converge to $a, b \in \R$ respectively. 

From Characterization of Generalized Hilbert Sequence Space:

there exists enumeration $J = \set{j_0, j_1, j_2, \ldots}$ of a countable set of $I$:
$\set{i \in I : x_i \ne 0}, \set{i \in I : y_i \ne 0} \subseteq J$
$\sequence{x_{j_n}}, \sequence{y_{j_n}} \in \ell^2$
$\ds \sum_{n \mathop = 0}^\infty x_{j_n}^2 = a, \sum_{n \mathop = 0}^\infty y_{j_n}^2 = b$

From P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space:

$\sequence{x_{j_n} - y_{j_n}} \in {\ell^2}$

We have:

$\forall i \in I \setminus J : x_i = y_i = 0$
Hence:

$\forall i \in I \setminus J : x_i - y_i = 0$
It follows:

$\set{i : x_i - y_i \ne 0} \subseteq J$

From Characterization of Generalized Hilbert Sequence Space:

$\family{x_i - y_i}_{i \mathop \in I} \in A$
By definition of $A$:

the generalized sum $\ds \sum_{i \mathop \in I} \paren {x_i - y_i}^2$ converges
The result follows.
$\Box$

Let $H = \struct{\ell^2, d_{\ell^2}}$ denote the Hilbert sequence space, where:

$\ell^2$ denotes the real $2$-sequence space, that is, the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{n \mathop = 0}^\infty x_n^2$ is convergent
$d_{\ell^2}$ denotes the real-valued function $d_{\ell^2}: \ell^2 \times \ell^2: \to \R$ defined as:
$\ds \forall x = \sequence {x_n}, y = \sequence {y_n} \in \ell^2: \map {d_{\ell^2}} {x, y} := \paren {\sum_{n \mathop = 0}^\infty \paren {x_n - y_n}^2}^{\frac 1 2}$


Lemma
Let $x_1, x_2, \ldots, x_m \in A$.

Then there exists $y_1, y_2, \ldots, y_m \in \ell^2$:

$\forall a,b \in \closedint 1 m : y_a \ne y_b \iff x_a \ne x_b$
$\forall a,b \in \closedint 1 m : \map {d_{\ell^2} } {y_a, y_b} = \map {d_2} {x_a, x_b}$
$\Box$


$d_2$ satisfies Metric Space Axiom $(M1)$
Let $x \in A$.
From Lemma:

$\exists y \in \ell^2 :$
$\map {d_2} {x, x} = \map {d_{\ell^2}} {y, y}$

We have:














\(\ds \map {d_2} {x, x}\)

\(=\)







\(\ds \map {d_{\ell^2} } {y, y}\)





Lemma














\(\ds \)

\(=\)







\(\ds 0\)





Metric Space Axiom $(\text M 4)$ applied to $d_{\ell^2}$




The result follows.
$\Box$


$d_2$ satisfies Metric Space Axiom $(M2)$
Let $x_1, x_2, x_3 \in A$.
From Lemma:

$\exists y_1, y_2, y_3 \in \ell^2 : $
$\forall i, j \in \set{1, 2, 3} : \map {d_2} {x_i, x_j} = \map {d_{\ell^2}} {y_i, y_j}$

We have:














\(\ds \map {d_2} {x_1, x_3}\)

\(=\)







\(\ds \map {d_{\ell^2} } {y_1, y_3}\)





Lemma














\(\ds \)

\(\le\)







\(\ds \map {d_{\ell^2} } {y_1, y_2} + \map {d_{\ell^2} } {y_2, y_3}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality applied to $d_{\ell^2}$














\(\ds \)

\(=\)







\(\ds \map {d_2} {x_1, x_2} + \map {d_2} {x_2, x_3}\)





Lemma




The result follows.
$\Box$


$d_2$ satisfies Metric Space Axiom $(M3)$
Let $x_1, x_2 \in A$.
From Lemma:

$\exists y_1, y_2 \in \ell^2 : $
$\map {d_2} {x_1, x_2} = \map {d_{\ell^2}} {y_1, y_2}$ and $\map {d_2} {x_2, x_1} = \map {d_{\ell^2}} {y_2, y_1}$

We have:














\(\ds \map {d_2} {x_1, x_2}\)

\(=\)







\(\ds \map {d_{\ell^2} } {y_1, y_2}\)





Lemma














\(\ds \)

\(=\)







\(\ds \map {d_{\ell^2} } {y_2, y_1}\)





Metric Space Axiom $(\text M 3)$ applied to $d_{\ell^2}$














\(\ds \)

\(=\)







\(\ds \map {d_2} {x_2, x_1}\)





Lemma




The result follows.
$\Box$


$d_2$ satisfies Metric Space Axiom $(M4)$
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





