# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint/Lemma_3

Lemma
Let $\mathbb F \in \set {\R, \C}$.

Let $\HH$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\HH$.
Let $\KK$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\KK$.
Let $A : \HH \to \KK$ be a bounded linear transformation.
Let $B : \KK \to \HH$ be the unique mapping satisfying: 

$\innerprod {A x} y_\KK = \innerprod x {B y}_\HH$
for each $x \in \HH$ and $y \in \KK$. 

Then $B$ is a bounded linear transformation.


Proof
Let $\norm \cdot_\HH$ be the inner product norm of $\HH$.
Let $\norm \cdot_\KK$ be the inner product norm of $\KK$.

From Existence and Uniqueness of Adjoint: Lemma 2, we have that: 

$B$ is a linear transformation.
It remains to show that $B$ is bounded.

Let $\norm A$ denote the norm on $A$.
We have that $A$ is a bounded linear transformation.
From Norm on Bounded Linear Transformation is Finite:

$\norm A$ is finite.
Then: 










\(\ds \forall y \in \KK: \, \)



\(\ds \norm {B y}_\HH^2\)

\(=\)







\(\ds \innerprod {B y} {B y}_\HH\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {A B y} y_\KK\)





Definition of $B$














\(\ds \)

\(\le\)







\(\ds \norm {A B y}_\KK \norm y_\KK\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(=\)







\(\ds \norm A \norm {B y}_\HH \norm y_\KK\)





Fundamental Property of Norm on Bounded Linear Transformation



Note that for all $y \in \KK$ such that: 

$B y \ne 0$
we have: 

$\norm {B y}_\HH \le \norm A \norm y_\KK$
From  the definition, a norm is positive definite.
Hence this inequality holds if $B y = 0$.
So:

$\forall y \in \KK: \norm {B y}_\HH \le \norm A \norm y_\KK$
That is: 

$B$ is a bounded linear transformation.
$\blacksquare$





