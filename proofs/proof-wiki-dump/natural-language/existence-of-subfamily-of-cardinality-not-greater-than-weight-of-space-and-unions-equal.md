# 

Source: https://proofwiki.org/wiki/Existence_of_Subfamily_of_Cardinality_not_greater_than_Weight_of_Space_and_Unions_Equal

Theorem
Let $T$ be a topological space.
Let $\FF$ be a set of open sets of $T$.

There exists a subset $\GG \subseteq \FF$ such that:

$\ds \bigcup \GG = \bigcup \FF$
and:

$\card \GG \le \map w T$
where:

$\map w T$ denotes the weight of $T$
$\card \GG$ denotes the cardinality of $\GG$.


Proof
By definition of weight of $T$ there exists a basis $\BB$ of $T$ such that:

$(1): \quad \card \BB = \map w T$
Let:

$\BB_1 = \set {W \in \BB: \exists U \in \FF: W \subseteq U}$
By definition of subset:

$\BB_1 \subseteq \BB$
Then by Subset implies Cardinal Inequality:

$(2): \quad \card {\BB_1} \le \card \BB$
By definition of set $\BB_1$:

$\forall W \in \BB_1: \exists U \in \FF: W \subseteq U$
Then by the Axiom of Choice there exists a mapping $f$ from $\BB_1$ into $\FF$ such that

$(3): \quad \forall U \in \BB_1: U \subseteq f \sqbrk U$
Let:

$\GG = \Img f$
where $\Img f$ denotes the image of $f$.
By hypothesis:

$\GG \subseteq \FF$
Then by Union of Subset of Family is Subset of Union of Family:

$\ds \bigcup \GG \subseteq \bigcup \FF$
By definition of set equality, to prove $\ds \bigcup \GG = \bigcup \FF$ it is sufficient to show:

$\ds \bigcup \FF \subseteq \bigcup \GG$
Let $\ds x \in \bigcup \FF$.
By definition of union there exists a set $A$ such that:

$A \in \FF$ and $x \in A$
Because $A$ is open, then by definition of basis there exists $U \in \BB$ such that:

$x \in U \subseteq A$
By definition of the set $\BB_1$:

$U \in \BB_1$
Because $\GG = \Img f$:

$f \sqbrk U \in \GG$
By $(3)$ and Set is Subset of Union:

$\ds U \subseteq f \sqbrk U \subseteq \bigcup \GG$
Thus by definition of subset:

$\ds x \in \bigcup \GG$
This ends the proof of inclusion.

By Cardinality of Image of Mapping not greater than Cardinality of Domain:

$\card {\Img f} \le \card {\BB_1}$
Thus by $(1)$ and $(2)$:

$\card \GG \le \map w T$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_2:11




