# 

Source: https://proofwiki.org/wiki/Differentiation_of_Exponential_of_a_x_by_Cosine_of_b_x_and_Exponential_of_a_x_by_Sine_of_b_x_wrt_x_as_Nonsingular_Matrix

Theorem
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

Then, with respect to basis $\tuple {f_1, f_2}$, $D$ is expressible as:

$\mathbf D = \begin {bmatrix} a & b \\ -b & a \end {bmatrix}$
and is nonsingular.


Proof













\(\ds \map D {f_1}\)

\(=\)







\(\ds \dfrac \d {\d x} \paren {\map \exp {a x} \map \cos {b x} }\)




















\(\ds \)

\(=\)







\(\ds a \map \exp {a x} \map \cos {b x} - b \map \exp {a x} \map \sin {b x}\)




















\(\ds \)

\(=\)







\(\ds a f_1 - b f_2\)






















\(\ds \map D {f_2}\)

\(=\)







\(\ds \dfrac \d {\d x} \paren {\map \exp {a x} \map \sin {b x} }\)




















\(\ds \)

\(=\)







\(\ds a \map \exp {a x} \map \sin {b x} + b \map \exp {a x} \map \cos{b x}\)




















\(\ds \)

\(=\)







\(\ds b f_1 + a f_2\)









Thus:














\(\ds \mathbf D \begin{bmatrix} \alpha_1 \\ \alpha_2 \end{bmatrix}\)

\(:=\)







\(\ds \map D {\alpha_1 f_1 + \alpha_2 f_2}\)




















\(\ds \)

\(=\)







\(\ds \alpha_1 \paren {a f_1 - b f_2} + \alpha_2 \paren {b f_1 + a f_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \alpha_1 + b \alpha_2} f_1 + \paren {-b \alpha_1 + a \alpha_2} f_2\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} a \alpha_1 + b \alpha_2 \\ -b \alpha_1 + a \alpha_2 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} a & b \\ -b & a \end{bmatrix} \begin{bmatrix} \alpha_1 \\ \alpha_2 \end{bmatrix}\)









Furthermore:

$\map \det {\mathbf D} = a^2 + b^2$.
By Matrix is Nonsingular iff Determinant has Multiplicative Inverse, $\mathbf D$ is nonsingular.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




