# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox/Proof_1

Theorem
The Axiom of Abstraction leads to a contradiction.


Proof
Sets have elements.
Some of those elements may themselves be sets.
So, given two sets $S$ and $T$, we can ask the question:

Is $S$ an element of $T$?
The answer will either be yes or no.
In particular, given any set $S$, we can ask the question:

Is $S$ an element of $S$?
Again, the answer will either be yes or no.
Recall the definitions for a set to be:

ordinary if and only if it is not an element of itself
extraordinary if and only if it is an element of itself.

Thus, $\map P S = S \in S$ is a property on which we can use the Axiom of Abstraction to build the set $T$ of all extraordinary:

$T = \set {S: S \in S}$
which is the set of all sets which contain themselves.

Or we can apply the Axiom of Abstraction to build the set $T$ of all ordinary sets:

$R = \set {S: S \notin S}$
($R$ for Russell, of course.)

We ask the question:

Is $R$ itself an element of $R$?
There are two possible answers: yes or no.
If $R \in R$, then $R$ must satisfy the property that $R \notin R$.
So from that contradiction we know that $R \in R$ does not hold.
So the only other answer, $R \notin R$, must hold instead.
But now we see that $R$ satisfies the conditions of the property that $R \in R$.
So we can see that $R \notin R$ does not hold either.
Thus we have generated a contradiction from the Axiom of Abstraction.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 2$: The Axiom of Specification
1963: George F. Simmons: Introduction to Topology and Modern Analysis ... (previous) ... (next): $\S 1$: Sets and Set Inclusion
1965: J.A. Green: Sets and Groups ... (previous) ... (next). Sets of sets: $\S 1.8$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 2$. Sets of sets
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.2$: Sets
1993: Richard J. Trudeau: Introduction to Graph Theory ... (previous) ... (next): $2$. Graphs: Paradox
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Introduction
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Russell's paradox
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $1$. Notation, Conventions: $6$: Theorem $1.2$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.2$: Elements, my dear Watson: Remark $1.2.1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Russell's paradox
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 8$ Russell's paradox
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Russell's paradox




