# 

Source: https://proofwiki.org/wiki/No_Membership_Loops


It has been suggested that this page be renamed.In particular: Something that indicates the domain on which the definition applies.To discuss this page in more detail, feel free to use the talk page.


Theorem
For any proper classes or sets $A_1, A_2, \ldots, A_n$:

$\neg \paren {A_1 \in A_2 \land A_2 \in A_3 \land \cdots \land A_n \in A_1}$


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Either $A_1, A_2, \ldots, A_n$ are all sets, or there exists a proper class $A_m$ such that $1 \le m \le n$.

Suppose there exists a proper class $A_m$.
Then, by the definition of a proper class, $\neg A_m \in A_{m+1}$, since it is not a member of any class.
The result then follows directly.

Otherwise it follows that all $A_1, A_2, \ldots, A_n$ are sets.
Then, by the fact that Epsilon Relation is Strictly Well-Founded and a Strictly Well-Founded Relation has no Relational Loops, it follows that: 

$\neg \paren {A_1 \in A_2 \land A_2 \in A_3 \land \cdots \land A_n \in A_1}$
$\blacksquare$


Also see
Definition:Strictly Well-Founded Relation
Strictly Well-Founded Relation has no Relational Loops
Epsilon Relation is Strictly Well-Founded
Axiom:Axiom of Foundation


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $5.20$




