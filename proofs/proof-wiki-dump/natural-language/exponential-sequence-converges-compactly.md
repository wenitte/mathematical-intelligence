# 

Source: https://proofwiki.org/wiki/Exponential_Sequence_Converges_Compactly

Theorem
For each $n \in \N$, let $f_n : \C \to \C$ be defined as:

$\map {f_n} z = \paren {1 + \dfrac z n}^n$

Then, $\sequence {f_n}$ converges compactly to the complex exponential function.


Proof
Let $D$ be a compact subset of $\C$.
By definition, $D$ is bounded, so there is some $M \in \R$ such that:

$\forall z \in D: \size z \le M$

Let $\epsilon > 0$ be arbitrary.
By definition of the exponential function, there is some $N \in \N$ such that:

$\forall n \ge N: \map \exp M - \paren {1 + \dfrac M n}^n < \epsilon$

Now, for any $z \in D$ and $n \ge N$:














\(\ds \size {\map \exp z - \map {f_n} z}\)

\(=\)







\(\ds \size {\sum_{k \mathop = 0}^\infty \frac {z^k} {k!} - \sum_{k \mathop = 0}^n \binom n k \frac {z^k} {n^k} }\)





Definition of Complex Exponential Function, Binomial Theorem














\(\ds \)

\(=\)







\(\ds \size {\sum_{k \mathop = 0}^n \paren {\frac 1 {k!} - \frac 1 {n^k} \binom n k} z^k + \sum_{k \mathop = n + 1}^\infty \frac {z^k} {k!} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^n \size {\frac 1 {k!} - \frac 1 {n^k} \binom n k} \size z^k + \sum_{k \mathop = n + 1}^\infty \frac {\size z^k} {k!}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^n \paren {\frac 1 {k!} - \frac 1 {n^k} \binom n k} M^k + \sum_{k \mathop = n + 1}^\infty \frac {M^k} {k!}\)





Binomial Coefficient over Power Not Greater than Reciprocal of Factorial, $\size z \le M$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {M^k} {k!} - \sum_{k \mathop = 0}^n \binom n k \frac {M^k} {n^k}\)




















\(\ds \)

\(=\)







\(\ds \exp M - \paren {1 + \frac M n}^n\)





Definition of Real Exponential Function, Binomial Theorem














\(\ds \)

\(<\)







\(\ds \epsilon\)









As $\epsilon > 0$ was arbitrary, $\sequence {f_n}$ converges uniformly to $\exp$ on $D$.
But as $D$ was also arbitrary, $\sequence {f_n}$ converges compactly.
$\blacksquare$





