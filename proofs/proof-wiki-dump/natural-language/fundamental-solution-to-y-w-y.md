# 

Source: https://proofwiki.org/wiki/Fundamental_Solution_to_y%27%27_%2B_w_y

Theorem
Let $H$ be the Heaviside step function.
Let $\omega \in \R : \omega \ne 0$.
Let $\ds \map f x = \map H x \frac {\map \sin {\omega x}} \omega$.
Let $T_f$ be the distribution associated with $f$.

Then, in the distributional sense, $T_f$ is the fundamental solution of

$\paren {\dfrac {\d^2}{\d x^2} + \omega^2} T_f = \delta$


Proof
$x  \stackrel f {\longrightarrow} \map H x \frac {\map \sin {\omega x}} \omega$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_f = T_{f'}$.
Moreover:

$\ds x < 0 \implies \paren {\map H x \frac {\map \sin {\omega x}}{\omega}}' = 0$.
$\ds x > 0 \implies \paren {\map H x \frac {\map \sin {\omega x}}{\omega}}' = \map \cos {\omega x}$.
Altogether:

$\forall x \in \R \setminus \set 0 : \paren {{\map H x} \frac {\map \sin {\omega x}} \omega}' = \map H x \map \cos {\omega x}$
Furthermore:

$\ds \map f {0^+} - \map f {0^-} = \map H {0^+} \frac {\map \sin {\omega \cdot 0^+}} \omega - \map H {0^-} \frac {\map \sin {\omega \cdot 0^-}} \omega = 0$
By the Jump Rule:

$T'_{\map H x \frac {\map \sin {\omega x}} \omega} = T_{\map H x \map \cos {\omega x}}$

$x  \stackrel g {\longrightarrow} \map H x \map \cos {\omega x}$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_g = T_{g'}$.
Moreover:

$\ds x < 0 \implies \paren {\map H x \map \cos \omega}' = 0$.
$\ds x > 0 \implies \paren {\map H x \map \cos \omega}' = - \omega \map \sin {\omega x}$.
Altogether:

$\forall x \in \R \setminus \set 0 : \paren {\map H x \map \cos \omega}' = - \map H x \omega \map \sin {\omega x}$
Furthermore:

$\ds \map g {0^+} - \map g {0^-} = \map H {0^+} \map \cos {\omega \cdot 0^+} - \map H {0^-} \map \cos {\omega \cdot 0^-} = 1$
By the Jump Rule:

$T'_{\map H x \map \cos {\omega x}} = T_{- \omega \map H x \map \sin {\omega x}} + \delta$
Hence:

$T_{\map H x \frac {\map \sin {\omega x}} \omega} = T_{- \omega^2 \map H x \frac {\map \sin {\omega x}} \omega} + \delta$
Rearranging the terms and using the linearity of distribution gives:

$T_{\map H x \frac {\map \sin {\omega x} } \omega} + \omega^2 T_{\map H x \frac {\map \sin {\omega x}} \omega} = \delta$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




