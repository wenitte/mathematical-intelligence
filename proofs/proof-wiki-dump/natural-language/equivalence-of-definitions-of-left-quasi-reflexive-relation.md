# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Left_Quasi-Reflexive_Relation



Theorem
Let $\RR \subseteq S \times S$ be a relation in $S$.
The following definitions of the concept of Left Quasi-Reflexive Relation are equivalent:

Definition 1
$\RR$ is left quasi-reflexive if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {x, x} \in \RR$
Definition 2
$\RR$ is left quasi-reflexive if and only if:

$\forall x \in \Dom \RR: \tuple {x, x} \in \RR$
where $\Dom \RR$ denotes the domain of $\RR$.


Proof
$(1)$ implies $(2)$
Let $\RR$ be a left quasi-reflexive relation by definition $1$.
Then by definition:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {x, x} \in \RR$
Let $x \in \Dom \RR$ be arbitrary.
Then by definition of domain:

$\exists y \in S: \tuple {x, y} \in \RR$
Hence by hypothesis:

$\tuple {x, x} \in \RR$
As $y$ is arbitrary:

$\forall x \in \Dom \RR: \tuple {x, x} \in \RR$
Thus $\RR$ is a left quasi-reflexive relation by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\RR$ be a left quasi-reflexive relation by definition $2$.
Then by definition:

$\forall x \in \Dom \RR: \tuple {x, x} \in \RR$
Let $x, y \in S$ be arbitrary such that $\tuple {x, y} \in \RR$.
Then by definition of image set:

$x \in \Dom \RR$
Hence by hypothesis:

$\tuple {x, x} \in \RR$
As $\tuple {x, y} \in \RR$ is arbitrary:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \tuple {x, x} \in \RR$
Thus $\RR$ is a left quasi-reflexive relation by definition $1$.
$\blacksquare$





