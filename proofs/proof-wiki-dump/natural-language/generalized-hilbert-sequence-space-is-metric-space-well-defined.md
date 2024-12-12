# 

Source: https://proofwiki.org/wiki/Generalized_Hilbert_Sequence_Space_is_Metric_Space/Well-Defined


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\alpha$ be an infinite cardinal number.
Let $I$ be an indexed set of cardinality $\alpha$.

Let $A$ be the set of all real-valued functions $x : I \to \R$ such that:

$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.

Let $d_2: A \times A \to \R$ be the real-valued function defined as:

$\ds \forall x = \family {x_i}, y = \family {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$

Then $d_2$ is well-defined.


Proof
Let $\ell^2$ denote the real $2$-sequence space, that is, the set of all real sequences $\sequence {x_n}$ such that the series $\ds \sum_{n \mathop = 0}^\infty x_n^2$ is convergent

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
$\blacksquare$





