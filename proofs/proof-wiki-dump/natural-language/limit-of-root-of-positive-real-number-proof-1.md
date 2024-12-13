# 

Source: https://proofwiki.org/wiki/Limit_of_Root_of_Positive_Real_Number/Proof_1

Theorem
Let $x \in \R: x > 0$ be a real number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = x^{1 / n}$
Then $x_n \to 1$ as $n \to \infty$.


Proof
Let us define $a_1 = a_2 = \cdots = a_{n-1} = 1$ and $a_n = x$.
Let $G_n$ be the geometric mean of $a_1, \ldots, a_n$.
Let $A_n$ be the arithmetic mean of $a_1, \ldots, a_n$.
From their definitions:

$G_n = x^{1/n}$
and:

$A_n = \dfrac {n - 1 + x} n = 1 + \dfrac{x - 1} n$

From Arithmetic Mean is Never Less than Geometric Mean:

$x^{1/n} \le 1 + \dfrac{x - 1} n$
That is:

$x^{1/n} - 1 \le \dfrac{x - 1} n$
There are two cases to consider: $x \ge 1$ and $0 < x < 1$.

Let $x \ge 1$.
From Root of Number Greater than One‎, it follows that:

$x^{1/n} \ge 1$
Thus:

$0 \le x^{1/n} - 1 \le \dfrac 1 n \paren {x - 1}$
But from Sequence of Powers of Reciprocals is Null Sequence:

$\dfrac 1 n \to 0$ as $n \to \infty$
From the Combination Theorem for Sequences:

$\dfrac 1 n \paren {x - 1} \to 0$ as $n \to \infty$
Thus by the Squeeze Theorem:

$x^{1/n} - 1 \to 0$ as $n \to \infty$
Hence, again from the Combination Theorem for Sequences:

$x^{1/n} \to 1$ as $n \to \infty$

Now let $0 < x < 1$.
Then $x = \dfrac 1 y$ where $y > 1$.
But from the above:

$y^{1/n} \to 1$ as $n \to \infty$
Hence by the Combination Theorem for Sequences:

$x^{1/n} = \dfrac 1 {y^{1/n} } \to \dfrac 1 1 = 1$ as $n \to \infty$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.14$: Example




