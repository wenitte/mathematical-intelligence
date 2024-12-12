# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_of_Heaviside_Step_Function_times_Cosine

Theorem
Let $H$ be the Heaviside step function.
Let $\delta$ be the Dirac delta distribution.

Then in the distributional sense:

$T'_{\map H x \cos x} = T_{- \map H x \sin x} + \delta$


Proof
$x  \stackrel f {\longrightarrow} \map H x \cos x$ is a continuously differentiable real function on $\R \setminus \set 0$ and has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_f = T_{f'}$.
Moreover:

$x < 0 \implies \paren {{\map H x} \map \cos x}' = 0$.
$x > 0 \implies \paren {{\map H x} \map \cos x}' = -\sin x$.
Altogether:

$\forall x \in \R \setminus \set 0 : \paren {{\map H x} \map \cos x}' = - \map H x \sin x$
Furthermore:

$\ds \map f {0^+} - \map f {0^-} = \map H {0^+} \map \cos {0^+} - \map H {0^-} \map \cos {0^-} = 1$
The result follows from the Jump Rule.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




