# 

Source: https://proofwiki.org/wiki/Normalizer_of_Rotation_in_Dihedral_Group

Theorem
Let $n \in \N$ be a natural number such that $n \ge 3$.
Let $D_n$ be the dihedral group of order $2 n$, given by:

$D_n = \gen {\alpha, \beta: \alpha^n = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$

Let $\map {N_{D_n} } {\set \alpha}$ denote the normalizer of the singleton containing the rotation element $\alpha$.

Then:

$\map {N_{D_n} } {\set \alpha} = \gen \alpha$
where $\gen \alpha$ is the subgroup generated by $\alpha$.


Proof
By definition, the normalizer of $\set \alpha$ is:

$\map {N_{D_n} } {\set \alpha} := \set {g \in D_n: g \set \alpha g^{-1} = \set \alpha}$
That is:

$\map {N_{D_n} } {\set \alpha} := \set {g \in D_n: g \alpha = \alpha g}$

First let $g = \alpha^k$ for some $k \in \Z$.
Then:

$\alpha \alpha^k = \alpha^k \alpha$
which includes $k = 0$, that is $e$.
Thus:

$\forall k \in \Z: \alpha^k \in \map {N_{D_n} } {\set \alpha}$

Now let $g = \alpha^k \beta$.
Suppose $g \alpha = \alpha g$.
Then:














\(\ds \alpha^k \beta \alpha\)

\(=\)







\(\ds \alpha \alpha^k \beta\)














\(\ds \leadsto \ \ \)





\(\ds \beta \alpha\)

\(=\)







\(\ds \alpha \beta\)





Cancellation Laws



But $\beta \alpha \ne \alpha \beta$ in $D_n$ except for $n < 3$.

Hence the result:

$\map {N_{D_n} } {\set \alpha} = \set {e, \alpha, \alpha^2, \ldots, \alpha^{n - 1} }$
Hence the result, by definition of generator of subgroup.
$\blacksquare$




