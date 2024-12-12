# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_contains_Loop

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $x$ be a loop of $M$.
Let $A \subseteq S$.

Then:

$x \in \map \sigma A$
where $\map \sigma A$ denotes the closure of $A$.


Proof
By definition of the closure of $A$:

$x \in \map \sigma A$ if and only if $x \sim A$
where $\sim$ is the depends relation on $M$.
By definition of the depends relation:

$x \sim A$ if and only if $\map \rho {A \cup \set x} = \map \rho A$
where $\rho$ is the rank function on $M$.
So it remains to show that:

$\map \rho {A \cup \set x} = \map \rho A$

By definition of the rank function:

$\map \rho {A \cup \set x} = \max \set {\size X : X \subseteq A \cup \set x \land X \in \mathscr I}$
From Max Operation Equals an Operand:

$\exists X \in \mathscr I : X \subseteq A \cup \set x \land \size X = \map \rho {A \cup \set x}$

From the contrapositive statement of Set is Dependent if Contains Loop:

$x \notin X$
Now:














\(\ds X\)

\(=\)







\(\ds \paren{A \cup \set x} \cap X\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren{A \cap X} \cup \paren {\set x \cap X}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren{A \cap X} \cup \O\)





Intersection With Singleton is Disjoint if Not Element














\(\ds \)

\(=\)







\(\ds \paren{A \cap X}\)





Union with Empty Set








\(\ds \leadsto \ \ \)





\(\ds X\)

\(\subseteq\)







\(\ds A\)





Intersection with Subset is Subset



From Max Operation Yields Supremum of Operands:

$\size X \le \max \set {\size Y : Y \subseteq A \land Y \in \mathscr I} = \map \rho A$
From Rank Function is Increasing:

$\map \rho A \le \map \rho {A \cup \set x} = \size X$
Thus:

$\map \rho A = \size X = \map \rho {A \cup \set x}$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




