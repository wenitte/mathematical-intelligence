# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Arithmetic_Mean



Theorem
Let $D = \set {x_0, x_1, x_2, \ldots, x_n}$ be a set of real data describing a quantitative variable.
Let $\overline x$ be the arithmetic mean of the data in $D$.
Let $T: \R \to \R$ be a linear transformation such that:

$\forall i \in \set {0, 1, \ldots, n}: \map T {x_i} = \lambda x_i + \gamma$

Let $T \sqbrk D$ be the image of $D$ under $T$.

Then the arithmetic mean of the data in $T \sqbrk D$ is given by:

$\map T {\overline x} = \lambda \overline x + \gamma$


Proof 1
Follows from the definition of arithmetic mean and from Summation is Linear.
$\blacksquare$


Proof 2
This is a direct application of Expectation is Linear.
$\blacksquare$


Sources
2011: Charles Henry Brase and Corrinne Pellillo Brase: Understandable Statistics (10th ed.): $\S 5.1$




