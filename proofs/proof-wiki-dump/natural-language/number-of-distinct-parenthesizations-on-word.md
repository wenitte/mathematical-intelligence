# 

Source: https://proofwiki.org/wiki/Number_of_Distinct_Parenthesizations_on_Word

Theorem
Let $w_n$ denote an arbitrary word of $n$ elements.
The number of distinct parenthesizations of $w_n$ is the Catalan number $C_{n - 1}$:

$C_{n - 1} = \dfrac 1 n \dbinom {2 \paren {n - 1} } {n - 1}$


Proof
Let $w_n$ denote an arbitrary word of $n$ elements.
Let $a_n$ denote the number of ways $W_n$ elements may be parenthesized.

First note that we have:














\(\ds a_1\)

\(=\)







\(\ds 1\)




















\(\ds a_2\)

\(=\)







\(\ds 1\)




















\(\ds a_3\)

\(=\)







\(\ds 2\)





that is, $b_1 \paren {b_2 b_3}$ and $\paren {b_1 b_2} b_3$



and from Parenthesization of Word of $4$ Elements:

$a_4 = 5$

Consider a word $w_{n + 1}$ of $n + 1$ elements.
Then $w_{n + 1}$ can be formed as any one of:

$w_1$ concatenated with $w_n$
$w_2$ concatenated with $w_{n - 1}$
$\dotsc$ and so on until:
$w_n$ concatenated with $w_1$
Thus the $i$th row in the above sequence is the number of parenthesizations of $w_{n + 1}$ in which the two outermost parenthesizations contain $i$ and $n - i + 1$ terms respectively.
We have that:

there are $a_i$ parenthesizations of $w_i$
there are $a_{n - i + 1}$ parenthesizations of $w_{n - i + 1}$
Hence the total number of parenthesizations of $w_{n + 1}$ is the sum of all these parenthesizations for $1 \le i \le n$.
That is:

$(1): \quad a_{n + 1} = a_1 a_n + a_2 a_{n - 1} + \dotsb + a_n a_1$

Let us start with the generating function:

$\ds \map {G_A} z = \sum_{n \mathop = 1}^\infty a_n z^n$
Then:














\(\ds \map {G_A} z\)

\(=\)







\(\ds z + \sum_{n \mathop = 2}^\infty \paren {a_1 a_n + a_2 a_{n - 1} + \dotsb + a_n a_1} z^n\)





from $(1)$














\(\ds \)

\(=\)







\(\ds z + \sum_{n \mathop = 1}^\infty a_n z^n \sum_{n \mathop = 1}^\infty a_n z^n\)




















\(\ds \)

\(=\)







\(\ds z + \paren {\map {G_A} z}^2\)









Thus $\map {G_A} z$ satisfies the quadratic equation:

$\paren {\map {G_A} z}^2 - \map {G_A} z + z = 0$
By the Quadratic Formula, this gives:

$\map {G_A} z = \dfrac {1 \pm \sqrt {1 - 4 z} } 2$
Since $\map {G_A} 0 = 0$, we can eliminate the positive square root and arrive at:

$(2): \quad \map {G_A} z = \dfrac 1 2 - \dfrac {\sqrt {1 - 4 z} } 2$
Expanding $\sqrt {1 - 4 z}$ using the Binomial Theorem:

$\ds \map {G_A} z = \dfrac 1 2 - \dfrac 1 2 \sum_{n \mathop = 0}^\infty \paren {-1}^n \dbinom {\frac 1 2} n 4^n z^n$
where:

$\dbinom {\frac 1 2} 0 = 1$
and:

$\dbinom {\frac 1 2} n = \dfrac {\frac 1 2 \paren {\frac 1 2 - 1} \dotsm \paren {\frac 1 2 - n + 1} } {n!}$

As a result:

$\ds (3): \quad \map {G_A} z = -\dfrac 1 2 \sum_{n \mathop = 1}^\infty \paren {-1}^n \dbinom {\frac 1 2} n 4^n z^n$

We can expand $(3)$ as a Taylor series about $0$.
As such a series, when it exists, is unique, the coefficients must be $a_n$.
Hence:














\(\ds a_n\)

\(=\)







\(\ds -\dfrac 1 2 \paren {-1}^n \dbinom {\frac 1 2} n 4^n\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - 1} \dfrac 1 2 \dfrac {\frac 1 2 \paren {\frac 1 2 - 1} \dotsm \paren {\frac 1 2 - n + 1} } {n!} 4^n\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \dfrac 1 2 \dfrac {\paren {-1} \paren {1 - 2} \dotsm \paren {1 - 2 \paren {n - 1 } } 2^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {1 \times 3 \times \dotsb \times \paren {2 n - 3} 2^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {1 \times 3 \times \dotsb \times \paren {2 n - 3} n! 2^n} {n! n!}\)





multiplying top and bottom by $n!$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {1 \times 2 \times 3 \times 4 \times \dotsb \times \paren {2 n - 4} \paren {2 n - 3} \paren {2 n - 2} \paren {2 n} } {\paren {n!}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {1 \times 2 \times 3 \times 4 \times \dotsb \times \paren {2 n - 2} } {\paren {\paren {n - 1}!}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \binom {2 n - 2} {n - 1}\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Theorem $\text {3-6}$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $42$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $42$




