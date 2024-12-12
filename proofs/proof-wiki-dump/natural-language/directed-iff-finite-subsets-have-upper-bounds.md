# 

Source: https://proofwiki.org/wiki/Directed_iff_Finite_Subsets_have_Upper_Bounds



Theorem
Let $\struct {S, \precsim}$ be a preordered set.
Let $H$ be a non-empty subset of $S$.
Then $H$ is directed if and only if:

for every finite subset $A$ of $H$:
$\exists h \in H: \forall a \in A: a \precsim h$


Proof
Sufficient Condition
Let $R$ be directed.
We will prove by induction of the cardinality of finite subset of $H$.


Base case
$\forall A \subseteq H: \card A = 0 \implies \exists h \in H: \forall a \in A: a \precsim h$
where $\card A$ denotes the cardinality of $A$.
Let $A \subseteq H$ such that

$\card A = 0$
By Cardinality of Empty Set:

$A = \O$
By definition of empty set:

$\exists h: h \in H$
Thus by definition of empty set:

$\exists h \in H: \forall a \in A: a \precsim h$


Induction Hypothesis
$\forall A \subseteq H: \card A = n \implies \exists h \in H: \forall a \in A: a \precsim h$


Induction Step
$\forall A \subseteq H: \card A = n + 1 \implies \exists h \in H: \forall a \in A: a \precsim h$
Let $A \subseteq H$ such that

$\card A = n + 1$
By definition of cardinality of finite set:

$A \sim \N_{< n + 1}$
where $\sim$ denotes set equivalence.
By definition of set equivalence:

there exists a bijection $f: \N_{< n + 1} \to A$
By Restriction of Injection is Injection:

$f \restriction_{\N_{< n} }: \N_{< n} \to \map {f^\to} {\N_{<n} }$ is an injection.
By definition

$f \restriction_{\N_{< n} }: \N_{< n} \to \map {f^\to} {\N_{<n} }$ is a surjection.
By definition

$f \restriction_{\N_{< n} }: \N_{< n} \to \map {f^\to} {\N_{<n} }$ is a bijection.
By definition of set equivalence:

$\N_{< n} \sim \map {f^\to} {\N_{<n} }$
By definition of cardinality of finite set:

$\card {\map {f^\to} {\N_{<n} } } = n$
By definitions of image of set and subset:

$\map {f^\to} {\N_{<n} } \subseteq A$
By Subset Relation is Transitive:

$\map {f^\to} {\N_{<n} } \subseteq H$
By Induction Hypothesis:

$\exists h \in H: \forall a \in \map {f^\to} {\N_{<n} }: a \precsim h$
By definition $\N_{< n + 1}$

$n \in \N_{< n + 1}$
By definition of mapping:

$\map f n \in A$
By definition of subset:

$\map f n \in H$
By definition of directed subset:

$\exists h' \in H: \map f n \precsim h' \land  h \precsim h'$













\(\ds A\)

\(=\)







\(\ds \map {f^\to} {\N_{< n + 1} }\)





Definition of Surjection














\(\ds \)

\(=\)







\(\ds \map {f^\to} {\N_{< n} \cup \set n}\)





Definition of Initial Segment of Natural Numbers














\(\ds \)

\(=\)







\(\ds \map {f^\to} {\N_{< n} } \cup \map {f^\to} {\set n}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \map {f^\to} {\N_{< n} } \cup \set {\map f n}\)





Image of Singleton under Mapping



Let $a \in A$.
Then by definitions of union and singleton:

$a \in \map {f^\to} {\N_{< n} } \lor a = \map f n$
So:

$a \precsim h \lor a = \map f n$
Thus by definition of transitivity:

$a \precsim h'$
Thus:

$\exists h' \in H: \forall a \in A: a \precsim h'$
$\Box$


Necessary Condition
Assume that:

for every a finite subset $A$ of $H$
$\exists h \in H: \forall a \in A: a \precsim h$
Let $a, b \in H$.
By definition of subset:

$\set {a, b} \subseteq H$
$\set {a, b}$ is finite
By assumption:

$\exists h \in H: \forall c \in set {a, b}: c \precsim h$
Thus by definition of unordered tuple:

$\exists h \in H: a \precsim h \land b \precsim h$
Thus by definition:

$H$ is directed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:1




