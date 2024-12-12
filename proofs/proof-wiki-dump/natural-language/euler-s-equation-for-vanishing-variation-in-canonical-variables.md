# 

Source: https://proofwiki.org/wiki/Euler%27s_Equation_for_Vanishing_Variation_in_Canonical_Variables


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem

This page has been identified as a candidate for refactoring of advanced complexity.In particular: There are a number of pages linking here with the presentation of the link set as "momenta". This is going to need a definition of its own, but it is not clear what that is from looking at this page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Consider the following system of differential equations:

$(1): \quad \begin {cases} F_{y_i} - \dfrac \d {\d x} F_{y_i'} = 0 \\
\dfrac {\d {y_i} } {\d x} = y_i'\end{cases}$
where $i \in \set {1, \ldots, n}$.

Let the coordinates $\tuple {x, \family {y_i}_{1 \mathop \le i \mathop \le n}, \family {y_i'}_{1 \mathop \le i \mathop \le n}, F}$ be transformed to canonical variables:

$\tuple {x, \family {y_i}_{1 \mathop \le i \mathop \le n}, \family {p_i}_{1 \mathop \le i \mathop \le n}, H}$

Then the system $(1)$ is transformed into:

$\begin {cases}
\dfrac {\d y_i} {\d x} = \dfrac {\partial H} {\partial p_i} \\
\dfrac {\d p_i} {\d x} = -\dfrac {\partial H} {\partial y_i}
\end {cases}$


Proof
Find the full differential of Hamiltonian:














\(\ds \rd H\)

\(=\)







\(\ds -\rd F + \rd {\sum_{i \mathop = 1}^n y_i' p_i}\)





Definition of Hamiltonian














\(\ds \)

\(=\)







\(\ds -\rd F + \sum_{i \mathop = 1}^n \paren {\rd {y_i'} p_i + y_i' \rd p_i}\)





Full differential of a product














\(\ds \)

\(=\)







\(\ds -\frac {\partial F} {\partial x} \rd x - \sum_{i \mathop = 1}^n \frac {\partial F} {\partial y_i} \rd y_i - \sum_{i \mathop = 1}^n \frac {\partial F} {\partial y_i'} \rd y_i' + {\sum_{i \mathop = 1}^n \rd y_i' p_i} + \sum_{i \mathop = 1}^n y_i'\rd p_i\)





Definition of Differential of Real-Valued Function














\(\ds \)

\(=\)







\(\ds -\frac {\partial F} {\partial x} \rd x - \sum_{i \mathop = 1}^n \frac {\partial F} {\partial y_i} \rd y_i - \sum_{i \mathop = 1}^n p_i \rd y_i' + {\sum_{i \mathop = 1}^n \rd y_i' p_i} + \sum_{i \mathop = 1}^n y_i'\rd p_i\)





Definition of Canonical Variable: $p_i$














\(\ds \)

\(=\)







\(\ds -\frac {\partial F} {\partial x} \rd x - \sum_{i \mathop = 1}^n \frac {\partial F} {\partial y_i} \rd y_i + \sum_{i \mathop = 1}^n y_i' \rd p_i\)





Terms with $p_i \rd y_i'$ cancel














\(\ds \)

\(=\)







\(\ds \frac {\partial H} {\partial x} \rd x + \sum_{i \mathop = 1}^n \frac {\partial H} {\partial y_i} \rd y_i + \sum_{i \mathop = 1}^n \frac {\partial H} {\partial p_i} \rd p_i\)





Definition of Differential of Real-Valued Function



By equating coefficients of differentials in last two equations we find that:

$\dfrac {\partial H} {\partial x} = -\dfrac {\partial F} {\partial x}$
$\dfrac {\partial H} {\partial y_i} = -\dfrac {\partial F} {\partial y_i}$
$\dfrac {\partial H} {\partial p_i} = y_i'$
From the third identity it follows that:

$\paren {\dfrac {\d y_i} {\d x} = y_i} \implies \paren {\dfrac {\d y_i} {\d x} = \dfrac {\partial H} {\partial p_i} }$
while the second identity together with the definition of $p_i$ assures that:

$\paren {\dfrac {\partial F} {\partial y_i} - \dfrac \d {\d x} \dfrac {\partial F} {\partial y_i} = 0} \implies \paren {\dfrac {\d p_i} {\d x} = -\dfrac {\partial H} {\partial y_i} }$
$\blacksquare$


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.16$: The Canonical Form of the Euler's Equations




