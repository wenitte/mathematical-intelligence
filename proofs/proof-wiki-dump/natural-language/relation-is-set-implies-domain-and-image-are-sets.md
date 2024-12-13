# 

Source: https://proofwiki.org/wiki/Relation_is_Set_implies_Domain_and_Image_are_Sets

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be a relation.

Let $\RR$ be a set.
Then $\Dom \RR$ and $\Img \RR$ are also sets.


Proof
From Domain of Relation is Subclass of Union of Union of Relation:

$\Dom \RR \subseteq \map \bigcup {\bigcup \RR}$
From Image of Relation is Subclass of Union of Union of Relation:

$\Img \RR \subseteq \map \bigcup {\bigcup \RR}$

We are given that $\RR$ is a set.
From the Axiom of Unions:

$\bigcup \RR$ is a set.
Applying the Axiom of Unions a second time:

$\map \bigcup {\bigcup \RR}$ is a set.
We have that $\RR \subseteq V$, by definition of basic universe
From the Axiom of Swelledness, it follows that every subclass of $V$ is a set.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 8$ Relations: Theorem $8.2$




