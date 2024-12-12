# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_2

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

First we introduce a lemma:

By definition:














\(\ds \paren {\exp x} \paren {\exp y}\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac y n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac x n} \paren {1 + \frac y n} }^n\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n + \frac {x y} {n^2} }^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac {x + y} n} \paren {1 + \frac {\paren {\frac {x y} {n + x + y} } } n} }^n\)





Lemma: Without loss of generality let $n > - x - y$: therefore $n + x + y > 0$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac {\paren {\frac {x y} {n + x + y} } } n}^n\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n}^n\)





Null Sequence in Exponential Sequence














\(\ds \)

\(=\)







\(\ds \map \exp {x + y}\)









$\blacksquare$





