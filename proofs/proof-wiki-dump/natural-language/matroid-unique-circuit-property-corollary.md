# 

Source: https://proofwiki.org/wiki/Matroid_Unique_Circuit_Property/Corollary

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B$ be a base of $M$.
Let $x \in S \setminus B$.

Then there exists a unique circuit $C$ such that:

$x \in C \subseteq B \cup \set x$

That is, $C$ is the fundamental circuit of $x$ in $B$.


Proof
From Union of Matroid Base with Element of Complement is Dependent:

$B \cup \set x$ is dependent.
From Matroid Unique Circuit Property there exists a unique circuit $C$ such that:

$x \in C \subseteq B \cup \set x$
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits




