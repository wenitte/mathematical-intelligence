# 

Source: https://proofwiki.org/wiki/Set_Equality_is_Equivalence_Relation



Theorem
Let $S$ be a set.

Set equality is an equivalence relation on the power set $\powerset S$ of $S$.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $A \in \powerset S$.
From Set Equals Itself:

$A = A$
So set equality has been shown to be reflexive on $\powerset S$.
$\Box$


Symmetry
Let $A, B \in \powerset S$.
Let $A = B$.
Then by definition of set equality:

$A \subseteq B$
$B \subseteq A$
from which it follows by definition of set equality that $B = A$.
So set equality has been shown to be symmetric on $\powerset S$.
$\Box$


Transitivity
Let $A, B, C \in \powerset S$.
Let $A = B$ and $B = C$.
Then by definition of set equality:

$(1): \quad A \subseteq B$
$(2): \quad B \subseteq C$
$(3): \quad C \subseteq B$
$(4): \quad B \subseteq A$
From $(1)$ and $(2)$ and Subset Relation is Transitive:

$A \subseteq C$
From $(3)$ and $(4)$ and Subset Relation is Transitive:

$C \subseteq A$
from which it follows by definition of set equality that $A = C$.
So set equality has been shown to be transitive on $\powerset S$.
$\Box$

Set equality has been shown to be reflexive, symmetric and transitive on $\powerset S$.
Hence by definition it is an equivalence relation on $\powerset S$.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.2: 4$




