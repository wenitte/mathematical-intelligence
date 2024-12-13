# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Twice_Differentiable_Functional_to_have_Minimum


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J \sqbrk y$ be a twice differentiable functional.
Let $\delta J \sqbrk {\hat y; h} = 0$.
Suppose, for $y = \hat y$ and all admissible $h$:

$\delta^2 J \sqbrk {y; h} \ge 0$

Then $J$ has a minimum for $y=\hat y$ if 


This article, or a section of it, needs explaining.In particular: if what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
By definition, $ \Delta J \sqbrk y$ can be expressed as:

$\Delta J \sqbrk {y; h} = \delta J \sqbrk {y; h} + \delta^2 J \sqbrk {y; h} + \epsilon \size h^2$
By assumption:

$\delta J \sqbrk {\hat y; h} = 0$
Hence:

$\Delta J \sqbrk {\hat y; h} = \delta^2 J \sqbrk {\hat y; h} + \epsilon \size h^2$
Therefore, for sufficiently small $\size h$ both $\Delta J \sqbrk {\hat y; h}$ and $\delta^2 J \sqbrk {\hat y; h}$ will have the same sign.

$\Box$

Aiming for a contradiction, suppose there exists $h = h_0$ such that:

$\delta^2 J \sqbrk {\hat y; h_0} < 0$
Then, for any $\alpha \ne 0$:














\(\ds \delta^2 J \sqbrk {\hat y; \alpha h_0}\)

\(=\)







\(\ds \alpha^2 \delta^2 J \sqbrk {\hat y; h_0}\)




















\(\ds \)

\(<\)







\(\ds 0\)









Therefore, $\Delta J \sqbrk {\hat y; h}$ can be made negative for arbitrary small $\size h$.
However, by assumption $\Delta J \sqbrk {\hat y; h}$ is a minimum of $\Delta J \sqbrk {y; h}$ for all sufficiently small $\size h$.
This is a contradiction.
Thus, a function $h_0: \delta^2 J \sqbrk {\hat y; h_0} < 0$ does not exist.
In other words:

$\delta^2 J \sqbrk {\hat y; h} \ge 0$
for all $h$.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.24$: Quadratic Functionals. The Second Variation of a Functional




