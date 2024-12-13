# 

Source: https://proofwiki.org/wiki/P-adic_Number_is_Limit_of_Unique_P-adic_Expansion

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $x \in \Q_p$.

Then $x$ is the limit of a unique $p$-adic expansion.


Proof
Let $\Z_p$ be the $p$-adic integers.
From P-adic Number times Integer Power of p is P-adic Integer:

$\exists m \in \Z_{\ge 0} : x p^m \in \Z_p$

From P-adic Integer is Limit of Unique P-adic Expansion, there exists a unique $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 0}^n d_i p^i = x p^m$

From Multiple Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 0}^n d_i p^{i - m} = x$
Re-indexing from $-m$:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = -m}^n d_i' p^i = x$
where:

$\forall i \in \Z_{\ge -m} : d_i' = d_{i + m}$
Then the $p$-adic expansion $\ds \sum_{n \mathop = -m}^\infty d_n' p^n$ converges to $x$.

Let $\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = -m}^n e_i p^i = x$.
From Multiple Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = -m}^n e_i p^{i + m} = x p^m$
Re-indexing from $0$:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 0}^n e_i' p^i = x p^m$
where:

$\forall i \in \Z_{\ge -m} : e_i' = e_{i - m}$
From P-adic Integer is Limit of Unique P-adic Expansion:

$\forall i \in \Z_{\ge 0} : e_i' = d_i$
Re-indexing from $-m$:

$\forall i \in \Z_{\ge -m} : e_i = d_i'$

Hence $\ds \sum_{n \mathop = -m}^\infty d_n' p^n$ is the unique $p$-adic expansion that converges to $x$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Corollary $3.3.12$




