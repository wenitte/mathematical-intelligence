# 

Source: https://proofwiki.org/wiki/Intersection_is_Largest_Subset/Family_of_Sets



Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.

Then for all sets $X$:

$\ds \paren {\forall i \in I: X \subseteq S_i} \iff X \subseteq \bigcap_{i \mathop \in I} S_i$
where $\ds \bigcap_{i \mathop \in I} S_i$ is the intersection of $\family {S_i}$.


Proof
Let $X \subseteq S_i$ for all $i \in I$.
Then from Set is Subset of Intersection of Supersets: General Result:

$\ds X \subseteq \bigcap_{i \mathop \in I} S_i$
$\Box$

Now suppose that $\ds X \subseteq \bigcap_{i \mathop \in I} S_i$.
From Intersection is Subset: Family of Sets we have:

$\ds \forall i \in I: \bigcap_{j \mathop \in I} S_j \subseteq S_i$
So from Subset Relation is Transitive, it follows that:

$\ds \forall i \in I: X \subseteq \bigcap_{j \mathop \in I} S_j \subseteq S_i$
So it follows that $\forall i \in I: X \subseteq S_i$.
So:

$\ds X \subseteq \bigcap_{i \mathop \in I} S_i \implies \paren {\forall i \in I: X \subseteq S_i}$
$\Box$

Hence:

$\ds \paren {\forall i \in I: X \subseteq S_i} \iff X \subseteq \bigcap_{i \mathop \in I} S_i$
$\blacksquare$


Also see
Union is Smallest Superset: Family of Sets


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.1 \ (1)$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $4 \ \text{(a)}$




