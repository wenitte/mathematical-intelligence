# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_Banach_*-Algebra_is_Bounded_if_Bounded_on_Hermitian_Elements

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ be a Banach $\ast$-algebra.
Let $\struct {B, \norm {\, \cdot \,}_B}$ be a normed vector space over $\C$.
Let $T : A \to B$ be a linear transformation such that there exists $M > 0$ with:

$\norm {T x}_B \le M \norm x_A$ for each $x \in A$ Hermitian.

Then $T$ is bounded.


Proof
Let $x \in A$.
From Element of *-Algebra Uniquely Decomposes into Hermitian Elements, we have:

$x = \map \Re x + i \map \Im x$
where $\map \Re x$ and $\map \Im x$ are Hermitian.
Then we have:














\(\ds \norm {T x}_B\)

\(=\)







\(\ds \norm {\map T {\map \Re x} + i \map T {\map \Im x} }_B\)





Definition of Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {\map T {\map \Re x} } + \norm {\map T {\map \Im x} }_B\)





Norm Axiom $\text N 2$: Positive Homogeneity, Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds M \norm {\map \Re x}_A + M \norm {\map \Im x}_A\)




















\(\ds \)

\(\le\)







\(\ds M \norm x_A + M \norm x_A\)





Bound on Norm of Real and Imaginary Parts of Element of Banach *-Algebra














\(\ds \)

\(=\)







\(\ds 2 M \norm x_A\)









Hence $T$ is bounded.
$\blacksquare$





