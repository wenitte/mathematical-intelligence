# 

Source: https://proofwiki.org/wiki/Neumann_Series_Theorem



Theorem
Let $X$ be a Banach space.
Let $\map {CL} X$ be the continous linear transformation space.
Let $\norm {\, \cdot \,}$ be the supremum operator norm.
Let $A \in \map {CL} X$ be such that $\norm A < 1$.
Let $\circ$ be the composition of mappings.
Let $I$ be the identity mapping.

Then:

$I - A$ is invertible in $\map {CL} X$
$\ds \paren {I - A}^{-1} = \sum_{n \mathop = 0}^\infty A^n$
$\norm {\paren{I - A}^{-1} } \le \dfrac 1 {1 - \norm A}$


Corollary 1
The mapping $I - A : X \to X$ is bijective.


Corollary 2
The mapping $\paren {I - A}^{-1} : X \to X$ is continuous.


Proof
Let $\ds S_k := \sum_{n \mathop = 0}^k A^n$.


$\ds \sum_{n \mathop = 0}^\infty A^n$ converges absolutely
By Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative:

$\forall n \in \N : \norm {A^n} \le \norm A^n$
By assumption, $\norm A < 1$.
By Sum of Infinite Geometric Sequence, $\ds \sum_{n \mathop = 0}^\infty \norm A^n$ converges.
By series comparison, $\ds \sum_{n \mathop = 0}^\infty \norm {A^n}$ converges too.
By definition, $\ds \sum_{n \mathop = 0}^\infty A^n$ is absolutely convergent.
$\Box$


$\ds \sum_{n \mathop = 0}^\infty A^n$ converges
By assumption, $X$ is Banach.
By Necessary and Sufficient Conditions for Continuous Linear Transformation Space to be Banach Space, $\map {CL} X$ is Banach too.
Let $\ds S := \sum_{n \mathop = 0}^\infty A^n$.
We have that Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach.
Then $S$ converges in $\map {CL} X$.
In other words:

$\ds \lim_{k \mathop \to \infty} S_k = S$
$\Box$


Inverse of $\paren {I - A}$ is $S$
We have that:














\(\ds A S_k\)

\(=\)







\(\ds A \circ \paren{\sum_{n \mathop = 0}^k A^n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^k A^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^k A^n} \circ A\)




















\(\ds \)

\(=\)







\(\ds S_k A\)




















\(\ds \)

\(=\)







\(\ds \sum_{n' \mathop = 1}^{k + 1} A^{n'}\)





$n' = n + 1$














\(\ds \)

\(=\)







\(\ds S_{k + 1} - I\)









Furthermore:














\(\ds \norm {A S_k - A S}\)

\(=\)







\(\ds \norm {A \paren {S_k - S} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {A} \norm {S_k - S}\)





Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative














\(\ds \)

\(\le\)







\(\ds \norm {S_k - S}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{k \mathop \to \infty} \norm {S_k A - S A}\)

\(\le\)







\(\ds \lim_{k \mathop \to \infty} \norm {S_k - S}\)




















\(\ds \)

\(=\)







\(\ds \norm {\lim_{k \mathop \to \infty} \paren {S_k - S} }\)





Supremum Norm is Norm, Norm is Continuous, Limit of Composite Function














\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds \norm {S_k A - S A}\)

\(=\)







\(\ds \norm {\paren {S_k - S} A}\)




















\(\ds \)

\(\le\)







\(\ds \norm {A} \norm {S_k - S}\)





Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative














\(\ds \)

\(\le\)







\(\ds \norm {S_k - S}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{k \mathop \to \infty} \norm {S_k A - S A}\)

\(\le\)







\(\ds \lim_{k \mathop \to \infty} \norm {S_k - S}\)




















\(\ds \)

\(=\)







\(\ds \norm {\lim_{k \mathop \to \infty} \paren {S_k - S} }\)





Supremum Norm is Norm, Norm is Continuous, Limit of Composite Function














\(\ds \)

\(=\)







\(\ds 0\)









Hence:














\(\ds \lim_{k \mathop \to \infty} S_k A\)

\(=\)







\(\ds S A\)




















\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} A S_k\)




















\(\ds \)

\(=\)







\(\ds A \lim_{k \mathop \to \infty} S_k\)




















\(\ds \)

\(=\)







\(\ds A S\)




















\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} \paren {S_{k+1} - I}\)




















\(\ds \)

\(=\)







\(\ds S - I\)









That is:

$S A = A S = S - I$
It follows that:














\(\ds I\)

\(=\)







\(\ds S - S A\)




















\(\ds \)

\(=\)







\(\ds S \paren {I - A}\)




















\(\ds \)

\(=\)







\(\ds S - A S\)




















\(\ds \)

\(=\)







\(\ds \paren {I - A} S\)









Therefore, $I - A$ is invertible in $\map {CL} X$.
Furthermore:

$\ds \paren {I - A}^{-1} = S = \sum_{k \mathop = 0}^\infty A^k$
Moreover:














\(\ds \norm {\paren {I - A}^{-1} }\)

\(=\)







\(\ds \norm {\sum_{k \mathop = 0}^\infty A^k}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^\infty \norm {A^k}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^\infty \norm A^k\)





Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative














\(\ds \)

\(\le\)







\(\ds \frac 1 {1 - \norm A}\)





Sum of Infinite Geometric Sequence



$\blacksquare$


Also see
Definition:Neumann Series


Source of Name
This entry was named for Carl Gottfried Neumann.


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




