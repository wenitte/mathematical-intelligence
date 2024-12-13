# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_7

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $T$ be the set of $p$-adic digits.
Let $k \in \N_{>0}$.

Then:

$x \in \Z_p \implies \exists y \in T : y p^k \equiv x p^k \pmod {p^{k+1}\Z_p}$


Proof
Let $x \in \Z_p$.
From P-adic Integer is Limit of Unique P-adic Expansion, let:

$x = \ds \sum_{n \mathop = 0}^\infty d_n p^n$

We have:














\(\ds x - d_0\)

\(=\)







\(\ds \paren{d_0 + d_1p + d_2p^2 + d_3p^3 + \ldots } - d_0\)




















\(\ds \)

\(=\)







\(\ds \paren{d_1p + d_2p^2 + d_3p^3 + \ldots }\)





$d_0$ terms cancel














\(\ds \)

\(=\)







\(\ds p \paren{d_1 + d_2p + d_3p^2 + \ldots }\)





Factor $p$ from each term














\(\ds \)

\(\in\)







\(\ds p\Z_p\)





$d_1 + d_2p + d_3p^2 + \ldots$ is the $p$-adic expansion of a $p$-adic integer








\(\ds \leadsto \ \ \)





\(\ds xp^k - d_0p^k\)

\(=\)







\(\ds \paren{x - d_0}p^k\)




















\(\ds \)

\(\in\)







\(\ds p^{k+1}\Z_p\)














\(\ds \leadsto \ \ \)





\(\ds xp^k\)

\(\equiv\)







\(\ds d_0p^k \pmod {p^{k+1}\Z_p}\)





Definition of Congruence Modulo an Ideal




Let $y = d_0$.
The result follows.
$\blacksquare$





