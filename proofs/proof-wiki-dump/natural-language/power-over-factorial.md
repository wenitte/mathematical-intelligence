# 

Source: https://proofwiki.org/wiki/Power_over_Factorial

Theorem
Let $x \in \R: x > 0$ be a positive real number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = \dfrac {x^n} {n!}$.
Then $\sequence {x_n}$ converges to zero.


Proof
We need to show that $x_n \to 0$ as $n \to \infty$.
Let $N \in \N$ be the smallest natural number which satisfies $N > x$.
(From the Axiom of Archimedes, such an $N$ always exists.)

First we show that:

$\forall n > N: \dfrac {x^n} {n!} \le \dfrac {x^{N - 1} } {\paren {N - 1}!} \paren {\dfrac x N}^{n - N + 1}$
Note that as $N > x$, $\dfrac x N < 1$.
Also:

$m > n \implies \dfrac x m < \dfrac x n$
Thus:














\(\ds \frac {x^n} {n!}\)

\(=\)







\(\ds \frac x 1 \frac x 2 \cdots \frac x {N - 1} \frac x N \frac x {N + 1} \cdots \frac x n\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{N - 1} } {\paren {N - 1}!} \frac x N \frac x {N + 1} \cdots \frac x n\)




















\(\ds \)

\(\le\)







\(\ds \frac {x^{N - 1} } {\paren {N - 1}!} \paren {\frac x N}^{n - N + 1}\)





as $\dfrac x {N + 1}, \dfrac x {N + 2}, \ldots, \dfrac x n < \dfrac x N$














\(\ds \)

\(=\)







\(\ds \frac {x^{N - 1} } {\paren {N - 1}!} \paren {\frac x N}^{1 - N} \paren {\frac x N}^n\)










As $\dfrac x N < 1$, it follows from Sequence of Powers of Number less than One that $\paren {\dfrac x N}^n \to 0$ as $n \to \infty$.
For a given $x$ and $N$, $\dfrac {x^{N - 1} } {\paren {N - 1}!} \paren {\dfrac x N}^{1 - N}$ is constant.
Thus by the Multiple Rule for Real Sequences:

$\dfrac {x^{N - 1} } {\paren {N - 1}!} \paren {\dfrac x N}^{1 - N} \paren {\dfrac x N}^n \to 0$ as $n \to \infty$
As (from above):

$\dfrac {x^n} {n!} \le \dfrac {x^{N - 1} } {\paren {N - 1}!} \paren {\dfrac x N}^{1 - N} \paren {\dfrac x N}^n$
the result follows from the Squeeze Theorem for Real Sequences.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (4)$




