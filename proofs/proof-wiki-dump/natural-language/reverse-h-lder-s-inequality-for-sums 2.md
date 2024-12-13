# 

Source: https://proofwiki.org/wiki/Reverse_H%C3%B6lder%27s_Inequality_for_Sums

Theorem
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that $\dfrac 1 p - \dfrac 1 q = 1$.
Suppose that the sequences $\mathbf x = \sequence {x_n}$ and $\mathbf y = \sequence {y_n}$ in $\C$ (or $\R$) are such that the series

$\ds \paren {\sum_{n \mathop = 1}^\infty \size {x_n}^p}^{1/p}$
and

$\ds \paren {\sum_{n \mathop = 1}^\infty \size {y_n}^{-q} }^{-1/q}$
are convergent.
Denote these values by $\norm {\mathbf x}_p$ and $\norm {\mathbf y}_{-q}$, respectively.
Here, the notation $\norm {\mathbf x}_p$ does not denote a norm, but is instead just a convenient notation similar to that of the $p$-norm, which is only defined when $p \ge 1$.
Let $\norm {\mathbf {x y} }_1$ denote the $1$-norm of $\mathbf {x y}$, if $\mathbf {x y}$ is in the Lebesgue space $\ell^1$.
Then $\norm {\mathbf {x y} }_1 \ge \norm {\mathbf x}_p \norm {\mathbf y}_{-q}$.


Proof
Without loss of generality, assume that $\mathbf x$ and $\mathbf y$ are non-zero.
Let:

$\mathbf u = \sequence {u_n} = \dfrac {\mathbf x} {\norm {\mathbf x}_p}$
and:

$\mathbf v = \sequence {v_n} = \dfrac {\mathbf y} {\norm {\mathbf y}_{-q} }$
Then:

$\ds \norm {\mathbf u}_p = \dfrac 1 {\norm {\mathbf x}_p} \paren {\sum_{n \mathop = 1}^\infty \size {x_n}^p}^{1/p} = 1$
Similarly:

$\norm {\mathbf v}_{-q} = 1$
It then suffices to prove that:

$\norm {\mathbf {u v} }_1 = \dfrac {\norm {\mathbf {x y} }_1} {\norm {\mathbf x}_p \norm {\mathbf y}_{-q} } \ge 1$
By Reverse Young's Inequality for Products:

$\size {u_n v_n} \ge \dfrac 1 p \size {u_n}^p - \dfrac 1 q \size {v_n}^{-q}$
Summing over all $n \in \N$ gives:

$\norm {\mathbf {u v} }_1 \ge \dfrac 1 p \norm {\mathbf u}_p - \dfrac 1 q \norm {\mathbf v}_{-q} = 1$
as desired.
$\blacksquare$


Also see
Hölder's Inequality for Sums




