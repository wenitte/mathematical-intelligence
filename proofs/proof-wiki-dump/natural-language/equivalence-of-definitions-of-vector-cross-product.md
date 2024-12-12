# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Vector_Cross_Product



Theorem
The following definitions of the concept of Vector Cross Product are equivalent:

Definition 1
The vector cross product, denoted $\mathbf a \times \mathbf b$, is defined as:

$\mathbf a \times \mathbf b = \begin{vmatrix}
\mathbf i & \mathbf j & \mathbf k \\
a_i & a_j & a_k \\
b_i & b_j & b_k \\
\end{vmatrix}$
where $\begin {vmatrix} \ldots \end {vmatrix}$ is interpreted as a determinant.
More directly:

$\mathbf a \times \mathbf b = \paren {a_j b_k - a_k b_j} \mathbf i - \paren {a_i b_k - a_k b_i} \mathbf j + \paren {a_i b_j - a_j b_i} \mathbf k$
Definition 2
The vector cross product, denoted $\mathbf a \times \mathbf b$, is defined as:

$\mathbf a \times \mathbf b = \norm {\mathbf a} \norm {\mathbf b} \sin \theta \, \mathbf {\hat n}$
where:

$\norm {\mathbf a}$ denotes the length of $\mathbf a$
$\theta$ denotes the angle from $\mathbf a$ to $\mathbf b$, measured in the positive direction
$\hat {\mathbf n}$ is the unit vector perpendicular to both $\mathbf a$ and $\mathbf b$ in the direction according to the right-hand rule.


Proof
Let $\mathbf a \times \mathbf b$ be a vector cross product by definition $2$.
Then by definition:

$(1): \quad \mathbf a \times \mathbf b = \norm {\mathbf a} \norm {\mathbf b} \sin \theta \, \mathbf {\hat n}$
By Angle Between Vectors in Terms of Dot Product:

$\cos \theta = \ds \frac {\mathbf a \cdot \mathbf b} {\norm {\mathbf a} \norm {\mathbf b} }$

Note that $\theta$ is measured from $0$ to $\pi$.
If $\dfrac \pi 2 < \theta < \pi$, the dot product is negative and it exists in quadrant $2$.
The sine ratio is unaltered.
This gives:














\(\ds \sin \theta\)

\(=\)







\(\ds \frac {\sqrt {\paren {\norm {\mathbf a} \norm {\mathbf b} }^2 - \paren {\mathbf a \cdot \mathbf b}^2} } {\norm {\mathbf a} \norm {\mathbf b} }\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf a \times \mathbf b\)

\(=\)







\(\ds \norm {\mathbf a} \norm {\mathbf b} \ds \frac {\sqrt {\paren {\norm {\mathbf a} \norm {\mathbf b} }^2 - \paren {\mathbf a \cdot \mathbf b}^2} } {\norm {\mathbf a} \norm {\mathbf b} } \mathbf {\hat n}\)





substituting for $\sin \theta$ in $(1)$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\norm {\mathbf a} \norm {\mathbf b} }^2 - \paren {\mathbf a \cdot \mathbf b}^2} \mathbf {\hat n}\)





cancelling




This page has been identified as a candidate for refactoring of advanced complexity.In particular: There are clear parallels with Square of Norm of Vector Cross Product; can we extract and abstract and merge?Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

Next we have:














\(\ds \paren {\norm {\mathbf a} \norm {\mathbf b} }^2\)

\(=\)







\(\ds \paren {\sqrt { {a_i}^2 + {a_j}^2 + {a_k}^2} \sqrt { {b_i}^2 + {b_j}^2 + {b_k}^2} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren { {a_i}^2 + {a_j}^2 + {a_k}^2} \paren { {b_i}^2 + {b_j}^2 + {b_k} ^2}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds {a_i}^2 {b_i}^2 + {a_i}^2 {b_j}^2 + {a_i}^2 {b_k}^2 + {a_j}^2 {b_i}^2 + {a_j}^2 {b_j}^2 + {a_j}^2 {b_k}^2 + {a_k}^2 {b_i}^2 + {a_k}^2 {b_j}^2 + {a_k}^2 {b_k}^2\)










Then:














\(\ds \paren {\mathbf a \cdot \mathbf b}^2\)

\(=\)







\(\ds \paren {a_i b_i + a_j b_j + a_k b_k}^2\)





Definition of Dot Product




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds {a_i}^2 {b_1}^2 + 2 a_i b_i a_j b_j + {a_j}^2 {b_j}^2 + 2 a_i b_i a_k b_k + {a_k}^2 {b_k}^2 + 2 a_j b_j a_k b_k\)





multiplying out



Hence:














\(\ds \paren {\norm {\mathbf a} \norm {\mathbf b} }^2 - \paren {\mathbf a \cdot \mathbf b}^2\)

\(=\)







\(\ds \paren { {a_i}^2 {b_i}^2 + {a_i}^2 {b_j}^2 + {a_i}^2 {b_k}^2 + {a_j}^2 {b_i}^2 + {a_j}^2 {b_j}^2 + {a_j}^2 {b_k}^2 + {a_k}^2 {b_i}^2 + {a_k}^2 {b_j}^2 } - \paren { {a_i}^2 {b_1}^2 + 2 a_i b_i a_j b_j + {a_j}^2 {b_j}^2 + 2 a_i b_i a_k b_k + {a_k}^2 {b_k}^2 + 2 a_j b_j a_k b_k}\)





subtracting $(4)$ from $(3)$














\(\ds \)

\(=\)







\(\ds \paren { {a_i}^2 {b_j}^2 - 2 a_i b_i a_j b_j + {a_j}^2 {b_i}^2} + \paren { {a_k}^2 {b_i}^2 - 2 a_j b_j a_k b_k + {a_i}^2 {b_k}^2} + \paren { {a_j}^2 {b_k}^2 - 2 a_j b_j a_k b_k + {a_k}^2 {b_j}^2}\)





rearranging














\(\ds \)

\(=\)







\(\ds \paren {a_i b_j - a_j b_i}^2 + \paren {a_k b_i - a_i b_k}^2 + \paren {a_j b_k - a_k b_j}^2\)





Square of Difference



To simplify subsequent algebra, let us define $u$:














\(\ds u\)

\(:=\)







\(\ds \paren {\norm {\mathbf a} \norm {\mathbf b} }^2 - \paren {\mathbf a \cdot \mathbf b}^2\)










\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \mathbf a \times \mathbf b\)

\(=\)







\(\ds \sqrt u \, \mathbf {\hat n}\)





substituting back into $(2)$




Let $\mathbf {\hat n} = \begin {bmatrix} n_i \\ n_j \\ n_k \end {bmatrix}$
Now, by definition $2$ of the cross product:














\(\ds \norm {\mathbf {\hat n} }\)

\(=\)







\(\ds 1\)





by hypothesis














\(\ds \mathbf {\hat n} \cdot \mathbf a\)

\(=\)







\(\ds 0\)





Dot Product of Perpendicular Vectors














\(\ds \mathbf {\hat n} \cdot \mathbf b\)

\(=\)







\(\ds 0\)





Dot Product of Perpendicular Vectors




Hence by definition of dot product:




\(\text {(6)}: \quad\)









\(\ds \sqrt { {n_i}^2 + {n_j}^2 + {n_k}^2}\)

\(=\)







\(\ds 1\)










\(\text {(7)}: \quad\)









\(\ds n_i a_i + n_j a_j + n_k a_k\)

\(=\)







\(\ds 0\)










\(\text {(8)}: \quad\)









\(\ds n_i b_i + n_j b_j + n_k b_k\)

\(=\)







\(\ds 0\)










\(\text {(9)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds n_i\)

\(=\)







\(\ds \frac {-n_j a_j - n_k a_k} {a_i}\)





from $(7)$








\(\ds \leadsto \ \ \)





\(\ds \frac {-n_j a_j b_i} {a_i} - \frac {n_k a_k b_i} {a_i} + n_j b_j + n_k b_k\)

\(=\)







\(\ds 0\)





substituting into $(8)$








\(\ds \leadsto \ \ \)





\(\ds n_j \paren {\frac {a_i b_j - a_j b_i} {a_i} }\)

\(=\)







\(\ds n_k \paren {\frac {a_k b_i - a_i b_k} {a_i} }\)





splitting fractions and distributing $b_i$




\(\text {(10)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds n_j\)

\(=\)







\(\ds n_k \paren {\frac {a_k b_i - a_i b_k} {a_i b_j - a_j b_i} }\)





multiplying both sides by $\dfrac {a_i} {a_i b_j - a_j b_i}$








\(\ds \leadsto \ \ \)





\(\ds n_i\)

\(=\)







\(\ds \frac {-n_k \paren {\dfrac {a_k b_i - a_i b_k} {a_i b_j - a_j b_i} } a_j - n_k a_k} {a_i}\)





substituting into $(9)$














\(\ds \)

\(=\)







\(\ds n_k \paren {\dfrac {a_j a_i b_k - a_j b_i a_k - a_k a_i b_j + a_k b_i a_j} {a_i b_j - a_j b_i} } \paren {\frac 1 {a_i} }\)




















\(\ds \)

\(=\)







\(\ds n_k \paren {\dfrac {a_i \paren {a_j b_k - a_k b_j} } {a_i b_j - a_j b_i} } \paren {\frac 1 {a_i} }\)










\(\text {(11)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds n_i\)

\(=\)







\(\ds n_k \paren {\frac {a_j b_k - a_k b_j} {a_i b_j - a_j b_i} }\)










Then:














\(\ds \sqrt {\paren {n_k \paren {\frac {a_j b_k - a_k b_j} {a_i b_j - a_j b_i} } }^2 + \paren {n_k \paren {\frac {a_k b_i - a_i b_k} {a_i b_j - a_j b_i} } }^2 + \paren {n_k \paren {\frac {a_i b_j - a_j b_i} {a_i b_j - a_j b_i} } }^2}\)

\(=\)







\(\ds 1\)





substituting from $(10)$ and $(11)$ into $(6)$








\(\ds \leadsto \ \ \)





\(\ds \sqrt { {n_k}^2 \paren {\frac {\paren {a_j b_k - a_k b_j}^2 + \paren {a_k b_i - a_i b_k}^2 + \paren {a_i b_j - a_j b_i}^2} {\paren {a_i b_j - a_j b_i}^2} } }\)

\(=\)







\(\ds 1\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds n_k \paren {\frac {\sqrt u} {a_i b_j - a_j b_i} }\)

\(=\)







\(\ds 1\)





as the numerator is $u$




\(\text {(12)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds n_k\)

\(=\)







\(\ds \frac {a_i b_j - a_j b_i} {\sqrt u}\)










Substituting from $(12)$ into $(11)$:














\(\ds n_i\)

\(=\)







\(\ds \frac {a_i b_j - a_j b_i} {\sqrt u} \paren {\frac {a_j b_k - a_k b_j} {a_i b_j - a_j b_i} }\)










\(\text {(13)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {a_j b_k - a_k b_j} {\sqrt u}\)









and from $(12)$ into $(10)$:














\(\ds n_j\)

\(=\)







\(\ds \frac {a_i b_j - a_j b_i} {\sqrt u} \paren {\frac {a_k b_i - a_i b_k} {a_i b_j - a_j b_i} }\)










\(\text {(14)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {a_k b_i - a_i b_k} {\sqrt u}\)










Hence from $(12)$, $(13)$ and $(14)$ we have the components of $\mathbf {\hat n}$:














\(\ds \mathbf {\hat n}\)

\(=\)







\(\ds \begin {bmatrix} \dfrac {a_j b_k - a_k b_j} {\sqrt u} \\ \dfrac {a_k b_i - a_i b_k} {\sqrt u} \\ \dfrac {a_i b_j - a_j b_i} {\sqrt u} \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt u} \begin {bmatrix} a_j b_k - a_k b_j \\ a_k b_i - a_i b_k \\ a_i b_j - a_j b_i \end {bmatrix}\)










Substituting back into $(5)$:














\(\ds \mathbf a \times \mathbf b\)

\(=\)







\(\ds \sqrt u \frac 1 {\sqrt u} \begin {bmatrix} a_j b_k - a_k b_j \\ a_k b_i - a_i b_k \\ a_i b_j - a_j b_i \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} a_j b_k - a_k b_j \\ a_k b_i - a_i b_k \\ a_i b_j - a_j b_i \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_j b_k - a_k b_j} \mathbf i + \paren {a_k b_i - a_i b_k} \mathbf j + \paren {a_i b_j - a_j b_i} \mathbf k\)





in component form














\(\ds \)

\(=\)







\(\ds \paren {a_j b_k - a_k b_j} \mathbf i - \paren {a_i b_k - a_k b_i} \mathbf j + \paren {a_i b_j - a_j b_i}\mathbf k\)









Hence the result.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $6$. Application to Vector Products
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 3$: $(9)$




