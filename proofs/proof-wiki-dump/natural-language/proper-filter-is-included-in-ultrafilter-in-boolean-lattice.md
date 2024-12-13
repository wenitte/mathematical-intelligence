# 

Source: https://proofwiki.org/wiki/Proper_Filter_is_Included_in_Ultrafilter_in_Boolean_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a Boolean lattice.
Let $F$ be a proper filter on $L$.
Then there exists ultrafilter $G$ on $L$: $F \subseteq G$


Proof
By Singleton of Bottom is Ideal:

$I := \set \bot$ is an ideal in $L$.
where $\bot$ denotes the bottom of $L$.
We will prove that

$F \cap I = \O$
Let $x \in I$.
By definition of singleton:

$x = \bot$
Thus by Bottom not in Proper Filter:

$x \notin F$
$\Box$

By If Ideal and Filter are Disjoint then There Exists Prime Filter Including Filter and Disjoint from Ideal:

there exists a prime filter $G$ on $L$: $F \subseteq G$ and $G \cap I = \O$
By definition of singleton:

$\bot \in I$
By definitions of empty set and intersection:

$\bot \notin G$
By Bottom not in Proper Filter:

$G$ is proper.
Thus by Proper and Prime iff Ultrafilter in Boolean Lattice:

$G$ is ultrafilter.
Thus $F \subseteq G$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:26




