# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_8

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $\map F X \in \Z_p \sqbrk X$ be a polynomial.
Let $\map {F'} X$ be the (formal) derivative of $F$.
Let $k \in \N_{>0}$.
Then:

$x, y \in \Z_p \implies \map F {x + y p ^k} \equiv \map F x + y p^k \map {F'} x \pmod {p^{k+1}\Z_p}$


Proof
Let $\map F X = \ds \sum_{j \mathop = 0}^r c_j X^j$ where $X$ is the indeterminate and $c_0, c_1, \ldots, c_r \in \Z_p$.
Then:

$\map {F'} X = \ds \sum_{j \mathop = 1}^r j c_j X^j$
We have:














\(\ds \map F {x + yp^k}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^r c_j \paren{x + yp^k}^j\)





Definition of $\map F X$














\(\ds \)

\(=\)







\(\ds c_0 + \sum_{j \mathop = 1}^r c_j \paren{x^j + jx^{j-1}yp^k + \text{terms divisible by } p^{k+1} }\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds c_0 + \sum_{j \mathop = 1}^r c_j x^j + \sum_{j \mathop = 1}^r j c_j x^{j-1}yp^k + \text{terms divisible by } p^{k+1}\)





Rearrange terms














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r c_j x^j + \sum_{j \mathop = 1}^r j c_j x^{j-1}yp^k + \text{terms divisible by } p^{k+1}\)





Combine first term with first sum














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r c_j x^j + yp^k \sum_{j \mathop = 1}^r j c_j x^{j-1} + \text{terms divisible by } p^{k+1}\)





Extract common factor $yp^k$ from second sum














\(\ds \)

\(=\)







\(\ds \map F x + y p^k \map {F'} x + \text{terms divisible by } p^{k+1}\)





Definitions of $\map F X$ and $\map {F'} X$














\(\ds \)

\(\equiv\)







\(\ds \map F x + y p^k \map {F'} a  \pmod{ p^{k+1}\Z_p}\)





Definition of congruence modulo an ideal



$\blacksquare$





