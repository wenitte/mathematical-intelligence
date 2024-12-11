# 

Source: https://proofwiki.org/wiki/Absolute_Net_Convergence_Equivalent_to_Absolute_Convergence/Absolute_Convergence_implies_Absolute_Net_Convergence


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.
Let $\sequence {v_n}_{n \mathop \in \N}$ be a sequence of elements in $V$.
Let $r \in \R_{\mathop \ge 0}$
Let the series $\ds \sum_{n \mathop = 1}^\infty v_n$ be absolutely convergent to $r$.

Then:

the generalized sum $\ds \sum \set {v_n: n \in \N}$ is absolutely net convergent to $r$.


Proof
Let $\epsilon \in \R_{\mathop \ge 0}$.

By definition of absolutely convergent:

$(2) \quad \exists N \in \N : \forall m \ge N : \size{\ds \sum_{n \mathop = 0}^m \norm{v_m} - r} < \dfrac \epsilon 3$

Let:

$F = \closedint 0 N$

Let:

$E \subseteq \N : E \supseteq F : E$ is finite.

Let:

$m = \max \set{n : n \in E}$
Let:

$G = \closedint 0 m$

We have:

$F = \closedint 0 N \subseteq E \subseteq \closedint 0 m = G$

From Set Difference and Intersection form Partition:

$E = F \cup E \setminus F$
and

$G = F \cup G \setminus F$

From Set Difference Intersection with Second Set is Empty Set:

$F \cap E \setminus F = \O$
and

$F \cap G \setminus F = \O$

From Set Difference over Subset:

$E \setminus F \subseteq G \setminus F$

We have:














\(\ds \size {\sum_{n \mathop \in E} \norm {v_n} - r}\)

\(=\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} + \sum_{n \mathop \in E \setminus F} \norm {v_n} - r }\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(\le\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} - r } + \size{ \sum_{n \mathop \in E \setminus F} \norm {v_n} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} - r } + \size{ \sum_{n \mathop \in G \setminus F} \norm {v_n} }\)




















\(\ds \)

\(=\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} - r } + \size{ \sum_{n \mathop \in G} \norm {v_n} - \sum_{n \mathop \in F} \norm {v_n} }\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(=\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} - r } + \size{ \sum_{n \mathop \in G} \norm {v_n} -r + r - \sum_{n \mathop \in F} \norm {v_n} }\)




















\(\ds \)

\(\le\)







\(\ds \size{\sum_{n \mathop \in F} \norm {v_n} - r } + \size{ \sum_{n \mathop \in G} \norm {v_n} -r } + \size{ r - \sum_{n \mathop \in F} \norm {v_n} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \size{\sum_{n \mathop = 0}^N \norm {v_n} - r } + \size{ \sum_{n \mathop = 0}^m \norm {v_n} -r } + \size{ r - \sum_{n \mathop = 0}^N \norm {v_n} }\)





Definition of Summation over Finite Index














\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 3 + \dfrac \epsilon 3 + \dfrac \epsilon 3\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \epsilon\)










Since $E$ was arbitrary, it follows:

$\exists F \subset \N: F $ is finite $: \forall E \subseteq \N : E \supseteq F: E$ is finite $\leadsto \size{\ds \sum_{n \mathop \in E} \norm{v_n} - r} < \epsilon$

Sine $\epsilon$ was arbitrary, it follows:

$\forall \epsilon \in \R_{\mathop > 0} : \exists F \subset \N: F $ is finite $: \forall E \subseteq \N : E \supseteq F: E$ is finite $\leadsto \size{\ds \sum_{n \mathop \in E} \norm{v_n} - r} < \epsilon$

From Characterization of Convergent Net in Metric Space:

the generalized sum $\ds \sum \set {v_n: n \in \N}$ is absolutely net convergent to $r$.

$\blacksquare$





