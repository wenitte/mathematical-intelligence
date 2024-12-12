# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares_cannot_equal_2_modulo_4



Theorem
Let $n \in \Z_{>0}$ be of the form $4 k + 2$ for some $k \in \Z$.
Then $n$ cannot be expressed in the form:

$n = a^2 - b^2$
for $a, b \in \Z$.


Proof 1
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


Proof 2
Let $n_0 = c^2 - d^2$ for some $c, d \in \Z$.
Then:

$n_0 = \paren {c + d} \paren {c - d}$
and so:

$\paren {c + d} - \paren {c - d} = 2 d$
Therefore $n$ must be expressible as a product of two integers whose difference is even.
Now consider the integer $n \in \Z$ that satisfies $n \equiv 2 \pmod 4$.
$n$ is an even number that is not divisible by 4.
This implies that any even number that divides $n$ will produce an odd number.
Consider the ordered pairs of integers $\tuple {a, b}, a < b$ such that $ab = n$.
If  $a$ is odd, then $b = \dfrac n a$ must in turn be even.
Hence the difference will not be even.
If $a$ is even, $b$ must be odd by the implication mentioned earlier.
Hence the difference will once again not be even.
Hence, $n$ cannot be expressed as a product of two integers whose difference is even.
In turn it cannot be expressed as a Difference of Two Squares.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $10$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $10$




