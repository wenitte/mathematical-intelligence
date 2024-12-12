# 

Source: https://proofwiki.org/wiki/Dirichlet_Convolution_Preserves_Multiplicativity



Theorem
Let $f, g: \N \to \C$ be multiplicative arithmetic functions.

Then their Dirichlet convolution $f * g$ is again multiplicative.


General Result
Let $S \subset \N$ be a set of natural numbers with the property:

$m n \in S, \map \gcd {m, n} = 1 \implies m, n \in S$
Define:

$\map {\paren {f*_S g} } n = \ds \sum_{\substack {d \mathop \divides n \\ d \mathop \in S} } \map f d \map g {n / d}$

Then $f*_S g$ is multiplicative.


Proof
Let $m, n$ be coprime integers.
By definition of multiplicative functions, we have:

$(1): \quad \map f {m n} = \map f m \map f n$
$(2): \quad \map g {m n} = \map g m \map g n$













\(\ds \map {\paren {f * g} } {m n}\)

\(=\)







\(\ds \sum_{d \mathop \divides m n} \map f d \map g {\frac {m n} d}\)





Definition of Dirichlet Convolution














\(\ds \)

\(=\)







\(\ds \sum_{\substack {r \mathop \divides m \\ s \mathop \divides n} } \map f {r s} \map g {\frac m r \frac n s}\)





Divisors of Product of Coprime Integers














\(\ds \)

\(=\)







\(\ds \sum_{\substack {r \mathop \divides m \\ s \mathop \divides n} } \map f r \map f s \map g {\frac m r} \map g {\frac n s}\)





$f, g$ are multiplicative














\(\ds \)

\(=\)







\(\ds \paren {\sum_{r \mathop \divides m} \map f r \map g {\frac m r} } \paren {\sum_{s \mathop \divides n} \map f s \map g {\frac n s} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f * g} } m \times \map {\paren {f * g} } n\)





Definition of Dirichlet Convolution



$\blacksquare$


Also see
Properties of Dirichlet Convolution




