# 

Source: https://proofwiki.org/wiki/Krattenthaler%27s_Identity



Theorem
$\begin{vmatrix}
\paren {x + q_2} \paren {x + q_3} & \paren {x + p_1} \paren {x + q_3} & \paren {x + p_1} \paren {x + p_2} \\
\paren {y + q_2} \paren {y + q_3} & \paren {y + p_1} \paren {y + q_3} & \paren {y + p_1} \paren {y + p_2} \\
\paren {z + q_2} \paren {z + q_3} & \paren {z + p_1} \paren {z + q_3} & \paren {z + p_1} \paren {z + p_2}
\end{vmatrix} = \paren {x - y} \paren {x - z} \paren {y - z} \paren {p_1 - q_2} \paren {p_1 - q_3} \paren {p_2 - q_3}$
where $\size {\, \cdot \,}$ denotes determinant.


Proof













\(\ds \)

\(\)







\(\ds \begin{vmatrix}
\paren {x + q_2} \paren {x + q_3} & \paren {x + p_1} \paren {x + q_3} & \paren {x + p_1} \paren {x + p_2} \\
\paren {y + q_2} \paren {y + q_3} & \paren {y + p_1} \paren {y + q_3} & \paren {y + p_1} \paren {y + p_2} \\
\paren {z + q_2} \paren {z + q_3} & \paren {z + p_1} \paren {z + q_3} & \paren {z + p_1} \paren {z + p_2}
\end{vmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{vmatrix}
\paren {x + q_2} \paren {x + q_3} & \paren {p_1 - q_2} \paren {x + q_3} & \paren {p_1 - q_3} \paren {x + p_2} \\
\paren {y + q_2} \paren {y + q_3} & \paren {p_1 - q_2} \paren {y + q_3} & \paren {p_1 - q_3} \paren {y + p_2} \\
\paren {z + q_2} \paren {z + q_3} & \paren {p_1 - q_2} \paren {z + q_3} & \paren {p_1 - q_3} \paren {z + p_2}
\end{vmatrix}\)






Multiple of Row Added to Row of Determinant














\(\ds \)

\(=\)







\(\ds \paren {p_1 - q_2} \paren {p_1 - q_3} \begin{vmatrix}
\paren {x + q_2} \paren {x + q_3} & x + q_3 & x + p_2 \\
\paren {y + q_2} \paren {y + q_3} & y + q_3 & y + p_2 \\
\paren {z + q_2} \paren {z + q_3} & z + q_3 & z + p_2
\end{vmatrix}\)






Determinant with Row Multiplied by Constant














\(\ds \)

\(=\)







\(\ds \paren {p_1 - q_2} \paren {p_1 - q_3} \begin{vmatrix}
x \paren {x + q_3} & x + q_3 & p_2 - q_3 \\
y \paren {y + q_3} & y + q_3 & p_2 - q_3 \\
z \paren {z + q_3} & z + q_3 & p_2 - q_3
\end{vmatrix}\)






Multiple of Row Added to Row of Determinant














\(\ds \)

\(=\)







\(\ds \paren {p_1 - q_2} \paren {p_1 - q_3} \paren {p_2 - q_3} \begin{vmatrix}
x \paren {x + q_3} & x + q_3 & 1\\
y \paren {y + q_3} & y + q_3 & 1\\
z \paren {z + q_3} & z + q_3 & 1
\end{vmatrix}\)






Determinant with Row Multiplied by Constant














\(\ds \)

\(=\)







\(\ds \paren {p_1 - q_2} \paren {p_1 - q_3} \paren {p_2 - q_3} \begin{vmatrix}
x^2 & x & 1\\
y^2 & y & 1\\
z^2 & z & 1
\end{vmatrix}\)






Multiple of Row Added to Row of Determinant














\(\ds \)

\(=\)







\(\ds \paren {p_1 - q_2} \paren {p_1 - q_3} \paren {p_2 - q_3} \paren {x - y} \paren {y - z} \paren {x - z}\)





Value of Vandermonde Determinant



$\blacksquare$


Source of Name
This entry was named for Christian Friedrich Krattenthaler.


Sources
1990: Christian Krattenthaler: Generating functions for plane partitions of a given shape (Manuscripta Math. Vol. 69: pp. 173 – 201)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $47$




