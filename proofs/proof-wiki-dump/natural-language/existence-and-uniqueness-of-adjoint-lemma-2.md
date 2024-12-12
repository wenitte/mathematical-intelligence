# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint/Lemma_2

Lemma
Let $\mathbb F \in \set {\R, \C}$.
Let $\HH$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\HH$.
Let $\KK$ be a Hilbert space over $\mathbb F$ with inner product ${\innerprod \cdot \cdot}_\KK$.
Let $A : \HH \to \KK$ be a bounded linear transformation.
Let $B : \KK \to \HH$ be the unique mapping satisfying: 

$\innerprod {A x} y_\KK = \innerprod x {B y}_\HH$
for each $x \in \HH$ and $y \in \KK$. 

Then we have: 

$\map B {\alpha x + \beta y} = \alpha B x + \beta B y$
for all $\alpha, \beta \in \mathbb F$ and $x, y \in \KK$.

That is, $B$ is a linear transformation.


Proof
Let $\alpha, \beta \in \mathbb F$. 
Let $x, y \in \KK$. 
We have: 














\(\ds \innerprod x {\map B {\alpha x + \beta y} }_\KK\)

\(=\)







\(\ds \innerprod {A x} {\alpha x + \beta y}_\HH\)





Definition of $B$














\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod {A x} x_\HH + \overline \beta \innerprod {A x} y_\HH\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod x {B x}_\KK + \overline \beta \innerprod x {B y}_\KK\)





Definition of $B$














\(\ds \)

\(=\)







\(\ds \innerprod x {\alpha B x}_\KK + \innerprod x {\beta B y}_\KK\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \innerprod x {\alpha B x + \beta B y}_\KK\)





Inner Product is Sesquilinear



Recall that there exists exactly one $z \in \HH$ such that: 

$\innerprod {A x} {\alpha x + \beta y}_\HH = \innerprod x z_\KK$
So we must have: 

$\map B {\alpha x + \beta y} = \alpha B x + \beta B y$
So: 

$\map B {\alpha x + \beta y} = \alpha B x + \beta B y$
for each $\alpha, \beta \in \mathbb F$ and $x, y \in \KK$.
So:

$B$ is a linear transformation.
$\blacksquare$





