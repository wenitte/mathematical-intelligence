# 

Source: https://proofwiki.org/wiki/Closure_of_Proper_Ideal_in_Unital_Banach_Algebra_is_Proper_Ideal

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$.
Let $I$ be a proper ideal of $A$.

Then $I^-$ is a proper ideal of $A$.


Proof
From Closure of Subspace of Normed Vector Space is Subspace, $I^-$ is a vector subspace of $A$. 
Let $x \in I^-$ and $y \in A$.
We need to show that $x y \in I^-$. 
From the definition of a closed set in a normed vector space, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ valued in $I$ such that:

$x_n \to x$
Since $I$ is an ideal, we have $x_n y \in I$ for each $n \in \N$.
From Product Rule for Sequence in Normed Algebra, we have:

$x_n y \to x y$
From the definition of closure, we have $x y \in I^-$. 
So $I^-$ is an ideal.
It remains to show that it is proper.
Let $\map G A$ be the group of units of $A$.
From Ideal of Unit is Whole Ring, we have:

$J \cap \map G A = \O$
From Group of Units in Unital Banach Algebra is Open, $\map G A$ is open.
Hence from Open Set Disjoint from Set is Disjoint from Closure, we have that:

$J^- \cap \map G A = \O$
From Ideal of Unit is Whole Ring, we conclude that $I^-$ is a proper ideal of $A$.
$\blacksquare$





