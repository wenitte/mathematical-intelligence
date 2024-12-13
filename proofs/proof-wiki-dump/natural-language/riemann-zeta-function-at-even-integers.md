# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Even_Integers



Theorem
The Riemann $\zeta$ function can be calculated for even integers as follows:














\(\ds \map \zeta {2 n}\)

\(=\)







\(\ds \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1^{2 n} } + \frac 1 {2^{2 n} } + \frac 1 {3^{2 n} } + \frac 1 {4^{2 n} } + \cdots\)









where:

$B_n$ are the Bernoulli numbers
$n$ is a positive integer.


Corollary













\(\ds B_{2 n}\)

\(=\)







\(\ds \paren {-1}^{n + 1} \dfrac {\paren {2 n}!} {2^{2 n - 1} \pi^{2 n} } \sum_{k \mathop = 1}^\infty \frac 1 {k^{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \dfrac {\paren {2 n}!} {2^{2 n - 1} \pi^{2 n} } \paren {1 + \frac 1 {2^{2 n} } + \frac 1 {3^{2 n} } + \cdots}\)











Proof 1
Lemma
Let $x \in \R$ be such that $\size x < 1$.
Then:

$\ds \pi x \cot {\pi x} = 1 - 2  \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}$
where $\zeta$ denotes the Riemann zeta function.

We also have:














\(\ds \pi x \cot {\pi x}\)

\(=\)







\(\ds i \pi x \frac {e^{i \pi x} + e^{- i \pi x} } {e^{i \pi x} - e^{- i \pi x} }\)





Euler's Cotangent Identity














\(\ds \)

\(=\)







\(\ds i \pi x \frac {e^{2 i \pi x} + 1} {e^{2 i \pi x} - 1}\)




















\(\ds \)

\(=\)







\(\ds i \pi x \paren {1 + \frac 2 {e^{2 i \pi x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds i \pi x  + \frac {2 i \pi x} {e^{2 i \pi x} - 1}\)




















\(\ds \)

\(=\)







\(\ds i \pi x + \sum_{n \mathop = 0}^\infty \frac {B_n \paren {2 i \pi x}^n} {n!}\)





Definition of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n \paren {2 i \pi x}^n} {n!}\)





as $B_0 = 1$ and $B_1 = - \dfrac 1 2$














\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 2}^\infty \paren {-\frac 1 2} \frac {B_n \paren {2 i \pi x}^n} {n!}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 1}^\infty \paren {-\frac 1 2} \frac {B_{2 n} \paren {2 i \pi x}^{2 n} } {\paren {2 n}!}\)





Odd Bernoulli Numbers Vanish




Equating the coefficients of $(1)$ with the expression given in the Lemma:

$\map \zeta {2 n} = \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}$
$\blacksquare$


Proof 2
Let $k \in \N$.
Let $\map S x$ be equal to $x^{2 k}$ on $\closedint {-\pi} \pi$ and be periodic with period $2 \pi$.
Let $\ds \map I {2 m, n} = \int_0^\pi x^{2 m} \cos n x \rd x$.
Let $\map A {2 m, n} = \dfrac {\pi^{2 m - 1} \paren {-1}^n 2 m} {n^2}$.
Let $\map B {2 m, n} = -\dfrac {2 m \paren {2 m - 1} } {n^2}$.

By Fourier Series for Even Function over Symmetric Range:














\(\ds \map S x\)

\(=\)







\(\ds \frac {\frac 2 \pi \int_0^\pi \map S x  \rd x} 2 + \sum_{n \mathop = 1}^\infty \cos n x \frac 2 \pi \int_0^\pi \map S x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\int_0^\pi x^{2 k} \rd x} \pi + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n x \int_0^\pi x^{2 k} \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n x \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \map S \pi\)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \cos n \pi \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \pi^{2 k}\)

\(=\)







\(\ds \frac {\pi^{2 k} } {2 k + 1} + \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 k \pi^{2 k} } {2 k + 1}\)

\(=\)







\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)










We have:














\(\ds \map I {0, n}\)

\(=\)







\(\ds \int_0^\pi \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\sin n x} n} 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin n \pi} n - \frac {\sin 0} n\)




















\(\ds \)

\(=\)







\(\ds 0 - 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \map I {2 k, n}\)

\(=\)







\(\ds \int_0^\pi x^{2 k} \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {x^{2 k} \sin n x} n} 0 \pi - \frac {2 k} n \int_0^\pi x^{2 k - 1} \cos n x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 - 0 - \frac {2 k} n \int_0^\pi x^{2 k - 1} \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \int_0^\pi x^{2 k - 1} \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \paren {\intlimits {\frac {-x^{2 k - 1} \cos n x} n} 0 \pi + \frac {2 k - 1} n \int_0^\pi x^{2 k - 2} \cos n x \rd x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac {2 k} n \paren {\frac {\pi^{2 k - 1} \paren {-1}^{n + 1} } n + \frac{2 k - 1} n \map I {2 k - 2, n} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^{2 k - 1} \paren {-1}^n 2 k} {n^2} - \frac {2 k \paren {2 k - 1} } {n^2} \map I {2 k - 2, n}\)




















\(\ds \)

\(=\)







\(\ds \map A {2 k, n} + \map B {2 k, n} \map I {2 k - 2, n}\)




















\(\ds \)

\(=\)







\(\ds \map A {2 k, n} + \map B {2 k, n} \map A {2 k - 2, n} + \map B {2 k, n} \map B {2 k - 2, n} \map I {2 k - 4, n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \map A {2 k - 2 m, n} \prod_{j \mathop = 0}^{m - 1} \map B {2 k - 2 j, n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^n \paren {2 k - 2 m} } {n^2} \prod_{j \mathop = 0}^{m - 1} -\frac {\paren {2 k - 2 j} \paren {2 k - 2 j - 1} } {n^2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^{n + m} \paren {2 k - 2 m} } {n^{2 \paren {m + 1} } } \prod_{j \mathop = 0}^{m - 1} \paren {2 k - 2 j} \paren {2 k - 2 j - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 0}^{k - 1} \frac {\pi^{2 k - 2 m - 1} \paren {-1}^{n + m} \paren {2 k}!} {n^{2 \paren {m + 1} } \paren {2 k - 2 m - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2m + 1} \paren {-1}^{n + m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)










Thus:














\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \map I {2 k, n}\)

\(=\)







\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \paren {-1}^n \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2 m + 1} \paren {-1}^{n+ m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \sum_{m \mathop = 1}^k \frac {\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \sum_{n \mathop = 1}^\infty \frac {\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {n^{2 \paren m} \paren {2 k - 2 m + 1}!}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \sum_{n \mathop = 1}^\infty \frac 1 {n^{2 \paren m} }\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)





Definition of Riemann Zeta Function








\(\ds \leadsto \ \ \)





\(\ds \frac{ 2 k \pi^{2 k} } {2 k + 1}\)

\(=\)







\(\ds 2  \sum_{m \mathop = 1}^k \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)














\(\ds \leadsto \ \ \)





\(\ds 2 \paren {2 k}! \paren {-1}^{k - 1} \map \zeta {2 k}\)

\(=\)







\(\ds \frac{ 2 k \pi^{2 k} } {2 k + 1} - 2  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{m - 1} \paren {2 k}!} {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)














\(\ds \leadsto \ \ \)





\(\ds \map \zeta {2 k}\)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)










From the above: 

$\map \zeta 2 = \dfrac {\pi^2} 6$
which serves as our base case.

Assume the induction hypothesis that, for $1 \le m \le k - 1$:

$\map \zeta {2 m} = \paren {-1}^{m + 1} \dfrac {B_{2 m} 2^{2 m - 1} \pi^{2 m} } {\paren {2 m}!}$

Then: 














\(\ds \map \zeta {2 k}\)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \map \zeta {2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} -  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k - 2 m} \paren {-1}^{k - m} } {\paren {2 k - 2 m + 1}!} \paren {-1}^{m + 1} \dfrac {B_{2 m} 2^{2 m - 1} \pi^{2 m} } {\paren {2 m}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \sum_{m \mathop = 1}^{k - 1} \frac{\pi^{2 k} \paren {-1}^k B_{2 m} 2^{2 m - 1} } {\paren {2 k - 2 m + 1}! \paren {2 m}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{\pi^{2 k} \paren {-1}^k} {2 \paren {2 k + 1}!} \sum_{m \mathop = 1}^{k - 1} \binom {2 k + 1}{2m} B_{2 m} 2^{2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{\pi^{2 k} \paren {-1}^k} {2 \paren {2 k + 1}!} \paren {2 k - 2^{2 k} B_{2 k} \paren {2 k + 1} }\)





Sum of Bernoulli Numbers by Power of Two and Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{k - 1} k \pi^{2 k} } {\paren {2 k + 1}!} +  \frac{k \pi^{2 k} \paren {-1}^k} {\paren {2 k + 1}!} + \frac{B_{2 k} 2^{2 k - 1}\pi^{2 k} \paren {-1}^{k + 1} } {\paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {B_{2 k} 2^{2 k - 1}\pi^{2 k} \paren {-1}^{k + 1} } {\paren {2 k}!}\)









which completes the induction step.

Thus by Proof by Mathematical Induction, for all $n \ge 1$:

$\map \zeta {2 n} = \paren {-1}^{n + 1} \dfrac {B_{2 n} 2^{2 n - 1} \pi^{2 n} } {\paren {2 n}!}$
$\blacksquare$


Also rendered as
This can also be seen rendered in the elegant form:

$\map \zeta r = \dfrac 1 2 \size {B_r} \dfrac {\paren {2 \pi}^r} {r!}$
for $r = 2 n$, $n \ge 1$.


Examples
Riemann Zeta Function of $2$
The Riemann zeta function of $2$ is given by:














\(\ds \map \zeta 2\)

\(=\)







\(\ds \dfrac 1 {1^2} + \dfrac 1 {2^2} + \dfrac 1 {3^2} + \dfrac 1 {4^2} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^2} 6\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 64493 \, 4066 \ldots\)











Riemann Zeta Function of $4$
The Riemann zeta function of $4$ is given by:














\(\ds \map \zeta 4\)

\(=\)







\(\ds \dfrac 1 {1^4} +  \dfrac 1 {2^4} +  \dfrac 1 {3^4} +  \dfrac 1 {4^4} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {90}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 08232 \, 3 \ldots\)











Riemann Zeta Function of $6$
The Riemann zeta function of $6$ is given by:














\(\ds \map \zeta 6\)

\(=\)







\(\ds \dfrac 1 {1^6} +  \dfrac 1 {2^6} +  \dfrac 1 {3^6} +  \dfrac 1 {4^6} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^6} {945}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 01734 \, 3 \ldots\)











Riemann Zeta Function of $8$
The Riemann zeta function of $8$ is given by:














\(\ds \map \zeta 8\)

\(=\)







\(\ds \dfrac 1 {1^8} +  \dfrac 1 {2^8} +  \dfrac 1 {3^8} +  \dfrac 1 {4^8} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^8} {9450}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 00408 \, 3 \ldots\)











Riemann Zeta Function of $26$
The Riemann zeta function of $26$ is given by:














\(\ds \map \zeta {26}\)

\(=\)







\(\ds \dfrac 1 {1^{26} } +  \dfrac 1 {2^{26} } +  \dfrac 1 {3^{26} } +  \dfrac 1 {4^{26} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^{26} \times 2^{24} \times 76 \, 977 \, 927} {27!}\)











Also see
Basel Problem
Riemann Zeta Function at Odd Integers: still unsolved


Historical Note
Leonhard Paul Euler calculated the sums of all the even powers of the reciprocals of the integers, all the way up to the $26$th power.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.35$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Riemann Zeta Function $\map \zeta x = \dfrac 1 {1^x} + \dfrac 1 {2^x} + \dfrac 1 {3^x} + \cdots$: $35.26$
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,1666666666666 \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Bernoulli number
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: $(6)$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$




