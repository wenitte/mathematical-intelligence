# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Right_Quasi-Reflexive_Relation



Theorem
Let $\RR \subseteq S \times S$ be a relation in $S$.
The following definitions of the concept of Right Quasi-Reflexive Relation are equivalent:

Definition 1
$\RR$ is right quasi-reflexive if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {y, y} \in \RR$
Definition 2
$\RR$ is right quasi-reflexive if and only if:

$\forall y \in \Img \RR: \tuple {y, y} \in \RR$
where $\Img \RR$ denotes the image set of $\RR$.


Proof
$(1)$ implies $(2)$
Let $\RR$ be a right quasi-reflexive relation by definition $1$.
Then by definition:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {y, y} \in \RR$
Let $y \in \Img \RR$ be arbitrary.
Then by definition of image set:

$\exists x \in S: \tuple {x, y} \in \RR$
Hence by hypothesis:

$\tuple {y, y} \in \RR$
As $y$ is arbitrary:

$\forall y \in \Img \RR: \tuple {y, y} \in \RR$
Thus $\RR$ is a right quasi-reflexive relation by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\RR$ be a right quasi-reflexive relation by definition $2$.
Then by definition:

$\forall y \in \Img \RR: \tuple {y, y} \in \RR$
Let $x, y \in S$ be arbitrary such that $\tuple {x, y} \in \RR$.
Then by definition of image set:

$y \in \Img \RR$
Hence by hypothesis:

$\tuple {y, y} \in \RR$
As $\tuple {x, y} \in \RR$ is arbitrary:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {y, y} \in \RR$
Thus $\RR$ is a right quasi-reflexive relation by definition $1$.
$\blacksquare$





