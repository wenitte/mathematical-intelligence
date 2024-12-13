# 

Source: https://proofwiki.org/wiki/Partial_Derivative/Examples/u_-_v_%2B_2_w,_2_u_%2B_v_%2B_2_w,_u_-_v_%2B_w

Theorem
Let:














\(\ds u - v + 2 w\)

\(=\)







\(\ds x + 2 z\)




















\(\ds 2 u + v - 2 w\)

\(=\)







\(\ds 2 x - 2 z\)




















\(\ds u - v + w\)

\(=\)







\(\ds z - y\)









Then:














\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial v} {\partial y}\)

\(=\)







\(\ds 2\)




















\(\ds \dfrac {\partial w} {\partial y}\)

\(=\)







\(\ds 1\)











Proof
Partial differentiation with respect to $y$ gives:














\(\ds \dfrac {\partial u} {\partial y} - \dfrac {\partial v} {\partial y} + 2 \dfrac {\partial w} {\partial y}\)

\(=\)







\(\ds 0\)




















\(\ds 2 \dfrac {\partial u} {\partial y} + \dfrac {\partial v} {\partial y} - 2 \dfrac {\partial w} {\partial y}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial u} {\partial y} - \dfrac {\partial v} {\partial y} + \dfrac {\partial w} {\partial y}\)

\(=\)







\(\ds -1\)









which can be expressed in matrix form as:

$\begin {pmatrix} 1 & -1 & 2 \\ 2 & 1 & -2 \\ 1 & -1 & 1 \end {pmatrix} \begin {pmatrix} \dfrac {\partial u} {\partial y} \\ \dfrac {\partial v} {\partial y} \\ \dfrac {\partial w} {\partial y} \end {pmatrix} = \begin {pmatrix} 0 \\ 0 \\ -1 \end {pmatrix}$

Solving by Cramer's Rule:


This article, or a section of it, needs explaining.In particular: Actually this is not Cramer's Rule, this will need to be taken care ofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc {{|}} c} 1 & -1 & 2 & 0 \\ 2 & 1 & -2 & 0 \\ 1 & -1 & 1 & -1 \end {array} }\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc {{|}} c} 1 & -1 & 2 & 0 \\ 0 & 3 & -6 & 0 \\ 0 & 0 & -1 & -1 \end {array} }\)





$\text r 2 \to \text r 2 - 2 \text r 1$, $\text r 3 \to \text r 3 - \text r 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc {{|}} c} 1 & -1 & 2 & 0 \\ 0 & 1 & -2 & 0 \\ 0 & 0 & 1 & 1 \end {array} }\)





$\text r 2 \to \text r 2 / 3$, $\text r 3 \to -\text r 3$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc {{|}} c} 1 & 0 & 0 & 0 \\ 0 & 1 & -2 & 0 \\ 0 & 0 & 1 & 1 \end {array} }\)





$\text r 1 \to \text r 1 - \text r 2$








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc {{|}} c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 1 \end {array} }\)





$\text r 2 \to \text r 2 + 2 \text r 3$




The solution can be read directly:














\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial v} {\partial y}\)

\(=\)







\(\ds 2\)




















\(\ds \dfrac {\partial w} {\partial y}\)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $5$




