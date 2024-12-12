# 

Source: https://proofwiki.org/wiki/Existence_of_Non-Empty_Finite_Suprema_in_Join_Semilattice



Theorem
Let $\struct {S, \preceq}$ be a join semilattice.
Let $A$ be a non-empty finite subset of $S$.
Then $A$ admits a supremum in $\struct {S, \preceq}$.


Proof
We will prove by induction of the cardinality of finite subset of $H$.

Base case
$\forall A \subseteq S: \card A = 1 \implies \exists \sup A$
where $\card A$ denotes the cardinality of $A$.
Let $A \subseteq S$ such that

$\card A = 1$
By Cardinality of Singleton:

$\exists a: A = \set a$
By definition of subset:

$a \in S$
Thus by Supremum of Singleton:

the supremum of $A$ exists in $\struct {S, \preceq}$.


Induction Hypothesis
$n \ge 1 \land \forall A \subseteq S: \card A = n \implies \exists \sup A$


Induction Step
$\forall A \subseteq S: \card A = n + 1 \implies \exists \sup A$
Let $A \subseteq S$ such that:

$\card A = n + 1$
By definition of cardinality of finite set:

$A \sim \N_{< n + 1}$
where $\sim$ denotes set equivalence.
By definition of set equivalence:

there exists a bijection $f: \N_{< n + 1} \to A$
By Restriction of Injection is Injection:

$f \restriction_{\N_{< n} }: \N_{< n} \to f^\to \sqbrk {\N_{< n} }$ is an injection.
By definition:

$f \restriction_{\N_{< n} }: \N_{< n} \to f^\to \sqbrk {\N_{< n} }$ is a surjection.
By definition:

$f \restriction_{\N_{< n} }: \N_{< n} \to f^\to \sqbrk {\N_{< n} }$ is a bijection.
By definition of set equivalence:

$\N_{< n} \sim f^\to \sqbrk {\N_{< n} }$
By definition of cardinality of finite set:

$\card {f^\to \sqbrk {\N_{< n} } } = n$
By definitions of image of set and subset:

$f^\to \sqbrk {\N_{< n} } \subseteq A$
By Subset Relation is Transitive:

$f^\to \sqbrk {\N_{< n} } \subseteq S$
By Induction Hypothesis:

$\exists \map \sup {f^\to \sqbrk {\N_{< n} } }$
By definition $\N_{< n + 1}$:

$n \in \N_{< n + 1}$
By definition of mapping:

$\map f n \in A$
By definition of subset:

$\map f n \in S$













\(\ds A\)

\(=\)







\(\ds f^\to \sqbrk {\N_{< n + 1} }\)





Definition of Surjection














\(\ds \)

\(=\)







\(\ds f^\to \sqbrk {\N_{< n} \cup \set n}\)





Definition of Initial Segment of Natural Numbers














\(\ds \)

\(=\)







\(\ds f^\to \sqbrk {\N_{< n} } \cup f^\to \sqbrk {\set n}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds f^\to \sqbrk {\N_{< n} } \cup \set {\map f n}\)





Image of Singleton under Mapping



Thus:














\(\ds \sup A\)

\(=\)







\(\ds \sup \set {\map \sup {f^\to \sqbrk {\N_{< n} } }, \sup \set {\map f n} }\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \sup \set {\map \sup {f^\to \sqbrk {\N_{< n} } }, \map f n}\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds \map \sup {f^\to \sqbrk {\N_{< n} } } \vee \map f n\)





Definition of Join



Thus $A$ admits a supremum in $\struct {S, \preceq}$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article YELLOW_0:54




