# 

Source: https://proofwiki.org/wiki/Lagrange_Polynomial_Approximation

Theorem
Let $f: D \to \R$ be $n + 1$ times differentiable in an interval $I \subseteq \R$.
Let $x_0, \dotsc, x_n \in I$ be pairwise distinct points.
Let $P$ be the Lagrange Interpolation Formula of degree at most $n$ such that:

$\forall i \in \set {0, \dotsc, n}: \map P {x_i} = \map f {x_i}$
Let $\map R x = \map f x - \map P x$.

Then, for every $x \in I$, there exists $\xi$ in the interval spanned by $x$ and $x_i$, $i = 0, \dotsc, n$, such that:

$\map R x = \dfrac {\paren {x - x_0} \paren {x - x_1} \dotsm \paren {x - x_n} \map {f^{\paren {n + 1} } } \xi} {\paren {n + 1}!}$


Proof
This proof is similar to the proof of Taylor's theorem with the remainder in the Lagrange form, and is also based on Rolle's Theorem.
Observe that:

$\map R {x_i} = 0$ for $i = 0, \dotsc, n$
and that:

$R^{\paren {n + 1} } = f^{\paren {n + 1} }$
Without loss of generality, assume that $x$ is different from all $x_i$ for $i = 0, \dotsc, n$.
Let the function $g$ be defined by:

$\map g t = \map R t - \dfrac {\paren {t - x_0} \paren {t - x_1} \dotsm \paren {t - x_n} \map R x} {\paren {x - x_0} \paren {x - x_1} \dotsm \paren {x - x_n} }$
Then $\map g {x_i} = 0$ for $i = 0, \dotsc, n$, and $\map g x = 0$.
Denote by $J$ the interval spanned by $x$ and $x_i$, $i = 0, \dotsc, n$.
Thus $g$ has at least $n + 2$ zeros in $J$.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
The Extended Rolle's Theorem is applied in $J$ successively to $g$, $g'$, $g$ and so on until $g^{\paren {n + 1} }$, which thus has at least one zero $\xi$ located between the two known zeros of $g^{\paren n}$ in $J$.
Then:

$0 = \map {g^{\paren {n + 1} } } \xi = \map {f^{\paren {n + 1} } } \xi - \dfrac {\paren {n + 1}! \map R x} {\paren {x - x_0} \paren {x - x_1} \dotsm \paren {x - x_n} }$
and the formula for $\map R x$ follows.
$\blacksquare$


Comment
This theorem gives an estimate for the error of the Lagrange polynomial approximation and is similar to the Mean Value Theorem and Taylor's Theorem with the remainder in Lagrange form.





