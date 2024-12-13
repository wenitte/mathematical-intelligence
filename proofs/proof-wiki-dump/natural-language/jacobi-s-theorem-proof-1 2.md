# 

Source: https://proofwiki.org/wiki/Jacobi%27s_Theorem/Proof_1



Theorem
Let $\mathbf y = \sequence {y_i}_{1 \le i \le n}$, $\boldsymbol \alpha = \sequence {\alpha_i}_{1 \le i \le n}$, $\boldsymbol \beta = \sequence {\beta_i}_{1 \le i \le n}$ be vectors, where $\alpha_i$ and $ \beta_i$ are parameters.
Let $S = \map S {x, \mathbf y, \boldsymbol \alpha}$ be a a complete solution of the Hamilton-Jacobi equation.

Let:

$\begin {vmatrix} \dfrac {\partial^2 S} {\partial \alpha_i \partial y_k} \end{vmatrix} \ne 0$
where $\begin {vmatrix} \cdot \end{vmatrix}$ is a determinant.

Let:

$\dfrac {\partial S} {\partial \alpha_i} = \beta_i$

Then:

$p_i = \map {\dfrac {\partial S} {\partial y_i} } {x, \mathbf y, \boldsymbol \alpha}$
$y_i = \map {y_i} {x, \boldsymbol \alpha, \boldsymbol \beta}$
constitute a general solution of the canonical Euler's equations.


Proof
Consider the total derivative of $\dfrac {\partial S} {\partial \alpha_i}$ with respect to $x$:














\(\ds \frac \d {\d x} \frac {\partial S} {\partial \alpha_i}\)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial \alpha_j \partial \alpha_i} \frac {\d \alpha_j} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





$\alpha_j$ is a parameter, independent of $x$














\(\ds \)

\(=\)







\(\ds -\frac {\partial H} {\partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





$S$ is a Solution to Hamilton-Jacobi Equation














\(\ds \)

\(=\)







\(\ds -\sum_{j \mathop = 1}^n \frac {\partial H} {\partial p_j} \frac {\partial p_j} {\partial \alpha_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{j \mathop = 1}^n \frac {\partial H} {\partial p_j} \frac {\partial^2 S} {\partial \alpha_i \partial y_j} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial \alpha_i} \frac {\d y_j} {\d x}\)





Derivation of Hamilton-Jacobi Equation














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \map {\frac {\partial^2 S} {\partial x \partial \alpha_i} } {\frac {\d y_j} {\d x} - \frac {\partial H} {\partial p_j} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





as $\dfrac {\d \beta_i} {\d x} = 0$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y_j} {\d x}\)

\(=\)







\(\ds \frac {\partial H} {\partial p_j}\)










Next, consider the total derivative of $p_i$ with respect to $x$:














\(\ds \frac {\d p_i} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \frac {\partial S} {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial y_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial y_i} \frac {\d y_j} {\d x} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial \alpha_j \partial y_i} \frac {\d \alpha_j} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial y_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial y_i} \frac {\d y_j} {\d x}\)





$\alpha_j$ is a parameter, independent of $x$














\(\ds \)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial y_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_j \partial y_i} \frac {\partial H} {\partial p_j}\)





as $\dfrac {\d y_j} {\d x} = \dfrac {\partial H} {\partial p_j}$




On the other hand, the partial derivative of Hamilton-Jacobi equation yields:














\(\ds \frac {\partial^2 S} {\partial x \partial y_i}\)

\(=\)







\(\ds -\frac {\partial H} {\partial y_i} - \sum_{j \mathop = 1}^n \frac {\partial H} {\partial p_j} \frac {\partial p_j} {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds -\frac {\partial H} {\partial y_i} - \sum_{j \mathop = 1}^n \frac {\partial H} {\partial p_j} \frac {\partial^2 S} {\partial y_i \partial y_j}\)





Derivation of Hamilton-Jacobi Equation








\(\ds \leadsto \ \ \)





\(\ds -\frac {\partial H} {\partial y_i}\)

\(=\)







\(\ds \frac {\partial^2 S} {\partial x \partial y_i} + \sum_{j \mathop = 1}^n \frac {\partial^2 S} {\partial y_i \partial y_j} \frac {\partial H} {\partial p_j}\)









By comparison of this and previous expressions:

$\dfrac {\d p_i} {\d x} = -\dfrac {\partial H} {\partial y_i}$
$\blacksquare$


Source of Name
This entry was named for Carl Gustav Jacob Jacobi.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.23$: The Hamilton-Jacobi Equation. Jacobi's Theorem




