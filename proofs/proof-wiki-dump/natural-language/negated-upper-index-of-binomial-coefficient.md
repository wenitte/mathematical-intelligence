# 

Source: https://proofwiki.org/wiki/Negated_Upper_Index_of_Binomial_Coefficient



Theorem
Let $r \in \R, k \in \Z$.
Then:

$\dbinom r k = \paren {-1}^k \dbinom {k - r - 1} k$
where $\dbinom r k$ is a binomial coefficient.


Corollary 1
Let $r \in \R, k \in \Z$.
Then:

$\dbinom {-r} k = \paren {-1}^k \dbinom {r + k - 1} k$
where $\dbinom {-r} k$ is a binomial coefficient.


Corollary 2
$\dbinom n m = \paren {-1}^{n - m} \dbinom {-\paren {m + 1} } {n - m}$


Complex Numbers
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $t, w$ integers:

$\dbinom z w = \dfrac {\map \sin {\pi \paren {w - z - 1} } } {\map \sin {\pi z} } \dbinom {w - z - 1} w$
where $\dbinom z w$ is a binomial coefficient.


Proof













\(\ds \binom r k\)

\(=\)







\(\ds \frac {r^{\underline k} } {k!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 {k!} \prod_{j \mathop = 0}^{k - 1} \paren {r - j}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {k!} \prod_{j \mathop = 0}^{k - 1} \paren {-\paren {r - j} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {k!} \prod_{j \mathop = 0}^{k - 1} \paren {j - r}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {k!} \prod_{j \mathop = 0}^{k - 1} \paren {\paren {k - 1} - j - r}\)





Permutation of Indices of Product














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {k!} \prod_{j \mathop = 0}^{k - 1} \paren {\paren {k - r - 1} - j}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \frac {\paren {k - r - 1}^{\underline k} } {k!}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \binom {k - r - 1} k\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Binomial Coefficients: $3.1.3$: Binomial Coefficients
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{G}$: $(17)$




