# 

Source: https://proofwiki.org/wiki/Proper_Modular_Ideal_of_Algebra_is_Contained_in_Maximal_Ideal

Theorem
Let $R$ be a ring.
Let $\struct {A, \ast}$ be an $R$-algebra.
Let $\struct {J, \ast}$ be a proper modular ideal of $\struct {A, \ast}$. 

Then there exists a maximal ideal $M$ of $\struct {A, \ast}$ such that $J \subseteq M$. 


Proof
Let $u \in A$ be such that:

$a - u a \in J$ and $a - a u \in J$
for each $a \in A$.
Let $S$ be the set of ideals $I$ of $\struct {A, \ast}$ such that:

$u \not \in I$ and $J \subseteq I$.
Consider the partially ordered set $\struct {S, \subseteq}$ where $\subseteq$ is the subset relation.
We use Zorn's Lemma on $S$.
Let $\CC$ be a chain in $\struct {S, \subseteq}$.
We show that $\bigcup \CC$ is an upper bound for $\CC$. 
From Union of Chain of Ideals is Ideal: Algebra over Ring, we have:

$\bigcup \CC$ is an ideal.
From Set Union Preserves Subsets, we have $J \subseteq \bigcup \CC$. 
Since $u \not \in I$ for each $I \in \CC$, we also have $u \not \in \bigcup \CC$.
So every chain in $\struct {S, \subseteq}$ has an upper bound. 
Hence from Zorn's Lemma, $\struct {S, \subseteq}$ has a maximal element $I$. 
We show that $I$ is a maximal ideal. 
We know that there is no proper ideal $K$ with $u \not \in K$ such that $I \subsetneq K$ since $I$ is a maximal element of $\struct {S, \subseteq}$.
Aiming for a contradiction, suppose that there exists an ideal $K$ with $u \in K$ and $I \subseteq K$.
We then have $a u \in K$ for each $a \in A$ since $K$ is an ideal.
Since $J$ is modular and $J \subseteq K$, we also have $a - a u \in K$ for each $a \in A$.
Hence for each $a \in A$ we have $a = \paren {a - a u} + a u \in K$.
Hence $K = A$.
So there is no proper ideal $K$ such that $I \subsetneq K$.
Hence $I$ is a maximal ideal.
$\blacksquare$


Sources
1956: Nathan Jacobson: Structure of Rings ... (previous) ... (next): $\text{I}.3$: Strictly Cyclic Modules. Modular Right Ideals.
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $1.1$: Banach Algebras




