# 

Source: https://proofwiki.org/wiki/Jacobi%27s_Equation_is_Variational_Equation_of_Euler%27s_Equation


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The Variational equation of Euler's equation is Jacobi's equation.


Proof
Let Euler's equation be

$\map {F_y} {x, \hat y, \hat y'} - \dfrac \d {\d x} \map {F_{y'} } {x, \hat y, \hat y'} = 0$
which is derived from:

$\ds \int_a^b \paren {\map {F_y} {x, \hat y, \hat y'} - \frac \d {\d x} \map {F_{y'} } {x, \hat y, \hat y'} } \rd x = 0$
Let $\map {\hat y} x = \map y x$ and $\map {\hat y} x = \map y x + \map h x$ be solutions of Euler's equation.
By Taylor's Theorem:














\(\ds \)

\(\)







\(\ds \map {F_y} {x, y + h, y' + h'} - \frac \d {\d x} \map {F_{y'} } {x, y + h, y' + h'}\)




















\(\ds \)

\(=\)







\(\ds F_y + F_{yy} h + F_{yy'} h' + \map \OO {h^2, h'^2} - \map {\frac \d {\d x} } {F_{y'} + F_{y'y} h + F_{y'y'} h' + \map \OO {h^2, h'^2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {F_y - \frac \d {\d x} F_{y'} } + F_{yy} h + \map \OO {h^2, h h', h'^2} - F_{y'y}' h - F_{y'y'}' h' - F_{y'y'} h - \frac \d {\d x} \map \OO {h^2, h h', h'^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{yy} - \frac \d {\d x} F_{y'y} } h - \map {\frac \d {\d x} } {F_{y'y'} h'} + \map \OO {h^2, h h', h'^2}\)









where the omitted ordered tuple of variables is $\tuple {x, y, y'}$, and $\map {\hat y} x = \map y x$ has been used as a solution to $F_y - \dfrac \d {\d x} F_{y'} = 0$.
Therefore, Euler's equation is to be derived from

$\ds \int_a^b \paren {\paren {F_{yy} - \frac \d {\d x} F_{y'y} } h - \map {\frac \d {\d x} } {F_{y'y'} h'} + \map \OO {h^2, h h', h'^2} } \rd x = 0$
By integration by parts, 

$\ds \int_a^b \map \OO {h^2, h h', h'^2} \rd x = \int_a^b \map \OO {h^2} \rd x$
Thus, the equivalent differential equation is:

$\paren {F_{yy} - \dfrac \d {\d x} F_{y'y} } h - \map {\dfrac \d {\d x} } {F_{y'y'} h'} + \map \OO {h^2} = 0$
Omission of $\map \OO {h^2}$ and multiplication of equation by $\frac 1 2$ yields Jacobi's equation.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.27$: Jacobi's Necessary Condition. More on Conjugate Points




