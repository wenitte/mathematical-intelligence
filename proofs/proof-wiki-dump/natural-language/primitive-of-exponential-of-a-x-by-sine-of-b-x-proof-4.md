# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Sine_of_b_x/Proof_4

Theorem
$\ds \int e^{a x} \sin b x \rd x = \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C$


Proof
Let $a, b, x \in \R$ be real numbers.
Suppose $a \ne 0 \ne b$.

Let $f_1$ and $f_2$ be the real functions defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \map {f_1} x\)

\(=\)







\(\ds \map \exp {a x} \map \cos {b x}\)




















\(\ds \map {f_2} x\)

\(=\)







\(\ds \map \exp {a x} \map \sin {b x}\)










Let $\map \CC \R$ be the space of continuous real-valued functions.
Let $\struct {\map {\CC^1} \R, +, \, \cdot \,}_\R$ be the vector space of continuously differentiable real-valued functions.
Let $S = \span \set {f_1, f_2} \subset \map {\CC^1} \R$ be a vector space.
Let $D : S \to S$ be the derivative with respect to $x$.
From Differentiation of Exponential of a x by Cosine of b x and Exponential of a x by Sine of b x wrt x as Nonsingular Matrix, $D$ is expressible as:

$\mathbf D = \begin {bmatrix} a & b \\ -b & a \end {bmatrix}$
and is nonsingular.
By Inverse of Matrix is Scalar Product of Adjugate by Reciprocal of Determinant:

$\mathbf D^{-1} = \dfrac 1 {a^2 + b^2} \begin {bmatrix} a & -b \\ b & a \end{bmatrix}$

Then:














\(\ds \mathbf D^{-1} \begin {bmatrix} 0 \\ 1 \end {bmatrix}\)

\(=\)







\(\ds \dfrac 1 {a^2 + b^2} \begin {bmatrix} a & -b \\ b & a \end {bmatrix} \begin {bmatrix} 0 \\ 1 \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2 + b^2} \begin {bmatrix} -b \\ a \end {bmatrix}\)










Application of $\mathbf D$ on both sides on the left and writing out explicitly in terms of $f_1$ and $f_2$ yields:

$f_2 = \ds \dfrac \d {\d x} \frac {-b f_1 + a f_2} {a^2 + b^2}$
Integrate with respect to $x$:

$\ds \int f_2 \rd x = \frac {-b f_1 + a f_2} {a^2 + b^2} + C$
where $C$ is an arbitrary constant.
Substitute definitions of $f_1$ and $f_2$ to get the desired result.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




