# 

Source: https://proofwiki.org/wiki/Basis_has_Subset_Basis_of_Cardinality_equal_to_Weight_of_Space


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T = \struct {X, \tau}$ be a topological space.
Let $\BB$ be a basis of $T$.

Then there exists a basis $\BB_0$ of $T$ such that

$\BB_0 \subseteq \BB$ and $\card {\BB_0} = \map w T$
where:

$\card {\BB_0}$ denotes the cardinality of $\BB_0$
$\map w T$ denotes the weight of $T$.


Proof
There are two cases: 

infinite weight
finite weight.


Case when Weight is Infinite
Let $T$ has infinite weight.
By definition of weight, there exists a basis $\BB_1$ of $T$ such that:

$(1): \quad \card {\BB_1} = \map w T$
We will prove:

$(2): \quad \ds \forall U \in \BB_1: \exists \AA \subseteq \BB: U = \bigcup \AA \land \card \AA \le \map w T$
Let $U \in \BB_1$.
Let $S = \set {W \in \BB: W \subseteq U}$.
By definition of subset:

$S \subseteq \BB$
By definition of basis:
$\ds \bigcup S = U$
By definition of set $S$, $S$ is set of open subset of $T$.
Then by Existence of Subfamily of Cardinality not greater than Weight of Space and Unions Equal there exists a subset $\AA \subseteq S$ such that:

$\ds \bigcup \AA = \bigcup S$ and $\card \AA \le \map w T$
Thus by Subset Relation is Transitive:

$\AA \subseteq \BB$.
Thus:

$\ds U = \bigcup \AA \land \card \AA \le \map w T$
This ends proof of $(2)$.

By $(2)$ and Axiom of Choice there exists a mapping $f: \BB_1 \to \powerset \BB$ such that:

$(3): \quad \ds \forall U \in \BB_1: U = \bigcup \map f U \land \card {\map f U} \le \map w T$
By Union is Smallest Superset, because $\forall U \in \BB_1: \map f U \subseteq \BB$:

$\ds \bigcup_{U \mathop \in \BB_1} \map f U \subseteq \BB$
Set $\BB_0 := \ds \bigcup_{U \mathop \in \BB_1} \map f U = \bigcup \Img f$
Now we will show that $\BB_0$ is basis of $T$.
By definition of basis:

$\BB \subseteq \tau$
Thus by Subset Relation is Transitive:

$\BB_0 \subseteq \tau$
Let $A$ be an open subset of $X$.
Let $p$ be a point of $X$ such that $p \in A$.
Then by definition of basis there exists $U \in \BB_1$ such that:

$p \in U \subseteq A$.
By $(3)$, $U = \ds \bigcup \map f U$.
Then by definition of union there exists a set $D$ such that:

$p \in D \in \map f U$
By Set is Subset of Union:

$D \subseteq U$
By definition of union:

$D \in \BB_0$
Thus by Subset Relation is Transitive:

$\exists D \in \BB_0: p \in D \subseteq A$
This by definition of basis ends a proof of basis.

By $(1)$ and Cardinality of Image of Mapping not greater than Cardinality of Domain:

$\card {\Img f} \le \map w T$
For every $U \in \BB_1$:

$\card {\map f U} \le \map w T$
Then by Cardinality of Union not greater than Product:

$\card {\BB_0} \le \card {\map w T \times \map w T}$
Thus by Cardinal Product Equal to Maximum, because $\map w T$ is infinite :

$\card {\BB_0} \le \map w T$.
Thus by definition of weight:

$\card {\BB_0} = \map w T$.
$\Box$


Case when Weight is Finite
Let $T$ has finite weight.
By Finite Weight Space has Basis equal Image of Mapping of Intersections, there exist a basis $\BB_0$ of $T$ and a mapping $f: X \to \tau$ such that:

$\BB_0 = \Img f)$
and:

$\forall x \in X: \paren {x \in \map f x \land \forall U \in \tau: x \in U \implies \map f x \subseteq U}$
Thus by Image of Mapping of Intersections is Smallest Basis:

$\BB_0 \subseteq \BB$
Thus by Cardinality of Image of Mapping of Intersections is not greater than Weight of Space:

$\card {\BB_0} \le \map w T$
Thus by definition of weight:

$\card {\BB_0} = \map w T$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_2:18




