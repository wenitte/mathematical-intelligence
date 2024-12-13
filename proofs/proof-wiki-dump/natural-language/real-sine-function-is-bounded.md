# 

Source: https://proofwiki.org/wiki/Real_Sine_Function_is_Bounded



Theorem
Let $x \in \R$.

Then:

$\size {\sin x} \le 1$


Proof
From the algebraic definition of the real sine function:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}$
it follows that $\sin x$ is a real function.
Thus $\sin^2 x \ge 0$.
From Sum of Squares of Sine and Cosine‎, we have that $\cos^2 x + \sin^2 x = 1$.
Thus it follows that:

$\sin^2 x = 1 - \cos^2 x \le 1$

From Ordering of Squares in Reals and the definition of absolute value, we have that:

$x^2 \le 1 \iff \size x \le 1$
The result follows.
$\blacksquare$


Also see
Complex Sine Function is Unbounded


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (3) \ \text{(ii)}$




