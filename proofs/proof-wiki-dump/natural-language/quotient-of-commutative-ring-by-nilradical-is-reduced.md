# 

Source: https://proofwiki.org/wiki/Quotient_of_Commutative_Ring_by_Nilradical_is_Reduced

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$ and whose unity is $1_R$.
Let $\struct {N, +, \circ}$ denote the nilradical of $R$.

The quotient ring $R / N$ is a reduced ring.


Proof
From Nilpotent Elements of Commutative Ring form Ideal, $\struct {N, +, \circ}$ is an ideal of $\struct {R, +, \circ}$.
Hence the quotient ring $R / N$ is defined.

By definition of the ideal of $\struct {R, +, \circ}$, $N$ is the zero of $R / N$.

Let $\paren {x + N}^n \in N$.
Then:

$x^n \in N$
and so:

$\paren {x^n}^m = 0_R$
for some $m \in \Z_{>0}$.
Hence:

$x \in N$
and so:

$x + N = N$
That is, if a (left) coset of $N$ is nilpotent in $R / N$ that (left) coset is $N$ itself.
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $11 \ \text {(ii)}$




