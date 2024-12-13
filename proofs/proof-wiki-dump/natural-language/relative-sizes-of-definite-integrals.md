# 

Source: https://proofwiki.org/wiki/Relative_Sizes_of_Definite_Integrals



Theorem
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$, where $a < b$.

If:

$\forall t \in \closedint a b: \map f t \le \map g t$
then:

$\ds \int_a^b \map f t \rd t \le \int_a^b \map g t \rd t$

Similarly, if:

$\forall t \in \closedint a b: \map f t < \map g t$
then:

$\ds \int_a^b \map f t \rd t < \int_a^b \map g t \rd t$


Proof
Suppose that $\forall t \in \closedint a b: \map f t \le \map g t$.
From the Fundamental Theorem of Calculus, $g - f$ has a primitive on $\closedint a b$.
Let $H$ be such a primitive.
Then:

$\forall t \in \closedint a b: D_t \map H t = \map g t - \map f t \ge 0$
By Derivative of Monotone Function, it follows that $H$ is increasing on $\closedint a b$.
Thus:

$\map H b \ge \map H a$
Hence:

$\ds \int_a^b \map g t - \map f t \rd t = \map H b - \map H a \ge 0$
The proof for the second case is similar.
$\blacksquare$


Also see
Sign of Function Matches Sign of Definite Integral


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.23$




