# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sets_Separated_by_Neighborhoods



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following definitions of the concept of Sets Separated by Neighborhoods are equivalent:

Definition 1
Let $A, B \subseteq S$ such that:

$\exists N_A, N_B \subseteq S: \exists U, V \in \tau: A \subseteq U \subseteq N_A, B \subseteq V \subseteq N_B: N_A \cap N_B = \O$

That is, that $A$ and $B$ both have neighborhoods in $T$ which are disjoint.

Then $A$ and $B$ are described as separated by neighborhoods.

Definition 2
Let $A, B \subseteq S$ such that:

$\exists U, V \in \tau: A \subseteq U, B \subseteq V: U \cap V = \O$

That is, that $A$ and $B$ both have open neighborhoods in $T$ which are disjoint.

Then $A$ and $B$ are described as separated by (open) neighborhoods.


Proof
Definition 1 implies Definition 2
Let $A, B \subseteq S$ such that:

$\exists N_A, N_B \subseteq S: \exists U, V \in \tau: A \subseteq U \subseteq N_A, B \subseteq V \subseteq N_B: N_A \cap N_B = \O$
From Subsets of Disjoint Sets are Disjoint then:

$U \cap V = \O$
Thus:

$\exists U, V \in \tau: A \subseteq U, B \subseteq V: U \cap V = \O$
$\Box$


Definition 2 implies Definition 1
Let $A, B \subseteq S$ such that:

$\exists U, V \in \tau: A \subseteq U, B \subseteq V: U \cap V = \O$
Let $N_A = U$ and $N_B = V$.
From Set is Subset of Itself then:

$\exists N_A, N_B \subseteq S: \exists U, V \in \tau: A \subseteq U \subseteq N_A, B \subseteq V \subseteq N_B: N_A \cap N_B = \O$
$\blacksquare$





