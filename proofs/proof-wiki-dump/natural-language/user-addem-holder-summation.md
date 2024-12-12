# 

Source: https://proofwiki.org/wiki/User:Addem/Holder/Summation



Theorem
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Let:

$\mathbf x = \sequence {x_n} \in \ell^p$
$\mathbf y = \sequence {y_n} \in \ell^q$
where $\ell^p$ denotes the $p$-sequence space.
Let $\norm {\mathbf x}_p$ denote the $p$-norm of $\mathbf x$.

Then $\mathbf x \mathbf y = \sequence {x_n y_n} \in \ell^1$, and:

$\norm {\mathbf x \mathbf y}_1 \le \norm {\mathbf x}_p \norm {\mathbf y}_q$


Proof
Without loss of generality, assume that $\mathbf x$ and $\mathbf y$ are non-zero.

Define:

$\mathbf u = \sequence {u_n} = \dfrac {\mathbf x} {\norm {\mathbf x}_p}$
$\mathbf v = \sequence {v_n} = \dfrac {\mathbf y} {\norm {\mathbf y}_q}$
Then:

$\ds \norm {\mathbf u}_p = \dfrac 1 {\norm {\mathbf x}_p} \paren {\sum_{n \mathop = 0}^\infty \size {x_n}^p}^{1/p} = 1$
Similarly:

$\norm {\mathbf v}_q = 1$

By Young's Inequality for Products:

$(1): \quad \forall n \in \N: \size {u_n v_n} \le \dfrac 1 p \size {u_n}^p + \dfrac 1 q \size {v_n}^q$
By the comparison test, it follows that:

$\mathbf u \mathbf v = \sequence {u_n v_n} \in \ell^1$
$\mathbf x \mathbf y = \norm {\mathbf x}_p \norm {\mathbf y}_q \mathbf u \mathbf v \in \ell^1$
From $(1)$, it follows that:

$\norm {\mathbf u \mathbf v}_1 \le \dfrac 1 p \norm {\mathbf u}_p + \dfrac 1 q \norm {\mathbf v}_q = 1$
Therefore:

$\norm {\mathbf x \mathbf y}_1 = \norm {\mathbf x}_p \norm {\mathbf y}_q \norm {\mathbf u \mathbf v}_1 \le \norm {\mathbf x}_p \norm {\mathbf y}_q$
as desired.
$\blacksquare$


Also see
Minkowski's Inequality for Sums


Source of Name
This entry was named for Otto Ludwig Hölder.


Historical Note
Hölder's Inequality for Sums was first found by Leonard James Rogers in $1888$, and discovered independently by Otto Ludwig Hölder in $1889$.


Sources
2013: Francis Clarke: Functional Analysis, Calculus of Variations and Optimal Control ... (previous) ... (next): $1.1$: Basic Definitions
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces




