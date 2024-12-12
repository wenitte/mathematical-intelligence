# 

Source: https://proofwiki.org/wiki/Element_of_Unital_Banach_Algebra_on_Boundary_of_Group_of_Units_of_Subalgebra_is_Not_Invertible_in_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$.
Let $B$ be a closed subalgebra of $A$.
Let $\map G B$ be the group of units of $A$.
Let $x \in \partial \map G B$, where $\partial \map G B$ is the topological boundary of $\map G B$.

Then $x$ is not invertible in $A$. 


Proof
Lemma
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$. 
Let $x \in \partial \map G A$, where $\partial \map G A$ is the topological boundary of $\map G A$.

Then there exists a sequence $\sequence {z_n}_{n \in \N}$ in $A$ such that $\norm {z_n} = 1$ for each $n \in \N$, and: 

$z_n x \to 0$ as $n \to \infty$
and:

$x z_n \to 0$ as $n \to \infty$.
$\Box$

Aiming for a contradiction, suppose that there exists $y \in A$ such that $x y = 1$.
From the lemma, there exists a sequence $\sequence {z_n}_{n \in \N}$ in $A$ such that $\norm {z_n} = 1$ for each $n \in \N$, and: 

$z_n x \to 0$ as $n \to \infty$
From Product Rule for Sequence in Normed Algebra, we have: 

$z_n x y \to 0$ as $n \to \infty$.
Since $x y = 1$, this gives $z_n \to 0$ as $n \to \infty$. 
From Modulus of Limit: Normed Vector Space, we then have $\norm {z_n} \to 0$ as $n \to \infty$. 
But $\norm {z_n} = 1$ for each $n \in \N$, so this is impossible.
So we have a contradiction and there exists no such $y \in A$.
$\blacksquare$





