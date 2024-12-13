# 

Source: https://proofwiki.org/wiki/Pythagoras%27s_Theorem_(Inner_Product_Space)



Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $\norm \cdot$ be the inner product norm on $\struct {V, \innerprod \cdot \cdot}$. 
Let $f_1, \ldots, f_n \in V$ form an orthogonal set.

Then:

$\ds \norm {\sum_{i \mathop = 1}^n f_i}^2 = \sum_{i \mathop = 1}^n \norm {f_i}^2$


Proof













\(\ds \norm {\sum_{i \mathop = 1}^n f_i}^2\)

\(=\)







\(\ds \innerprod {\sum_{i \mathop = 1}^n f_i} {\sum_{j \mathop = 1}^n f_j}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \innerprod {f_i} {f_j}\)





since the Inner Product is linear in the first argument














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \begin {cases} \innerprod {f_i} {f_i} & i = j \\ 0 & i \ne j \end {cases}\)





the $f_i$ are pairwise orthogonal














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \norm {f_i}^2\)





Definition of Inner Product Norm



$\blacksquare$


Also see
Pythagoras's Theorem, the well-known instance of this theorem with $V = \R^2$ and the usual inner product.


Source of Name
This entry was named for Pythagoras of Samos.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: $2.2$ The Pythagorean Theorem




