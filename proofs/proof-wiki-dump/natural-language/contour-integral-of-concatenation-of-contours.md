# 

Source: https://proofwiki.org/wiki/Contour_Integral_of_Concatenation_of_Contours

Theorem
Let $C$ and $D$ be contours in $\C$.
Suppose that the end point of $C$ is equal to the start point of $D$, so the concatenation $C \cup D$ is defined.
Let $f: \Img {C \cup D} \to \C$ be a continuous complex function, where $\Img {C \cup D}$ denotes the image of $C \cup D$.

Then:

$\ds \int \limits_{C \mathop \cup D} \map f z \rd z = \int \limits_C \map f z \rd z + \int \limits_D \map f z \rd z$


Proof
By definition of contour, $C$ is a finite sequence $C_1, \ldots, C_n$ of directed smooth curves.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Similarly, $D$ is a finite sequence $D_1, \ldots, D_m$ of directed smooth curves.
Let $D_j$ be parameterized by the smooth path $\sigma_j: \closedint {c_j} {d_j} \to \C$ for all $j \in \set {1, \ldots, m}$.
Put $\gamma_k = \sigma_{k - n}, a_k = c_{k - n}$ and $b_k = d_{k - n}$ for all $k \in \set {n + 1, \ldots, n + m}$.
Then $C \cup D$ is a sequence of $n + m$ directed smooth curves which are parameterized by $\gamma_1, \ldots, \gamma_{n + m}$.

Then:














\(\ds \int \limits_{C \mathop \cup D} \map f z \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n + m} \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t + \sum_{j \mathop = 1}^m \int_{c_j}^{d_j} \map f {\map {\sigma_j} t} \map {\sigma_j'} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int \limits_C \map f z \rd z + \int \limits_D \map f z \rd z\)





Definition of Complex Contour Integral



$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




