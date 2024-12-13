# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Sine_of_b_x



Theorem
$\ds \int e^{a x} \sin b x \rd x = \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C$


Proof 1













\(\ds \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \sin b x} a - \frac b a \int e^{a x} \cos b x \rd x\)





Primitive of $e^{a x} \sin b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \sin b x} a - \frac b a \paren {\frac {e^{a x} \cos b x} a + \frac b a \int e^{a x} \sin b x \rd x}\)





Primitive of $e^{a x} \cos b x$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} a \sin b x - e^{a x} b \cos b x} {a^2} - \frac {b^2} {a^2} \int e^{a x} \sin b x \rd x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \frac {b^2} {a^2} } \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \left({a \sin b x - b \cos b x}\right)} {a^2}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {a^2 + b^2} {a^2} \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2}\)





common denominator








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2}\)





multiplying by $\dfrac {a^2} {a^2 + b^2}$



$\blacksquare$


Proof 2













\(\ds \cos b x + i \sin b x\)

\(=\)







\(\ds e^{i b x}\)





Euler's Formula








\(\ds \leadsto \ \ \)





\(\ds e^{a x} \cos b x + i e^{a x} \sin b x\)

\(=\)







\(\ds e^{a x} e^{i b x}\)





multiplying both sides by $e^{a x}$














\(\ds \)

\(=\)







\(\ds e^{\paren {a + i b} x}\)





Exponent Combination Laws








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \cos b x \, \d x + i \int e^{a x} \sin b x \d x\)

\(=\)







\(\ds \int e^{\paren {a + i b} x} \d x\)





Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 {a + i b} e^{\paren {a + i b} x} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{\paren {a + i b} x} + C\)





multiplying top and bottom by $a - i b$














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{a x} e^{i b x} + C\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \frac {a - i b} {a^2 + b^2} e^{a x} \paren {\cos b x + i \sin b x} + C\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \frac a {a^2 + b^2} e^{a x} \cos b x - \frac {i b} {a^2 + b^2} e^{a x} \cos b x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {i a} {a^2 + b^2} e^{a x} \sin b x + \frac b {a^2 + b^2} e^{a x} \sin b x + C\)









The result follows from equating imaginary parts.
$\blacksquare$


Proof 3













\(\ds \int e^{a x} \sin b x \rd x\)

\(=\)







\(\ds \int e^{a x} \paren {\frac {e^{i b x} - e^{-i b x} } {2 i} } \rd x\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{a x} \paren {e^{i b x} - e^{-i b x} } \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int \paren {e^{a x} e^{i b x} - e^{a x} e^{-i b x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int \paren {e^{a x + i b x} - e^{a x - i b x} } \rd x\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{a x + i b x} \rd x - \frac 1 {2 i} \int e^{a x - i b x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \int e^{\paren {a + i b} x} \rd x - \frac 1 {2 i} \int e^{\paren {a - i b} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{\paren {a + i b} x} } {a + i b} - \frac 1 {2 i} \frac {e^{\paren {a - i b} x} } {a - i b} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x + i b x} } {a + i b} - \frac 1 {2 i} \frac {e^{a x - i b x} } {a - i b} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x} e^{i b x} } {a + i b} - \frac 1 {2 i} \frac {e^{a x} e^{-i b x} } {a - i b} + C\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \frac {e^{a x} e^{i b x} \paren {a - i b} } {\paren {a + i b} \paren {a - i b} } - \frac 1 {2 i} \frac {e^{a x} e^{-i b x} \paren {a + i b} } {\paren {a - i b} \paren {a + i b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} e^{i b x} \paren {a - i b} - e^{a x} e^{-i b x} \paren {a + i b} } {2 i \paren {a + i b} \paren {a - i b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} e^{i b x} \paren {a - i b} - e^{a x} e^{-i b x} \paren {a + i b} } {2 i \paren {a^2 + b^2} } + C\)





Product of Complex Number with Conjugate














\(\ds \)

\(=\)







\(\ds \frac {a e^{a x} e^{i b x} - i b e^{a x} e^{i b x} - a e^{a x} e^{-i b x} - i b e^{a x} e^{-i b x} } {2 i \paren {a^2 + b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {\frac {a e^{i b x} - i b e^{i b x} - a e^{-i b x} - i b e^{-i b x} } {2 i} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \frac {e^{i b x} - e^{-i b x} } {2 i} - b \frac {e^{i b x} + e^{-i b x} } 2} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \frac {e^{i b x} - e^{-i b x} } {2 i} - b \cos b x} + C\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } {\paren {a^2 + b^2} } \paren {a \sin b x - b \cos b x} + C\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} + C\)









$\blacksquare$


Proof 4
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


Also see
Primitive of $e^{a x} \cos b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.518$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $107$.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




