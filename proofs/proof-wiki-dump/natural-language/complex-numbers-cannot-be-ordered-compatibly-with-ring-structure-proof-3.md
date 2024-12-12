# 

Source: https://proofwiki.org/wiki/Complex_Numbers_cannot_be_Ordered_Compatibly_with_Ring_Structure/Proof_3



Theorem
Let $\struct {\C, +, \times}$ be the field of complex numbers.
There exists no total ordering on $\struct {\C, +, \times}$ which is compatible with the structure of $\struct {\C, +, \times}$.


Proof
From Complex Numbers form Integral Domain, $\struct {\C, +, \times}$ is an integral domain.

Aiming for a contradiction, suppose that $\struct {\C, +, \times}$ can be ordered.
Thus, by definition, it possesses a (strict) positivity property $P$.
Then from Strict Positivity Property induces Total Ordering, let $\le$ be the total ordering induced by $P$.
From Unity of Ordered Integral Domain is Strictly Positive:

$1$ is strictly positive.
Thus by strict positivity, axiom $3$:

$-1$ is not strictly positive.

Consider the element $i \in \C$.
By definition of strict positivity, axiom $3$, either:

$i$ is strictly positive
or:

$-i$ is strictly positive.

Suppose $i$ is strictly positive.
Then by Square of Non-Zero Element of Ordered Integral Domain is Strictly Positive:

$i^2 = -1$ is strictly positive.

Similarly, suppose $-i$ is strictly positive.
Then by Square of Non-Zero Element of Ordered Integral Domain is Strictly Positive:

$\paren {-i}^2 = -1$ is strictly positive.

In both cases we have that $-1$ is strictly positive.
But it has already been established that $-1$ is not strictly positive.

Hence, by Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Historical Note
The fact that Complex Numbers cannot be Ordered Compatibly with Ring Structure was realized by Leonhard Paul Euler.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Example $12$




