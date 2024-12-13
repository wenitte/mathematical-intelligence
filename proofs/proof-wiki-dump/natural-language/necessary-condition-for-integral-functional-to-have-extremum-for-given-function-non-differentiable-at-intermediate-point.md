# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_Function/Non-differentiable_at_Intermediate_Point


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $y, F$ be real functions.
Let $y$ be continuously differentiable for $x \in \hointr a c \cap  \hointl c b$ and satisfy:

$\map y a = A$
$\map y b = B$
Let $J\sqbrk y$ be a functional of the form

$\ds J \sqbrk y = \int_a^b \map F {x, y, y'} \rd x$
Then the functional $J$ has a weak extremum if $y$ satisfies the following system of equations:














\(\ds F_y - \dfrac \d {\d x} F_{y'}\)

\(=\)







\(\ds 0\)




















\(\ds \bigvalueat {F_{y'} } {x \mathop = c \mathop - 0}\)

\(=\)







\(\ds \bigvalueat {F_{y'} } {x \mathop = c \mathop + 0}\)




















\(\ds \bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop - 0}\)

\(=\)







\(\ds \bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop + 0}\)









where, by the use of limit from the left and limit from the right, the following abbreviations are denoted as follows:

$\ds \bigvalueat {\map y x} {x \mathop = c \mathop + 0} = \lim_{x \mathop \to c^+} \map y x$
$\ds \bigvalueat {\map y x} {x \to x \mathop = c \mathop - 0} = \lim_{x \mathop \to c^-} \map y x$
The last two equations are known as the Weierstrass-Erdmann corner conditions.


This page has been identified as a candidate for refactoring of medium complexity.In particular: move this definition to a separate page once a general principle can be distilledUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof
Rewrite $J \sqbrk y$ as a sum of two functionals:














\(\ds J \sqbrk y\)

\(=\)







\(\ds \int_a^b \map F {x, y, y'} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^c \map F {x, y, y'} \rd x + \int_c^b \map F {x, y, y'} \rd x\)




















\(\ds \)

\(=\)







\(\ds J_1 \sqbrk y + J_2 \sqbrk y\)









Recall that end points $x = a,x = b$ are fixed.
The function $\map y x$ has to be $C^0$ at $x = c$, but otherwise this point can move freely.
From general variation of functional, and noting that $y = \map y x$ is an extremal, write down variations for $J_1 \sqbrk y$ and $J_2 \sqbrk y$ separately:
$\ds \delta J_1 = \bigvalueat {F_{y'} } {x \to c \mathop - 0} \delta y_1 + \bigvalueat {\paren {F - y' F_{y'} } } {x \to c \mathop - 0} \delta x_1$
$\ds \delta J_2 = \bigvalueat {-F_{y'} } {x \to c \mathop + 0} \delta y_1 - \bigvalueat {\paren {F - y' F_{y'} } } {x \to c \mathop + 0} \delta x_1$
Note that $\delta J_1$ and $\delta J_2$ involve the same increments $\delta x_1$ and $\delta y_1$.


This article, or a section of it, needs explaining.In particular: WhyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $y = \map y x$ is an extremum of $J$, we have:














\(\ds \delta J\)

\(=\)







\(\ds \delta J_1 + \delta J_2\)




















\(\ds \)

\(=\)







\(\ds \bigvalueat {F_{y'} } {x \mathop = c \mathop - 0} \delta y_1 + \bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop - 0} \delta x_1 - \bigvalueat {F_{y'} } {x \mathop = c \mathop + 0} \delta y_1 - \bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop + 0} \delta x_1\)




















\(\ds \)

\(=\)







\(\ds \bigvalueat {\paren{F_{y'} } {x \mathop = c \mathop - 0} - \bigvalueat {F_{y'} } {x \mathop = c \mathop + 0} } \delta y_1 + \paren {\bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop - 0} - \bigvalueat {\paren {F - y' F_{y'} } } {x \mathop = c \mathop + 0} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Since $ \delta x_1$ and $ \delta y_1$ are arbitrary, both collections of terms have to vanish independently.
$\blacksquare$


Sources
1877: G. Erdmann: Ueber unstetige Lösungen in der Variationsrechnung. ("On discontinuous solutions in the variational calculus.") (J. Reine Angew. Math. Vol. 82: pp. 21 – 30)
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 3.15$: Broken Extremals. The Weierstrass-Erdmann Conditions




