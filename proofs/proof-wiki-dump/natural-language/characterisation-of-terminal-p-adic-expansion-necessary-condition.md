# 

Source: https://proofwiki.org/wiki/Characterisation_of_Terminal_P-adic_Expansion/Necessary_Condition

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x \in \Q_p$.
Let the $p$-adic expansion of $x$ terminate.

Then:

$\exists a \in \N : \exists k \in \Z : x = \dfrac a {p^k}$
Proof
Let the $p$-adic expansion of $x$ be:

$x = \ds \sum_{n \mathop = m}^\infty d_n p^n$
where:

$m \in \Z_{\le 0}$
$\forall n \in \Z_{\ge m}: d_n$ is a $p$-adic digit
$m < 0 \implies d_m \ne 0$

By the definition of terminates:

$\exists n_0 \in \N : n_0 \ge m : \forall n \ge n_0 : d_n = 0$

We have:














\(\ds x\)

\(=\)







\(\ds \sum_{n \mathop = m}^{n_0} d_n p^n\)





All trailing terms are $0$














\(\ds \)

\(=\)







\(\ds p^m \paren{\sum_{n \mathop = m}^{n_0} d_n p^{n - m} }\)





Extract common $p^m$ factor from each term














\(\ds \)

\(=\)







\(\ds p^m \paren{\sum_{n \mathop = 0}^{n_0 - m} d_{n + m} p^n }\)





Re-indexing the terms




Let:

$k = -m$
Let:

$a = \ds \sum_{n \mathop = 0}^{n_0 - m} d_{n + m} p^n $
Then:

$x = \dfrac a {p^k}$

The result follows.
$\blacksquare$





