# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Sums/Finite/Proof

Hölder's Inequality for Finite Sums: Proof
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Let $\GF \in \set {\R, \C}$, that is, $\GF$ represents the set of either the real numbers or the complex numbers.
Let $n \in \N_{>0}$ be a non-zero natural number.
Let $\sequence {x_k}_{1 \mathop \le k \mathop \le n}$ and $\sequence {y_k}_{1 \mathop \le k \mathop \le n}$ be finite sequences in $\GF$.
Then:

$\ds \sum \limits_{k \mathop = 1}^n \size {x_k y_k} \le \paren {\sum_{k \mathop = 1}^n \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \size {y_k}^q}^{1 / q}$
where the summations are finite.


Proof
Let $\sequence {x_k}_{k \mathop \in \N}$ and $\sequence {y_k}_{k \mathop \in \N}$ be infinite sequences in $\GF$ such that:

$\forall m > n: x_m = y_m = 0$
Then we have:














\(\ds \sum \limits_{k \mathop = 1}^n \size {x_k y_k}\)

\(=\)







\(\ds \sum \limits_{k \mathop \in \N} \size {x_k y_k}\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}\)





Hölder's Inequality for Sums














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \size {y_k}^q}^{1 / q}\)





by hypothesis



$\blacksquare$





