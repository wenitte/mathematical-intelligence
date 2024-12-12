# 

Source: https://proofwiki.org/wiki/Bound_on_Total_Variation_of_Scalar-Valued_Measure_associated_with_Resolution_of_the_Identity

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
For each $x, y \in \HH$, define $\EE_{x, y} : \map \BB X \to \C$ by:

$\map {\EE_{x, y} } A = \innerprod {\map \EE A x} y$
for each $A \in \map \BB X$.
Let $\norm {\EE_{x, y} }$ denote the total variation of $\EE_{x, y}$. 

Then:

$\norm {\EE_{x, y} } \le \norm x \norm y$


Proof
Let $\map P X$ be the set of finite partitions of $X$ into $\map \BB X$-measurable sets.
We have:














\(\ds \norm {\EE_{x, y} }\)

\(=\)







\(\ds \map {\cmod {\EE_{x, y} } } X\)





Definition of Total Variation: Measure Theory: Complex Measure














\(\ds \)

\(=\)







\(\ds \sup \set {\sum_{j \mathop = 1}^n \cmod {\map {\EE_{x, y} } {S_j} } : \set {S_1, \ldots, S_n} \in \map P X}\)









Let $\set {S_1, S_2, \ldots, S_n} \in \map P X$.
We have:

$\ds \sum_{j \mathop = 1}^n \cmod {\map {\EE_{x, y} } {S_j} } = \sum_{j \mathop = 1}^n \cmod {\innerprod {\map \EE {S_j} x} y}$
Let $\alpha_j \in \C$ be such that $\cmod {\alpha_j} = 1$ and:

$\cmod {\innerprod {\map \EE {S_j} x} y} = \alpha_j \innerprod {\map \EE {S_j} x} y$
We then have:














\(\ds \sum_{j \mathop = 1}^n \cmod {\innerprod {\map \EE {S_j} x} y}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \alpha_j \innerprod {\map \EE {S_j} x} y\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\sum_{j \mathop = 1}^n \alpha_j \map \EE {S_j} x} y\)




















\(\ds \)

\(\le\)







\(\ds \norm {\sum_{j \mathop = 1}^n \alpha_j \map \EE {S_j} x} \norm y\)





Cauchy-Bunyakovsky-Schwarz Inequality: Inner Product Spaces



Since $\set {S_1, S_2, \ldots, S_n}$ is a partition, we have $S_i \cap S_j = \O$ for $i \ne j$. 
Hence from Orthogonality of Resolution of the Identity evaluated at Disjoint Sets, we have:

$\innerprod {\map \EE {S_i} x} {\map \EE {S_j} x} = 0$ for $i \ne j$.
We then have:














\(\ds \norm {\sum_{j \mathop = 1}^n \alpha_j \map \EE {S_j} x}^2\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \norm {\alpha_j \map \EE {S_j} x}^2\)





Pythagoras's Theorem (Inner Product Space)














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \norm {\map \EE {S_j} x}^2\)





$\cmod {\alpha_j} = 1$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \map {\EE_{x, x} } {S_j}\)




















\(\ds \)

\(=\)







\(\ds \map {\EE_{x, x} } {\bigcup_{j \mathop = 1}^n S_j}\)





$(5)$ in Definition of Resolution of the Identity














\(\ds \)

\(=\)







\(\ds \map {\EE_{x, x} } X\)





Definition of Set Partition














\(\ds \)

\(=\)







\(\ds \innerprod {\map \EE X x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod x x\)





$(1)$ in Definition of Resolution of the Identity














\(\ds \)

\(=\)







\(\ds \norm x^2\)





Definition of Inner Product Norm



and hence:

$\ds \norm {\sum_{j \mathop = 1}^n \alpha_j \map \EE {S_j} x} = \norm x$
Hence we have:

$\ds \norm {\sum_{j \mathop = 1}^n \alpha_j \map \EE {S_j} x} \norm y = \norm x \norm y$
Hence we have:

$\ds \sum_{j \mathop = 1}^n \cmod {\map {\EE_{x, y} } {S_j} } \le \norm x \norm y$
Taking the supremum over $\set {S_1, \ldots, S_n} \in \map P X$ we obtain:

$\norm {\EE_{x, y} } \le \norm x \norm y$
$\blacksquare$





