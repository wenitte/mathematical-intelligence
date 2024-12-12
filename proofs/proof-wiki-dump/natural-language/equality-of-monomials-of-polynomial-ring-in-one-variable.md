# 

Source: https://proofwiki.org/wiki/Equality_of_Monomials_of_Polynomial_Ring_in_One_Variable

Theorem
Let $R$ be a commutative ring with unity.
Let $R \sqbrk X$ be a polynomial ring in one variable $X$ over $R$.
Let $k, l \in \N$ be distinct natural numbers.

Then the mononomials $X^k$ and $X^l$ are distinct, where $X^k$ denotes the $k$th power of $X$.


Proof
By:

Uniqueness of Polynomial Ring in One Variable
Homomorphism Preserves Indexed Products
we may assume $R \sqbrk X$ is the ring of sequences of finite support over $R$, and $X$ is the sequence $\sequence {0, 1, 0, 0 \ldots}$.
One verifies that, for $k \ge 0$, $X^k$ is the sequence with $\map {X^k} l = \delta_{k l}$, where $\delta$ is the Kronecker delta.


A particular theorem is missing.In particular: verify this somewhere elseYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.
Thus $X^k \ne X^l$ if $k \ne l$.
$\blacksquare$


Also see
Equality of Monomials of Polynomial Ring




