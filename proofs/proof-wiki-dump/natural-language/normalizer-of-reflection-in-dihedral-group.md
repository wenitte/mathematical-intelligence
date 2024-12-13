# 

Source: https://proofwiki.org/wiki/Normalizer_of_Reflection_in_Dihedral_Group

Theorem
Let $n \in \N$ be a natural number such that $n \ge 3$.
Let $D_n$ be the dihedral group of order $2 n$, given by:

$D_n = \gen {\alpha, \beta: \alpha^n = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$

Let $\map {N_{D_n} } {\set \beta}$ denote the normalizer of the singleton containing the reflection element $\beta$.

Then:

$\map {N_{D_n} } {\set \beta} = \begin{cases} \set {e, \beta} & : n \text { odd} \\ \set {e, \beta, \alpha^{n / 2}, \alpha^{n / 2} \beta} & : n \text { even} \end{cases}$


Proof
By definition, the normalizer of $\set \beta$ is:

$\map {N_{D_n} } {\set \beta} := \set {g \in D_n: g \set \beta g^{-1} = \set \beta}$
That is:

$\map {N_{D_n} } {\set \beta} := \set {g \in D_n: g \beta = \beta g}$

First let $g = \beta^k$ for $k \in \set {0, 1}$.
Then:

$\beta \beta^k = \beta^k \beta$
Thus:

$\forall k \in \set {0, 1}: \beta^k \in \map {N_{D_n} } {\set \beta}$

Now let $g = \alpha^j \beta^k$ for $0 < j < n, k \in \set {0, 1}$.
Suppose $g \alpha = \alpha g$.
Then:














\(\ds \alpha^j \beta^k \beta\)

\(=\)







\(\ds \beta \alpha^j \beta^k\)














\(\ds \leadsto \ \ \)





\(\ds \alpha^j \beta \beta^k\)

\(=\)







\(\ds \beta \alpha^j \beta^k\)














\(\ds \leadsto \ \ \)





\(\ds \alpha^j \beta\)

\(=\)







\(\ds \beta \alpha^j\)





Cancellation Laws








\(\ds \leadsto \ \ \)





\(\ds \alpha^j \beta\)

\(=\)







\(\ds \alpha^{n - j} \beta\)





Product of Generating Elements of Dihedral Group








\(\ds \leadsto \ \ \)





\(\ds \alpha^j\)

\(=\)







\(\ds \alpha^{n - j}\)














\(\ds \leadsto \ \ \)





\(\ds \alpha^2 j\)

\(=\)







\(\ds \alpha^n\)














\(\ds \leadsto \ \ \)





\(\ds 2 j\)

\(=\)







\(\ds n\)









Thus when $n$ is odd, there is no such $j$ such that $\alpha^j \beta \in \map {N_{D_n} } {\set \beta}$.
But when $n$ is even such that $n = 2 j$, we have that $\alpha^j \beta \in \map {N_{D_n} } {\set \beta}$.

Hence the result.
$\blacksquare$





