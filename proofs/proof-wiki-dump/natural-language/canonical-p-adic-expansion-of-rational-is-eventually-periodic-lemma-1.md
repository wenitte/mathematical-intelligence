# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $p$ be a prime number.
Let $b \in \Z_{>0}$ such that $b$ and $p$ are coprime.
Let $a \in \Z$.

Then:

$\forall n \in \N: \exists r_n \in \Z : \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b} \in \set{0, 1, \ldots, p^{n + 1} - 1}$


Proof
Let $n \in \N$.
From Integer Coprime to all Factors is Coprime to Whole:

$b, p^{n + 1}$ are coprime
From Integer Combination of Coprime Integers:

$\exists c_n, d_n \in \Z : c_n b + d_n p^{n + 1} = 1$
Multiplying both sides by $a$:

$a = a c_n b + a d_n p^{n + 1}$
Let $A_n$ be the least positive residue of $a c_n \pmod {p^{n + 1} }$.

By definition of least positive residue:

$0 \le A_n \le p^{n + 1} - 1$
$p^{n + 1} \divides \paren{a c_n - A_n}$
By definition of divisor: 

$\exists x_n \in \Z : x_n p^{n + 1} = a c_n - A_n$
Re-arranging terms:

$a c_n = x_n p^{n + 1} + A_n$

We have:














\(\ds a\)

\(=\)







\(\ds \paren {x_n p^{n + 1} + A_n} b + a d_n p^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds A_n b + \paren {b x_n + a d_n} p^{n + 1}\)





Rearranging terms




Let $r_n = b x_n + a d_n$.
Then:














\(\ds a\)

\(=\)







\(\ds A_n b + r_n p^{n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac a b\)

\(=\)







\(\ds A_n + p^{n + 1} \dfrac {r_n} b\)





dividing both sides by $b$








\(\ds \leadsto \ \ \)





\(\ds A_n\)

\(=\)







\(\ds \dfrac a b - \paren{p^{n + 1} \dfrac {r_n} b}\)





rearranging terms




By definition of least positive residue:

$A_n \in \set{0, 1, \ldots, p^{n + 1} - 1}$
The result follows.
$\blacksquare$





