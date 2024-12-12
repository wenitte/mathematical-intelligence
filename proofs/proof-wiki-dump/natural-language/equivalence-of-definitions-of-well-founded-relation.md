# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Well-Founded_Relation



Theorem
Let $\struct {S, \RR}$ be a Relational Structure.

The following definitions of the concept of Well-Founded Relation are equivalent:

Definition 1
$\RR$ is a well-founded relation on $S$ if and only if:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
where $\O$ is the empty set.

Definition 2
$\RR$ is a well-founded relation on $S$ if and only if:

for every non-empty subset $T$ of $S$, $T$ has a minimal element.


Proof
By definition of minimal element:

$\forall y \in T: y \preceq x \implies x = y$


$(1)$ implies $(2)$
Let $\RR$ be a well-founded relation by definition $1$.
Then by definition:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
So, let $T \subseteq S: T \ne \O$.
That is, $T$ is a non-empty subset of $S$.
It is asserted that there exists $z \in T \setminus \set z$ such that:

$\forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
This does not exclude the case that $\tuple {z, z} \in \RR$.
So if there exists $y \in T$ such that $\tuple {y, z} \in \RR$, then it must be the case that $y = z$
That is:

$\forall y \in T: \tuple {y, z} \in \RR \implies y = z$
That is, $z$ is a minimal element of $T$ under $\RR$.
So we have shown that:

for every non-empty subset $T$ of $S$, there exists an element $z$ in $T$ such that $z$ is a minimal element of $T$.
Thus $\RR$ is a well-founded relation by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\RR$ be a well-founded relation by definition $2$.
Then by definition:

for every non-empty subset $T$ of $S$, $T$ has a minimal element.
That is, for every non-empty subset $T$ of $S$, there exists an element $z$ in $T$ such that:

$\forall y \in T: \tuple {y, z} \in \RR \implies y = z$
Hence:

$\forall y \in T \setminus \set z: \tuple {y, z} \in \RR \implies y = z$
But:

$\not \exists y \in T \setminus \set z: y = z$
and so it follows that:

$\forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
That is:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
Thus $\RR$ is a well-founded relation by definition $1$.
$\blacksquare$





