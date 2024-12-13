# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$ such that $\norm a _p \le 1$.

Then $a$ has exactly one representative that is a coherent sequence.


Corollary
Then $a$ has exactly one representative that is a $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$


Proof
Let $\sequence{\beta_n}$ be a sequence representing $a$.
That is, $\sequence{\beta_n}$ is a Cauchy sequence in the $p$-adic norm $\norm{\,\cdot\,}_p$ on the rational numbers $\Q$.

By definition of a Cauchy sequence:

$\forall j \in \N : \exists \mathop {\map M j} \in \N: \forall m, n \in \N: m, n \ge \map M j : \norm {x_n - x_m} < p^{-j}$
For all $j \in \N$, let:

$\map N j = \max \set{j, \map M j}$
From P-adic Norm of p-adic Number is Power of p,

$\forall j \in \N : \exists \mathop {\map N j} \ge j : \forall m, n \in \N: m, n \ge \map N j : \norm {\beta_n - \beta_m} \le p^{-\paren{j + 1}}$


Lemma 1
$\forall j \in \N: \norm {\beta_{\map N {j + 1} } - \beta_{\map N j} }_p \le p^{-\paren {j + 1} }$

$\Box$

From Unique Integer Close to Rational in Valuation Ring of P-adic Norm:

for all $j \in \N$ there exists $\alpha_j \in \Z$:
$(1): \quad \norm{\beta_{\map N j} - \alpha_j}_p \le p^{-\paren{j + 1}}$
$(2): \quad  0 \le \alpha_j \le p^{j + 1} - 1$


Lemma 2
$\forall j \in \N: \norm {\alpha_{j + 1} - \alpha_j }_p \le p^{-\paren {j + 1} }$

$\Box$

By definition of the $p$-adic norm,

$\forall j \in \N : \alpha_{j + 1} \equiv \alpha_j \pmod {p^{j + 1}}$
Then $\sequence{\alpha_j}$ is a coherent sequence by definition. 
From Sequence of Consecutive Integers Modulo Power of p is Cauchy in P-adic Norm:

$\sequence{\alpha_j}$ is a Cauchy sequence.


Lemma 3
$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are representatives of the same $p$-adic number in $\Q_p$.

$\Box$

Then $\sequence{\alpha_j}$ is a representative of $a$.


Lemma 4
$\sequence {\alpha_j}$ is the only coherent sequence that represents $a$.

$\blacksquare$


Also see
Coherent Sequence Converges to P-adic Integer
P-adic Integer has Unique P-adic Expansion Representative
P-adic Number has Unique P-adic Expansion Representative


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Lemma $1.30$




