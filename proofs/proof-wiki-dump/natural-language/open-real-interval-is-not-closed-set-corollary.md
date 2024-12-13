# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_not_Closed_Set/Corollary

Theorem
Let $\R$ be the real number line with the usual (Euclidean) metric.
Let $a, b \in \R$.
Let:

$I_a = \openint \gets a$
$I_b = \openint b \to$
be unbounded open real intervals.

Then neither $I_a$ nor $I_b$ are closed sets of $\R$.


Proof
Consider the relative complement of $I_a$ in $\R$:

$J = \relcomp \R I = \R \setminus I = \hointr a \to$
Let $\epsilon \in \R_{>0}$.
Consider the open $\epsilon$-ball $\map {B_\epsilon} a$.
Whatever the value of $\epsilon$ is, $a - \epsilon$ is not in $\map {B_\epsilon} a$.
So, by definition, $J$ is not an open set of $\R$.
By Relative Complement of Relative Complement, $\relcomp \R J = I$.
By definition, it follows that $I_a$ is not a closed set of $\R$.

Mutatis mutandis, the same proof shows that neither is $I_b$ a closed set of $\R$.
$\blacksquare$





