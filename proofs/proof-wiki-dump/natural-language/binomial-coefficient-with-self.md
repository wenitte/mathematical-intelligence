# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_with_Self



Theorem
$\forall n \in \Z: \dbinom n n = \sqbrk {n \ge 0}$
where $\sqbrk {n \ge 0}$ denotes Iverson's convention.
That is:

$\forall n \in \Z_{\ge 0}: \dbinom n n = 1$
$\forall n \in \Z_{< 0}: \dbinom n n = 0$


Proof
From the definition of binomial coefficient:

$\dbinom n n = \dfrac {n!} {n! \ \paren {n - n}!} = \dfrac {n!} {n! \ 0!}$
the result following directly from the definition of the factorial, where $0! = 1$.
From N Choose Negative Number is Zero:

$\forall k \in \Z_{<0}: \dbinom n k = 0$
So for $n < 0$:

$\dbinom n n = 0$
$\blacksquare$


Also see
Particular Values of Binomial Coefficients for other similar results.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Binomial Coefficients: $3.1.5$
1964: A.M. Yaglom and I.M. Yaglom: Challenging Mathematical Problems With Elementary Solutions: Volume $\text { I }$ ... (previous) ... (next): Problems
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.10$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.18$: Sequences Defined Inductively: Exercise $3 \ \text{(b)}$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.27$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(48)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $9$




