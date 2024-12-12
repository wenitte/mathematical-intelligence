# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strictly_Well-Founded_Relation



Theorem
The following definitions of the concept of Strictly Well-Founded Relation are equivalent:

Definition 1
$\RR$ is a strictly well-founded relation on $S$ if and only if every non-empty subset of $S$ has a strictly minimal element under $\RR$.

Definition 2
$\RR$ is a strictly well-founded relation on $S$ if and only if:

$\forall T: \paren {T \subseteq S \land T \ne \O} \implies \exists y \in T: \forall z \in T: \neg \paren {z \mathrel \RR y}$
where $\O$ is the empty set.

Definition 3
Let $\RR$ be a well-founded relation which is also antireflexive.
Then $\RR$ is a strictly well-founded relation on $S$.


Proof
$(1)$ if and only if $(2)$
By definition, $y \in T$ is a strictly minimal element (under $\RR$) of $T$ if and only if:

$\forall z \in T: z \not \mathrel \RR y$
Thus it is seen that definition $1$ means exactly the same as definition $2$.
$\Box$


$(1)$ iff $(3)$
Let $\RR$ be a Strictly Well-Founded Relation by definition $1$.
From Strictly Well-Founded Relation is Well-Founded, $\RR$ is a well-founded relation on $S$.
From Strictly Well-Founded Relation is Antireflexive, $\RR$ is antireflexive.
Thus $\RR$ is a Strictly Well-Founded Relation by definition $3$.
$\Box$


$(3)$ implies $(2)$
Let $\RR$ be a Strictly Well-Founded Relation by definition $3$.
Then by definition:

$\RR$ is a well-founded relation on $S$
$\RR$ is antireflexive.
Thus we have by definition of well-founded relation on $S$:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in T \setminus \set z: \tuple {y, z} \notin \RR$
But because $\RR$ is antireflexive:

$\tuple {z, z} \notin \RR$
Hence it follows that:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in \paren {T \setminus \set z} \cup \set z: \tuple {y, z} \notin \RR$
That is, from Set Difference Union Second Set is Union:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in \paren {T \cup \set z}: \tuple {y, z} \notin \RR$
But as $\set z \subseteq T$, we have from Union with Superset is Superset that $T \cup \set z = T$.
Hence:

$\forall T \subseteq S: T \ne \O: \exists z \in T: \forall y \in T: \tuple {y, z} \notin \RR$
Thus $\RR$ is a Strictly Well-Founded Relation by definition $2$.
$\blacksquare$





