# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function/Dependent_on_N_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf y$ be an $n$-dimensional real vector.
Let $J \sqbrk {\mathbf y}$ be a functional of the form:
$\ds J \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
Let:

$\mathbf y \in C^1 \closedint a b$
where $C^1 \closedint a b$ denotes that $\mathbf y$ is continuously differentiable in $\closedint a b$
Let $\mathbf y$ satisfy boundary conditions:

$\map {\mathbf y} a = \mathbf A$
$\map {\mathbf y} b = \mathbf B$
where $\mathbf A$, $\mathbf B$ are real vectors.

Then a necessary condition for $J \sqbrk {\mathbf y}$ to have an extremum (strong or weak) for a given $\mathbf y$ is that they satisfy Euler's equations:
$F_{\mathbf y} - \dfrac \d {\d x} F_{\mathbf y'} = 0$


Proof
From Condition for Differentiable Functional of N Functions to have Extremum:

$\ds \bigvalueat {\delta J \sqbrk {\mathbf y; \mathbf h} } {\mathbf y \mathop = \hat{\mathbf y} } = 0$
For the variation to exist it has to satisfy the requirement for a differentiable functional.
Note that the endpoints of $\map {\mathbf y} x$ are fixed. $\map {\mathbf h} x$ is not allowed to change values of $\map {\mathbf y} x$ at those points.
Hence $\map {\mathbf h} a = 0$ and $\map {\mathbf h} b = 0$.
We will start from the increment of a functional:














\(\ds \Delta J \sqbrk {\mathbf y; \mathbf h}\)

\(=\)







\(\ds J \sqbrk {\mathbf y + \mathbf h} - J \sqbrk {\mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'} \rd x - \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'} - \map F {x, \mathbf y, \mathbf y'} } \rd x\)









Using multivariate Taylor's theorem, one can expand $\map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'}$ with respect to functions $\map {\mathbf h} x$ and $\map {\mathbf h'} x$:














\(\ds \map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'}\)

\(=\)







\(\ds \bigvalueat {\map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'} } {\mathbf h \mathop = \mathbf 0, \mathbf h' \mathop = \mathbf 0}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \valueat {\sum_{i \mathop = 1}^n \frac {\partial {\map F {x, \mathbf y + \mathbf h, \mathbf y' + \mathbf h'} } } {\partial {y_i} } } {h_i \mathop = 0, h_i' \mathop = 0} h_i\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \valueat {\sum_{i \mathop = 1}^n \frac {\partial {\map F {x, \mathbf y + \mathbf h, \mathbf y + \mathbf h} } } {\partial {y_i}'} } {h_i \mathop = 0, h_i' \mathop = 0} {h_i}'\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map \OO {h_i h_j, h_i h_j', h_i' h_j'}\)





for $i, j \in \openint 1 n$




We can substitute this back into the integral.
Note that the first term in the expansion and the negative one in the integral will cancel out.
Hence:

$\ds \Delta J \sqbrk {\mathbf y; \mathbf h} = \int_a^b \sum_{i \mathop = 1}^n \paren {F_{y_i} h_i + F_{y_i'} h_i' + \map \OO {h_i h_j,h_i h_j',h_i' h_j'} } \rd x$ for $i, j \in \openint 1 n$

This article, or a section of it, needs explaining.In particular: Finish single function case, then return hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, the integral not counting in $\map \OO {h_i h_j,h_i h_j',h_i' h_j'}$ for $i, j \in \openint 1 n$ is a variation of functional:


This article, or a section of it, needs explaining.In particular: The link is to Definition:Differentiable Functional but the label says "variation of functional" which is not defined on that pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \delta J \sqbrk {\mathbf y; \mathbf h} = \int_a^b \paren {F_{\mathbf y} \mathbf h + F_{\mathbf y'} \mathbf h'} \rd x$
The variation vanishes if for all functions $h_i$ every term containing $h_i$ vanishes independently.
Therefore, we discover a set of Euler's Equations being satisfied simultaneously:

$F_{\mathbf y} - \dfrac \d {\d x} F_{\mathbf y'} =  0$
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: find a better way to deal with notation of dependence on multiple functions (probably through mapping to avoid explicit arguments); build related pagesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.9$: The Fixed End Point Problem for n Unknown Functions




