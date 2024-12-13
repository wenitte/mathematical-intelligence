# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $S$ be a set of real mappings such that:

$S = \set {\map y x: \paren {y: S_1 \subseteq \R \to S_2 \subseteq \R}, \paren {\map y x \in C^1 \closedint a b}, \paren {\map y a = A, \map y b = B} }$
Let $J \sqbrk y: S \to S_3 \subseteq \R$ be a functional of the form:

$\ds \int_a^b \map F {x, y, y'} \rd x$

Then a necessary condition for $J \sqbrk y$ to have an extremum (strong or weak) for a given function $\map y x$ is that $\map y x$ satisfy Euler's equation:

$F_y - \dfrac \d {\d x} F_{y'} = 0$


Proof
From Condition for Differentiable Functional to have Extremum we have

$\delta J \sqbrk {y; h} \bigg \rvert_{y = \hat y} = 0$
The variation exists if $J$ is a differentiable functional.
The endpoints of $\map y x$ are fixed.
Hence:

$\map h a = 0$
$\map h b = 0$.

From the definition of increment of a functional:














\(\ds \Delta J \sqbrk {y; h}\)

\(=\)







\(\ds J \sqbrk {y + h} - J \sqbrk y\)





definition














\(\ds \)

\(=\)







\(\ds \int_a^b \map F {x, y + h, y' + h'} \rd x - \int_a^b \map F {x, y, y'} \rd x\)





form of considered functional














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map F {x, y + h, y' + h'} - \map F {x, y, y'} } \rd x\)





bringing under the same integral



Using multivariate Taylor's Theorem, expand $\map F {x, y + h, y' + h'}$ with respect to $h$ and $h'$:

$\map F {x, y + h, y' + h'} = \bigvalueat {\map F {x, y + h, y' + h'} } {h \mathop = 0, \, h' \mathop = 0} + \valueat {\dfrac {\partial {\map F {x, y + h, y' + h'} } } {\partial y} } {h \mathop = 0, \, h' \mathop = 0} h + \valueat {\dfrac {\partial {\map F {x, y + h, y'+ h'} } } {\partial y'} } {h \mathop = 0, \, h' \mathop = 0} h' + \map \OO {h^2, h h', h'^2}$
Substitute this back into the integral: 

$\ds \Delta J \sqbrk {y; h} = \int_a^b \paren {\map F {x, y, y'}_y h + \map F {x, y, y'}_{y'} h' + \map \OO {h^2, h h', h'^2} } \rd x$
Terms in $\map \OO {h^2, h'^2}$ represent terms of order higher than 1 with respect to $h$ and $h'$.
Suppose we expand $\ds \int_a^b \map \OO {h^2, h h', h'^2} \rd x$. 
Every term in this expansion will be of the form:

$\ds \int_a^b \map A {m, n} \frac {\partial^{m + n} \map F {x, y, y'} } {\partial y^m \partial y'^n} h^m h'^n \rd x$
where $m, n \in \N: m + n \ge 2$


This article, or a section of it, needs explaining.In particular: How to convert powers of $h'$ into $h$ ? Integration by parts is the only obvious candidate, but how precisely? Also check, if this is necessaryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, the integral not counting in $\map \OO {h^2, h h', h'^2}$ is a variation of functional:

$\ds \delta J \sqbrk {y; h} = \int_a^b \paren {F_y h + F_{y'} h'} \rd x$
Use lemma. 
Then for any $\map h x$ variation vanishes if:

$F_y - \dfrac \d {\d x} F_{y'} = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation




