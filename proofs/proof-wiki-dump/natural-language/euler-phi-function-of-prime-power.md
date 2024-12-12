# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Prime_Power



Theorem
Let $p^n$ be a prime power for some prime number $p > 1$.

Then:

$\map \phi {p^n} = p^n \paren {1 - \dfrac 1 p} = \paren {p - 1} p^{n - 1}$
where $\phi: \Z_{>0} \to \Z_{>0}$ is the Euler $\phi$ function.


Corollary
When $p = 2$, the formula is exceptionally simple:

$\map \phi {2^k} = 2^{k - 1}$


Proof
From Euler Phi Function of Prime:

$\map \phi p = p - 1$

From Prime not Divisor implies Coprime:

$k \perp p^n \iff p \nmid k$
There are $p^{n - 1}$ integers $k$ such that $1 \le k \le p^n$ which are divisible by $p$:

$k \in \set {p, 2 p, 3 p, \ldots, \paren {p^{n - 1} } p}$

Therefore:

$\map \phi {p^n} = p^n - p^{n - 1} = p^n \paren {1 - \dfrac 1 p} = \paren {p - 1} p^{n - 1}$
$\blacksquare$


Also see
Euler Phi Function of Prime: When $n = 1$ the expression degenerates to $\map \phi p = p - 1$.


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 6$: Examples of Finite Groups: $\text{(iii)}$: $(1.28)$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 25$
1976: Tom M. Apostol: Introduction to Analytic Number Theory ... (previous) ... (next): $2.5$: A product formula for $\varphi$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $27$




