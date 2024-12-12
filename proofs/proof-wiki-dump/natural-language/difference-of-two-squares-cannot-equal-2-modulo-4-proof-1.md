# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares_cannot_equal_2_modulo_4/Proof_1

Theorem
Let $n \in \Z_{>0}$ be of the form $4 k + 2$ for some $k \in \Z$.
Then $n$ cannot be expressed in the form:

$n = a^2 - b^2$
for $a, b \in \Z$.


Proof
Let $n = a^2 - b^2$ for some $a, b \in \Z$.
By Square Modulo 4, both $a$ and $b$ are of the form $4 k$ or $4 k + 1$ for some integer $k$.

There are $4$ cases:


$a \equiv b \equiv 0 \pmod 4$

Then:

$a^2 - b^2 \equiv 0 \pmod 4$
and so $n$ is in the form $4 k$.


$a \equiv 0 \pmod 4$, $b \equiv 1 \pmod 4$

Then:

$a^2 - b^2 \equiv -1 \pmod 4 \equiv 3 \pmod 4$
and so $n$ is in the form $4 k + 3$.


$a \equiv 1 \pmod 4$, $b \equiv 0 \pmod 4$

Then:

$a^2 - b^2 \equiv 1 \pmod 4$
and so $n$ is in the form $4 k + 1$.


$a \equiv b \equiv 1 \pmod 4$

Then:

$a^2 - b^2 \equiv 0 \pmod 4$
and so $n$ is in the form $4 k$.

Thus it is never the case that $a^2 - b^2 = 4 k + 2$.
$\blacksquare$





