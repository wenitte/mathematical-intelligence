# 

Source: https://proofwiki.org/wiki/Linear_Operator_on_the_Plane

Theorem
Let $\phi$ be a linear operator on the real vector space of two dimensions $\R^2$.

Then $\phi$ is completely determined by an ordered tuple of $4$ real numbers.


Proof
Let $\phi$ be a linear operator on $\R^2$.
Let $\alpha_{11}, \alpha_{12}, \alpha_{21}, \alpha_{22} \in \R$ be the real numbers which satisfy the equations:














\(\ds \map \phi {e_1}\)

\(=\)







\(\ds \alpha_{11} e_1 + \alpha_{21} e_2\)




















\(\ds \map \phi {e_2}\)

\(=\)







\(\ds \alpha_{12} e_1 + \alpha_{22} e_2\)









where $\tuple {e_1, e_2}$ is the standard ordered basis of $\R^2$.
Then, by linearity:














\(\ds \map \phi {\lambda_1, \lambda_2}\)

\(=\)







\(\ds \map \phi {\lambda_1 e_1 + \lambda_2 e_2}\)




















\(\ds \)

\(=\)







\(\ds \lambda_1 \map \phi {e_1} + \lambda_2 \map \phi {e_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda_1 \alpha_{11} + \lambda_2 \alpha_{12} } e_1 + \paren {\lambda_1 \alpha_{21} + \lambda_2 \alpha_{22} } e_2\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda_1 \alpha_{11} + \lambda_2 \alpha_{12}, \lambda_1 \alpha_{21} + \lambda_2 \alpha_{22} }\)










Conversely, if $\alpha_{11}, \alpha_{12}, \alpha_{21}, \alpha_{22} \in \R$ are any real numbers, then we can define the mapping $\phi$ as:

$\map \phi {\lambda_1, \lambda_2} = \tuple {\lambda_1 \alpha_{11} + \lambda_2 \alpha_{12}, \lambda_1 \alpha_{21} + \lambda_2 \alpha_{22} }$
which is easily verified as being a linear operator on $\R^2$:














\(\ds b \cdot \map \phi {\lambda_1, \lambda_2} + c \cdot \map \phi {\lambda_3, \lambda_4}\)

\(=\)







\(\ds b \tuple {\lambda_1 \alpha_{11} + \lambda_2 \alpha_{12}, \lambda_1 \alpha_{21} + \lambda_2 \alpha_{22} } + c \tuple {\lambda_3 \alpha_{11} + \lambda_4 \alpha_{12}, \lambda_3 \alpha_{21} + \lambda_4 \alpha_{22} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {b \lambda_1 \alpha_{11} + b \lambda_2 \alpha_{12}, b \lambda_1 \alpha_{21} + b \lambda_2 \alpha_{22} } + \tuple {c \lambda_3 \alpha_{11} + c \lambda_4 \alpha_{12}, c \lambda_3 \alpha_{21} + c \lambda_4 \alpha_{22} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {b \lambda_1 \alpha_{11} + b \lambda_2 \alpha_{12} + c \lambda_3 \alpha_{11} + c \lambda_4 \alpha_{12}, b \lambda_1 \alpha_{21} + b \lambda_2 \alpha_{22} + c \lambda_3 \alpha_{21} + c \lambda_4 \alpha_{22} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {b \lambda_1 + c \lambda_3} \alpha_{11} + \tuple {b \lambda_2 + c \lambda_4} \alpha_{12}, \paren {b \lambda_1 + c \lambda_3} \alpha_{21} + \paren {c \lambda_2 + c \lambda_4} \alpha_{22} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {b \lambda_1 + c \lambda_3, b \lambda_2 + c \lambda_4}\)









Thus, by Condition for Linear Transformation, $\phi$ is a linear operator on $\R^2$.

Thus each linear operator on $\R^2$ is completely determined by the ordered tuple:

$\tuple {\alpha_{11}, \alpha_{12}, \alpha_{21}, \alpha_{22} }$
of real numbers.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.1$




