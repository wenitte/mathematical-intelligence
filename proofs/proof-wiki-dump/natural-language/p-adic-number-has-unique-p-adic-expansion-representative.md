# 

Source: https://proofwiki.org/wiki/P-adic_Number_has_Unique_P-adic_Expansion_Representative



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$.

Then $a$ has exactly one representative that is a $p$-adic expansion.


Proof
Case 1
Let $\norm a_p \le 1$.
From P-adic Integer has Unique P-adic Expansion Representative, $a$ has exactly one representative that is a $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
$\Box$


Case 2
Let $\norm a_p > 1$.

From P-adic Number times P-adic Norm is P-adic Unit,

$\exists m \in \Z: p^m a \in \Z_p^\times$
where $\Z_p^\times$ denotes the $p$-adic units.
By definition a $p$-adic unit is a $p$-adic integer.

From P-adic Integer has Unique P-adic Expansion Representative:

$p^m a$ has exactly one representative that is a $p$-adic expansion of the form:
$\ds \sum_{n \mathop = 0}^\infty d_n p^n$

From P-adic Unit has Norm Equal to One:

$\norm {p^m a}_p = 1 = p^0$
From P-adic Norm of P-adic Expansion is determined by First Nonzero Coefficient:

$d_0 \neq 0$

Let $\sequence{x_n}$ be a representative of $a \in \Q_p$.
From Rational Numbers are Dense Subfield of P-adic Numbers: 

the constant sequence $\tuple {p^m, p^m, p^m, \dotsc}$ represents $p^m \in \Q_p$.
By definition of the product in a quotient ring:

the Cauchy sequence $\sequence{p^m x_n}$ is a representative of $p^m a \in \Q_p$.

From Representatives of same P-adic Number iff Difference is Null Sequence:

$\sequence {p^m x_n - \ds \sum_{i \mathop = 0}^n d_i p^i}$ is a null sequence
From Multiple Rule for Cauchy Sequences in Normed Division Ring:

$\sequence {x_n - \ds p^{-m} \sum_{i \mathop = 0}^n d_i p^i}$ is a null sequence
From Representatives of same P-adic Number iff Difference is Null Sequence:

$\sequence {\ds p^{-m} \sum_{i \mathop = 0}^\infty d_i p^i}$ is a representative of $a$.

That is:

$\ds \sum_{i \mathop = -m}^\infty e_i p^i$ is a representative of $a$
where:

$\forall i \ge -m: e_i = d_{i + m}$
By definition of a $p$-adic expansion;

$\forall i \ge 0: 0 \le d_i < p$
Then:

$\forall i \ge -m: 0 \le e_i = d_{i + m} < p$
Since $d_0 \neq 0$, then $e_{-m} = d_0 \neq 0$.
By definition of a $p$-adic expansion;

$\ds \sum_{i \mathop = -m}^\infty e_i p^i$ is a $p$-adic expansion that represents $a$
From P-adic Expansion Representative of P-adic Number is Unique:

$\ds \sum_{i \mathop = -m}^\infty e_i p^i$ is the only $p$-adic expansion that represents $a$
$\blacksquare$


Also see
P-adic Number is Limit of Unique P-adic Expansion
P-adic Integer has Unique Coherent Sequence Representative
P-adic Integer has Unique P-adic Expansion Representative


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$




