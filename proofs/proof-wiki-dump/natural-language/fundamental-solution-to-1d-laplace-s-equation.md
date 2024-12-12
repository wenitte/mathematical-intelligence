# 

Source: https://proofwiki.org/wiki/Fundamental_Solution_to_1D_Laplace%27s_Equation

Theorem
Let $\ds \map f x = \frac {\size x} 2$ where $\size x$ is the absolute value function.
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.
Let $T_f \in \map {\DD'} \R$ be the distribution associated with $f$.

Then $T_f$ is the fundamental solution to the $1$-dimensional Laplace's equation.
That is:

$T_f = \delta$
or in the distributional sense:

$\dfrac {\d^2} {\d x^2} f = \delta$


Proof
$\ds x \stackrel f {\longrightarrow} \frac {\size x} 2$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_f = T_{f'}$.
Moreover:

$\ds x < 0 \implies \paren {\frac {\size x} 2}' = -\frac 1 2$
$\ds x > 0 \implies \paren {\frac {\size x} 2}' = \frac 1 2$
Altogether:

$\ds \forall x \in \R \setminus \set 0 : \paren {\frac {\size x} 2}' = \map g x$
where:

$\map g x = \begin{cases}
\ds \frac 1 2 & : x > 0 \\
\ds - \frac 1 2 & : x < 0
\end{cases}$
Furthermore:

$\ds \map f {0^+} - \map f {0^-} = 0$
By the Jump Rule:

$T'_f = T_g$

$x \stackrel g {\longrightarrow} \map g x$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By similar arguments:

$\ds \forall x \in \R \setminus \set 0 : \map {g'} x = 0$
Furthermore:

$\ds \map g {0^+} - \map g {0^-} = 1$
By the Jump Rule:

$T'_g = \delta$
By the definition of distributional derivative:














\(\ds T_f\)

\(=\)







\(\ds \paren {T'_f}'\)




















\(\ds \)

\(=\)







\(\ds T'_{f'}\)




















\(\ds \)

\(=\)







\(\ds T'_g\)




















\(\ds \)

\(=\)







\(\ds \delta\)









Hence, if $\ds \map f x = \frac {\size x} 2$, then $T_f = \delta$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




