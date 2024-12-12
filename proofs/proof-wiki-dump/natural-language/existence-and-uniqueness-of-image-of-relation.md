# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Image_of_Relation

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be a relation.

Then the image $\Img \RR$ of $\RR$ exists and is unique.


Proof
By the Axiom of Specification we can create the subclass of $V$:

$\Img \RR = \set {y \in V: \exists x \in V: \tuple {x, y} \in \RR}$
Hence $\Img \RR$ exists.
Suppose $\QQ \subseteq V$ such that $\QQ$ and $\Img \RR$ are both the image of $\RR$.
Then:

$\QQ = \set {y \in V: \exists x \in V: \tuple {x, y} \in \RR}$
Thus:

$x \in \QQ \implies x \in \Img \RR$
and:

$x \in \Img \RR \implies x \in \QQ$
Hence by the Axiom of Extension:

$\QQ = \Img \RR$
and uniqueness has been demonstrated.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 8$ Relations




