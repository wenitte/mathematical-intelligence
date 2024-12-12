# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_3

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Proof
Lemma
Let $x, y \in \R$.
Let $n \in \N_{> 0}$ such that $n > -\paren {x + y}$.

Then:

$1 + \dfrac {x + y} n + \dfrac {x y} {n^2} = \paren {1 + \dfrac {x + y} n} \paren {1 + \dfrac {\paren {\frac {x y} {n + x + y} } } n}$
$\Box$

This proof assumes the definition of $\exp$ as defined by a limit of a sequence:

$\exp x = \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

From Powers of Group Elements we can presuppose the Exponent Combination Laws for natural number indices.

By definition:














\(\ds \paren {\exp x} \paren {\exp y}\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac y n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac x n} \paren {1 + \frac y n} }^n\)





Combination Theorem for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac{x + y} n + \frac{x y} {n^2} }^n\)









Intuitively, the $\paren {1 + \dfrac {x + y} n}$ term is the most influential of the terms involved in the limit, and:

$\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n \to \paren {1 + \dfrac {x + y} n}^n$ as $n \to +\infty$
To formalize this claim:

$\map \exp {x + y} = \exp x \cdot \exp y \iff \dfrac {\exp x \cdot \exp y} {\map \exp {x + y} } = 1$













\(\ds \frac {\paren {1 + \frac {x + y} n + \frac {x y} {n^2} }^n} {\paren {1 + \frac{x + y} n}^n}\)

\(=\)







\(\ds \paren {1 + \frac{x y} {n^2 + n x + n y} }^n\)





Lemma














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {\frac {x y} {n^2 + n x + n y} }^k\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^n \binom n k n^{-k} \paren {\frac {x y} {n + x + y} }^k\)









Now, as $n \to +\infty$, we use the Combination Theorem for Limits of Real Functions to investigate the behavior of this sequence, term by term.
As $1$ trivially converges to $1$, consider now the other terms of the sequence.

We invoke the Squeeze Theorem for Absolutely Convergent Series.
Hence it will suffice to investigate the limit behaviour of:

$\ds \sum_{k \mathop = 1}^n \, \size {\binom n k n^{-k} \paren {\frac {x y} {n + x + y} }^k}$

From $\dbinom n k$ is not greater than $n^k$:














\(\ds \binom n k\)

\(\le\)







\(\ds n^k\)





for all $n, k$ here considered








\(\ds \leadsto \ \ \)





\(\ds \binom n k n^{-k}\)

\(\le\)







\(\ds 1\)





divide both sides by $n^k$



Therefore, we may conclude, using Absolute Value is Bounded Below by Zero:

$\ds 0 \le \sum_{k \mathop = 1}^n \size { {n \choose k} n^{-k} \paren {\frac {x y} {n + x + y} }^k} \le \sum_{k \mathop = 1}^n \size {\frac {x y} {n + x + y} }^k$

From Sum of Infinite Geometric Sequence, the right hand term converges to:














\(\ds \frac {\dfrac {x y} {n + x + y} } {1 - \dfrac {x y} {n + x + y} }\)

\(=\)







\(\ds \frac {x y} {n + x + y - x y}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $n \to +\infty$



$0 \to 0$ as $n \to +\infty$, trivially.

This means:

$\dfrac {\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n} {\paren {1 + \dfrac {x + y} n}^n} \to 1$ as $n \to +\infty$

which is equivalent to our hypothesis:

$\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n \to \paren {1 + \dfrac {x + y} n}^n$ as $n \to +\infty$
$\blacksquare$





