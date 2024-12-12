# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Separated_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A, B \subseteq S$.

The following definitions of the concept of Separated Sets are equivalent:

Definition 1
$A$ and $B$ are separated (in $T$) if and only if:

$A^- \cap B = A \cap B^- = \O$
where:

$A^-$ denotes the closure of $A$ in $T$
$\O$ denotes the empty set.
Definition 2
$A$ and $B$ are separated (in $T$) if and only if there exist $U,V\in\tau$ with:

$A \subset U$ and $U \cap B = \O$
$B \subset V$ and $V \cap A = \O$
where $\O$ denotes the empty set.


Proof
Definition 1 implies Definition 2
Let $A, B \subseteq S$ satisfy:

$A^- \cap B = A \cap B^- = \O$
where $A^-$ denotes the closure of $A$ in $T$, and $\O$ denotes the empty set.
From Topological Closure is Closed, $B^-$ is closed in $T$.
Let $U =  S \setminus B^-$ be the relative complement of $B^-$.
By the definition of a closed set, $U$ is open in $T$.
From Empty Intersection iff Subset of Relative Complement:

$A \subseteq S \setminus B^- = U$
From Relative Complement of Relative Complement:

$S \setminus U = B^-$
By the definition of the closure of a subset:

$B \subseteq B^- = S \setminus U$
From Empty Intersection iff Subset of Relative Complement:

$U \cap B = \O$

Similarly, let $V =  S \setminus A^-$ then $V \in \tau$ with:

$B \subset V$
and

$V \cap A = \O$
$\Box$


Definition 2 implies Definition 1
Let $A, B \subseteq S$.
Let $U, V \in \tau$ satisfy:

$A \subset U$ and $U \cap B = \O$
$B \subset V$ and $V \cap A = \O$
Let $U \in \tau$ be an arbitrary open set of $T$ such that $A \subseteq U$ and $U \cap B = \O$.
From Empty Intersection iff Subset of Relative Complement:

$B \subseteq S \setminus U$
By the definition of a closed set, the relative complement $S \setminus U$ of $U$ is closed in $T$.
From Set Closure is Smallest Closed Set in Topological Space:

$B^- \subseteq S \setminus U$
From Empty Intersection iff Subset of Relative Complement:

$B^- \cap U = \O$
Then














\(\ds B^- \cap A\)

\(=\)







\(\ds B^- \cap \paren {U \cap A}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {B^- \cap U} \cap A\)





Intersection is Associative














\(\ds \)

\(=\)







\(\ds \O \cap A\)





as $B^- \cap U = \O$














\(\ds \)

\(=\)







\(\ds \O\)





Intersection with Empty Set




Similarly:

$A^- \cap B = \O$
$\blacksquare$





