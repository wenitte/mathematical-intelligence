# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Proof_2



Theorem
The Fibonacci numbers have a closed-form solution:

$F_n = \dfrac {\phi^n - \paren {1 - \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1 / \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1}^n \phi^{-n} } {\sqrt 5} = \dfrac {\phi^n - \paren {1 - \phi}^n} {\phi - \paren {1 - \phi}}$
where $\phi$ is the golden mean.

Putting $\hat \phi = 1 - \phi = -\dfrac 1 \phi$ this can be written:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
From Definition 2 of Golden Mean: $\phi = \dfrac {1 + \sqrt 5} 2$
Therefore, substituting $\sqrt 5 = 2\phi - 1 = \phi - \paren {1 - \phi} = \phi - \hat \phi$, the above can be written as:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\paren {\phi - \hat \phi}}$


Proof
Let $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$.
First by the lemma to Cassini's Identity: 

$(1): \quad \forall n \in \Z_{>1}: A^n = \begin {bmatrix} F_{n + 1} & F_n \\ F_n & F_{n - 1} \end{bmatrix}$
Recall from Eigenvalues of Real Square Matrix are Roots of Characteristic Equation, we can find the eigenvalues of $\mathbf A$ by solving the equation $\map \det {\mathbf A - \lambda \mathbf I} = 0$
Therefore, taking the determinant of the square matrix below:

$\mathbf A - \lambda \mathbf I = \begin {bmatrix} 1 - \lambda & 1 \\ 1 & -\lambda \end{bmatrix}$
We obtain the equation:














\(\ds 0\)

\(=\)







\(\ds -\lambda \paren {1 - \lambda} - 1\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \lambda^2 - \lambda - 1\)




















\(\ds \)

\(=\)







\(\ds \lambda^2 - \lambda + \paren {\lambda \phi - \lambda \phi} + \paren {\phi - \phi} - 1\)





adding 0














\(\ds \)

\(=\)







\(\ds \lambda^2 - \lambda + \paren {\lambda \phi - \lambda \phi} + \phi - \paren {\phi + 1}\)





regrouping














\(\ds \)

\(=\)







\(\ds \lambda^2 - \lambda + \paren {\lambda \phi - \lambda \phi} + \phi - \phi^2\)





Square of Golden Mean equals One plus Golden Mean














\(\ds \)

\(=\)







\(\ds \lambda^2 - \lambda \paren {1 - \phi} - \lambda \phi + \phi \paren {1 - \phi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda - \phi} \paren {\lambda - \paren {1 - \phi} }\)









Therefore, $A$ has the eigenvalues $\phi$ and $\paren {1 - \phi}$. 
We will now determine the eigenvectors of $A$

Recall the definition of Eigenvector of Real Square Matrix:
Let $\mathbf A$ be a square matrix of order $n$ over $\R$. 
Let $\lambda \in \R$ be an eigenvalue of $\mathbf A$. 

A non-zero vector $\mathbf v \in \R^n$ is an eigenvector corresponding to $\lambda$ if and only if: 

$\mathbf A \mathbf v = \lambda \mathbf v$

For $\lambda = \phi$, we have:














\(\ds \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \times \begin{pmatrix} v_1 \\ v_2 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \phi v_1 \\ \phi v_2 \end{pmatrix}\)














\(\ds \leadsto \ \ \)





\(\ds \begin{pmatrix} v_1 + v_2 \\ v_1 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \phi v_1 \\ \phi v_2 \end{pmatrix}\)





Definition of Matrix Product (Conventional)



We see from the above, when $v_2 = 1$ then $v_1 = \phi$ and we have:














\(\ds \begin{pmatrix} \phi + 1 \\ \phi \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \phi^2 \\ \phi \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \phi \begin{pmatrix} \phi \\ 1 \end{pmatrix}\)









For $\lambda = \paren {1 - \phi} $, we have:














\(\ds \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \times \begin{pmatrix} v_1 \\ v_2 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \paren {1 - \phi} v_1 \\ \paren {1 - \phi} v_2 \end{pmatrix}\)














\(\ds \leadsto \ \ \)





\(\ds \begin{pmatrix} v_1 + v_2 \\ v_1 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \paren {1 - \phi} v_1 \\ \paren {1 - \phi} v_2 \end{pmatrix}\)





Definition of Matrix Product (Conventional)



We see from the above, when $v_2 = 1$ then $v_1 = \paren {1 - \phi}$ and we have:














\(\ds \begin{pmatrix} 2 - \phi \\ 1 - \phi \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} \paren {1 - \phi}^2 \\ \paren {1 - \phi } \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \phi} \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix}\)









We have now demonstrated that:

$\begin{pmatrix} \phi \\ 1 \end{pmatrix}$ is an eigenvector of $A$ with eigenvalue $\phi$
and:

$\begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix}$ is an eigenvector of $A$ with eigenvalue $\paren {1 - \phi}$.
We now observe that:














\(\ds A^n \begin {pmatrix} 1 \\ 0 \end {pmatrix}\)

\(=\)







\(\ds \begin {bmatrix} F_{n + 1} & F_n \\ F_n & F_{n - 1} \end {bmatrix} \begin {pmatrix} 1 \\ 0 \end {pmatrix}\)





from $(1)$ above














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} F_{n + 1} \\ F_n \end {pmatrix}\)





Definition of Matrix Product (Conventional)



Then we notice that:




\(\text {(2)}: \quad\)









\(\ds \begin {pmatrix} 1 \\ 0 \end {pmatrix}\)

\(=\)







\(\ds \dfrac 1 {\phi - \paren {1 - \phi} } \paren {\begin {pmatrix} \phi \\ 1 \end {pmatrix} - \begin {pmatrix} \paren {1 - \phi} \\ 1 \end {pmatrix} }\)









From Eigenvalue of Matrix Powers for a positive integer $n$, we have:














\(\ds A^n \begin{pmatrix} \phi \\ 1 \end{pmatrix}\)

\(=\)







\(\ds \phi^n \begin{pmatrix} \phi \\ 1 \end{pmatrix}\)





$A^n \mathbf v = \lambda^n \mathbf v$














\(\ds A^n \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix}\)

\(=\)







\(\ds \paren {1 - \phi}^n \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix}\)





$A^n \mathbf v = \lambda^n \mathbf v$



Putting all of the pieces together, we obtain:














\(\ds \begin{pmatrix} F_{n + 1} \\ F_n \end{pmatrix}\)

\(=\)







\(\ds A^n \begin{pmatrix} 1 \\ 0 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\phi - \paren {1 - \phi} }  A^n \paren {\begin{pmatrix} \phi \\ 1 \end{pmatrix} - \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix} }\)





from (2) above














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\phi - \paren {1 - \phi} }  \paren {A^n \begin{pmatrix} \phi \\ 1 \end{pmatrix} -  A^n \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\phi - \paren {1 - \phi} }  \paren {\phi^n \begin{pmatrix} \phi \\ 1 \end{pmatrix} -  \paren {1 - \phi}^n \begin{pmatrix} \paren {1 - \phi} \\ 1 \end{pmatrix} }\)





Eigenvalue of Matrix Powers














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\phi - \paren {1 - \phi} }  \paren {\begin{pmatrix} \phi^{n + 1} \\ \phi^n \end{pmatrix} -  \begin{pmatrix} \paren {1 - \phi}^{n + 1} \\ \paren {1 - \phi}^n \end{pmatrix} }\)





Definition of Matrix Product (Conventional)




Hence the result.
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet and Leonhard Paul Euler.


Also known as
The Euler-Binet Formula is also known as Binet's formula.





