# 

Source: https://proofwiki.org/wiki/Extremal_Length_of_Union


This page has been identified as a candidate for refactoring of basic complexity.In particular: There are two results here - they need to be in separate pages.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $X$ be a Riemann surface.
Let $\Gamma_1$ and $\Gamma_2$ be families of rectifiable curves (or, more generally, families of unions of rectifiable curves) on $X$. 

Then the extremal length of their union satisfies:

$\dfrac 1 {\map \lambda {\Gamma_1 \cup \Gamma_2} } \le \dfrac 1 {\map \lambda {\Gamma_1} } + \dfrac 1 {\map \lambda {\Gamma_2} }$

Suppose that additionally $\Gamma_1$ and $\Gamma_2$ are disjoint in the following sense: there exist disjoint Borel subsets:

$A_1, A_2 \subseteq X$ such that $\ds \bigcup \Gamma_1 \subset A_1$ and $\ds \bigcup \Gamma_2 \subset A_2$
Then

$\dfrac 1 {\map \lambda {\Gamma_1 \cup \Gamma_2} } = \dfrac 1 {\map \lambda {\Gamma_1} } + \dfrac 1 {\map \lambda {\Gamma_2} }$


Proof
Set $\Gamma := \Gamma_1\cup \Gamma_2$.
Let $\rho_1$ and $\rho_2$ be conformal metrics as in the definition of extremal length, normalized such that:

$\map L {\Gamma_1, \rho_1} = \map L {\Gamma_2, \rho_2} = 1$
We define a new metric by:

$\rho := \map \max {\rho_1, \rho_2}$

This article, or a section of it, needs explaining.In particular: Prove that $\rho$ is a metricYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\map L {\Gamma, \rho} \ge 1$
and:

$\map A \rho \le \map A {\rho_1} + \map A {\rho_2}$

This article, or a section of it, needs explaining.In particular: What is $A$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence:














\(\ds \frac 1 {\map \lambda \Gamma}\)

\(\le\)







\(\ds \frac {\map A \rho} {\map L {\Gamma, \rho} }\)




















\(\ds \)

\(\le\)







\(\ds \map A \rho\)




















\(\ds \)

\(\le\)







\(\ds \map A {\rho_1} + \map A {\rho_2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map L {\Gamma_1, \rho_1} } + \frac 1 {\map L {\Gamma_2, \rho_2} }\)









Taking the infimum over all metrics $\rho_1$ and $\rho_2$, the claim follows.

Now suppose that the disjointness assumption holds, and let $\rho$ again be a Borel-measurable conformal metric, normalized such that $\map L {\Gamma, \rho} = 1$. 
We can define $\rho_1$ to be the restriction of $\rho$ to $A_1$, and likewise $\rho_2$ to be the restriction of $\rho$ to $A_2$.
By this we mean that, in local coordinates, $\rho_j$ is given by

$\map {\rho_j} z \size {\d z} = \begin {cases}
\map \rho z \size {\d z} & : z \in A_j \\
0 \size {\d z} & : \text {otherwise}
\end {cases}$


This article, or a section of it, needs explaining.In particular: The above section from "By this we mean" needs considerably more explanation, as none of the concepts introduced here can be understood without reference to links from elsewhere.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\map A \rho = \map A {\rho_1} + \map A {\rho_2}$
and:

$\map L {\Gamma_1, \rho_1}, \map L {\Gamma_2, \rho_2} \ge 1$

This article, or a section of it, needs explaining.In particular: How do these two statements follow from what went before?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence:














\(\ds \map A \rho\)

\(=\)







\(\ds \map A {\rho_1} + \map A {\rho_2}\)




















\(\ds \)

\(\ge\)







\(\ds \frac {\map A {\rho_1} } {\map L {\Gamma_1, \rho} } + \frac {\map A {\rho_2} } {\map L {\Gamma_2, \rho} }\)




















\(\ds \)

\(\ge\)







\(\ds \frac 1 {\map \lambda {\Gamma_1} } + \frac 1 {\map \lambda {\Gamma_2} }\)









Taking the infimum over all metrics $\rho$, we see that:

$\dfrac 1 {\map \lambda {\Gamma_1 \cup \Gamma_2} } \ge \dfrac 1 {\map \lambda {\Gamma_1} } + \dfrac 1 {\map \lambda {\Gamma_2} }$
Together with the first part of the Proposition, this proves the claim.
$\blacksquare$





