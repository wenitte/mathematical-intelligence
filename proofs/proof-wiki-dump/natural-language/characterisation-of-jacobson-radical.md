# 

Source: https://proofwiki.org/wiki/Characterisation_of_Jacobson_Radical



Theorem
Let $A$ be a commutative ring with unity.
Let $A^\times$ be the group of units of $A$.
Let $\map {\operatorname {Jac} } A$ be the Jacobson radical of $A$.

Then:

$\map {\operatorname {Jac} } A = \set {a \in A: 1_A - a x \in A^\times \text{ for all } x \in A}$
where $1_A$ is the unity of $A$.


Proof
Recall the definition of Jacobson radical of $A$:

$\map {\operatorname {Jac} } A$ is the intersection of all maximal ideals of $R$.


$\subset$ Direction
Aiming for a contradiction, suppose that $x \in \map {\operatorname {Jac} } A$ such that there exists $y \in A$ such that $1_A - x y \notin A^\times$. 
By definition $x$ is contained in all maximal ideals of $A$.
Let $\mathfrak m \subseteq A$ be one particular such maximal ideal of $A$.
Then $x \in \map {\operatorname {Jac} } A \subseteq \mathfrak m$ implies that $xy \in \mathfrak m$ and therefore $1_A \in \mathfrak m$.
But if $1_A \in \mathfrak m$ then from Ideal of Unit is Whole Ring: Corollary:

$\mathfrak m = R$
This contradicts the definition of $\mathfrak m$ as a maximal ideal of $A$.

Hence by Proof by Contradiction:

$\map {\operatorname {Jac} } A \subseteq \set {a \in A: 1_A - a x \in A^\times \text{ for all } x \in A}$
$\Box$


$\supset$ Direction
Now suppose that $x \notin \map {\operatorname {Jac} } A$.
Then $x \notin \mathfrak m$ for some maximal ideal $\mathfrak m$ of $A$.
Because $\mathfrak m$ is maximal, $x$ and $\mathfrak m$ generate $A$.
Therefore there exist $w \in \mathfrak m$ and $y \in A$ such that $w + x y = 1_A$.
Thus $1_A - x y \in \mathfrak m$, and $1_A - x y \notin A^\times$.
Hence:

$\map {\operatorname {Jac} } A \supseteq \set {a \in A: 1_A - a x \in A^\times \text{ for all } x \in A}$
$\Box$

The result follows by definition of set equality.
$\blacksquare$





