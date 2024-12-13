# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_2/Lemma_2

Theorem
Let $p$ be a prime number.
Let $x \in \Z_{> 0}: x \ge \dfrac {p + 1} 2$
Let $k \in \Z_{> 0}: k \ge 2$
Let $a = x^k + p$
Then:

$a \in \Z_{> 0}: \nexists \,c \in \Z : c^k = a$


Proof
Since $x, p > 0$ then $a > 0$.
Aiming for a contradiction, suppose for some $c \in \Z:c^k = a$.
Since $c^k \in \Z$, by Nth Root of Integer is Integer or Irrational then:

$c \in \Z$

Suppose $k$ is odd.
Since $a > 0$, by Odd Power Function is Strictly Increasing then $c > 0$
Hence $a = \size c^k$
On the other hand, suppose $k$ is even, that is $k = 2l$ for some $l \in Z_{> 0}$.
Then:














\(\ds a\)

\(=\)







\(\ds c^{2l}\)




















\(\ds \)

\(=\)







\(\ds \paren {c^2}^l\)




















\(\ds \)

\(=\)







\(\ds \paren {\size c^2}^l\)





Equivalence of Definitions of Absolute Value Function














\(\ds \)

\(=\)







\(\ds \size c^{2l}\)




















\(\ds \)

\(=\)







\(\ds \size c^k\)









In either case $\size c \in \Z_{> 0}$ and $\size c^k = a$

Let $d = \size c$
By the definition of $a$ it follows that $d^k = x^k + p$
Hence:














\(\ds p\)

\(=\)







\(\ds d^k - x^k\)




















\(\ds \)

\(=\)







\(\ds \paren {d - x} \paren {d^{k - 1} + d^{k - 2} x + d^{k - 3} x^2 + \dotsb + c x^{k - 2} + x^{k - 1} }\)





Difference of Two Powers




Let $y = d^{k - 1} + d^{k - 2} x + d^{k - 3} x^2 + \dotsb + d x^{k - 2} + x^{k - 1}$
Since $d, x \in \Z_{> 0}$ then $d - x \in \Z$ and $y \in \Z$
So $d - x$ and $y$ are factors of $p$

The factors of $p$ by definition are:

$\pm 1$ and $\pm p$
Since $d, x \in \Z_{> 0}$ then:














\(\ds d^{k - 1} + d^{k - 2} x + d^{k - 3} x^2 + \dotsb + d x^{k - 2} + x^{k - 1}\)

\(\ge\)







\(\ds d^{k - 1} + x^{k - 1}\)




















\(\ds \)

\(\ge\)







\(\ds d + x\)




















\(\ds \)

\(\ge\)







\(\ds 1 + 1\)




















\(\ds \)

\(\ge\)







\(\ds 2\)









Hence $y = p$
Then:














\(\ds p\)

\(=\)







\(\ds d^{k - 1} + d^{k - 2} x + d^{k - 3} x^2 + \dotsb + d x^{k - 2} + x^{k - 1}\)




















\(\ds \)

\(\ge\)







\(\ds d^{k - 1} + x^{k - 1}\)




















\(\ds \)

\(\ge\)







\(\ds d + x\)










It also follows that $d - x = 1$, that is, $d = x + 1$
Then














\(\ds d + x\)

\(=\)







\(\ds \paren {x + 1} + x\)




















\(\ds \)

\(=\)







\(\ds 2x + 1\)




















\(\ds \)

\(>\)







\(\ds 2x\)




















\(\ds \)

\(>\)







\(\ds p + 1\)




















\(\ds \)

\(>\)







\(\ds p\)









This contradicts the previous conclusion that $p \ge d + x$
So:

$\nexists \,c \in \Z : c^k = a$
$\blacksquare$





