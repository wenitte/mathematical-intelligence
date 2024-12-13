# 

Source: https://proofwiki.org/wiki/Integers_whose_Phi_times_Divisor_Count_equal_Divisor_Sum

Theorem
The positive integers whose Euler $\phi$ function multiplied by its  divisor count function equals its divisor sum are:

$1, 3, 14, 42$
This sequence is A104905 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof













\(\ds \map \phi 1 \map {\sigma_0} 1\)

\(=\)







\(\ds 1 \times 1\)





$\phi$ of $1$, $\sigma_0$ of $1$














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} 1\)





$\sigma_1$ of $1$


















\(\ds \map \phi 3 \map {\sigma_0} 3\)

\(=\)







\(\ds 2 \times 2\)





$\phi$ of $3$, $\sigma_0$ of $3$














\(\ds \)

\(=\)







\(\ds 4\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} 3\)





$\sigma_1$ of $3$


















\(\ds \map \phi {14} \map {\sigma_0} {14}\)

\(=\)







\(\ds 6 \times 4\)





$\phi$ of $14$, $\sigma_0$ of $14$














\(\ds \)

\(=\)







\(\ds 24\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {14}\)





$\sigma_1$ of $14$


















\(\ds \map \phi {42} \map {\sigma_0} {42}\)

\(=\)







\(\ds 12 \times 8\)





$\phi$ of $42$, $\sigma_0$ of $42$














\(\ds \)

\(=\)







\(\ds 96\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {42}\)





$\sigma_1$ of $42$




To show that there are no more such integers, we use the formulas:














\(\ds n\)

\(=\)

\(\, \ds \prod_{p_i \mathop \divides n} {p_i}^{k_i} \, \)



\(\, \ds = \, \)

\(\ds \prod_{j \mathop = 1}^r {p_i}^{k_i}\)





Prime Decomposition














\(\ds \map \phi n\)

\(=\)

\(\, \ds n \prod_{p \mathop \divides n} \paren {1 - \frac 1 p} \, \)



\(\, \ds = \, \)

\(\ds \prod_{i \mathop = 1}^r p_i^{k_i} \paren {1 - \frac 1 p_i}\)





Euler Phi Function of Integer














\(\ds \map {\sigma_0} n\)

\(=\)

\(\, \ds \prod_{i \mathop = 1}^r \paren {k_i + 1} \, \)





\(\ds \)





Divisor Count Function from Prime Decomposition














\(\ds \map {\sigma_1} n\)

\(=\)

\(\, \ds \prod_{i \mathop = 1}^r \frac {p_i^{k_i + 1} - 1} {p_i - 1} \, \)





\(\ds \)





Divisor Sum of Integer



Which arises from Euler Phi Function is Multiplicative, Divisor Count Function is Multiplicative and Divisor Sum Function is Multiplicative.

We define the mapping $f = \phi \cdot \sigma_0$ as follows:

$\map f {p^k} = \map \phi {p^k} \map {\sigma_0} {p^k} = p^k \paren {1 - \dfrac 1 p} \paren {k + 1}$
where $p$ is a prime, and $k$ is a non-negative integer.
By Product of Multiplicative Functions is Multiplicative,  $f$ and $\dfrac f {\sigma_1}$ are multiplicative functions.
Then $\map \phi n \map {\sigma_0} n = \map {\sigma_1} n$ is equivalent to:

$\ds \prod_{i \mathop = 1}^r \dfrac {\map f {p_i^{k_i} } } {\map {\sigma_1} {p_i^{k_i} } } = 1$

We consider the cases $k \ge 1$.
Then:














\(\ds \map f {p^k}\)

\(\ge\)







\(\ds \map {\sigma_1} {p^k}\)














\(\ds \leadsto \ \ \)





\(\ds p^k \paren {1 - \frac 1 p} \paren {k + 1}\)

\(\ge\)







\(\ds \frac {p^{k + 1} - 1} {p - 1}\)














\(\ds \leadsto \ \ \)





\(\ds p^{k - 1} \paren {p - 1}^2 \paren {k + 1}\)

\(\ge\)







\(\ds p^{k + 1} - 1\)














\(\ds \leadsto \ \ \)





\(\ds k p^{k + 1} + \paren {k + 1} p^{k - 1} + 1\)

\(\ge\)







\(\ds 2 \paren {k + 1} p^k\)









Suppose equality holds.
If $k \ge 2$:














\(\ds k p^{k + 1} + \paren {k + 1} p^{k - 1} + 1\)

\(\ge\)







\(\ds 2 \paren {k + 1} p^k\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



since $p^{k - 1}, p^k, p^{k + 1}$ are multiples of $p$



which is a contradiction.
This forces $k = 1$.

The equation becomes:














\(\ds p^2 + 2 + 1\)

\(=\)







\(\ds 4 p\)














\(\ds \leadsto \ \ \)





\(\ds p^2 - 4 p + 3\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {p - 1} \paren {p - 3}\)

\(=\)







\(\ds 0\)









Since $p \ne 1$, we must have $p = 3$.
Indeed:

$\map f 3 = \map \phi 3 \map {\sigma_0} 3 = \map {\sigma_1} 3$

For the inequality case: $k p^{k + 1} + \paren {k + 1} p^{k - 1} + 1 > 2 \paren {k + 1} p^k$, we check each prime $p$ individually.

For $p = 2$:














\(\ds k \cdot 2^{k + 1} + \paren {k + 1} 2^{k - 1} + 1\)

\(>\)







\(\ds 2 \paren {k + 1} 2^k\)














\(\ds \leadsto \ \ \)





\(\ds 4 k \paren {2^{k - 1} } + \paren {k + 1} \paren {2^{k - 1} }\)

\(\ge\)







\(\ds 4 \paren {k + 1} \paren {2^{k - 1} }\)





as both sides are integers








\(\ds \leadsto \ \ \)





\(\ds 4 k + \paren {k + 1}\)

\(\ge\)







\(\ds 4 \paren {k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(\ge\)







\(\ds 3\)










For $p \ge 3$, we consider the criterion $k p \ge 2 \paren {k + 1}$.
This criterion implies $k p^{k + 1} \ge 2 \paren {k + 1} p^k$,
which in turn implies our inequality $k p^{k + 1} + \paren {k + 1} + 1 > 2 \paren {k + 1} p^k$.

For $p = 3$ and $k \ge 2$, $3 k = 2 k + k \ge 2 k + 2$.
For $p \ge 5$, $k p \ge 5 k > 2 k + 2 k \ge 2 k + 2$.

Therefore $\map f {p^k} > \map {\sigma_1} {p^k}$, except for:

$\map f 3 = \map {\sigma_1} 3$
$\map f 2 < \map {\sigma_1} 2$
$\map f 4 < \map {\sigma_1} 4$

Now we try to find integers $n$ satisfying $\ds \prod_{i \mathop = 1}^r \dfrac {\map f {p_i^{k_i} } } {\map {\sigma_1} {p_i^{k_i} } } = 1$.

First observe that the sequence $\sequence {\dfrac {\map f {p^k} } {\map {\sigma_1} {p^k} } }_{k \mathop = 1}^\infty$ is strictly increasing:














\(\ds \frac {\map f {p^{k + 1} } } {\map {\sigma_1} {p^{k + 1} } } - \frac {\map f {p^k} } {\map {\sigma_1} {p^k} }\)

\(=\)







\(\ds \frac {p^k \paren {1 - 1 / p} \paren {k + 2} } {\paren {p^{k + 2} - 1} / \paren {p - 1} } - \frac {p^{k - 1} \paren {1 - 1 / p} \paren {k + 1} } {\paren {p^{k + 1} - 1} / \paren {p - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p^{k - 1} \paren {p - 1}^2 \paren {k + 2} } {p^{k + 2} - 1} - \frac {p^{k - 2} \paren {p - 1}^2 \paren {k + 1} } {p^{k + 1} - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {p^{k - 2} \paren {p - 1}^2} {\paren {p^{k + 2} - 1} \paren {p^{k + 1} - 1} } \paren {p \paren {p^{k + 1} - 1} \paren {k + 2} - \paren {p^{k + 2} - 1} \paren {k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {p^{k - 2} \paren {p - 1}^2} {\paren {p^{k + 2} - 1} \paren {p^{k + 1} - 1} } \paren {p^{k + 2} - \paren {k + 2} p + k + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {p^{k - 2} \paren {p - 1}^2} {\paren {p^{k + 2} - 1} \paren {p^{k + 1} - 1} } \paren {1 + \paren {k + 2} \paren {p - 1} + \sum_{m \mathop = 2}^{k + 2} \dbinom {k + 2} m \paren {p - 1}^m - \paren {k + 2} p + k + 1}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \frac {p^{k - 2} \paren {p - 1}^2} {\paren {p^{k + 2} - 1} \paren {p^{k + 1} - 1} } \sum_{m \mathop = 2}^{k + 2} \dbinom {k + 2} m \paren {p - 1}^m\)




















\(\ds \)

\(>\)







\(\ds 0\)





as the sum is non-empty and each term is strictly positive




Now we consider these particular values for $\dfrac f {\sigma_1}$:

$\dfrac {\map f 2} {\map {\sigma_1} 2 } = \dfrac 2 3$
$\dfrac {\map f 4} {\map {\sigma_1} 4} = \dfrac 6 7$
$\dfrac {\map f 3} {\map {\sigma_1} 3} = 1$
$\dfrac {\map f 5} {\map {\sigma_1} 5} = \dfrac 4 3$
$\dfrac {\map f {25} } {\map {\sigma_1} {25} } = \dfrac {60} {31} > \dfrac 3 2$
$\dfrac {\map f 7} {\map {\sigma_1} 7} = \dfrac 3 2$
And for $p \ge 11$:














\(\ds \frac {\map f p} {\map {\sigma_1} p}\)

\(=\)







\(\ds \frac {2 \paren {p - 1} } {\paren {p^2 - 1} / \paren {p - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p - 1} } {p + 1}\)




















\(\ds \)

\(=\)







\(\ds 2 - \frac 4 {p + 1}\)




















\(\ds \)

\(\ge\)







\(\ds 2 - \frac 4 {12} > \frac 3 2\)









By the strictly increasing property above, every higher power of these primes has $\dfrac f {\sigma_1} > \dfrac 3 2$.

Since $\dfrac f {\sigma_1}$ is multiplicative, only $n = 3, 14, 42$ can give $\dfrac {\map f n} {\map {\sigma_1} n} = 1$.
Since $\map \phi 1 \map {\sigma_0} 1 = \map {\sigma_1} 1$, the only positive integers whose Euler $\phi$ function multiplied by its  divisor count function equals its divisor sum are $1, 3, 14, 42$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $42$




