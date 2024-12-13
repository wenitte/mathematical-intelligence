# 

Source: https://proofwiki.org/wiki/Semi-Inner_Product/Examples/Sequences_with_Finite_Support



Example of Semi-Inner Product
Let $\GF$ be a subfield of $\C$.
Let $V$ be the vector space of sequences with finite support over $\GF$.

Let $\innerprod \cdot \cdot: V \times V \to \GF$ be the mapping defined by:

$\ds \innerprod {\sequence {a_n} } {\sequence {b_n} } = \sum_{n \mathop = 1}^\infty a_{2 n} \overline {b_{2 n} }$

Then $\innerprod \cdot \cdot$ is a semi-inner product on $V$ but not an inner product on $V$.


Proof
First of all, note that $V$ contains only the sequences with finite support.
Therefore, for each $\sequence {a_n}, \sequence{b_n}$ there exists $N \in \N$ such that:

$\forall n \ge N: a_n = b_n = 0$
and hence:

$\ds \innerprod {\sequence {a_n} } {\sequence {b_n} } = \sum_{n \mathop = 1}^\infty a_{2 n} \overline {b_{2 n} } = \sum_{n \mathop = 1}^{N / 2} a_{2 n} \overline {b_{2 n} }$
so that $\innerprod \cdot \cdot: V \times V \to \GF$ is indeed defined.

Now checking the axioms for a semi-inner product in turn:


$(1)$ Conjugate Symmetry













\(\ds \innerprod {\sequence {a_n} } {\sequence {b_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_{2 n} \overline { b_{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \overline {\overline {a_{2 n} } b_{2 n} }\)





Complex Conjugation is Involution














\(\ds \)

\(=\)







\(\ds \overline{ \sum_{n \mathop = 1}^\infty b_{2 n} \overline {a_{2 n} } }\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \overline{ \innerprod {\sequence {b_n} } {\sequence {a_n} } }\)









$\Box$


$(2)$ Sesquilinearity













\(\ds \innerprod {\sequence { \lambda a_n + b_n } } {\sequence {c_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren{ \lambda a_{2 n} + b_{2_n} } \overline {c_{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren{ \lambda a_{2 n} \overline{c_{2 n} } } + \paren{ b_{2 n} \overline {c_{2 n} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \lambda a_{2 n} \overline{c_{2 n} } + \sum_{n \mathop = 1}^\infty b_{2 n} \overline {c_{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \sum_{n \mathop = 1}^\infty a_{2 n} \overline{c_{2 n} } + \sum_{n \mathop = 1}^\infty b_{2 n} \overline {c_{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \innerprod {\sequence {a_n} } {\sequence {c_n} } + \innerprod {\sequence {b_n} } {\sequence {c_n} }\)









$\Box$


$(3)$ Non-Negative Definiteness













\(\ds \innerprod {\sequence {a_n} } {\sequence {a_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_{2 n} \overline {a_{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod{ a_{2 n} }^2\)





Product of Complex Number with Conjugate














\(\ds \)

\(\in\)







\(\ds \R_{\ge 0}\)









$\Box$
Hence $\innerprod \cdot \cdot$ is a semi-inner product.

Because any sequence $\sequence{a_n}$ such that $a_{2n} = 0$ for all $n \in \N$ will have:

$\innerprod {\sequence{a_n} } {\sequence{a_n} } = 0$
it follows that $\innerprod \cdot \cdot$ is not an inner product.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: Example $1.2$




