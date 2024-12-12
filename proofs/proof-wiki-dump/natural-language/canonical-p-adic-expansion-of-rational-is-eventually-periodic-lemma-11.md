# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_11


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $p$ be a prime number.
Let $a \in \Z, b \in Z_{> 0}$
Let:

$\forall n \in \N: \exists r_n \in \Z : \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b} \in \set{0, 1, \ldots, p^{n + 1} - 1}$

Then:

$\forall n \in \N : \dfrac {a - \paren {p^{n + 1} - 1} b } {p^{n + 1} } \le r_n \le \dfrac a {p^{n + 1} }$


Proof
We have:














\(\ds 0\)

\(\le\)

\(\, \ds \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b} \, \)

\(\, \ds \le \, \)



\(\ds p^{n + 1} - 1\)














\(\ds \leadsto \ \ \)





\(\ds -\paren {p^{n + 1} - 1}\)

\(\le\)

\(\, \ds \paren{p^{n + 1} \dfrac {r_n} b} - \dfrac a b \, \)

\(\, \ds \le \, \)



\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\paren {p^{n + 1} - 1} b\)

\(\le\)

\(\, \ds p^{n + 1} r_n - a \, \)

\(\, \ds \le \, \)



\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds a - \paren {p^{n + 1} - 1} b\)

\(\le\)

\(\, \ds p^{n + 1} r_n \, \)

\(\, \ds \le \, \)



\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - \paren {p^{n + 1} - 1} b} {p^{n + 1} }\)

\(\le\)

\(\, \ds r_n \, \)

\(\, \ds \le \, \)



\(\ds \dfrac a {p^{n + 1} }\)









The result follows.
$\blacksquare$





