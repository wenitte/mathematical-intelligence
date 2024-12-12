# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Natural_Numbers



Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = n - 1$
That is:

$\sequence {a_n} = 0, 1, 2, 3, 4, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$G \paren z = \dfrac 1 {\paren {1 - z}^2}$


Corollary
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = n - 1$
That is:

$\sequence {a_n} = 1, 2, 3, 4, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$H \paren z = \dfrac z {\paren {1 - z}^2}$


Proof
Take the sequence:

$S_n = 1, 1, 1, \ldots$
From Generating Function for Constant Sequence, this has the generating function:

$\ds G \paren z = \sum_{n \mathop = 1}^\infty z^n = \frac 1 {1 - z}$

By Derivative of Generating Function:

$\ds \dfrac \d {\d z} G \paren z = 0 + 1 + 2 z + 3 z^2 \cdots = \sum_{n \mathop \ge 0} \paren {n + 1} z^n$
which is the generating function for the sequence $\sequence {a_n}$.

But:

$G \paren z = \dfrac 1 {1 - z}$
and so by Power Rule for Derivatives and the Chain Rule for Derivatives:

$\dfrac \d {\d z} G \paren z = \dfrac 1 {\paren {1 - z}^2}$
The result follows from the definition of a generating function.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.1$: Generating functions: $(2)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(16)$




