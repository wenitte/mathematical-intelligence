# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_not_Closed_Set

Theorem
Let $\R$ be the real number line with the usual (Euclidean) metric.
Let $I = \openint a b$ be an open real interval.

Then $I$ is not a closed set of $\R$.


Corollary
Let:

$I_a = \openint \gets a$
$I_b = \openint b \to$
be unbounded open real intervals.

Then neither $I_a$ nor $I_b$ are closed sets of $\R$.


Proof
Consider the relative complement of $I$ in $\R$:

$J = \relcomp \R I = \R \setminus I = \hointl \gets a \cup \hointr b \to$
Let $\epsilon \in \R_{>0}$.
Consider the open $\epsilon$-ball $\map {B_\epsilon} a$.
Whatever the value of $\epsilon$ is, $a + \epsilon$ is not in $\map {B_\epsilon} a$.
So, by definition, $J$ is not an open set of $\R$.
By Relative Complement of Relative Complement, $\relcomp \R J = I$.
By definition, it follows that $I$ is not a closed set of $\R$.
$\blacksquare$





