# 

Source: https://proofwiki.org/wiki/Empty_Set_and_Set_form_Algebra_of_Sets

Theorem
Let $S$ be any non-empty set.
Then $\set {S, \O}$ is (trivially) an algebra of sets, where $S$ is the unit.


Proof
From Set Union is Idempotent:

$S \cup S = S$
and

$\O \cup \O = \O$
Then from Union with Empty Set:

$S \cup \O = S$
So $\set {S, \O}$ is closed under union.

From Relative Complement of Empty Set:

$\relcomp S \O = S$
and from Relative Complement with Self is Empty Set:

$\relcomp S S = \O$
so $\set {S, \O}$ is closed under complement.

Hence the result, by definition of algebra of sets.
$\blacksquare$





