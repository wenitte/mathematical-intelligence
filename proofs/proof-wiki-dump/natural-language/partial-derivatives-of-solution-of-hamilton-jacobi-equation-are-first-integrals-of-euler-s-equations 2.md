# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_Solution_of_Hamilton-Jacobi_Equation_are_First_Integrals_of_Euler%27s_Equations


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf y = \sequence {y_i}_{1 \mathop \le i \mathop \le n}$, $\bsalpha = \sequence {\alpha_i}_{1 \mathop \le i \mathop \le m}$ be vectors, where $m \le n$.
Let $S = \map S {x, \mathbf y, \bsalpha}$ be a solution of the Hamilton-Jacobi equation, where $\bsalpha$ are parameters.

Then each partial derivative:

$\dfrac {\partial S} {\partial \alpha_i}$
is a first integral of canonical Euler's equations.


Proof
Consider the total derivative of $\dfrac {\partial S} {\partial \alpha_i}$ with respect to $x$:














\(\ds \frac \d {\d x} \frac {\partial S} {\partial \alpha_i}\)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial\alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x} + \sum_{j \mathop = 1}^m + \frac {\partial^2 S} {\partial \alpha_j \partial \alpha_i} \frac {\d \alpha_j} {\d x}\)





Total derivative of $S$ with respect to $x$














\(\ds \)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





$ \alpha_i$ is parameter, independent of $x$














\(\ds \)

\(=\)







\(\ds -\frac {\partial H} {\partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





$S$ satisfies Hamilton-Jacobi equation














\(\ds \)

\(=\)







\(\ds -\frac {\partial x} {\partial \alpha_i} \frac {\partial H} {\partial x} - \sum_{j \mathop = 1}^n \frac {\partial y_j} {\partial \alpha_i} \frac {\partial H} {\partial y_j} - \sum_{j \mathop = 1}^n \frac {\partial p_j} {\partial \alpha_i} \frac {\partial H} {\partial p_j} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





Partial derivative of multivariate composite function $\map H {x, \mathbf y, \mathbf p}$














\(\ds \)

\(=\)







\(\ds -\sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\partial H} {\partial p_j} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\partial y_j} {\partial x}\)





$x$, $y_j$ independent of $\alpha_i$; $S$ satisfies Hamilton-Jacobi equation, thus $p_j = \dfrac {\partial S} {\partial y_j}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \map {\frac {\partial^2 S} {\partial y_j \partial \alpha_i} } {\frac {\d y_j} {\d x} - \frac {\partial H} {\partial p_j} }\)









If Euler's equations are satisfied, the right hand side vanishes.
Hence

$\dfrac \d {\d x} \dfrac {\partial S} {\partial \alpha_i} = 0$
or:

$\dfrac {\partial S} {\partial \alpha_i} = C_i$
where $C_i$ is a constant.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.23$: The Hamilton-Jacobi Equation. Jacobi's Theorem




