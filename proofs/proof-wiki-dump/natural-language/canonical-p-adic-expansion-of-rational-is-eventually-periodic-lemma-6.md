# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_6

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $x \in \Q_p$.
Let the canonical expansion of $x$ be eventually periodic.

Then:

$\exists r \in \Q, n \in \Z, y \in \Z_p$:
$(1) \quad x = r + p^n y$
$(2) \quad$ the canonical expansion of $y$ is periodic.


Proof
Let $\ldots d_i \ldots d_2 d_1 d_0 . d_{-1} d_{-2} \ldots d_{-m}$ be the canonical expansion of $x$.

By definition of eventually periodic there exists a finite sequence of $k$ digits of $x$:

$\tuple {d_{n + k - 1} \ldots d_{n + 1} d_n }$
such that $n \ge 0$ and for all $s \in \Z_{\ge 0}$ and for all $j \in \set {0, 2, \ldots, k - 1}$:

$d_{n + j + s k} = d_{n + j}$
where $k$ is the smallest $k$ to have this property.

We have:














\(\ds x\)

\(=\)







\(\ds \sum_{i \mathop = -m}^\infty d_i p^i\)





Definition of Canonical P-adic Expansion














\(\ds \)

\(=\)







\(\ds \begin{cases}
\ds 0 + \paren {\sum_{i \mathop = n}^\infty d_i p^i } & : -m = n \\
\ds \paren {\sum_{i \mathop = -m}^{n - 1} d_i p^i} + \paren {\sum_{i \mathop = n}^\infty d_i p^i } & : -m < n 
\end{cases}\)






as $-m \le n$














\(\ds \)

\(=\)







\(\ds \begin{cases}
\ds 0 + p^n \paren {\sum_{i \mathop = n}^\infty d_i p^{i - n} } & : -m = n \\
\ds \paren {\sum_{i \mathop = -m}^{n - 1} d_i p^i} + p^n \paren {\sum_{i \mathop = n}^\infty d_i p^{i - n} } & : -m < n 
\end{cases}\)






extracting common $p^n$ factor from each term




Let:

$\ds r = \begin{cases}
0 & : -m = n \\
\ds \sum_{i \mathop = -m}^{n - 1} d_i p^i & : -m < n 
\end{cases}$

$\ds y = \sum_{i \mathop = n}^\infty d_i p^{i - n}$
Then:

$x = r + p^n y$

We have by hypothesisthat:

$r \in \Q$

Re-indexing the series for $y$, we have:

$\ds y = \sum_{i \mathop = 0}^\infty d_{i + n} p^i$
By definition of $p$-adic integer:

$y \in \Z_p$

By definition of canonical expansion, the canonical expansion of $y$ is:

$\ldots d_{n + i} \ldots d_{n + 2} d_{n + 1} d_n$
Recall that for all $s \in \Z_{\ge 0}$ and for all $j \in \set {0, 2, \ldots, k - 1}$:

$d_{n + j + s k} = d_{n + j}$
By definition of periodic:

the canonical expansion of $y$ is periodic
$\blacksquare$





