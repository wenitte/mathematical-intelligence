# 

Source: https://proofwiki.org/wiki/Divisibility_of_Sum_of_3_Fourth_Powers



Theorem
Let $n \in \Z_{\ge 0}$ be the sum of three $4$th powers.
Then:

$n$ is divisible by $5$ if and only if all three addends are also divisible by $5$
$n$ is divisible by $29$ if and only if all three addends are also divisible by $29$.


Proof
Let $n = a^4 + b^4 + c^4$ for $a, b, c \in \Z$.


Necessary Condition
Let $a$, $b$ and $c$ all be divisible by either $5$ or $29$.
That is:

$a, b, c \equiv 0 \pmod 5$
or:

$a, b, c \equiv 0 \pmod {29}$

We have that for integer $p$:














\(\ds a, b, c\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds a^4, b^4, c^4\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Modulo Addition is Well-Defined








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds a^4 + b^4 + c^4\)





where $\divides$ denotes divisibility



Hence if all three addends are divisible by either $5$ or $29$, then so is the sum.
$\Box$


Sufficient Condition
Let $n$ be divisible by $5$.
Then:

$a^4 + b^4 + c^4 \equiv 0 \mod 5$

From Fourth Power Modulo 5:

$x \in \Z_5 \implies x^4 \in \set {0, 1}$

So:

$a^4 + b^4 + c^4 \equiv 0 \mod 5 \implies a, b, c \equiv 0 \mod 5$
$\Box$

Let $n$ be divisible by $29$.
Then $a^4 + b^4 + c^4 \equiv 0 \mod {29}$.
But for $x \in \Z_{29}$, $x^4 \in \set {0, 1, 7, 16, 20, 23, 24, 25} = R$ necessarily.


This article, or a section of it, needs explaining.In particular: Demonstrate the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So:

$a^4 + b^4 + c^4 \equiv 0 \mod {29} \implies a, b, c \equiv 0 \mod {29}$
as $29$ and its non-zero multiples are not partitioned by any 3 elements in $R$


This article, or a section of it, needs explaining.In particular: The above statement needs to be gone into in more detail, probably on a separate page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\blacksquare$


Historical Note
This result was established by Leonhard Paul Euler.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $29$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $29$




