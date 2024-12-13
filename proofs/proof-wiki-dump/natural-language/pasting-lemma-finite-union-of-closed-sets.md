# 

Source: https://proofwiki.org/wiki/Pasting_Lemma/Finite_Union_of_Closed_Sets



Theorem
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be a finite indexing set.
Let $\family {C_i}_{i \mathop \in I}$ be a finite family of closed sets of $T$.
Let $f: X \to Y$ be a mapping such that the restriction $f \restriction_{C_i}$ is continuous for all $i \in I$.

Then $f$ is continuous on $C = \ds \bigcup_{i \mathop \in I} C_i$, that is, $f \restriction_C$ is continuous.


Corollary 1
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be a finite indexing set.
Let $\family {C_i}_{i \mathop \in I}$ be a finite family of closed sets of $T$.
Let $\family {f_i : C_i \to Y}_{i \mathop \in I}$ be a finite family of continuous mappings.

Let $C = \ds \bigcup_{i \mathop \in I} C_i$.
Let $f = \ds \bigcup_{i \mathop \in I} f_i : C \to Y$ where $\ds \bigcup_{i \mathop \in I} f_i$ is the union of relations.

Let for all $i, j \in I$, $f_i$ and $f_j$ agree on $C_i \cap C_j$.

Then $f$ is a continuous mapping on $C = \ds \bigcup_{i \mathop \in I} C_i$.


Corollary 2
Let $X$ and $Y$ be topological spaces.
Let $A$ and $B$ be closed in $X$.
Let $f: A \to Y$ and $g: B \to Y$ be continuous mappings that agree on $A \cap B$.
Let $f \cup g$ be the union of the mappings $f$ and $g$:

$\forall x \in A \cup B: \map {f \cup g} x = \begin {cases} \map f x & : x \in A \\ \map g x & : x \in B \end {cases}$

Then the mapping $f \cup g : A \cup B \to Y$ is continuous.


Proof
Let $V \subset S$ be a closed set.
By Continuity Defined from Closed Sets, we have that $U_i = \paren {f \restriction_{C_i} }^{-1} \sqbrk V$ is also closed.
From the definition of a restriction, we have that $U_i = C_i \cap f^{-1} \sqbrk V$.
Therefore, we can compute:














\(\ds \paren {f \restriction_{C_i} }^{-1} \sqbrk V\)

\(=\)







\(\ds C \cap f^{-1} \sqbrk V\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop \in I} C_i} \cap f^{-1} \sqbrk V\)





Definition of $C$














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \paren {C_i \cap f^{-1} \sqbrk V}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} U_i\)





Definition of $U_i$



That is, $U = \paren {f \restriction_{C_i} }^{-1} \sqbrk V$ is the union of finitely many closed sets.
Therefore, $U$ is itself closed by definition of a topology.
It follows by Continuity Defined from Closed Sets that $f \restriction_C$ is also continuous.
$\blacksquare$


Also known as
This theorem is sometimes referred to as the pasting lemma.


Also see
Pasting Lemma for Union of Open Sets for an analogous statement for open sets.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous): Problems: Section $1: \ 5$
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 18$: Continuous Functions: Theorem $18.3$: The pasting lemma




