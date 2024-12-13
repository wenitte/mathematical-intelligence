# 

Source: https://proofwiki.org/wiki/Niemytzki_Plane_is_Topology

Theorem
Niemytzki plane is a topological space.


Proof
By definition $T = \struct {S, \tau}$ is the Niemytzki plane if and only if:




\(\text {(1)}: \quad\)









\(\ds S\)

\(=\)







\(\ds \set {\tuple {x, y}: y \ge 0}\)










\(\text {(2)}: \quad\)









\(\ds \map \BB {x, y}\)

\(=\)







\(\ds \set {\map {B_r} {x, y} \cap S: r > 0}\)





if $x, y \in \R, y > 0$




\(\text {(3)}: \quad\)









\(\ds \map \BB {x, 0}\)

\(=\)







\(\ds \set {\map {B_r} {x, r} \cup \set {\tuple {x, 0} }: r > 0}\)





if $x \in \R$




\(\text {(4)}: \quad\)









\(\ds \tau\)

\(=\)







\(\ds \set {\bigcup \GG: \GG \subseteq \bigcup_{\tuple {x, y} \in S} \map \BB {x, y} }\)









where $\map {B_r} {x, y}$ denotes the open $r$-ball of $\tuple {x, y}$ in the real number plane $\R^2$ with the usual (Euclidean) metric.

According to Topology Defined by Neighborhood System it should be proved:

$(\text N 0): \quad \forall \tuple {x, y} \in S: \map \BB {x, y}$ is non-empty set of subsets of $S$
$(\text N 1): \quad \forall \tuple {x, y} \in S, U \in \map \BB {x, y}: \tuple {x, y} \in U$
$(\text N 2): \quad \forall \tuple {x, z} \in S, U \in \map \BB {x, z}, \tuple {y, s} \in U: \exists V \in \map \BB {y, s}: V \subseteq U$
$(\text N 3): \quad \forall \tuple {x, y} \in S, U_1, U_2 \in \map \BB {x, y}: \exists U \in \map \BB {x, y}: U \subseteq U_1 \cap U_2$

Ad $(\text N 0)$:
Let $\tuple {x, y} \in S$.
In both cases: $y > 0$ and $y = 0$, by $(2)$ and $(3)$:

$\map \BB {x, y}$ is non-empty
Let $U \in \map \BB {x, y}$.
In a case when $y > 0$:

$\exists r > 0: U = \map {B_r} {x, y} \cap S$
By Intersection is Subset:

$U$ is a subset of $S$.
In a case when $y = 0$:

$\exists r > 0: U = \map {B_r} {x, r} \cup \set {\tuple {x, 0} }$
By definition of subset:

$\map {B_r} {x, r} \subseteq S$ and $\set {\tuple {x, 0} } \subseteq S$
By Union is Smallest Superset:

$U$ is a subset of $S$.

Ad $(\text N 1)$:
Let $\tuple {x, y} \in S$.
Let $U \in \map \BB {x, y}$.
In a case when $y > 0$ by $(2)$:

$\exists r > 0: U = \map {B_r} {x, y} \cap S$
By the metric space axioms:

$\map d {\tuple {x, y}, \tuple {x, y} } = 0$
where $d$ denotes the distance function of $\R^2$ Euclidean space.
By definition of open ball:

$\tuple {x, y} \in \map {B_r} {x, y}$
Thus by definition of intersection:

$\tuple {x, y} \in U$
In a case when $y = 0$ by $(3)$:

$\exists r > 0: U = \map {B_r} {x, r} \cup \set {\tuple {x, 0} }$
By definition of singleton:

$\tuple {x, 0} \in \set {\tuple {x, 0} }$
Thus by definition of union:

$\tuple {x, 0} \in U$
Thus in both cases:

$\tuple {x, 0} \in U$

Ad $(\text N 2)$:
Let $\tuple {x, 0} \in S, U \in \map \BB {x, y}, \tuple {z, s} \in U$.
In a case when $y > 0$ by $(2)$:

$\exists r > 0: U = \map {B_r} {x, y} \cap S$
By definition of intersection:

$\tuple {z, s} \in \map {B_r} {x, y}$
By definition of open ball:

$\map d {\tuple {x, y}, \tuple {z, s} } < r$
In a subcase when $s > 0$ define

$r' := r - \map d {\tuple {x, y}, \tuple {z, s} }$
and

$V := \map {B_{r'} } {z, s} \cap S$
By $(2)$:

$V \in \map \BB {z, s}$
By proof of Open Ball of Point Inside Open Ball:

$\map {B_{r'} } {z, s} \subseteq \map {B_r} {x, y}$
Thus by Set Intersection Preserves Subsets/Corollary:

$V \subseteq U$
In a subcase when $s = 0$ define

$r := \dfrac {r - \map d {\tuple {x, y}, \tuple {z, s} } } 2$
and

$V := \map {B_{r} } {z, r} \cup \set {\tuple {z, 0} }$
By $(3)$:

$V \in \map \BB {z, s}$













\(\ds \map d {\tuple {x, y}, \tuple {z, r} }\)

\(\le\)







\(\ds \map d {\tuple {x, y}, \tuple {z, 0} } + \map d {\tuple {z, 0}, \tuple {z, r} }\)





Metric Space Axioms














\(\ds \)

\(=\)







\(\ds \map d {\tuple {x, y}, \tuple {z, 0} } + r\)





Definition of Real Number Plane with Euclidean Metric














\(\ds \)

\(=\)







\(\ds r - r\)









By Open Ball is Subset of Open Ball:

$\map {B_{r} } {z, r} \subseteq \map {B_r} {x, y}$
and

$\map {B_{r} } {z, r} \subseteq S$
By Intersection is Largest Subset:

$\map {B_{r} } {z, r} \subseteq U$
By definition of subset:

$\set {\tuple {z, 0} } \subseteq U$
Thus by Union is Smallest Superset:

$V \subseteq U$

In a case when $y = 0$ by $(3)$:

$\exists r > 0: U = \map {B_r} {x, r} \cup \set {\tuple {x, 0} }$
By definition of onion and singleton:

$\tuple {z, s} \in \map {B_r} {x, r}$ or $\tuple {z, s} = \tuple {x, 0}$
In a subcase when $\tuple {z, s} = \tuple {x, 0}$ define:

$V := U$
By $(3)$:

$V \in \map \BB {z, s}$
Thus by Set is Subset of Itself:

$V \subseteq U$
In a subcase when $\tuple {z, s} \in \map {B_r} {x, r}$, define:

$r' := r - \map d {\tuple {x, r}, \tuple {z, s} }$
and

$V := \map {B_{r'} } {z, s} \cap S$
By definition of open ball:

$\map d {\tuple {x, r}, \tuple {z, s} } < r$
Then $r' > 0$
By $(2)$:

$V \in \map \BB {z, s}$
By Open Ball of Point Inside Open Ball:

$\map {B_{r'} } {z, s} \subseteq \map {B_{r'} } {x, r}$
By Intersection is Subset:

$V = \map {B_{r'} } {z, s} \cap S \subseteq \map {B_{r'} } {z, s}$
By Set is Subset of Union:

$\map {B_{r'} } {x, r} \subseteq U$
Thus by Subset Relation is Transitive:
$V \subseteq U$

Ad $(\text N 3)$:
Let $\tuple {x, y} \in S, U_1, U_2 \in \map \BB {x, y}$.
In a case when $y > 0$ by $(2)$:

$\exists r_1 > 0: U_1 = \map {B_{r_1} } {x, y} \cap S$
and

$\exists r_2 > 0: U_2 = \map {B_{r_2} } {x, y} \cap S$
By Trichotomy Law for Real Numbers:

$r_1 \le r_2$ or $r_1 \ge r_2$
Without loss of generality, suppose 

$r_1 \le r_2$













\(\ds r_2 - r_1\)

\(\ge\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \map d {\tuple {x, y}, \tuple {x, y} }\)





Metric Space Axioms



Then by Open Ball is Subset of Open Ball:

$\map {B_{r_1} } {x, y} \subseteq \map {B_{r_2} } {x, y}$
By Set Intersection Preserves Subsets/Corollary:

$U_1 \subseteq U_2$
By Intersection with Subset is Subset:

$U_1 = U_1 \cap U_2$
Thus by Set is Subset of Itself:

$U_1 \subseteq U_1 \cap U_2$

In a case when $y = 0$ by $(3)$:

$\exists r_1 > 0: U_1 = \map {B_{r_1} } {x, r_1} \cup \set {\tuple {x, 0} }$
and

$\exists r_2 > 0: U_2 = \map {B_{r_2} } {x, r_2} \cup \set {\tuple {x, 0} }$
By Trichotomy Law for Real Numbers:

$r_1 \le r_2$ or $r_1 \ge r_2$
Without loss of generality, suppose 

$r_1 \le r_2$













\(\ds r_2 - r_1\)

\(=\)







\(\ds \map d {\tuple {x, r_2}, \tuple {x, r_1} }\)





Definition of Real Number Plane with Euclidean Metric



Then by Open Ball is Subset of Open Ball:

$\map {B_{r_1} } {x, r_1} \subseteq \map {B_{r_2} } {x, r_2}$
By Set Union Preserves Subsets/Corollary:

$U_1 \subseteq U_2$
By Intersection with Subset is Subset:

$U_1 = U_1 \cap U_2$
Thus by Set is Subset of Itself:

$U_1 \subseteq U_1 \cap U_2$
Thus by $(\text N 0)$-$(\text N 3)$, $(4)$ and Topology Defined by Neighborhood System:

$T = \struct {S, \tau}$ is a topological space.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_5:def 3




