# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Cosine_of_b_x



Theorem
$\ds \int e^{a x} \cos b x \rd x = \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} + C$


Proof 1













\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \cos b x} a + \frac b a \int e^{a x} \sin b x \rd x\)





Primitive of $e^{a x} \cos b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos b x} a + \frac b a \paren {\frac {e^{a x} \sin b x} a - \frac b a \int e^{a x} \cos b x \rd x}\)





Primitive of $e^{a x} \sin b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} a \cos b x + e^{a x} b \sin b x} {a^2} - \frac {b^2} {a^2} \int e^{a x} \cos b x \rd x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {b^2} {a^2} } \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {a^2 + b^2} {a^2} \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2}\)





common denominator








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)





multiplying by $\dfrac {a^2} {a^2 + b^2}$



$\blacksquare$


Proof 2













\(\ds \int e^{a x} e^{i b x} \rd x\)

\(=\)







\(\ds i \int e^{a x} \sin b x \rd x + \int e^{a x} \cos b x \rd x\)





Euler's Formula








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \map \Re {\int e^{\paren {a + i b} x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\frac {e^{\paren {a + i b} x} } {a + i b} } + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {\paren {a - i b}  e^{\paren {a + i b} x} } {a^2 + b^2} } + C\)





multiplying through by $\dfrac {a - i b} {a - i b}$














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {i a e^{a x} \sin b x + a e^{a x} \cos b x - i b \paren {i e^{a x} \sin b x + e^{a x} \cos b x} } {a^2 + b^2} } + C\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \map \Re {\frac {i \paren {a e^{a x} \sin b x - b e^{a x} \cos b x} + \paren {a e^{a x} \cos b x + b e^{a x} \sin b x} } { a^2 + b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} + C\)





isolating real part



$\blacksquare$


Proof 3
Let $a, b \in \R_{>0}$ be real constants.
Let $f_1$ and $f_2$ be the real functions defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \map {f_1} x\)

\(=\)







\(\ds \map \exp {a x} \map \cos {b x}\)




















\(\ds \map {f_2} x\)

\(=\)







\(\ds \map \exp {a x} \map \sin {b x}\)









Let $\map \CC \R$ denote the space of continuous real-valued functions.
Let $\struct {\map {\CC^1} \R, +, \, \cdot \,}_\R$ denote the vector space of continuously differentiable real-valued functions.
Let $S = \span \set {f_1, f_2} \subset \map {\CC^1} \R$ be a vector space.


This article, or a section of it, needs explaining.In particular: $\span \set {f_1, f_2}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $D : S \to S$ be the derivative with respect to $x$.

From Differentiation of Exponential of a x by Cosine of b x and Exponential of a x by Sine of b x wrt x as Nonsingular Matrix, $D$ is expressible as:

$\mathbf D = \begin {bmatrix} a & b \\ -b & a \end {bmatrix}$
and is nonsingular.
By Inverse of Matrix is Scalar Product of Adjugate by Reciprocal of Determinant:

$\mathbf D^{-1} = \dfrac 1 {a^2 + b^2} \begin {bmatrix} a & -b \\ b & a \end {bmatrix}$
Then:














\(\ds \mathbf D^{-1} \begin {bmatrix} 1 \\ 0 \end {bmatrix}\)

\(=\)







\(\ds \dfrac 1 {a^2 + b^2} \begin {bmatrix} a & -b \\ b & a \end {bmatrix} \begin {bmatrix} 1 \\ 0 \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2 + b^2} \begin {bmatrix} a \\ b \end {bmatrix}\)










Application of $\mathbf D$ on both sides on the left and writing out explicitly in terms of $f_1$ and $f_2$ yields:

$f_1 = \dfrac \d {\d x} \dfrac {a f_1 + b f_2} {a^2 + b^2}$
Integrating with respect to $x$:

$\ds \int f_1 \rd x = \frac {a f_1 + b f_2} {a^2 + b^2} + C$
where $C$ is an arbitrary constant.
Substitute definitions of $f_1$ and $f_2$ to get the desired result.
$\blacksquare$


Also see
Primitive of $e^{a x} \sin b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.519$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $108$.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




