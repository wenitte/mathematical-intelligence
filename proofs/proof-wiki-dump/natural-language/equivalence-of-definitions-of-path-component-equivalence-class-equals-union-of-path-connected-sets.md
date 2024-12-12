# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Path_Component/Equivalence_Class_equals_Union_of_Path-Connected_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.

Let $\CC_x = \left\{ {A \subseteq S : x \in A \land A }\right.$ is path-connected in $\left. {T}\right\}$.
Let $C = \bigcup \CC_x$

Let $\sim$ be the equivalence relation defined by:

$y \sim z$ if and only if $y$ and $z$ are path-connected in $T$.
Let $C'$ be the equivalence class of $\sim$ containing $x$.

Then $C = C'$.


Proof













\(\ds y \in C'\)

\(\leadstoandfrom\)







\(\ds x \text{ is path-connected to } y \text{ in } T\)





Definition of $\sim$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists B \text{ a connected set of } T, x \in B, y \in B\)





Points are Path-Connected iff Contained in Path-Connected Set














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists B \in \CC_x : y \in B\)





Equivalent definition














\(\ds \)

\(\leadstoandfrom\)







\(\ds y \in \bigcup \CC_x\)





Definition of Union of Set of Sets














\(\ds \)

\(\leadstoandfrom\)







\(\ds y \in C\)





Definition of $C$



The result follows.
$\blacksquare$


Also see
Path-Connectedness is Equivalence Relation




