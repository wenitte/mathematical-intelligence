# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Banach_Spaces_is_Banach_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces.
Let $V = X \times Y$ be a direct product of vector spaces $X$ and $Y$ together with induced component-wise operations.
Let $\norm {\, \cdot \,}_{X \times Y}$ be the direct product norm.
Suppose $X$ and $Y$ are Banach spaces.

Then $V$ is a Banach space.


Proof
Let $\sequence {\tuple {x_n, y_n}}_{n \mathop \in \N}$ be a Cauchy sequence in $V$:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall m, n \in \N: m, n > N: \norm {\tuple {x_n, y_n} - \tuple {x_m, y_m} }_{X \times Y} < \epsilon$
We have that:














\(\ds \norm {x_n - x_m}_X\)

\(\le\)







\(\ds \map \max {\norm {x_n - x_m}_X, \norm {y_n - y_m}_Y }\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {x_n - x_m, y_n - y_m} }_{X \times Y}\)





Definition of Direct Product Norm














\(\ds \)

\(=\)







\(\ds \norm {\tuple {x_n, y_n} - \tuple {x_m, y_m} }_{X \times Y}\)





induced component-wise operations














\(\ds \)

\(<\)







\(\ds \epsilon\)









Hence, $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy sequence in $X$.
By assumption, $X$ is a Banach space.
Therefore, $\sequence {x_n}_{n \mathop \in \N}$ converges to $x \in X$.
By analogous arguments, $\sequence {y_n}_{n \mathop \in \N}$ converges to $y \in Y$.
So, by Convergence in Direct Product Norm, we have: 

$\sequence {\tuple {x_n, y_n}}_{n \mathop \in \N}$ converges to $\tuple {x, y}$.
By definition, $V$ is a Banach space.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




