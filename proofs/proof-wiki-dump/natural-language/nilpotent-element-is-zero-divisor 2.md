# 

Source: https://proofwiki.org/wiki/Nilpotent_Element_is_Zero_Divisor

Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Suppose further that $R$ is not the null ring.
Let $x \in R$ be a nilpotent element of $R$.

Then $x$ is a zero divisor in $R$.


Proof
First note that when $R$ is the null ring the result is false.
This is because although $0_R$ is nilpotent element in the null ring, it is not actually a zero divisor.
Hence in this case $0_R$ is both nilpotent and a zero divisor.

So, let $R$ be a non-null ring.
By hypothesis, there exists $n \in \Z_{>0}$ such that $x^n = 0_R$.

If $n = 1$, then $x = 0_R$.
By hypothesis, $R$ is not the null ring, so we may choose $y \in R \setminus \set 0$.
By Ring Product with Zero:

$y \circ x = y \circ 0_R = 0_R$
Therefore $x$ is a zero divisor in $R$.

If $n \ge 2$, define $y = x^{n - 1}$.
Then:

$y \circ x = x^{n - 1} \circ x = x^n = 0_R$
so $x$ is a zero divisor in $R$.
$\blacksquare$





