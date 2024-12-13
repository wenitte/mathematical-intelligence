# 

Source: https://proofwiki.org/wiki/Pasting_Lemma/Continuous_Mappings_on_Closed_Sets

Theorem
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be a finite indexing set.
Let $\family {C_i}_{i \mathop \in I}$ be a finite family of closed sets of $T$.
Let $\family {f_i : C_i \to Y}_{i \mathop \in I}$ be a finite family of continuous mappings.

Let $C = \ds \bigcup_{i \mathop \in I} C_i$.
Let $f = \ds \bigcup_{i \mathop \in I} f_i : C \to Y$ where $\ds \bigcup_{i \mathop \in I} f_i$ is the union of relations.

Let for all $i, j \in I$, $f_i$ and $f_j$ agree on $C_i \cap C_j$.

Then $f$ is a continuous mapping on $C = \ds \bigcup_{i \mathop \in I} C_i$.


Proof
From Union of Family of Mappings which Agree is Mapping:

$f$ is a mapping from $C$ to $Y$.
From Restriction of Union of Mappings which Agree Equals Mapping:

$\forall i \in I : f \restriction_{C_i} = f_i$
Hence:

$\forall i \in I : f \restriction_{C_i}$ is continuous
From Pasting Lemma for Finite Union of Closed Sets

$f$ is continuous
$\blacksquare$


Also see
Pasting Lemma for Continuous Mappings on Open Sets for an analogous statement for open sets.




