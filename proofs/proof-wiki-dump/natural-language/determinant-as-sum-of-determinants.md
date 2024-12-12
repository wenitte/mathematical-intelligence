# 

Source: https://proofwiki.org/wiki/Determinant_as_Sum_of_Determinants

Theorem
Let $\begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix}$ be a determinant.
Then $\begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} + a'_{r1} & \cdots & a_{rs} + a'_{rs} & \cdots & a_{rn} + a'_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix} = \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix} + \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a'_{r1} & \cdots & a'_{rs} & \cdots & a'_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix}$.

Similarly:
Then $\begin{vmatrix}
a_{11} & \cdots & a_{1s} + a'_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a_{rs} + a'_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} + a'_{ns} & \cdots & a_{nn}
\end{vmatrix} = \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix} + \begin{vmatrix}
a_{11} & \cdots & a'_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a'_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a'_{ns} & \cdots & a_{nn}
\end{vmatrix}$.


Proof
Let:
$\quad B = \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} + a'_{r1} & \cdots & a_{rs} + a'_{rs} & \cdots & a_{rn} + a'_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix} = \begin{vmatrix}
b_{11} & \cdots & b_{1s} & \cdots & b_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
b_{r1} & \cdots & b_{rs} & \cdots & b_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
b_{n1} & \cdots & b_{ns} & \cdots & b_{nn}
\end{vmatrix}$
$\quad A_1 = \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{r1} & \cdots & a_{rs} & \cdots & a_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix}$
$\quad A_2 = \begin{vmatrix}
a_{11} & \cdots & a_{1s} & \cdots & a_{1n} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a'_{r1} & \cdots & a'_{rs} & \cdots & a'_{rn} \\
\vdots & \ddots & \vdots & \ddots & \vdots \\
a_{n1} & \cdots & a_{ns} & \cdots & a_{nn}
\end{vmatrix}$

Then: 














\(\ds B\)

\(=\)







\(\ds \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n b_{k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} \cdots \paren {a_{r \map \lambda r} + a'_{r \map \lambda r} } \cdots a_{n \map \lambda n}\)




















\(\ds \)

\(=\)







\(\ds \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} \cdots a_{r \map \lambda r} \cdots a_{n \map \lambda n} + \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} \cdots a'_{r \map \lambda r} \cdots a_{n \map \lambda n}\)




















\(\ds \)

\(=\)







\(\ds A_1 + A_2\)









$\blacksquare$

The result for columns follows directly from Determinant of Transpose.
$\blacksquare$





