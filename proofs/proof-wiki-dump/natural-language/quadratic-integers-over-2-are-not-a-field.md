# 

Source: https://proofwiki.org/wiki/Quadratic_Integers_over_2_are_Not_a_Field

Theorem
Let $\Z \sqbrk {\sqrt 2}$ denote the set of quadratic integers over $2$:

$\Z \sqbrk {\sqrt 2} := \set {a + b \sqrt 2: a, b \in \Z}$
that is, all (real) numbers of the form $a + b \sqrt 2$ where $a$ and $b$ are integers.

Then the algebraic structure:

$\struct {\Z \sqbrk {\sqrt 2}, +, \times}$
where $+$ and $\times$ are addition and multiplication on real numbers, is not a field.


Proof
We start from the result Quadratic Integers over 2 form Subdomain of Reals.
We have from that result that $1 + 0 \sqrt 2$ is the unity.

Now consider a representative element $a + b \sqrt 2 \in \Z \sqbrk {\sqrt 2}$.
From Difference of Two Squares we have:

$\paren {a + b \sqrt 2} \paren {a - b \sqrt 2} = a^2 - 2 b^2$
which leads to:

$\paren {a + b \sqrt 2} \paren {\dfrac {a - b \sqrt 2} {a^2 - 2 b^2} } = 1$
so demonstrating that the product inverse of $\paren {a + b \sqrt 2}$ is $\dfrac a {a^2 - 2b^2} + \dfrac {b \sqrt 2} {a^2 - 2 b^2}$.
But for any two given integers $a$ and $b$, the values $\dfrac a {a^2 - 2 b^2}$ and $\dfrac b {a^2 - 2 b^2}$ are not in general integers.
For instance, when $a = 3$ and $b = 4$ we get:

$\dfrac a {a^2 - 2 b^2} = \dfrac 3 {23}$ and $\dfrac b {a^2 - 2 b^2} = \dfrac 4 {23}$
(unless I've got my sums wrong).
So not every element of $\struct {\Z \sqbrk {\sqrt 2}, +, \times}$ has a product inverse, demonstrating that $\struct {\Z \sqbrk {\sqrt 2}, +, \times}$ is not a field.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 15$. Examples of Fields: Example $18$




