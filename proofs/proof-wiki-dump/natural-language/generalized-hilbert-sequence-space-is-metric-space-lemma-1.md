# 

Source: https://proofwiki.org/wiki/Generalized_Hilbert_Sequence_Space_is_Metric_Space/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\alpha$ be an infinite cardinal number.
Let $I$ be an indexed set of cardinality $\alpha$.

Let $H^\alpha$ be the generalized Hilbert sequence space of weight $\alpha$ $\struct{A, d_2}$ where:

$A$ is the set of all real-valued functions $x : I \to \R$ such that:
$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.
$d_2: A \times A \to \R$ is the real-valued function defined as:
$\ds \forall x = \family {x_i}, y = \family {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$

Let $H = \struct{\ell^2, d_{\ell^2}}$ denote the Hilbert sequence space, where:

$\ell^2$ denotes the real $2$-sequence space, that is, the set of all real sequences $\sequence {x_n}$ such that the series $\ds \sum_{n \mathop = 0}^\infty x_n^2$ is convergent
$d_{\ell^2}$ denotes the real $2$-sequence metric, that is, the real-valued function $d_{\ell^2}: \ell^2 \times \ell^2: \to \R$ defined as:
$\ds \forall x = \sequence {x_n}, y = \sequence {y_n} \in \ell^2: \map {d_{\ell^2}} {x, y} := \paren {\sum_{n \mathop \ge 0} \paren {x_n - y_n}^2}^{\frac 1 2}$

Let $x_1, x_2, \ldots, x_m \in A$.

Then there exists $y_1, y_2, \ldots, y_m \in \ell^2$:

$\forall a,b \in \closedint 1 m : y_a \ne y_b \iff x_a \ne x_b$
$\forall a,b \in \closedint 1 m : \map {d_{\ell^2} } {y_a, y_b} = \map {d_2} {x_a, x_b}$
Proof
For each $k \in \closedint 1 m$, let:

$\ds \sum_{i \mathop \in I} \paren{x_k}_i^2$ converge to $r_k \in \R$.

From Characterization of Generalized Hilbert Sequence Space, there exists enumeration $J = \set{j_0, j_1, j_2, \ldots}$ of a countable set of $I$:

$\forall k \in \closedint 1 m : \set{i \in I : \paren{x_k}_i \ne 0} \subseteq J$
$\forall k \in \closedint 1 m : \sequence{\paren{x_k}_{j_n}} \in \ell^2$
$\forall k \in \closedint 1 m : \ds \sum_{n \mathop = 0}^\infty \paren{x_k}_{j_n}^2 = r_k$

From P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space:

$\forall a, b \in \closedint 1 m : \sequence{\paren{x_a}_{j_n} - \paren{x_b}_{j_n}} \in {\ell^2}$

Let $a, b \in \closedint 1 m$
We have:

$\forall i \in I \setminus J : \paren{x_a}_i = \paren{x_b}_i = 0$
Hence:

$\forall i \in I \setminus J : \paren{x_a}_i - \paren{x_b}_i = 0$
It follows:

$\set{i : \paren{x_a}_i - \paren{x_b}_i \ne 0} \subseteq J$
Since $a, b$ were arbitrary:

$\forall a, b \in \closedint 1 m : \set{i : \paren{x_a}_i - \paren{x_b}_i \ne 0} \subseteq J$

We have:










\(\ds \forall a, b \in \closedint 1 m: \, \)



\(\ds \map {d_2} {x_a, x_b}\)

\(=\)







\(\ds \sum_{i \mathop \in I} \paren{\paren{x_a}_i - \paren{x_b}_i}^2\)





definition of $d_2$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren{\paren{x_a}_{j_n} - \paren{x_b}_{j_n} }^2\)





Characterization of Generalized Hilbert Sequence Space














\(\ds \)

\(=\)







\(\ds \map {d_{\ell^2} } {\sequence{\paren{x_a}_{j_n} }, \sequence{\paren{x_b}_{j_n} } }\)





Definition of Real $2$-Sequence Metric




For each $k \in \closedint 1 m$, let $y_k = \sequence{\paren{x_k}_{j_n}}$.
We have:

$\forall k \in \closedint 1 m : y_k \in \ell^2$.
$\forall a,b \in \closedint 1 m : \map {d_{\ell^2} } {y_a, y_b} = \map {d_2} {x_a, x_b}$
It remains to show that:

$\forall a,b \in \closedint 1 m : y_a \ne y_b \iff x_a \ne x_b$

Let $y_a \ne y_b$.
By definition of sequence:

$\exists n \in \N : \paren{y_a}_n \ne \paren{y_b}_n$
That is:

$\exists n \in \N : \paren{x_a}_{j_n} \ne \paren{x_b}_{j_n}$
Since $j_n \in I$, then:

$\exists i \in I : \paren{x_a}_i \ne \paren{x_b}_i$
By definition of indexed family:

$x_a \ne x_b$

Let $x_a \ne x_b$.
By definition of indexed family:

$\exists i \in I : \paren{x_a}_i \ne \paren{x_b}_i$
Hence:

either $\paren{x_a}_i \ne 0$ or $\paren{x_b}_i \ne 0$.
In either case:

$i \in \set{j_0, j_1, j_2, \ldots }$
Hence for some $n \in \N$:

$\paren{x_a}_{j_n} \ne \paren{x_b}_{j_n}$
That is:

$\paren{y_a}_n \ne \paren{y_b}_n$
By definition of sequence:

$y_a \ne y_b$

The result follows.
$\blacksquare$





