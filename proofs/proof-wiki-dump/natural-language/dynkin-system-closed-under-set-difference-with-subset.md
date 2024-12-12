# 

Source: https://proofwiki.org/wiki/Dynkin_System_Closed_under_Set_Difference_with_Subset

Theorem
Let $X$ be a set.
Let $\DD$ be a Dynkin system on $X$.
Let $D, E \in \DD$ and suppose that $E \subseteq D$.

Then the set difference $D \setminus E$ is also an element of $\DD$.


Proof
For brevity, write for example $E^\complement$ for $\relcomp X E = X \setminus E$.
We reason as follows:














\(\ds D \setminus E\)

\(=\)







\(\ds D \cap E^\complement\)





Set Difference as Intersection with Relative Complement














\(\ds \)

\(=\)







\(\ds \paren {D^\complement \cup E}^\complement\)





De Morgan's Laws: Complement of Union, Relative Complement of Relative Complement



Now this implies that $D \setminus E \in \DD$ if and only if $D^\complement \cup E \in \DD$.

It is already known that $D^\complement$ and $E$ are in $\DD$ by axiom $(2)$ for a Dynkin system.
Since $E \subseteq D$, it follows that $D^\complement \cap E = \O$, and thus Dynkin System Closed under Disjoint Union applies to give:

$D^\complement \cup E \in \DD$
which, combined with above reasoning, yields $D \setminus E \in \DD$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 5$: Problem $3$




