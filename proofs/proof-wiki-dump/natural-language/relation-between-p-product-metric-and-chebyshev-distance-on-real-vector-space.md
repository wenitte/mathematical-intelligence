# 

Source: https://proofwiki.org/wiki/Relation_between_P-Product_Metric_and_Chebyshev_Distance_on_Real_Vector_Space

Theorem
For $n \in \N$, let $\R^n$ be a Euclidean space.
Let $p \in \R_{\ge 1}$.
Let $d_p$ be the $p$-product metric on $\R^n$. 
Let $d_\infty$ be the Chebyshev distance on $\R^n$.

Then

$\forall x, y \in \R^n: \map {d_\infty} {x, y} \le \map {d_p} {x, y} \le n^{1/p} \map {d_\infty} {x, y}$


Proof
By definition of the Chebyshev distance on $\R^n$, we have:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \size {x_i - y_i}$
where $x = \tuple {x_1, x_2, \ldots, x_n}$ and $y = \tuple {y_1, y_2, \ldots, y_n}$.
Let $j$ be chosen so that:

$\ds \size {x_j - y_j} = \max_{i \mathop = 1}^n \size {x_i - y_i}$
Then:














\(\ds \map {d_\infty} {x, y}\)

\(=\)







\(\ds \paren {\size {x_j - y_j}^p}^{1/p}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^p}^{1/p}\)





Power of Maximum is not Greater than Sum of Powers














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, y}\)




















\(\ds \)

\(\le\)







\(\ds \paren {n \size {x_j - y_j}^p}^{1/p}\)





Sum of $r$ Powers is not Greater than $r$ times Power of Maximum














\(\ds \)

\(=\)







\(\ds n^{1/p} \size {d_\infty} {x, y}\)









$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Exercise $3$




