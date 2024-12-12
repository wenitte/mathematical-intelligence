# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers/Union_of_Closed_Balls

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$, let $\map { {B_\epsilon}^-} a$ denote the closed $\epsilon$-ball of $a$. 
Let $n, m \in Z$, such that $n < m$.

Then:

$\map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n}} - 1} \map {B^-_{p^{-m} } } {a + i p^{\paren {m - n} } }$


Proof
Lemma
$\forall y \in \Q_p: \norm y_p \le p^{-n}$ if and only if there exists $i \in \Z$ such that:
$(1)\quad 0 \le i \le p^{\paren {m - n}} - 1$
$(2)\quad \norm {y - i p^n}_p \le p^{-m}$
$\Box$

Let $0 \le i \le p^{\paren{m - n}} - 1$.
Let $x \in \map {B^{\,-}_{p^{-m} } } {a + i p^{-n} }$
By definition of a closed ball:

$\norm {x - a - i p^{-n} } \le p^{-m}$
From Lemma:

$\norm {x - a}_p \le p^{-n}$
By definition of a closed ball:

$x \in \map {B^-_{p^{-n} } } a$
Since $x$ was arbitrary:

$\map {B^-_{p^{-m} } } {a + i p^{-n} } \subseteq \map {B^-_{p^{-n} } } a$
Since $i$ was arbitrary: 

$\ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n}} - 1} \map {B^-_{p^{-m} } } {a + i p^{-n} } \subseteq \map {B^-_{p^{-n} } } a$

Let $x \in \map {B^-_{p^{-n} } } a$.
By definition of a closed ball:

$\norm {x - a}_p \le p^{-n}$
From Lemma:

$\exists i \in \N : 0 \le i \le p^{\paren {m - n}} - 1: \norm {x - a - i p^{-n} } \le p^{-m}$
By definition of a closed ball:

$\exists i \in \N : 0 \le i \le p^{\paren {m - n}} - 1 : x \in \map {B^-_{p^{-m} } } {a + i p^{-n} }$
Hence:

$\map {B^-_{p^{-n} } } a \subseteq \ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n}} - 1} \map {B^-_{p^{-m} } } {a + i p^{-n} }$

It follows that:

$\map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n}} - 1} \map {B^-_{p^{-m} } } {a + i p^{-n} }$
$\blacksquare$





