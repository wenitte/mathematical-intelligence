# 

Source: https://proofwiki.org/wiki/Contour_Integral_of_Closed_Contour_Split_into_Two_Contours



Theorem
Let $f: D \to \C$ be a continuous complex function, where $D$ is a connected domain.
Let $C = \sequence {C_1, \ldots, C_n}$ be a closed contour in $D$.
Let $C'$ be a contour in $D$ with start point $z_1$ and end point $z_2$.
Let $-C'$ denote the reversed contour of $C'$.

Suppose:

$z_1$ is equal to the end point of $C_{k_1}$
and:

$z_2$ is equal to the end point of $C_{k_2}$ for some $k_1, k_2 \in \set {1, 2, \ldots, n}$ with $k_1 < k_2$.
Define two contours $C^{\paren 1}, C^{\paren 2}$ by concatenation as 

$C^{\paren 1} = \sequence {C_1, \ldots, C_{k_1}, C', C_{k_2 + 1}, \ldots, C_n}$
$C^{\paren 2} = \sequence {C_{k_1 + 1}, \ldots, C_{k_2}, -C'}$

Then:

$\ds \oint_C \map f z \rd z = \oint_{C^{\paren 1} } \map f z \rd z + \oint_{C^{\paren 2} } \map f z \rd z$


Proof
By definition of closed contour, $C^{\paren 1}$ and $C^{\paren 2}$ are closed contours.
Then:














\(\ds \oint_C \map f z \rd z\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \int_{C_j} \map f z \rd z\)





Contour Integral of Concatenation of Contours














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \int_{C_j} \map f z \rd z + \int_{C'} \map f z \rd z + \int_{-C'} \map f z \rd z\)





Contour Integral along Reversed Contour














\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^{k_1} \int_{C_j} \map f z \rd z + \int_{C'} \map f z \rd z + \sum_{j \mathop = k_2 + 1}^n \int_{C_j} \map f z \rd z} + \paren {\sum_{j \mathop = k_1 + 1}^{k_2} \int_{C_j} \map f z \rd z + \int_{-C'} \map f z \rd z}\)




















\(\ds \)

\(=\)







\(\ds \oint_{C^{\paren 1} }\map f z \rd z + \oint_{C^{\paren 2} } \map f z \rd z\)





Contour Integral of Concatenation of Contours



$\blacksquare$


Also see
Goursat's Integral Lemma, for an illustration that shows how this theorem is used.
Cauchy-Goursat Theorem, for another illustration.


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.2$




