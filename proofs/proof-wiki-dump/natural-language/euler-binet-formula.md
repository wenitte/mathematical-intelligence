# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula



Theorem
The Fibonacci numbers have a closed-form solution:

$F_n = \dfrac {\phi^n - \paren {1 - \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1 / \phi}^n} {\sqrt 5} = \dfrac {\phi^n - \paren {-1}^n \phi^{-n} } {\sqrt 5} = \dfrac {\phi^n - \paren {1 - \phi}^n} {\phi - \paren {1 - \phi}}$
where $\phi$ is the golden mean.

Putting $\hat \phi = 1 - \phi = -\dfrac 1 \phi$ this can be written:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
From Definition 2 of Golden Mean: $\phi = \dfrac {1 + \sqrt 5} 2$
Therefore, substituting $\sqrt 5 = 2\phi - 1 = \phi - \paren {1 - \phi} = \phi - \hat \phi$, the above can be written as:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\paren {\phi - \hat \phi}}$


Corollary 1
$F_n = \dfrac {\phi^n} {\sqrt 5}$ rounded to the nearest integer


Corollary 2
For even $n$:

$F_n < \dfrac {\phi^n} {\sqrt 5}$
For odd $n$:

$F_n > \dfrac {\phi^n} {\sqrt 5}$


Negative Index
Let $n \in \Z_{< 0}$ be a negative integer.
Let $F_n$ be the $n$th Fibonacci number (as extended to negative integers).

Then the Euler-Binet Formula:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} = \dfrac {\phi^n - \hat \phi^n} {\phi - \hat \phi}$
continues to hold.


Proof 1
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$


Basis for the Induction
$\map P 0$ is true, as this just says:

$\dfrac {\phi^0 - \hat \phi^0} {\sqrt 5} = \dfrac {1 - 1} {\sqrt 5} = 0 = F_0$

$\map P 1$ is the case:














\(\ds \frac {\phi - \hat \phi} {\sqrt 5}\)

\(=\)







\(\ds \frac {\paren {\frac {1 + \sqrt 5} 2} - \paren {\frac {1 - \sqrt 5} 2} } {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 1} + \paren {\sqrt 5 + \sqrt 5} } {2 \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds F_1\)










This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true for all $0 \le j \le k + 1$, then it logically follows that $\map P {k + 2}$ is true.

So this is our induction hypothesis:

$\forall 0 \le j \le k + 1: F_j = \dfrac {\phi^j - \hat \phi^j} {\sqrt 5}$

Then we need to show:

$F_{k + 2} = \dfrac {\phi^{k + 2} - \hat \phi^{k + 2} } {\sqrt 5}$


Induction Step
This is our induction step:

We observe that we have the following two identities:

$\phi^2 = \paren {\dfrac {1 + \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 + 2 \sqrt 5} = \dfrac {3 + \sqrt 5} 2 = 1 + \phi$
$\hat \phi^2 = \paren {\dfrac {1 - \sqrt 5} 2}^2 = \dfrac 1 4 \paren {6 - 2 \sqrt 5} = \dfrac {3 - \sqrt 5} 2 = 1 + \hat \phi$
This can also be deduced from the definition of the golden mean: the fact that $\phi$ and $\hat \phi$ are the solutions to the quadratic equation $x^2 = x + 1$.

Thus:














\(\ds \phi^{k + 2} - \hat \phi^{k + 2}\)

\(=\)







\(\ds \paren {1 + \phi} \phi^k - \paren {1 + \hat \phi} \hat \phi^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\phi^k - \hat \phi^k} + \paren {\phi^{k + 1} - \hat \phi^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt 5 \paren {F_k + F_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sqrt 5 F_{k + 2}\)





Definition of Fibonacci Numbers



The result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
$\blacksquare$


Proof 2
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


Proof 3
This follows as a direct application of the first Binet form:

$U_n = m U_{n - 1} + U_{n - 2}$
where:














\(\ds U_0\)

\(=\)







\(\ds 0\)




















\(\ds U_1\)

\(=\)







\(\ds 1\)









has the closed-form solution:

$U_n = \dfrac {\alpha^n - \beta^n} {\Delta}$
where:














\(\ds \Delta\)

\(=\)







\(\ds \sqrt {m^2 + 4}\)




















\(\ds \alpha\)

\(=\)







\(\ds \frac {m + \Delta} 2\)




















\(\ds \beta\)

\(=\)







\(\ds \frac {m - \Delta} 2\)









where $m = 1$.
$\blacksquare$


Proof 4
From Generating Function for Fibonacci Numbers, a generating function for the Fibonacci numbers is:

$\map G z = \dfrac z {1 - z - z^2}$

Hence:














\(\ds \map G z\)

\(=\)







\(\ds \dfrac z {1 - z - z^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\dfrac 1 {1 - \phi z} - \dfrac 1 {1 - \hat \phi z} }\)





Partial Fraction Expansion



where:

$\phi = \dfrac {1 + \sqrt 5} 2$
$\hat \phi = \dfrac {1 - \sqrt 5} 2$
By Sum of Infinite Geometric Sequence:

$\dfrac 1 {1 - \phi z} = 1 + \phi z + \phi^2 z^2 + \cdots$
and so:

$\map G z = \dfrac 1 {\sqrt 5} \paren {1 + \phi z + \phi^2 z^2 + \cdots - 1 - \hat \phi z - \hat \phi^2 z^2 - \cdots}$
By definition, the coefficient of $z^n$ in $\map G z$ is exactly the $n$th Fibonacci number.
That is:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
$\blacksquare$


Also known as
The Euler-Binet Formula is also known as Binet's formula.


Source of Name
This entry was named for Jacques Philippe Marie Binet and Leonhard Paul Euler.


Historical Note
The Euler-Binet Formula, derived by Binet in $1843$, was already known to Euler, de Moivre and Daniel Bernoulli over a century earlier.
However, it was Binet who derived the more general Binet Form of which this is an elementary application.


Sources
1722: Abraham de Moivre: De Fractionibus Algebraicis Radicalitate Immunibus ad Fractiones Simpliciores Reducendis, Deque Summandis Terminis Quarumdam Serierum Aequali Intervallo a Se Distantibus (Phil. Trans. Vol. 32: pp. 162 – 178)  www.jstor.org/stable/103594
1728: Daniel Bernoulli: Obseruationes de seriebus recurrentibus (Commentarii Acad. Sci. Imp. Pet. Vol. 3: pp. 85 – 100)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Liber Abaci: $88$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




