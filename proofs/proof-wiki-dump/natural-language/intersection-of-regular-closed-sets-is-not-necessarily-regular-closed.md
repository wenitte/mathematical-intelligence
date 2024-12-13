# 

Source: https://proofwiki.org/wiki/Intersection_of_Regular_Closed_Sets_is_not_necessarily_Regular_Closed

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $U$ and $V$ be regular closed sets of $T$.

Then $U \cap V$ is not also necessarily a regular closed set of $T$.


Proof
Proof by Counterexample:
By Closed Real Interval is Regular Closed, the closed real intervals:

$\closedint 0 {\dfrac 1 2}, \closedint {\dfrac 1 2} 1$
are both regular closed sets of $\R$.

Consider $A$, the intersection of the two half-unit closed intervals:

$A := \closedint 0 {\dfrac 1 2} \cap \closedint {\dfrac 1 2} 1 = \set {\dfrac 1 2} = \closedint {\dfrac 1 2} {\dfrac 1 2}$
From Interior of Closed Real Interval is Open Real Interval:

$A^\circ = \openint {\dfrac 1 2} {\dfrac 1 2} = \O$
From Closure of Empty Set is Empty Set:

$A^{\circ -} = \O \ne A$
Thus $A$ is not a regular closed set of $\R$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $6$




