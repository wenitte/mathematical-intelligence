# 

Source: https://proofwiki.org/wiki/Induced_Homomorphism_of_Polynomial_Forms/Proof_2

Theorem
Let $R$ and $S$ be commutative rings with unity.
Let $\phi: R \to S$ be a ring homomorphism.
Let $R \sqbrk X$ and $S \sqbrk X$ be the rings of polynomial forms over $R$ and $S$ respectively in the indeterminate $X$.
Then the map $\overline \phi: R \sqbrk X \to S \sqbrk X$ given by:

$\map {\overline \phi} {a_0 + a_1 X + \cdots + a_n X^n} = \map \phi {a_0} + \map \phi {a_1} X + \cdots + \map \phi {a_n} X^n$
is a ring homomorphism.


Proof
Let:

$f = a_0 + \cdots + a_n X^n$
$g = b_0 + \cdots + b_m X^m \in R \sqbrk X$
We have:














\(\ds \map {\overline \phi} f \map {\overline \phi} g\)

\(=\)







\(\ds \sqbrk {\map \phi {a_0} + \cdots + \map \phi {a_n} X^n} \sqbrk {\map \phi {b_0} + \cdots + \map \phi {b_m} X^m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^{m + n} \sum_{i \mathop + j \mathop = r} \map \phi {a_i} \map \phi {b_j} X^r\)





Definition of Multiplication of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^{m + n} \map \phi {\sum_{i \mathop + j \mathop = r} a_i b_j} X^r\)





because $\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map {\overline \phi} {f g}\)









and














\(\ds \map {\overline \phi} f + \map {\overline \phi} g\)

\(=\)







\(\ds \sqbrk {\map \phi {a_0} + \cdots + \map \phi {a_n} X^n} + \sqbrk {\map \phi {b_0} + \cdots + \map \phi {b_m} X^m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{\max \set {m, n} } \sqbrk {\map \phi {a_i} + \map \phi {b_i} } X^i\)





Definition of Addition of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{\max \set {m, n} } \map \phi {a_i + b_i} X^i\)





because $\phi$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map {\overline \phi} {f + g}\)









Thus $\overline \phi$ is a ring homomorphism.
$\blacksquare$





