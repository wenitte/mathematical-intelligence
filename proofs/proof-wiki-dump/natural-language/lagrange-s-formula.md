# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Formula



Theorem
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be vectors in a vector space $\mathbf V$ of $3$ dimensions.

Then:

$\mathbf a \times \paren {\mathbf b \times \mathbf c} = \paren {\mathbf a \cdot \mathbf c} \mathbf b - \paren {\mathbf a \cdot \mathbf b} \mathbf c$


Corollary
$\paren {\mathbf a \times \mathbf b} \times \mathbf c = \paren {\mathbf a \cdot \mathbf c} \mathbf b - \paren {\mathbf b \cdot \mathbf c} \mathbf a$


Proof
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be embedded in a Cartesian $3$-space:

$\mathbf a = \begin{bmatrix} a_x \\ a_y \\ a_z \end{bmatrix}$, $\mathbf b = \begin{bmatrix} b_x \\ b_y \\ b_z \end{bmatrix}$, $\mathbf c = \begin{bmatrix} c_x \\ c_y \\ c_z \end{bmatrix}$















\(\ds \mathbf b \times \mathbf c\)

\(=\)







\(\ds \begin {bmatrix} b_x \\ b_y \\ b_z \end {bmatrix} \times \begin {bmatrix} c_x \\ c_y \\ c_z \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} b_y c_z - b_z c_y \\ b_z c_x - b_x c_z \\ b_x c_y - b_y c_x \end {bmatrix}\)





Definition of Vector Cross Product














\(\ds \mathbf a \times \paren {\mathbf b \times \mathbf c}\)

\(=\)







\(\ds \begin {bmatrix} a_x \\ a_y \\ a_z \end {bmatrix} \times \begin {bmatrix} b_y c_z - b_z c_y \\ b_z c_x - b_x c_z \\ b_x c_y - b_y c_x \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} a_y b_x c_y - a_y b_y c_x - a_z b_z c_x + a_z b_x c_z \\ a_z b_y c_z - a_z b_z c_y - a_x b_x c_y + a_x b_y c_x \\ a_x b_z c_x - a_x b_x c_z - a_y b_y c_z + a_y b_z c_y \end {bmatrix}\)





Definition of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} a_y b_x c_y - a_y b_y c_x - a_z b_z c_x + a_z b_x c_z + a_x b_x c_x - a_x b_x c_x \\ a_z b_y c_z - a_z b_z c_y - a_x b_x c_y + a_x b_y c_x + a_y b_y c_y - a_y b_y c_y \\ a_x b_z c_x - a_x b_x c_z - a_y b_y c_z + a_y b_z c_y + a_z b_z c_z - a_z b_z c_z \end {bmatrix}\)





adding $0 = a_i b_i c_i - a_i b_i c_i$ to each entry














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} b_x \paren {a_y c_y + a_z c_z  + a_x  c_x} - c_x \paren {a_y b_y + a_z b_z + a_x b_x} \\ b_y \paren {a_z c_z + a_x c_x + a_y c_y} - c_y \paren {a_z b_z + a_x b_x + a_y c_y} \\ b_z \paren {a_x c_x + a_y c_y + a_z c_z} - c_z \paren {a_x b_x + a_y b_y + a_z c_z} \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} b_x \paren {\mathbf a \cdot \mathbf c} - c_x \paren {\mathbf a \cdot \mathbf b} \\ b_y \paren {\mathbf a \cdot \mathbf c} - c_y \paren {\mathbf a \cdot \mathbf b} \\ b_z \paren {\mathbf a \cdot \mathbf c} - c_z \paren {\mathbf a \cdot \mathbf b} \end {bmatrix}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf c} \begin {bmatrix} b_x \\ b_y \\ b_z \end {bmatrix} - \paren {\mathbf a \cdot \mathbf b} \begin {bmatrix} c_x \\ c_y \\ c_z \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf c} \mathbf b - \paren {\mathbf a \cdot \mathbf b} \mathbf c\)









$\blacksquare$


Source of Name
This entry was named for Joseph Louis Lagrange.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {II}$: The Products of Vectors: $7$. Products of Three Vectors: $(2.22)$
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 5$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving Dot and Cross Products: $22.18$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): triple product
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): triple product
For a video presentation of the contents of this page, visit the Khan Academy.




