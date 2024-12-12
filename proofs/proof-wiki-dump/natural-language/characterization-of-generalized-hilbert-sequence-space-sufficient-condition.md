# 

Source: https://proofwiki.org/wiki/Characterization_of_Generalized_Hilbert_Sequence_Space/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\alpha$ be an infinite cardinal number.
Let $I$ be an indexed set of cardinality $\alpha$.

Let $H^\alpha = \struct{A, d_2}$ be the generalized Hilbert sequence space of weight $\alpha$ where:

$A$ denotes the set of all real-valued functions $x : I \to \R$ such that:
$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.

Let $H = \struct{\ell^2, d_{\ell^2}}$ denote the Hilbert sequence space, where:

$\ell^2$ denotes the real $2$-sequence space, that is, the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{n \mathop = 0}^\infty x_n^2$ is convergent

Let $x_1, x_2, \ldots, x_m : I \to \R$ be real-valued functions.

Let there exist an enumeration $\set{j_0, j_1, j_2, \ldots}$ of a countably infinite subset of $I$ such that $\forall k \in \closedint 1 m$:

$(1)\quad\set{i \in I : \paren{x_k}_i \ne 0} \subseteq \set{j_0, j_1, j_2, \ldots}$
$(2)\quad\sequence{\paren{x_k}_{j_n}} \in \ell^2$

Then:

$x_1, x_2, \ldots, x_m \in A$

In which case:

$\forall k \in \closedint 1 m : \ds \sum_{i \mathop \in I} \paren{\paren{x_k}_i}^2 = \sum_{n \mathop = 0}^\infty \paren{\paren{x_k}_{j_n}}^2$


Proof
By definition of $\ell^2$:

$\forall k \in \closedint 1 m : \ds \sum_{n \mathop = 0}^\infty \paren{\paren{x_k}_{j_n}}^2 < \infty$

We have:










\(\ds \forall k \in \closedint 1 m: \, \)



\(\ds \sum_{n \mathop = 0}^\infty \paren{\paren{x_k}_{j_n} }^2\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \size{\paren{\paren{x_k}_{j_n} }^2}\)





Square of Real Number is Non-Negative and Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in I} \size{\paren{x_k}_i^2}\)





Generalized Sum with Countable Non-zero Summands














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in I} \paren{x_k}_i^2\)





Generalized Sum with Countable Non-zero Summands



$\blacksquare$





