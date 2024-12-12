# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Exponential_Function/Power_Series_Expansion_equivalent_to_Limit_of_Sequence/Proof_2



Theorem
The following definitions of the concept of Complex Exponential Function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a (complex) power series:










\(\ds \forall z \in \C: \, \)



\(\ds \exp z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)









As a Limit of a Sequence
The exponential function can be defined as a limit of a sequence:

$\ds \exp z := \lim_{n \mathop \to \infty} \paren {1 + \dfrac z n}^n$


Proof
Let:

$\ds s_n = \sum_{k \mathop = 0}^n \dfrac {z^k} {k!}$
$a_n = \paren {1 + \dfrac z n}^n$
Then we can express $a_n$ as follows:














\(\ds a_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {\dfrac z n}^k 1^{n - k}\)





Binomial Theorem: Integral Index














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {z^k} {k!} \dfrac {n \paren {n - 1} \cdots \paren {n - k + 1} }{n^k}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^n \dfrac {z^k} {k!} \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n}\)





by algebraic manipulations




The limit of the difference between the $k$th terms of $a_n$ and $s_n$ is:














\(\ds \lim_{n \mathop \to +\infty} \cmod {\dfrac {z^k} {k!} - \dfrac {z^k} {k!} \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} }\)

\(=\)







\(\ds \cmod {\lim_{n \mathop \to +\infty} \paren {\dfrac {z^k} {k!} - \dfrac {z^k} {k!} \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} } }\)





Modulus of Limit














\(\ds \)

\(=\)







\(\ds \cmod {\dfrac {z^k} {k!} \paren {1 - \prod_{j \mathop = 1}^{k - 1} \paren {1 - \lim_{n \mathop \to +\infty} \dfrac j n} } }\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \cmod {\dfrac {z^k} {k!} \paren {1 - 1} }\)





Sequence of Powers of Reciprocals is Null Sequence














\(\ds \)

\(=\)







\(\ds 0\)










To show that $s_n$ and $a_n$ have the same limit, let $\epsilon \in \R_{>0}$.
From Tail of Convergent Series tends to Zero, it follows that we can find $M \in \N$ such that for all $m \ge M$:

$\ds \sum_{k \mathop = m}^n \cmod {\dfrac {z^k} {k!} } < \dfrac \epsilon 2$
For all $k \in \left\{ {0, 1, \ldots, M - 1}\right\}$, we can find $N_k \in \N$ such that for all $n \ge N_k$:

$\ds \cmod {\dfrac {z^k} {k!} - \dfrac {z^k} {k!} \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} } < \dfrac \epsilon {2 M}$
Then for all $n \ge \max \paren {M, N_0, N_1, \ldots, N_{M - 1} }$, we have:














\(\ds \cmod {s_n - a_n}\)

\(=\)







\(\ds \cmod {\sum_{k \mathop = 1}^{M - 1} \dfrac {z^k} {k!} \paren {1 - \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} } + \sum_{k \mathop = M}^n \dfrac {z^k} {k!} \paren {1 - \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^{M - 1} \cmod {\dfrac {z^k} {k!} \paren {1 - \prod_{j \mathop = 1}^{k- 1 } \paren {1 - \dfrac j n} } } + \sum_{k \mathop = M}^n \cmod {\dfrac {z^k} {k!} } \cmod {1 - \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} }\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^{M - 1} \cmod {\dfrac {z^k} {k!} \paren {1 - \prod_{j \mathop = 1}^{k - 1} \paren {1 - \dfrac j n} } } + \sum_{k \mathop = M}^n \cmod {\dfrac {z^k} {k!} }\)




















\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 1}^{M - 1} \dfrac \epsilon {2 M} + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









As an Absolutely Convergent Series is Convergent, $\sequence {s_n}$ converges.
Then:














\(\ds 0\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \cmod {s_n - a_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} s_n - \lim_{n \mathop \to +\infty} a_n\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {z^k} {k!} - \lim_{n \mathop \to +\infty} \paren {1 + \dfrac z n}^n\)









The result follows.
$\blacksquare$





