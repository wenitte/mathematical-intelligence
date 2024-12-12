# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$, let $\map { {B_\epsilon}^-} a$ denote the closed $\epsilon$-ball of $a$. 
Let $n, m \in Z$, such that $n < m$.

Then:

$(1) \quad \map {B^-_{p^{-n} } } a = \ds \bigcup_{i \mathop = 0}^{p^{\paren {m - n} } - 1} \map {B^-_{p^{-m} } } {a + i p^n}$
$(2) \quad \set {\map {B^-_{p^{-m} } } {a + i p^n} : i = 0, \dots, p^{\paren {m - n} } - 1}$ is a set of pairwise disjoint closed balls


Proof
Condition $(1)$
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
$\Box$


Condition $(2)$
Let $0 \le i, j \le p^{\paren {m - n}} - 1$.
Let $x \in \map {B^-_{p^{-m} } } {a + i p^n} \cap \map {B^-_{p^{-m} } } {a + j p^n}$
From Characterization of Open Ball in P-adic Numbers:

$\norm {\paren {x -a} - i p^n}_p \le p^{-m}$
and:

$\norm {\paren {x -a} - j p^n}_p \le p^{-m}$

We have that P-adic Norm satisfies Non-Archimedean Norm Axioms.
Then:














\(\ds \norm {i p^n - j p^n}_p\)

\(\le\)







\(\ds p^{-m}\)





Corollary to P-adic Metric on P-adic Numbers is Non-Archimedean Metric








\(\ds \leadsto \ \ \)





\(\ds \norm {p^n}_p \norm {i - j}_p\)

\(\le\)







\(\ds p^{-m}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadsto \ \ \)





\(\ds p^{-n} \norm {i - j}_p\)

\(\le\)







\(\ds p^{-m}\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds \norm {i - j}_p\)

\(\le\)







\(\ds p^{n - m}\)





multiplying both sides by $p^n$.








\(\ds \leadsto \ \ \)





\(\ds p^{\paren {m - n} }\)

\(\divides\)







\(\ds \paren {i - j}\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds j\)

\(\equiv\)







\(\ds i \mod p^{\paren {m - n} }\)





Definition of Congruence Modulo $p$








\(\ds \leadsto \ \ \)





\(\ds i\)

\(=\)







\(\ds j\)





Integer is Congruent to Integer less than Modulus








\(\ds \leadsto \ \ \)





\(\ds \map {B^-_{p^{-m} } } {a + i p^n}\)

\(=\)







\(\ds \map {B^-_{p^{-m} } } {a + j p^n}\)









The result follows.
$\blacksquare$





