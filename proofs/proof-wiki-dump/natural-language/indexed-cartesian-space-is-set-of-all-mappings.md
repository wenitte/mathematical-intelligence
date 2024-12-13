# 

Source: https://proofwiki.org/wiki/Indexed_Cartesian_Space_is_Set_of_all_Mappings

Theorem
Let $I$ be an indexing set.
Let $\ds \prod_{i \mathop \in I} S$ denote the cartesian space of $S$ indexed by $I$.

Then $\ds \prod_{i \mathop \in I} S$ is the set of all mappings from $I$ to $S$, and hence the notation:

$S^I := \ds \prod_{i \mathop \in I} S$


Proof
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
By definition of the Cartesian product of $\family {S_i}_{i \mathop \in I}$:

$(1): \quad \ds \prod_{i \mathop \in I} S_i := \set {f: \paren {f: I \to \bigcup_{i \mathop \in I} S_i} \land \paren {\forall i \in I: \paren {\map f i \in S_i} } }$
where $f$ denotes a mapping.
We have that that:

$\forall i \in I: S_i = S$
From Set Union is Idempotent:

$\ds \bigcup_{i \mathop \in I} S = S$
Hence when $S_i = S$ for all $i \in I$, $(1)$ can be written:

$\ds \prod_{i \mathop \in I} S = \set {f: \paren {f: I \to S} \land \paren {\forall i \in I: \paren {\map f i \in S_i} } }$
which is exactly the definition of $S^I$ towards which we are aiming.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $1$




