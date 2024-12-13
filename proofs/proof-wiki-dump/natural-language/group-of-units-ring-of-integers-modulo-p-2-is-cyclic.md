# 

Source: https://proofwiki.org/wiki/Group_of_Units_Ring_of_Integers_Modulo_p%5E2_is_Cyclic


This article needs to be tidied.In particular: including grammarPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: fair way to goYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $p$ be a prime.
Let $\struct {\Z / p^2 \Z, +, \times}$ be the ring of integers modulo $p^2$.
Let $U = \struct {\paren {\Z / p^2 \Z}^\times, \times}$ denote the group of units of $\struct {\Z / p^2 \Z, +, \times}$.
Then $U$ is cyclic.


Proof
The case $p = 2$ follows from Isomorphism between Group of Units Ring of Integers Modulo $2^n$ and $C_2 \times C_{2^{n - 2} }$.
Next, we suppose $p > 2$.
From Ring of Integers Modulo Prime is Field and Group of Units of Finite Field is Cyclic, $\paren {\Z / p \Z}^\times$ is cyclic.
Let $g \in \Z$ such that $\eqclass g p$ be a generator of $\paren {\Z / p \Z}^\times$.
Let $d$ be the order of $\eqclass g {p^2}$ in $\paren {\Z / p^2 \Z}^\times$.
Then:

$g^d \equiv 1 \pmod {p^2}$
so:

$g^d \equiv 1 \pmod p$
But the order of $\eqclass g p$ in $\paren {\Z / p \Z}^\times$ is $\order {\paren {\Z / p \Z}^\times} = p - 1$, we get




\(\text {(1)}: \quad\)









\(\ds p - 1\)

\(\divides\)







\(\ds d\)









By Lagrange's Theorem




\(\text {(2)}: \quad\)









\(\ds d\)

\(\divides\)







\(\ds \order {\paren {\Z / p^2 \Z}^\times}\)

\(\ds = p \paren {p - 1}\)







If $\eqclass g {p^2}$ generates $\paren {\Z / p^2 \Z}^\times$, then $\paren {\Z / p^2 \Z}^\times$ is cyclic, the proof is done.
If not, then




\(\text {(3)}: \quad\)









\(\ds d\)

\(<\)







\(\ds \order {\paren {\Z / p^2 \Z}^\times}\)

\(\ds p \paren {p - 1}\)







By (1)(2)(3), $d = p - 1$, so




\(\text {(4)}: \quad\)









\(\ds g^{p - 1}\)

\(\equiv\)







\(\ds 1 \pmod {p^2}\)









Consider $g' = g + p$.
Let $d'$ be the order of $\eqclass {g'} {p^2}$ in $\paren {\Z / p^2 \Z}^\times$.
Then:

${g'}^{d'} \equiv 1 \pmod {p^2}$
so

${g'}^{d'} \equiv 1 \pmod p$
Note that $\eqclass {g'} p = \eqclass g p$. Then the order of $\eqclass {g'} p$ in $\paren {\Z / p \Z}^\times$ is $\order {\paren {\Z / p \Z}^\times} = p - 1$, we get




\(\text {(5)}: \quad\)









\(\ds p - 1\)

\(\divides\)







\(\ds d'\)









By Lagrange's Theorem




\(\text {(6)}: \quad\)









\(\ds d'\)

\(\divides\)







\(\ds \order {\paren {\Z / p^2 \Z}^\times}\)

\(\ds = p \paren {p - 1}\)







By binomial expansion:














\(\ds {g'}^{p-1}\)

\(=\)







\(\ds \paren {g + p}^{p - 1}\)




















\(\ds \)

\(=\)







\(\ds g^{p - 1} + \paren {p - 1} p g^{p - 2} + \underbrace {\sum_{k \mathop \ge 2} \binom {p - 1} k p^k g^{p - 1 - k} }_{\text{divisible by } p^2}\)




















\(\ds \)

\(\equiv\)







\(\ds g^{p - 1} + p \paren {p - 1} g^{p - 2} \pmod {p^2}\)




















\(\ds \)

\(\equiv\)







\(\ds 1 + p \paren {p - 1} g^{p - 2} \pmod {p^2}\)





from $(4)$



so:

${g'}^{p - 1} \not \equiv 1 \pmod {p^2}$
Therefore:




\(\text {(7)}: \quad\)









\(\ds d'\)

\(\ne\)







\(\ds p - 1\)









By (5)(6)(7)

$d' = p \paren{p - 1}$
so $\eqclass {g'} {p^2}$ generates $\paren {\Z / p^2 \Z}^\times$, then $\paren {\Z / p^2 \Z}^\times$ is cyclic.
$\blacksquare$





