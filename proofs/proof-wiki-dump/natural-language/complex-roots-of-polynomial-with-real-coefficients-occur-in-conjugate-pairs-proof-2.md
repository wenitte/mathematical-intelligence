# 

Source: https://proofwiki.org/wiki/Complex_Roots_of_Polynomial_with_Real_Coefficients_occur_in_Conjugate_Pairs/Proof_2

Theorem
Let $\map f z = a_n z^n + a_{n - 1} z^{n - 1} + \cdots + a_1 z + a_0$ be a polynomial over complex numbers where $a_0, \ldots, a_n$ are real numbers.
Let $\alpha \in \C$ be a root of $f$.

Then $\overline \alpha$ is also a root of $f$, where $\overline \alpha$ denotes the complex conjugate of $\alpha$.

That is, all complex roots of $f$ appear as conjugate pairs.


Proof
Let $\alpha = p + q i$.
Let $p + q i$ be expressed in exponential form as $\alpha = r e^{i \theta}$.
As $\alpha = r e^{i \theta}$ satisfies $\map f \alpha = 0$, it follows that:

$a_n r^n e^{n i \theta} + a_{n - 1} r^{n - 1} e^{\paren {n - 1} i \theta} + \dotsb + a_1 r e^{i \theta} + a_0 = 0$
Taking the conjugate of both sides:

$a_n r^n e^{-n i \theta} + a_{n - 1} r^{n - 1} e^{-\paren {n - 1} i \theta} + \dotsb + a_1 r e^{-i \theta} + a_0 = 0$
it follows that $\overline \alpha = p - q i$ is also a root of $f$.
If any of the $a_k$ are complex, then the conjugate of $f$ is not the same polynomial as $f$.
Therefore the result holds only for real coefficients.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Polynomial Equations: $36$




