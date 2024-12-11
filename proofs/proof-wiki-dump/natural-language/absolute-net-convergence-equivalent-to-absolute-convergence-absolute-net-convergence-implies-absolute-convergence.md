# 

Source: https://proofwiki.org/wiki/Absolute_Net_Convergence_Equivalent_to_Absolute_Convergence/Absolute_Net_Convergence_implies_Absolute_Convergence


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.
Let $\sequence {v_n}_{n \mathop \in \N}$ be a sequence of elements in $V$.
Let $r \in \R_{\mathop \ge 0}$
Let the generalized sum $\ds \sum \set {v_n: n \in \N}$ be absolutely net convergent to $r$.

Then:

the series $\ds \sum_{n \mathop = 1}^\infty v_n$ is absolutely convergent to $r$.


Proof
Let $\epsilon \in \R_{\mathop > 0}$.

From Characterization of Convergent Net in Metric Space:

$(1) \quad \exists F \subset \N: F $ is finite $: \forall E \subseteq \N : E \supseteq F: E$ is finite $\implies \size{\ds \sum_{n \mathop \in E} \norm{v_n} - r} < \epsilon$

Let $N = \max \set{n : v_n \in F}$.
We have:

$F \subseteq \closedint 0 N$

Let $m \ge N$.
We have:

$\closedint 0 m \supseteq \closedint 0 N \supseteq F$

From $(1)$:

$\size{\ds \sum_{n \mathop \in \closedint 0 m} \norm{v_n} - r} < \epsilon$
By definition of summation over finite index:

$\size{\ds \sum_{n \mathop = 0}^m \norm{v_n} - r} < \epsilon$

Since $m \ge N$ was arbitrary, it follows that:

$\forall m \ge N : \size{\ds \sum_{n \mathop = 0}^m \norm{v_n} - r} < \epsilon$

Since $\epsilon$ was arbitrary, it follows that the series $\ds \sum_{n \mathop = 1}^\infty v_n$ is absolutely convergent to $r$ by definition.

$\blacksquare$





