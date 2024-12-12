# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Proof_4

Theorem
Let $p$ be a prime number.
Let $n \in \Z_{>0}$ be a positive integer such that $p$ is not a divisor of $n$.

Then:

$n^{p - 1} \equiv 1 \pmod p$


Proof
Proof by induction over $n$.
Induction base:

$1^p \equiv 1 \pmod p$
Induction step:
Assume $n^p \equiv n \pmod p$














\(\ds \paren {n + 1}^p\)

\(=\)







\(\ds \sum_{k \mathop = 0}^p {p \choose k} n^{p - k} \cdot 1^k\)





Binomial Theorem










\(\ds \forall k: 0 < k < p: \, \)



\(\ds {p \choose k}\)

\(\equiv\)







\(\ds 0 \pmod p\)





Binomial Coefficient of Prime



and so:














\(\ds \sum_{k \mathop = 0}^p {p \choose k} n^{p - k}\)

\(\equiv\)







\(\ds n^p + n^0 \pmod p\)




















\(\ds \)

\(\equiv\)







\(\ds n^p + 1 \pmod p\)




















\(\ds \)

\(\equiv\)







\(\ds n + 1 \pmod p\)





Induction Step



Dividing by $n$:

$\forall n: n^p \equiv n \pmod p \implies n^{p - 1} \equiv 1 \pmod p$
$\blacksquare$





