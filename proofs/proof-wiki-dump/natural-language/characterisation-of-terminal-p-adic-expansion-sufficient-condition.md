# 

Source: https://proofwiki.org/wiki/Characterisation_of_Terminal_P-adic_Expansion/Sufficient_Condition

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $a \in \N$.
Let $k \in \Z$.
Let $x = \dfrac a {p^k}$.

Then:

the $p$-adic expansion of $x$ terminates
Proof
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





