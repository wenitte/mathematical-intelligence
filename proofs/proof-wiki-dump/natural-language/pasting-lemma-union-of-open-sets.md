# 

Source: https://proofwiki.org/wiki/Pasting_Lemma/Union_of_Open_Sets



Theorem
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be an indexing set.
Let $\family {C_i}_{i \mathop \in I}$ be a family of open sets of $T$.
Let $f: X \to Y$ be a mapping such that the restriction $f \restriction_{C_i}$ is continuous for all $i \in I$.

Then $f$ is continuous on $C = \ds \bigcup_{i \mathop \in I} C_i$, that is, $f \restriction_C$ is continuous.


Corollary 1
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be an indexing set.
Let $\family {C_i}_{i \mathop \in I}$ be a family of open sets of $T$.
Let $\family {f_i : C_i \to Y}_{i \mathop \in I}$ be a family of continuous mappings.

Let $C = \ds \bigcup_{i \mathop \in I} C_i$.
Let $f = \ds \bigcup_{i \mathop \in I} f_i : C \to Y$ where $\ds \bigcup_{i \mathop \in I} f_i$ is the union of relations.

Let for all $i, j \in I$, $f_i$ and $f_j$ agree on $C_i \cap C_j$.

Then $f$ is a continuous mapping on $C = \ds \bigcup_{i \mathop \in I} C_i$.


Corollary 2
Let $X$ and $Y$ be topological spaces.
Let $A$ and $B$ be open in $X$.
Let $f: A \to Y$ and $g: B \to Y$ be continuous mappings that agree on $A \cap B$.
Let $f \cup g$ be the union of the mappings $f$ and $g$:

$\forall x \in A \cup B: \map {f \cup g} x = \begin {cases} \map f x & : x \in A \\ \map g x & : x \in B \end {cases}$

Then the mapping $f \cup g : A \cup B \to Y$ is continuous.


Proof
Let $V$ be an open set of $S$.
By assumption, we have that, for all $i \in I$, $U_i = \paren {f \restriction_{C_i} }^{-1} \sqbrk V$ is also open in $T$.
By Definition of Restriction of Mapping, we have that $U_i = C_i \cap f^{-1} \sqbrk V$.
Therefore, we can compute:














\(\ds \paren {f \restriction_C}^{-1} \sqbrk V\)

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



That is, $U = \paren {f \restriction_C}^{-1} \sqbrk V$ is a union of open sets.
Therefore, $U$ is itself open by definition of topology.
It follows that $f \restriction_C$ is also continuous by definition.
$\blacksquare$


Also see
Pasting Lemma for Finite Union of Closed Sets for an analogous statement for closed sets.




