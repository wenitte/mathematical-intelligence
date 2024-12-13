# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_Function/Dependent_on_Nth_Derivative_of_Function


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: There is a lot of complicated material on this page which is the same as that on Necessary Condition for Integral Functional to have Extremum for given function/Dependent on N Functions. Might be worth extracting out some of the commonality into a separate result (or results) in its (or their) own page(s).Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\map F {x, y, z_1, \ldots, z_n}$ be a function in differentiability class $C^2$ with respect to all its variables.
Let $y = \map y x \in C^n\openint a b$ such that:

$\map y a = A_0, \map {y'} a = A_1, \ldots, \map {y^{\paren {n - 1} } } a = A_{n - 1}$
and:

$\map y b = B_0, \map {y'} b = B_1, \ldots, \map {y^{\paren {n - 1} } } b = B_{n - 1}$

Let $J \sqbrk y$ be a functional of the form:

$\ds J \sqbrk y = \int_a^b \map F {x, y, y', \ldots, y^{\paren n} } \rd x$
Then a necessary condition for $J \sqbrk y$ to have an extremum (strong or weak) for a given function $\map y x$ is that $\map y x$ satisfy Euler's equation:

$F_y - \dfrac \d {\d x} F_{y'} + \dfrac {\d^2} {\d x^2} F_{y}  -\cdots + \paren {-1}^n \dfrac {\d^n} {\d x^n} F_{y^{\paren n} } = 0$


Proof
From Condition for Differentiable Functional to have Extremum we have

$\bigvalueat {\delta J \sqbrk {y h} } {y \mathop = \hat y} = 0$
For the variation to exist it has to satisfy the requirement for a differentiable functional.
Note that the endpoints of $\map y x$ are fixed.
$\map h x$ is not allowed to change values of $\map y x$ at those points.
Hence the higher derivative $\map {h^{\paren i} } a = 0$ and $\map {h^{\paren i} } b = 0$ for $i \in \openint 1 n$.
We will start from the increment of a functional:














\(\ds \Delta J \sqbrk {y; h}\)

\(=\)







\(\ds J \sqbrk {y + h} - J \sqbrk y\)





definition














\(\ds \)

\(=\)







\(\ds \int_a^b \map F {x, \ldots, y^{\paren i} + h^{\paren i}, \ldots} \rd x - \int_a^b \map F {x, \ldots, y^{\paren i}, \ldots} \rd x\)





where $i \in \set {0, 1, \ldots, n}$














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map F {x, \ldots, y^{\paren i} + h^{\paren i}, \ldots} - \map F {x, \ldots, y^{\paren i}, \ldots} } \rd x\)





bringing under the same integral




Using multivariate Taylor's theorem, one can expand $\map F {x, \ldots, y^{\paren i} + h^{\paren i}, \ldots}$ with respect to $h^{\paren i}$:

$\ds \map F {x, \ldots, y^{\paren i} + h^{\paren i}, \ldots} = \valueat {\map F {x,\ldots,y^{\paren i} + h^{\paren i}, \ldots} } {h^{\paren i} = 0, i \in \openint 0 n} + \valueat {\sum_{i \mathop = 0}^n \frac {\partial \map F {x, \ldots, y^{\paren i} + h^{\paren i}, \ldots} } {\partial y^{\paren i} } } {h^{\paren i} = 0, i \in \openint 0 n} h^{\paren i} + \map \OO {h^{\paren i} h^{\paren j}, i, j \in \openint 0 n}$
We can substitute this back into the integral.
Note that the first term in the expansion and the negative one in the integral will cancel out.
Hence:

$\ds \Delta J \sqbrk {y; h} = \int_a^b \sum_{i \mathop = 0}^n \paren {\map F {x, \ldots, y^{\paren i}, \ldots}_{y^{\paren i} } h^{\paren i} + \map \OO {h^{\paren i} h^{\paren j}, i, j \in \openint 0 n} } \rd x$

This article, or a section of it, needs explaining.In particular: What is the meaning of the subscript $y^{\paren i}$ in the middle of the above?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Terms in $\map \OO {h^{\paren i} h^{\paren j}, i, j \in \openint 0 n}$ represent terms of order higher than 1 with respect to $h^{\paren i}$.
Now, suppose we expand $\ds \int_a^b \map \OO {h^{\paren i} h^{\paren j}, i, j \in \openint 0 n} \rd x$.


This article, or a section of it, needs explaining.In particular: Proof that this goes to zero faster than $\size h$, as definition of variation requiresYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, the integral not counting in $\map \OO {h^{\paren i} h^{\paren j}, i, j \in \openint 0 n}$ is a variation of functional:


This article, or a section of it, needs explaining.In particular: The link is to Definition:Differentiable Functional but the label says "variation of functional" which is not defined on that pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \delta J \sqbrk {y ; h} = \int_a^b \sum_{i \mathop = 0}^n F_{y^{\paren i} } h^{\paren i} \rd x$
Application of Generalized Integration by Parts, together with boundary values for $h^{\paren i}$ yields:

$\ds \int_a^b h \sum_{i \mathop = 0}^n \paren {-1}^i \frac {\d^i} {\d x^i} F_{y^{\paren i} }\rd x$
From If Definite Integral of a(x)h(x) vanishes for any C^0 h(x) then C^0 a(x) vanishes, then for any $\map h x$ the variation vanishes if:

$F_y - \dfrac \d {\d x} F_{y'} + \dfrac {\d^2} {\d x^2} F_{y} - \cdots + \paren {-1}^n \dfrac {\d^n} {\d x^n} F_{y^{\paren n} } = 0$
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: minor refinements, existence of derivatives of FYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.11$: Functionals depending on Higher-Order Derivatives




