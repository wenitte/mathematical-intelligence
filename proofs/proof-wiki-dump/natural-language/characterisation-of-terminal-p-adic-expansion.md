# 

Source: https://proofwiki.org/wiki/Characterisation_of_Terminal_P-adic_Expansion



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x \in \Q_p$.

Then:

the $p$-adic expansion of $x$ terminates
if and only if 

$\exists a \in \N : \exists k \in \Z : x = \dfrac a {p^k}$


Proof
Necessary Condition
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
$\Box$

Sufficient Condition
From Basis Representation Theorem, $a$ can be expressed uniquely in the form:

$\ds a = \sum_{j \mathop = 0}^n d_j p^j$
where:

$n$ is such that $p^n \le a < p^{n + 1}$
all the $d_j$ are such that $0 \le d_j < p$.

We have:














\(\ds x\)

\(=\)







\(\ds \dfrac a {p^k}\)





Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{j \mathop = 0}^n d_j p^j} {p^k}\)





Replacing $a$ with base $p$ expression














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n d_j p^{j - k}\)





Dividing each term by $p^k$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = -k}^{n-k} d_{i+ k} p^i\)





Re-indexing with $i = j - k$




Let:

$m = \begin{cases}
-k & : -k \le 0\\
0 & : 0 < -k 
\end{cases}$

For each $i : m \le i \le n-k$, let:

$e_i = \begin{cases}
d_{i + k} & : -k \le i \le n-k\\
0 & : m \le i < -k
\end{cases}$

For each $i > n-k$, let:

$e_i = 0$

Then:

$x = \ds \sum_{i \mathop = m}^\infty e_i p^i$
where:

$\forall i \ge m: 0 \le e_i < p$
$\forall i > n-k: e_i = 0$

Hence $\ds \sum_{i \mathop = m}^\infty e_i p^i$ is a terminal $p$-adic expansion by definition.
From P-adic Expansion Representative of P-adic Number is Unique, the $p$-adic expansion of $x$ is:

$x = \ds \sum_{i \mathop = m}^\infty e_i p^i$
$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.6$ The $p$-adic expansion of rational numbers: Exercise $34$




