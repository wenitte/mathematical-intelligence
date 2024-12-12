# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint/Lemma_1

Lemma
Let $\mathbb F \in \set {\R, \C}$.
Let $\HH$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\HH$.
Let $\KK$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\KK$.
Let $A : \HH \to \KK$ be a bounded linear transformation. 

Then:

There exists a unique mapping $B : \KK \to \HH$ such that:
$\innerprod {A x} y_\KK = \innerprod x {B y}_\HH$
for all $x \in \HH$ and $y \in \KK$. 


Proof
Let $\norm \cdot_\HH$ be the inner product norm of $\HH$.
Let $\norm \cdot_\KK$ be the inner product norm of $\KK$.

For each $y \in \KK$, define the linear functional $f_y : \HH \to \mathbb F$ by: 

$\map {f_y} x = \innerprod {\map A x} y_\KK$

Let $\norm A$ denote the norm on $A$.
We have that $A$ is a bounded linear transformation.
From Norm on Bounded Linear Transformation is Finite:

$\norm A$ is finite.

We therefore have: 














\(\ds \size {\map {f_y} x}\)

\(=\)







\(\ds \size {\innerprod {A x} y_\KK}\)




















\(\ds \)

\(\le\)







\(\ds \norm {A x}_\KK \norm y_\KK\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(=\)







\(\ds \norm A \norm x_\HH \norm y_\KK\)





Fundamental Property of Norm on Bounded Linear Transformation



Taking $M = \norm A \norm y_\KK$, we have: 

$\size {\map {f_y} x} \le M \norm x_\HH$
for each $x \in \HH$, with $M$ independent of $x$. 
So, $f_y$ is bounded.
So, by the Riesz Representation Theorem (Hilbert Spaces), there exists a unique $\map z y \in \HH$ such that: 

$\map {f_y} x = \innerprod x {\map z y}_\HH$
for each $x \in \HH$. 
That is, for each $y \in \KK$ there exists precisely one $\map z y \in \HH$ such that: 

$\innerprod {A x} y_\KK = \innerprod x {\map z y}_\HH$
for all $x \in \HH$.

Define the mapping $B : \KK \to \HH$ by: 

$B y = \map z y$
for each $y \in \KK$.
This map has: 

$\innerprod {A x} y_\KK = \innerprod x {B y}_\HH$
for each $x \in \HH$ and $y \in \KK$.
Since the choice of $\map z y$ was unique, the map $B$ must also be unique, so $B$ is the unique map with the required properties.
$\blacksquare$





