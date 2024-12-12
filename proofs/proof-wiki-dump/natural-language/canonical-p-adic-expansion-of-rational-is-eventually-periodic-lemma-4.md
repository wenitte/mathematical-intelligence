# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_4

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $y $ be a rational $p$-adic integer.
Let $\ldots d_n \ldots d_2 d_1 d_0$ be the canonical expansion of $y$.
Let:

$y = \dfrac a b : a \in \Z, b \in Z_{> 0}$
Let:

$\forall n \in \N: \exists A_n, r_n \in \Z$:
$(\text a) \quad \dfrac a b = A_n + p^{n + 1} \dfrac {r_n} b$
$(\text b) \quad 0 \le A_n \le p^{n + 1} - 1$
$(\text c) \quad \ds \lim_{n \mathop \to \infty} A_n = \dfrac a b$

Then:

$\forall n \in \N: r_n = d_{n + 1} b + p r_{n + 1}$


Proof
We have:










\(\ds \forall n \in \N: \, \)



\(\ds \dfrac a b\)

\(=\)







\(\ds A_n + p^{n + 1} \dfrac {r_n} b\)





by hypothesis














\(\ds \)

\(=\)







\(\ds A_{n + 1} + p^{n + 2} \dfrac {r_{n + 1} } b\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds A_{n + 1} + p^{n + 2} \dfrac {r_{n + 1} } b\)

\(=\)







\(\ds A_n + p^{n + 1} \dfrac {r_n} b\)














\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds A_{n + 1} - A_n\)

\(=\)







\(\ds p^{n + 1} \paren {\dfrac {r_n - p r_{n + 1} } b}\)





rearranging terms








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds b \paren {A_{n + 1} - A_n}\)

\(=\)







\(\ds p^{n + 1} \paren {r_n - p r_{n + 1} }\)





rearranging terms








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds b\)

\(\divides\)







\(\ds p^{n + 1} \paren {r_n - p r_{n + 1} }\)










From Characterization of Rational P-adic Integer:

$p \nmid b$
From Prime not Divisor implies Coprime:

$b, p$ are coprime
From Integer Coprime to all Factors is Coprime to Whole:

$b, p^{n+1}$ are coprime
Hence:
$b \nmid p^{n + 1}$

From Euclid's Lemma:

$b \divides \paren {r_n - p r_{n + 1} }$
Then:

$\dfrac {r_n - p r_{n + 1} } b \in \Z$
Hence:

$A_{n + 1} \equiv A_n \pmod {p^{n + 1} }$

By definition of coherent sequence:

the sequence $\sequence{A_n}$ is a coherent sequence
From Coherent Sequence is Partial Sum of P-adic Expansion:

the sequence $\sequence{A_n}$ is the sequence of partial sums of a $p$-adic expansion $\ds \sum_{i \mathop = 0}^n e_i p^i$
Hence:

$y = \dfrac a b = \ds \sum_{n \mathop = 0}^\infty e_n p^n$
From P-adic Number is Limit of Unique P-adic Expansion:

$\forall n \in \N: e_n = d_n$
By definition of partial sums:

$\forall n \in \N: A_{n + 1} = A_n + d_{n + 1} p^{n + 1}$

Hence:










\(\ds \forall n \in \N: \, \)



\(\ds d_{n + 1} p^{n + 1}\)

\(=\)







\(\ds A_{n + 1} - A_n\)




















\(\ds \)

\(=\)







\(\ds p^{n + 1} \paren {\dfrac {r_n - p r_{n + 1} } b}\)





a priori








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds d_{n + 1}\)

\(=\)







\(\ds \paren {\dfrac {r_n - p r_{n + 1} } b}\)





dividing both sides by $p^{n + 1}$








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N: \, \)



\(\ds r_n\)

\(=\)







\(\ds d_{n + 1} b + p r_{n + 1}\)





rearranging terms



$\blacksquare$





