# 

Source: https://proofwiki.org/wiki/Modulo_Arithmetic/Examples/Solutions_to_x%5E2_%3D_x_Modulo_6

Example of Modulo Arithmetic
The equation:

$x^2 = x \pmod 6$
has solutions:














\(\ds x\)

\(=\)







\(\ds 0\)




















\(\ds x\)

\(=\)







\(\ds 1\)




















\(\ds x\)

\(=\)







\(\ds 3\)




















\(\ds x\)

\(=\)







\(\ds 4\)











Proof
The Cayley table for multiplication modulo $6$ can be presented as:

$\begin{array} {r|rrrrrr}
\times_6 & 0 & 1 & 2 & 3 & 4 & 5 \\
\hline
0 & 0 & 0 & 0 & 0 & 0 & 0 
\\
1 & 0 & 1 & 2 & 3 & 4 & 5
\\
2 & 0 & 2 & 4 & 0 & 2 & 4
\\
3 & 0 & 3 & 0 & 3 & 0 & 3
\\
4 & 0 & 4 & 2 & 0 & 4 & 2
\\
5 & 0 & 5 & 4 & 3 & 2 & 1
\\
\end{array}$
The squares $x^2$ of each $x$ can be found on the main diagonal, where each element of $\Z_6$ can be inspected.

Checking each of these, we have:














\(\ds 0^2\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 6\)


















\(\ds 1^2\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 6\)


















\(\ds 2^2\)

\(=\)







\(\ds 4\)




















\(\ds \)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 6\)


















\(\ds 3^2\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod 6\)


















\(\ds 4^2\)

\(=\)







\(\ds 16\)




















\(\ds \)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 6\)


















\(\ds 5^2\)

\(=\)







\(\ds 25\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 6\)







$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $7$




