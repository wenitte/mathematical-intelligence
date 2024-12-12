# 

Source: https://proofwiki.org/wiki/Condition_for_Differentiable_Functional_to_have_Extremum


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $S$ be a set of mappings.
Let $y, h \in S: \R \to \R$ be real functions. 
Let $J \sqbrk y: S \to \R$ be a differentiable functional.

Then a necessary condition for the differentiable functional $J \sqbrk {y; h}$ to have an extremum for $y = \hat y$ is:

$\bigvalueat {\delta J \sqbrk {y; h} } {y \mathop = \hat y} = 0$


Proof
Suppose $J \sqbrk {y; h}$ attains a minimum for $y = \hat y$.
Then:

$\Delta J \sqbrk {\hat y; h} \ge 0$
By definition of the differentiable functional:

$\Delta J \sqbrk {y; h} = \delta J \sqbrk {y; h} + \epsilon \size h$
where:

$\ds \lim_{\size h \mathop \to 0} \epsilon = 0$
Hence, there exists $\size h$ small enough, that signs of $\Delta J \sqbrk {y; h}$ and $\delta J \sqbrk {y; h}$ match.
Therefore, for $\size h$ small enough it holds that $\delta J \sqbrk {\hat y; h}\ge 0$.
Aiming for a contradiction, suppose $\delta J \sqbrk {y; h_0} \ne 0$ for some $h_0 \in S$.
Then: 

$\forall \alpha > 0: \delta J \sqbrk {y; -\alpha h_0} = -\delta J \sqbrk {y; \alpha h_0}$
Therefore, for $\size h$ however small, $\Delta J \sqbrk {y; h}$ can be made to have any sign.


This article, or a section of it, needs explaining.In particular: Clarify the part with $\alpha$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

However, by assumption that $J \sqbrk {y; h}$ has a minimum, for sufficiently small $\size h$ it holds that:

$\Delta J \sqbrk {\hat y; h} = J \sqbrk {\hat y + h} - J \sqbrk {\hat y} \ge 0$
This automatically fixes the sign of $\delta J \sqbrk {y; h}$.
This is in contradiction with the previous statement.
Hence for all $h$ it holds that:

$\bigvalueat {\delta J \sqbrk {y; h} } {y \mathop = \hat y} = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.3$: The Variation of a Functional. A Necessary Condition for an Extremum




