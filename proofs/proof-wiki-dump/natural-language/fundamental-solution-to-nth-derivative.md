# 

Source: https://proofwiki.org/wiki/Fundamental_Solution_to_Nth_Derivative



Theorem
Let $H$ be the Heaviside step function.
Let $n \in \N_{>0}$.
Let $\ds \map {f_n} x = \map H x \frac {x^{n - 1}} {\paren {n - 1}!}$.
Let $T_{f_n}$ be the distribution associated with $f_n$.

Then, in the distributional sense, $T_{f_n}$ is the fundamental solution of

$\dfrac {\rd^n} {\rd x^n} T_{f_n} = \delta$


Proof
Proof by Principle of Mathematical Induction:


Basis for the Induction
Let $n = 1$.
By Distributional Derivative of Heaviside Step Function:

$\dfrac \rd {\rd x} T_{f_1} = \delta$


Induction Hypothesis
This is our induction hypothesis:

$\dfrac {\rd^k} {\rd x^k} T_{f_k} = \delta$
Now we need to show true for $n = k + 1$:

$\dfrac {\rd^{k + 1} } {\rd x^{k + 1} } T_{f_{k + 1} } = \delta$


Induction Step
This is our induction step:
$\ds x \stackrel f \longrightarrow \map H x \frac {x^k} {k!}$ is a continuously differentiable real function on $\R \setminus \set 0$ and possibly has a discontinuity at $x = 0$.
By Differentiable Function as Distribution we have that $T'_f = T_{f'}$.
Moreover:

$\ds x < 0 \implies \paren {\map H x \frac {x^k} {k!} }' = 0$.
$\ds x > 0 \implies \paren {\map H x \frac {x^k} {k!} }' = \frac {x^{k - 1} } {\paren {k - 1}!}$.
Altogether:

$\ds \forall x \in \R \setminus \set 0 : \paren {\map H x \frac {x^k} {k!} }' = \map H x \frac {x^{k - 1} } {\paren {k - 1}!}$
Furthermore:

$\ds \map f {0^+} - \map f {0^-} = \map H {0^+} \frac {\paren {0^+}^k} {k!} - \map H {0^-} \frac {\paren {0^-}^k} {k!} = 0$
By the Jump Rule:

$T'_{\map H x \frac {x^k} {k!} } = T_{\map H x \frac {x^{k - 1} } {\paren {k - 1}!} }$
Suppose:

$\dfrac {\rd^n} {\rd x^k} T_{f_k} = \delta$
The result follows by induction.

$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




