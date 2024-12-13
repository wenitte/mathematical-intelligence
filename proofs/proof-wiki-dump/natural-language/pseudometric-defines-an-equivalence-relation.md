# 

Source: https://proofwiki.org/wiki/Pseudometric_Defines_an_Equivalence_Relation



Theorem
Let $X$ be a set on which there is a pseudometric $d: X \times X \to \R$.
For any $x, y \in X$, let $x \sim y$ denote that $\map d {x, y} = 0$.

Then $\sim$ is an equivalence relation, and the equivalence classes consist of sets of elements of $X$ at zero distance from each other.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive
From the definition, we have that $\forall x \in X: \map d {x, y} = 0$.
So $\sim$ is a reflexive relation.
$\Box$


Symmetric
From the definition, we have that $\forall x, y \in X: \map d {x, y} = \map d {y, x}$.
So $\sim$ is a symmetric relation.
$\Box$


Transitive
From the definition, we have that $\map d {x, y} + \map d {y, z} \ge \map d {x, z}$.
So if $\map d {x, y} = 0$ and $\map d {y, z} = 0$ it follows directly that $\map d {x, z} = 0$.
So $\sim$ is a transitive relation.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive, and so by definition an equivalence relation.
$\blacksquare$





