# 

Source: https://proofwiki.org/wiki/Real_Vector_Space_with_Dot_Product_is_Hilbert_Space

Theorem
Let $\R^d$ be a real vector space with $d$ dimensions.
Let $\innerprod \cdot \cdot$ be the dot product on $\R^d$.

Then $\R^d$ endowed with $\innerprod \cdot \cdot$ is a Hilbert space.


Proof
Let us explore the inner product norm of $\innerprod \cdot \cdot$:

$\ds \norm x = \sqrt{ \sum_{i \mathop = 1}^d x_i^2 }$
and subsequently the metric induced by $\norm \cdot$:

$\ds \map d {x, y} = \norm {x - y} = \sqrt{ \sum_{i \mathop = 1}^d \paren{ x_i - y_i }^2 }$
which is seen to be the definition of the Euclidean metric.

By Euclidean Space is Complete Metric Space, it follows that $\R^d$ is complete with respect to $d$.
That is, $\R^d$ is a Hilbert space.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples




