# 

Source: https://proofwiki.org/wiki/Centroid_of_Combined_Systems_of_Weighted_Points

Theorem
Let $O'$ be a point whose position vector from $O$ is $\mathbf l$.
Let $S = \set {A_1, A_2, \ldots, A_n}$ be a set of $n$ points in Euclidean space.
Let $W_S: S \to \R$ be a weight function on $S$.
Let $T = \set {B_1, B_2, \ldots, B_m}$ be a set of $m$ points in Euclidean space.
Let $W_T: T \to \R$ be a weight function on $T$.

Let $H$ be the centroid of $S$ with weight function $W_S$.
Let $H'$ be the centroid of $T$ with weight function $W_T$.

Then the centroid of $S \cup T$ with weight function $W_S \cup W_T$ is the centroid of the two points $H$ and $H'$ with weights $\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i}$ and $\ds \sum_{i \mathop = 1}^m \map {W_T} {B_m}$ respectively.


Proof
Let the position vectors of the points in $S = \set {A_1, A_2, \ldots, A_n}$ be given by $\mathbf a_1, \mathbf a_2, \dotsc, \mathbf a_n$ repectively.
Let the position vectors of the points in $T = \set {B_1, B_2, \ldots, B_m}$ be given by $\mathbf b_1, \mathbf b_2, \dotsc, \mathbf b_n$ repectively.

We have that:

$\vec OH = \dfrac {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} \mathbf a_i} {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} }$
and:

$\vec OH' = \dfrac {\ds \sum_{i \mathop = 1}^m \map {W_T} {B_i} \mathbf b_i} {\ds \sum_{i \mathop = 1}^m \map {W_T} {B_i} }$

Let $\vec OG$ denote the centroid of the two points $H$ and $H'$ with weights $\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i}$ and $\ds \sum_{i \mathop = 1}^m \map {W_T} {B_m}$ respectively.
Then:














\(\ds \vec OG\)

\(=\)







\(\ds \dfrac {\paren {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} } \vec {OH} + \paren {\ds \sum_{i \mathop = 1}^m \map {W_T} {B_i} } \vec {OH'} } {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} + \ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} \mathbf a_i + \ds \sum_{i \mathop = 1}^m \map {W_T} {B_i} \mathbf b_i} {\ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} + \ds \sum_{i \mathop = 1}^n \map {W_S} {A_i} }\)









Hence the result.
$\blacksquare$


Sources
1921: C.E. Weatherburn: Elementary Vector Analysis ... (previous) ... (next): Chapter $\text I$. Addition and Subtraction of Vectors. Centroids: Centroids: $9$. Centroid, or centre of mean position




