# 

Source: https://proofwiki.org/wiki/Inverse_Completion_Less_Zero_of_Integral_Domain_is_Closed

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.
Let $\struct {K, \circ}$ be the inverse completion of $\struct {D, \circ}$.

Then $\struct {K^*, \circ}$ is closed, where $K^* = K \setminus \set {0_K}$.


Proof
Let $\struct {K, \circ}$ be the inverse completion of $\struct {D, \circ}$.
We define $\struct {K, \circ}$ of $\struct {D, \circ}$ by means of the technique used in Inverse Completion of Integral Domain Exists.
The structure of $\struct {K, \circ}$ is such that each element of $\struct {K, \circ}$ is of the form $x \circ y^{-1}$, where $x \in D$ and $y \in D^*$.
From Zero of Inverse Completion of Integral Domain, $0_K$ is all elements of $D \times D^*$ of the form $\dfrac {0_D} x$.
Therefore the elements of $K^*$ are those of the form $x \circ y^{-1}$ where $x, y \in D^*$.
By Product of Division Products:

$\dfrac a b \circ \dfrac c d = \dfrac {a \circ c} {b \circ d}$
As $\struct {D, +, \circ}$ is an integral domain, none of its non-zero elements are zero divisors.
Therefore:

$\forall x, y \in D^*: x \circ y \ne 0_D$
So:

$\forall \dfrac a b, \dfrac c d \in K^*: \dfrac {a \circ c} {b \circ d} \in K^*$
Hence the result.
$\blacksquare$





