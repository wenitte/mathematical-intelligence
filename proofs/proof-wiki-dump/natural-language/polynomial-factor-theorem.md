# 

Source: https://proofwiki.org/wiki/Polynomial_Factor_Theorem



Theorem
Let $\map P x$ be a polynomial in $x$ over a field $K$ of degree $n$.
Then:

$\xi \in K: \map P \xi = 0 \iff \map P x = \paren {x - \xi} \map Q x$
where $Q$ is a polynomial of degree $n - 1$.

Hence, if $\xi_1, \xi_2, \ldots, \xi_n \in K$ such that all are different, and $\map P {\xi_1} = \map P {\xi_2} = \dotsb = \map P {\xi_n} = 0$, then:

$\ds \map P x = k \prod_{j \mathop = 1}^n \paren {x - \xi_j}$
where $k \in K$.


Corollary
Let $\map P x$ be a polynomial in $x$ over the real numbers $\R$ of degree $n$.
Suppose there exists $\xi \in \R: \map P \xi = 0$.

Then $\map P x = \paren {x - \xi} \map Q x$, where $\map Q x$ is a polynomial of degree $n - 1$.

Hence, if $\xi_1, \xi_2, \dotsc, \xi_n \in \R$ such that all are different, and $\map P {\xi_1} = \map P {\xi_2} = \dotsb = \map P {\xi_n} = 0$, then:

$\ds \map P x = k \prod_{j \mathop = 1}^n \paren {x - \xi_j}$
where $k \in \R$.


Proof
Let $P = \paren {x - \xi} Q$.
Then:

$\map P \xi = \map Q \xi \cdot 0 = 0$

Conversely, let $\map P \xi = 0$.
By the Division Theorem for Polynomial Forms over Field, there exist polynomials $Q$ and $R$ such that:

$P = \map Q {x - \xi} + R$
and:

$\map \deg R < \map \deg {x - \xi} = 1$
Evaluating at $\xi$ we have:

$0 = \map P \xi = \map R \xi$
But:

$\deg R = 0$
so:

$R \in K$
In particular:

$R = 0$
Thus:

$P = \map Q {x - \xi}$
as required.

The fact that $\map \deg Q = n - 1$ follows from:

Ring of Polynomial Forms is Integral Domain
and:

Degree of Product of Polynomials over Integral Domain.

We can then apply this result to:

$\map P {\xi_1} = \map P {\xi_2} = \dotsb = \map P {\xi_n} = 0$
We can progressively work through:

$\map P x = \paren {x - \xi_1} \map {Q_{n - 1} } x$
where $\map {Q_{n - 1} } x$ is a polynomial of order $n - 1$.
Then, substituting $\xi_2$ for $x$:

$0 = \map P {\xi_2} = \paren {\xi_2 - \xi_1} \map {Q_{n - 1} } x$
Since $\xi_2 \ne \xi_1$:

$\map {Q_{n - 1} } {\xi_2} = 0$
and we can apply the above result again:

$\map {Q_{n - 1} } x = \paren {x - \xi_2} \map {Q_{n - 2} } x$
Thus:

$\map P x = \paren {x - \xi_1} \paren {x - \xi_2} \map {Q_{n - 2} } x$
and we then move on to consider $\xi_3$.
Eventually we reach:

$\map P x = \paren {x - \xi_1} \paren {x - \xi_2} \dotsm \paren {x - \xi_n} \map {Q_0} x$
$\map {Q_0} x$ is a polynomial of zero degree, that is a constant polynomial.
The result follows.
$\blacksquare$


Also known as
Some sources refer to the Polynomial Factor Theorem (and its variants) as the Factor Theorem, but there are multiple theorems with this name.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $24$




