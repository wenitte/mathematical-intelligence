# 

Source: https://proofwiki.org/wiki/Proper_and_Prime_iff_Ultrafilter_in_Boolean_Lattice


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $B = \struct {S, \vee, \wedge, \neg, \preceq}$ be a Boolean lattice.
Let $F$ be a filter in $B$.
Then

$F$ is a proper subset of $S$ and $F$ is a prime filter in $B$
if and only if:

$F$ is ultrafilter on $B$


Proof
Sufficient Condition
Let us assume

$F$ is a proper subset of $S$ and $F$ is a prime filter in $B$.
Thus

$F$ is a proper subset of $S$.
Let $G$ be a filter in $B$ such that

$F \subseteq G$ and $F \ne G$.
By definitions of subset and set equality:

$\exists x: x \in G \land x \notin F$
By definition of Boolean algebra:

$x \vee \neg x = \top$
where $\top$ denotes the top of $B$.
By Top in Filter:

$\top \in F$
By definition of prime filter:

$\neg x \in F$
By definition of subset:

$\neg x \in G$
By Filtered in Meet Semilattice:

$x \wedge \neg x \in G$
By definition of Boolean algebra:

$\bot \in G$
Thus by definition of subset:

$G \subseteq S$
By definition of set equality it remains to prove that

$S \subseteq G$
Let $y \in S$.
By definition of smallest element:

$\bot \preceq y$
Thus by definition of upper section:

$y \in G$
$\Box$


Necessary Condition
Let $F$ be ultrafilter on $B$.
Thus by definition of ultrafilter:

$F$ is proper subset of $S$.
Let $x \in S$.
Aiming for a contradiction, suppose:

$x \notin F$ and $\neg x \notin F$
By Finite Infima Set and Upper Closure is Smallest Filter:

$F \cup \set x \subseteq \map {\operatorname{fininfs} } {F \cup \set x}^\succeq$
By Set is Subset of Union:

$\set x \subseteq F \cup \set x$ and $F \subseteq F \cup \set x$
By definition of singleton:

$x \in \set x$
By definition of subset:

$x \in \map {\operatorname{fininfs} } {F \cup \set x}^\succeq$
By Finite Infima Set and Upper Closure is Filter:

$\map {\operatorname{fininfs} } {F \cup \set x}^\succeq$ is filter in $L$.
By Subset Relation is Transitive:

$F \subseteq \map {\operatorname{fininfs} } {F \cup \set x}^\succeq$
By definition of ultrafilter:

$\map {\operatorname{fininfs} } {F \cup \set x}^\succeq = S$
By Finite Subset Bounds Element of Finite Infima Set and Upper Closure:

$\exists a \in S: a \in F \land \neg x \succeq a \wedge \inf \set x$
By definition of greatest element:

$a \preceq \top$













\(\ds a\)

\(=\)







\(\ds a \wedge \top\)





Preceding iff Meet equals Less Operand














\(\ds \)

\(=\)







\(\ds a \wedge \paren {x \vee \neg x}\)





Definition of Boolean Algebra














\(\ds \)

\(=\)







\(\ds a \wedge x \vee a \wedge \neg x\)





Definition of Distributive Lattice



By Infimum of Singleton:

$\inf \set x = x$
By Meet Precedes Operands:

$a \wedge \neg x \preceq \neg x$
By definition of infimum:

$a \preceq \neg x$
By definition of upper section:

$\neg x \in F$
This contradicts $\neg x \notin F$
Thus by Proof by Contradiction:

$F$ is a prime filter by Filter is Prime iff For Every Element Element either Negation Belongs to Filter in Boolean Lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:22




