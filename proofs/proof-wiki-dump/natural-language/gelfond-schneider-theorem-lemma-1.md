# 

Source: https://proofwiki.org/wiki/Gelfond-Schneider_Theorem/Lemma_1


Work In ProgressIn particular: Links to Polynomial related results need to be resolved.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Lemma
Let $\map {a_1} t, \ldots, \map {a_n} t$ be non-zero polynomials in $\R \sqbrk t$ of degrees $d_1, \ldots, d_n$ respectively.
Let $w_1, \ldots, w_n$ be pairwise distinct real numbers.

Then:

$\ds \map F t = \sum_{j \mathop = 1}^n \map {a_j} t e^{w_j t}$
has at most $d_1 + \cdots + d_n + n − 1$ real roots (counting multiplicities).


Proof
By multiplying through by $e^{−w_n t}$ if necessary, we may suppose that $w_n = 0$ and that otherwise $w_j \ne 0$.
Let $k = d_1 + \cdots + d_n + n$.
We use strong induction on $k$.
If $k = 1$, then $n = 1$ and $d_1 = 0$, and the lemma easily follows.
Let $l \ge 2$ be such that the lemma holds whenever $k < l$.
Suppose $k = l$.
Let $N$ be the number of real roots of $\map F t$.
By Rolle's Theorem, the number of real roots of $\map {F'} t$ is at least $N − 1$.
On the other hand:

$\ds \map {F'} t = \sum_{j \mathop = 1}^n \map {b_j} t e^{w_j t}$
where:

$\map {b_j} t = \map { {a_j}'} t + w_j \map {a_j} t$
Note that for $1 \le j \le n − 1$, we have that $\map {b_j} t$ has degree exactly $d_j$.
Also, since $w_n = 0$, either:

there are only $n − 1$ non-zero polynomials $\map {b_j} t$ in the expression for $\map {F'} t$ above
or:

there are $n$ such polynomials and the degree of $\map {b_n} t$ is one less than the degree of $\map {a_n} t$.
It follows from the induction hypothesis that $\map {F'} t$ has at most $d_1 + \cdots + d_n + n − 2$ real roots.
Hence:

$N − 1 \le d_1 + \cdots + d_n + n − 2$
and the result follows.
$\blacksquare$





