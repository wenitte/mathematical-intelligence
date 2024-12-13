# 

Source: https://proofwiki.org/wiki/Inner_Product/Examples/Sequences_with_Finite_Support



Example of Inner Product
Let $\GF$ be either $\R$ or $\C$.
Let $V$ be the vector space of sequences with finite support over $\GF$.
Let $f: \N \to \R_{>0}$ be a mapping.

Let $\innerprod \cdot \cdot: V \times V \to \GF$ be the mapping defined by:

$\ds \innerprod {\sequence {a_n} } {\sequence {b_n} } = \sum_{n \mathop = 1}^\infty \map f n a_n \overline{ b_n }$

Then $\innerprod \cdot \cdot$ is an inner product on $V$.


Proof
First of all, note that $V$ contains only the sequences with finite support.
Therefore, for each $\sequence {a_n}, \sequence{b_n}$ there exists $N \in \N$ such that:

$\forall n \ge N: a_n = b_n = 0$
and hence:

$\ds \innerprod {\sequence {a_n} } {\sequence {b_n} } = \sum_{n \mathop = 1}^\infty \map f n a_n \overline {b_n} = \sum_{n \mathop = 1}^{N-1} \map f n a_n \overline {b_n }$
so that $\innerprod \cdot \cdot: V \times V \to \GF$ is indeed defined.

Now checking the axioms for an inner product in turn:


$(1)$ Conjugate Symmetry













\(\ds \innerprod {\sequence {a_n} } {\sequence {b_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n a_n \overline { b_n }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \overline {\map f n \overline {a_n} b_n }\)





Complex Conjugation is Involution, $\map f n$ is wholly real














\(\ds \)

\(=\)







\(\ds \overline{ \sum_{n \mathop = 1}^\infty \map f n b_n \overline {a_n} }\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \overline{ \innerprod {\sequence {b_n} } {\sequence {a_n} } }\)









$\Box$


$(2)$ Sesquilinearity













\(\ds \innerprod {\sequence { \lambda a_n + b_n } } {\sequence {c_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n \paren{ \lambda a_n + b_n } \overline {c_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren{ \map f n \lambda a_n \overline{c_n} } + \paren{ \map f n b_n \overline {c_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n \lambda a_n \overline{c_n} + \sum_{n \mathop = 1}^\infty \map f n b_n \overline {c_n}\)




















\(\ds \)

\(=\)







\(\ds \lambda \sum_{n \mathop = 1}^\infty \map f n a_n \overline{c_n} + \sum_{n \mathop = 1}^\infty \map f n b_n \overline {c_n}\)




















\(\ds \)

\(=\)







\(\ds \lambda \innerprod {\sequence {a_n} } {\sequence {c_n} } + \innerprod {\sequence {b_n} } {\sequence {c_n} }\)









$\Box$


$(3)$ Non-Negative Definiteness













\(\ds \innerprod {\sequence {a_n} } {\sequence {a_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n a_n \overline {a_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map f n \cmod{ a_n }^2\)





Product of Complex Number with Conjugate














\(\ds \)

\(\in\)







\(\ds \R_{\ge 0}\)









$\Box$


$(4)$ Positivity
Suppose that $\innerprod { \sequence{a_n} } { \sequence{a_n} } = 0$.
That is:

$\ds \sum_{n \mathop = 1}^\infty \map f n \cmod{ a_n }^2 = 0$
For each $n \in \N$, we have $\map f n \cmod{ a_n }^2 \ge 0$.
Hence, for each $n \in \N$:

$\ds \sum_{n \mathop = 1}^\infty \map f n \cmod{ a_n }^2 \ge \map f n \cmod{ a_n }^2$
Thus for each $n \in \N$:

$\map f n \cmod{ a_n }^2 = 0$
Since $\map f n > 0$ it follows that $\cmod{ a_n }^2 = 0$.
Therefore $a_n = 0$ for all $n \in \N$.
$\Box$

Having verified all the axioms, we conclude $\innerprod \cdot \cdot$ is an inner product.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: Example $1.2$




