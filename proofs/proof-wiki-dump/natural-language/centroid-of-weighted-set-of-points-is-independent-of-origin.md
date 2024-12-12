# 

Source: https://proofwiki.org/wiki/Centroid_of_Weighted_Set_of_Points_is_Independent_of_Origin

Theorem
Let $O'$ be a point whose position vector from $O$ is $\mathbf l$.
Let $S = \set {A_1, A_2, \ldots, A_n}$ be a set of $n$ points in Euclidean space whose position vectors are given by $\mathbf a_1, \mathbf a_2, \dotsc, \mathbf a_n$ repectively.
Let $W: S \to \R$ be a weight function on $S$.

Let $G$ be the centroid of $S$ with weight function $W$:

$\vec {OG} = \dfrac {w_1 \mathbf a_1 + w_2 \mathbf a_2 + \dotsb + w_n \mathbf a_n} {w_1 + w_2 + \dotsb + w_n}$
where $w_i = \map W {A_i}$ for each $i$.

Let $\vec {OG'}$ be the centroid of $S$ with weight function $W$ with respect to $O'$.

Then:

$\vec {OG} - \mathbf l = \vec {OG'}$

That is, the centroid of $S$ with weight function $W$ is independent of the position of the origin.


Proof
The position vectors of the elements of $S$ are given by:

$\mathbf a_1 - \mathbf l, \mathbf a_2 - \mathbf l, \dotsc, \mathbf a_n - \mathbf l$
Hence the centroid of $S$ with weight function $W$ with respect to $O'$ ias:

$\vec {OG'} = \dfrac {w_1 \paren {\mathbf a_1 - \mathbf l} + w_2 \paren {\mathbf a_2 - \mathbf l} + \dotsb + w_n \paren {\mathbf a_n - \mathbf l} } {w_1 + w_2 + \dotsb + w_n}$













\(\ds \vec {OG'}\)

\(=\)







\(\ds \dfrac {w_1 \paren {\mathbf a_1 - \mathbf l} + w_2 \paren {\mathbf a_2 - \mathbf l} + \dotsb + w_n \paren {\mathbf a_n - \mathbf l} } {w_1 + w_2 + \dotsb + w_n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {w_1 \mathbf a_1 + w_2 \mathbf a_2 + \dotsb + w_n \mathbf a_n} {w_1 + w_2 + \dotsb + w_n} - \mathbf l\)




















\(\ds \)

\(=\)







\(\ds \vec {OG} - \mathbf l\)









$\blacksquare$


Sources
1921: C.E. Weatherburn: Elementary Vector Analysis ... (previous) ... (next): Chapter $\text I$. Addition and Subtraction of Vectors. Centroids: Centroids: $9$. Centroid, or centre of mean position




