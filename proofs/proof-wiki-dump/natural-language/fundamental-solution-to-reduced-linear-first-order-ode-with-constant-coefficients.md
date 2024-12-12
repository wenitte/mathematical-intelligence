# 

Source: https://proofwiki.org/wiki/Fundamental_Solution_to_Reduced_Linear_First_Order_ODE_with_Constant_Coefficients



Theorem
Let $H$ be the Heaviside step function.
Let $\lambda \in \R$.
Let $\map f x = \map H x \map \exp {\lambda x}$.
Let $T_f$ be the distribution associated with $f$.

Then, in the distributional sense, $T_f$ is the fundamental solution of

$\paren {\dfrac \d {\d x} - \lambda} T_f = \delta$


Proof
$x \stackrel f {\longrightarrow} \map H x \map \exp {\lambda x}$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_f = T_{f'}$.
Moreover:

$x < 0 \implies \paren {\map H x \map \exp {\lambda x}}' = 0$.
$x > 0 \implies \paren {{\map H x} \map \exp { \lambda x}}' = \lambda \map \exp {\lambda x}$.
Altogether:

$\forall x \in \R \setminus \set 0 : \paren {{\map H x} \map \sin x}' = \lambda \map H x \map \exp {\lambda x}$
Furthermore:

$\ds \map f {0^+} - \map f {0^-} = \map H {0^+} \map \exp {0^+} - \map H {0^-} \map \exp {0^-} = 1$
By the Jump Rule:

$T'_{\map H x \map \exp {\lambda x}} = T_{\lambda \map H x \map \exp {\lambda x}} + \delta$
Rearranging the terms and using the linearity of distribution gives:

$T'_{\map H x \map \exp {\lambda x}} - \lambda T_{\map H x \map \exp {\lambda x}} = \delta$
$\blacksquare$


See also
Solution to Linear First Order ODE with Constant Coefficients


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




