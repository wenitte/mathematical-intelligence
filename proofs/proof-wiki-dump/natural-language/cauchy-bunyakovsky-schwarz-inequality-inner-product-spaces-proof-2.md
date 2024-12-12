# 

Source: https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Inner_Product_Spaces/Proof_2

Theorem
Let $\mathbb K$ be a subfield of $\C$.
Let $V$ be a semi-inner product space over $\mathbb K$.
Let $x, y$ be vectors in $V$.

Then:

$\size {\innerprod x y}^2 \le \innerprod x x \innerprod y y$


Proof
This proof assumes that $V$ is a semi-inner product space over $\R$.
Then for all $x, y \in V$, we have $\innerprod x y = \innerprod y x$ by property $(1')$ of semi-inner products.
Define $f_{x, y}: \R \to \R_{\ge 0}$ by:

$\map {f_{x, y} } \lambda = \innerprod {x - \lambda y} {x - \lambda y}$
Then by property $(4)$ of semi-inner product:

$\forall \lambda \in \R: \map {f_{x, y} } \lambda \ge 0$
For all $\lambda \in \R$, it follows that:














\(\ds \map {f_{x, y} } \lambda\)

\(=\)







\(\ds \innerprod {x - \lambda y} {x - \lambda y}\)




















\(\ds \)

\(=\)







\(\ds \innerprod x x + \innerprod x {-\lambda y} + \innerprod {-\lambda y} x + \innerprod {-\lambda y} {-\lambda y}\)





Property $(3)$ of Semi-Inner Product














\(\ds \)

\(=\)







\(\ds \innerprod x x - 2 \lambda \innerprod x y + \lambda^2 \innerprod y y\)





Properties $(1')$ and $(2)$ of Semi-Inner Product














\(\ds \)

\(=\)







\(\ds a \lambda^2 + b \lambda + c\)









where we have put $a = \innerprod y y$, $b = -2 \innerprod x y$, and $c = \innerprod x x$.
Then $f_{x, y}$ is a quadratic polynomial which satisfies $\map {f_{x, y} } \lambda \ge 0$.
Hence $f_{x, y}$ has at most one distinct real root.
From Solution to Quadratic Equation, it follows that the discriminant $\Delta$ satisfies:

$\Delta = b^2 - 4 a c \le 0$
Therefore:

$4 \innerprod x y^2 - 4 \innerprod x x \innerprod y y \le 0$
which we rearrange as:

$\size {\innerprod x y}^2 = \innerprod x y^2 \le \innerprod x x \innerprod y y$
$\blacksquare$





