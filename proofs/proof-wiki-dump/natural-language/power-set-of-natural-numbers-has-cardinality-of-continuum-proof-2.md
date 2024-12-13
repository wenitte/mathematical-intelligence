# 

Source: https://proofwiki.org/wiki/Power_Set_of_Natural_Numbers_has_Cardinality_of_Continuum/Proof_2

Theorem
Let $\N$ denote the set of natural numbers.
Let $\powerset \N$ denote the power set of $\N$.
Let $\card {\powerset \N}$ denote the cardinality of $\powerset \N$.
Let $\mathfrak c = \card \R$ denote the cardinality of the continuum.
Then:

$\mathfrak c = \card {\powerset \N}$


Proof
By Reals are Isomorphic to Dedekind Cuts there exists bijection:

$f: \R \to \mathscr D$
where:

$\mathscr D$ denotes the set of all Dedekind cuts of $\struct {\Q, \le}$.
Dedekind's cuts are subsets of $\Q$.
Therefore by definition of power set:

$\mathscr D \subseteq \powerset \Q$
By Subset implies Cardinal Inequality:

$\card {\mathscr D} \le \card {\powerset \Q}$
By Rational Numbers are Countably Infinite:

$\Q$ is countably infinite.
Then by definition of countably infinite there exists a bijection:

$g: \Q \to \N$
By definition of set equivalence:

$\Q \sim \N$
Hence by definition of cardinality:

$\card \Q = \card \N$
Then by Cardinality of Power Set is Invariant:

$\card {\powerset \Q} = \card {\powerset \N}$
By definition of set equivalence:

$\R \sim \mathscr D$
Hence by definition of cardinality:

$\card \R = \card {\mathscr D}$
Thus:

$\mathfrak c \le \card {\powerset \N}$

Define a mapping $h: \map {\operatorname {Fin} } \N \times \powerset \N \to \R^+$:

$\ds \forall F \in \map {\operatorname {Fin} } \N, A \in \powerset \N: \map h {F, A} = \sum_{i \mathop \in F} 2^i + \sum_{i \mathop \in A} \paren {\frac 1 2}^i$
where $\map {\operatorname {Fin} } \N$ denotes the set of all finite subsets of $\N$.
A pair $\tuple {F, A}$ corresponds to binary denotation of a real number $\map h {F, A}$.
It means that $h$ is a surjection.
By Surjection iff Cardinal Inequality:

$\card {\map {\operatorname {Fin} } \N \times \powerset \N} \le \card {\R^+}$
By definition of subset:

$\map {\operatorname {Fin} } \N \subseteq \powerset \N$
Then by Subset implies Cardinal Inequality:

$\card {\map {\operatorname {Fin} } \N} \le \card {\powerset \N}$













\(\ds \card {\map {\operatorname {Fin} } \N \times \powerset \N}\)

\(=\)







\(\ds \max \set {\card {\map {\operatorname {Fin} } \N}, \card {\powerset \N} }\)





Cardinal Product Equal to Maximum














\(\ds \)

\(=\)







\(\ds \card {\powerset \N}\)









Because $\R^+ \subseteq \R$, we have by Subset implies Cardinal Inequality:

$\card {\R^+} \le \card \R$
Thus:

$\card {\powerset \N} \le \mathfrak c$
Hence the result:

$\mathfrak c = \card {\powerset \N}$
$\blacksquare$


Sources
Mizar article TOPGEN_3:29




