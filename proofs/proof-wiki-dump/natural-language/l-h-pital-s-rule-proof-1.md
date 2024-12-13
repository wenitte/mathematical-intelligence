# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Proof_1

Theorem
Let $f$ and $g$ be real functions which are differentiable on the open interval $\openint a b$.
Let:

$\forall x \in \openint a b: \map {g'} x \ne 0$
where $g'$ denotes the derivative of $g$ with respect to $x$.
Let:

$\ds \lim_{x \mathop \to a^+} \map f x = \lim_{x \mathop \to a^+} \map g x = 0$

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $l = \ds \lim_{x \mathop \to a^+} \frac {\map {f'} x}{\map {g'} x}$.
Let $\epsilon \in \R_{>0}$.
By the definition of limit, we ought to find a $\delta \in \R_{>0}$ such that:

$\forall x \in \R: \size {x - a} < \delta \implies \size {\dfrac {\map f x} {\map g x} - l} < \epsilon$
Fix $\delta$ such that:

$\forall x \in \R: \size {x - a} < \delta \implies \size {\dfrac {\map {f'} x} {\map {g'} x} - l} < \epsilon$
which is possible by the definition of limit.

Define:
$\quad \map {f_0} x = \begin {cases}
\map f x & : x \in \openint a b \\
0 & : x = a
\end {cases}$
$\quad \map {g_0} x = \begin {cases}
\map f x & : x \in \openint a b \\
0 & : x = a
\end {cases}$
By definition of right-continuous, it follows that $f_0$ and $g_0$ are continuous on $\hointr a b$.

Let $x_\delta$ be such that $0 < x_\delta - a < \delta$.
We have that $f_0$ and $g_0$ are continuous on $\closedint a {x_\delta}$, and differentiable on $\openint a {x_\delta}$
Thus, by the Cauchy Mean Value Theorem with $b = x_\delta$:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'_0} \xi} {\map {g'_0} \xi} = \dfrac {\map {f_0} {x_\delta} - \map {f_0} a} {\map {g_0} {x_\delta} - \map {g_0} a}$
Since $\map {f_0} a = \map {g_0} a = 0$:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'_0} \xi} {\map {g'_0} \xi} = \dfrac {\map {f_0} {x_\delta}} {\map {g_0} {x_\delta}}$
But since $\xi, x_\delta \in \openint a b$:

$\map {f'_0} \xi = \map {f'} \xi$
$\map {g'_0} \xi = \map {g'} \xi$
$\map {f_0} {x_\delta} = \map f {x_\delta}$
$\map {g_0} {x_\delta} = \map g {x_\delta}$
Therefore:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f {x_\delta}} {\map g {x_\delta}}$

Now, as $a < \xi < x_\delta$, it follows that $\size{\xi - a} < \delta$ as well.
Therefore:

$\size {\dfrac {\map f {x_\delta}} {\map g {x_\delta}} - l} = \size {\dfrac {\map {f'} \xi} {\map {g'} \xi} - l} < \epsilon$
which leads us to the desired conclusion that:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
$\blacksquare$





