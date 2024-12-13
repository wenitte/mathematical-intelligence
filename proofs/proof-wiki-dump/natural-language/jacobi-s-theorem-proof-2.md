# 

Source: https://proofwiki.org/wiki/Jacobi%27s_Theorem/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


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
Consider canonical Euler's equations:

$\dfrac {\d y_i} {\d x} = \dfrac {\partial H} {\partial p_i}$
$\dfrac {\d p_i} {\d x} = -\dfrac {\partial H} {\partial y_i}$
Apply a canonical transformation:

$\tuple {x, \mathbf y, \mathbf p, H} \to \tuple {x, \boldsymbol \alpha, \boldsymbol \beta, H^*}$
where $\Phi = S$.
By Conditions for Transformation to be Canonical:

$p_i = \dfrac {\partial S} {\partial y_i}$
$\beta_i = \dfrac {\partial S} {\partial \alpha_i}$
$H^* = H + \dfrac {\partial S} {\partial x}$
Because $S$ is a solution to the Hamilton-Jacobi equation:

$H^* = 0$
In these new coordinates canonical Euler's equations are:

$\dfrac {\d\alpha_i} {\d x} = \dfrac {\partial H^*} {\partial \beta_i}$
$\dfrac {\d \beta_i} {\d x} = -\dfrac {\partial H^*} {\partial \alpha_i}$
By $H^* = 0$:

$\dfrac {\d \alpha_i} {\d x} = 0$
$\dfrac {\d\beta_i} {\d x} = 0$
which imply that $ \alpha_i$ and $\beta_i$ are constant along each extremal.


This article, or a section of it, needs explaining.In particular: the meaning of "extremal"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\beta_i$ constancy provides with $n$ first integrals:

$\dfrac {\partial S} {\partial \alpha_i} = \beta_i$
Because $S = \map S {x, \mathbf y, \boldsymbol \alpha}$, the aforementioned set of first integrals is also a system of equations for functions $y_i$.
Thus, functions $y_i$ can be found.
Functions $p_i$ are found by the results of Conditions for Transformation to be Canonical:

$p_i = \dfrac {\partial} {\partial y_i} \map S {x, \mathbf y, \boldsymbol \alpha}$
Then:

$\map {y_i} {x, \boldsymbol \alpha, \boldsymbol \beta}$
$\map {p_i} {x, \boldsymbol \alpha, \boldsymbol \beta}$
are solutions to canonical Euler's equations.
$\blacksquare$


Source of Name
This entry was named for Carl Gustav Jacob Jacobi.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.23$: The Hamilton-Jacobi Equation. Jacobi's Theorem




