# 

Source: https://proofwiki.org/wiki/Interior_may_not_equal_Exterior_of_Exterior



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$ be a subset of the underlying set $S$ of $T$.
Let $A^e$ be the  exterior of $A$.
Let $A^\circ$ be the  interior of $A$.

Then it is not necessarily the case that:

$A^{ee} = A^\circ$


Proof 1
We have from Interior is Subset of Exterior of Exterior:

$A^\circ \subseteq A^{ee}$
It remains to be shown that there exist $A \subseteq S$ such that:

$A^\circ \ne A^{ee}$

Let $a, b, c \in R$ where $a < b < c$.
Let $A$ be the union of the two adjacent open intervals:

$A := \openint a b \cup \openint b c$
From Exterior of Exterior of Union of Adjacent Open Intervals:

$A^{ee} = \openint a c$
From Interior of Union of Adjacent Open Intervals:

$A^\circ := \openint a b \cup \openint b c$
Thus:

$b \in A^{ee}$
but:

$b \notin A^\circ$
and so:

$A^{ee} \subsetneq A^\circ$
$\blacksquare$


Proof 2
Proof by Counterexample:
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $T = \struct {S, \tau}$ be the Sorgenfrey line on $\struct {S, \preccurlyeq}$.
Let $A \subseteq S$ denote the subset of $S$ defined as:

$A = \openint a {+\infty}$
By Exterior of Exterior in Sorgenfrey Line is not necessarily Interior:

$A^{ee} = \hointr a {+\infty}$
while:

$A^\circ = \openint a {+\infty}$
The result is apparent.
$\blacksquare$


Also see
Interior is Subset of Exterior of Exterior




