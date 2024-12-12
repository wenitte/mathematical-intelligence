# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Integer

  This article was Featured Proof between 16 November 2008 and 23 November 2008.




Theorem
Let $n \in \Z_{>0}$, that is, a (strictly) positive integer.
Let $\phi: \Z_{>0} \to \Z_{>0}$ be the Euler $\phi$ function.

Then for any $n \in \Z_{>0}$, we have:

$\map \phi n = n \paren {1 - \dfrac 1 {p_1} } \paren {1 - \dfrac 1 {p_2} } \cdots \paren {1 - \dfrac 1 {p_r} }$
where $p_1, p_2, \ldots, p_r$ are the distinct primes dividing $n$.

Or, more compactly:

$\ds \map \phi n = n \prod_{p \mathop \divides n} \paren {1 - \frac 1 p}$
where $p \divides n$ denotes the primes which divide $n$.


Corollary
Let $p$ be a divisor of $n$.
Then $p - 1$ is a divisor of $\map \phi n$.


Proof
If $n = 1$ the result holds by inspection.
Let $n \ge 2$.
We express $n$ in its prime decomposition:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}, p_1 < p_2 < \cdots < p_r$
as it is always possible to do.

By definition, all primes are coprime to each other.
Hence from Euler Phi Function is Multiplicative:

$\map \phi n = \map \phi {p_1^{k_1} } \map \phi {p_2^{k_2} } \cdots \map \phi {p_r^{k_r} }$
and from Euler Phi Function of Prime Power:

$\map \phi {p^k} = p^k \paren {1 - \dfrac 1 p}$

So:

$\map \phi n = p_1^{k_1} \paren {1 - \dfrac 1 {p_1} } p_2^{k_2} \paren {1 - \dfrac 1 {p_2} } \cdots p_r^{k_r} \paren {1 - \dfrac 1 {p_r} }$
and the result follows directly from:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
$\blacksquare$


Sources
1967: John D. Dixon: Problems in Group Theory ... (previous) ... (next): Introduction: Notation
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 25$
1976: Tom M. Apostol: Introduction to Analytic Number Theory ... (previous) ... (next): $2.5$: A product formula for $\varphi$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $30$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): phi function (totient function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's phi function (phi function, totient function)




