# 

Source: https://proofwiki.org/wiki/Equation_of_Straight_Line_in_Plane/Two-Point_Form/Determinant_Form

Theorem
Let $\LL$ be a straight line embedded in a Cartesian plane, given in two-point form as:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$

Then $\LL$ can be expressed in the form:

$\begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \end {vmatrix} = 0$


Proof













\(\ds \frac {x - x_1} {x_2 - x_1}\)

\(=\)







\(\ds \frac {y - y_1} {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - x_1} \paren {y_2 - y_1}\)

\(=\)







\(\ds \paren {x_2 - x_1} \paren {y - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - x_1} \paren {y_2 - y_1} - \paren {x_2 - x_1} \paren {y - y_1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \begin {vmatrix} x - x_1 & y - y_1 \\ x_2 - x_1 & y_2 - y_1 \end {vmatrix}\)

\(=\)







\(\ds 0\)





Determinant of Order 2








\(\ds \leadsto \ \ \)





\(\ds \begin {vmatrix} x & y & 1 \\ x - x_1 & y - y_1 & 0 \\ x_2 - x_1 & y_2 - y_1 & 0 \end {vmatrix}\)

\(=\)







\(\ds 0\)





Determinant with Unit Element in Otherwise Zero Column








\(\ds \leadsto \ \ \)





\(\ds \begin {vmatrix} x & y & 1 \\ -x_1 & -y_1 & -1 \\ x_2 - x_1 & y_2 - y_1 & 0 \end {vmatrix}\)

\(=\)







\(\ds 0\)





Multiple of Row Added to Row of Determinant








\(\ds \leadsto \ \ \)





\(\ds \begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 - x_1 & y_2 - y_1 & 0 \end {vmatrix}\)

\(=\)







\(\ds 0\)





Determinant with Row Multiplied by Constant








\(\ds \leadsto \ \ \)





\(\ds \begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \end {vmatrix}\)

\(=\)







\(\ds 0\)





Multiple of Row Added to Row of Determinant



$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $4$. Special forms of the equation of a straight line: $(3)$ Line through two points




