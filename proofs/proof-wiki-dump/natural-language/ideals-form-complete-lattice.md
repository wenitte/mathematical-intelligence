# 

Source: https://proofwiki.org/wiki/Ideals_form_Complete_Lattice


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\II = \struct {\map {\operatorname{Ids} } L, \subseteq}$ be an inclusion ordered set,
where $\map {\operatorname{Ids} } L$ denotes the set of all ideals in $L$.

Then $\II$ is complete lattice.


Proof
Let $X \subseteq \map {\operatorname{Ids} } L$.
By Intersection of Semilattice Ideals is Ideal/Set of Sets:

$\ds \bigcap X$ is an ideal.
By Intersection is Largest Subset/General Result:

$\ds \forall A \in \map {\operatorname{Ids} } L: \paren {\forall I \in X: A \subseteq I} \iff A \subseteq \bigcap X$
Thus by definition:

$X$ admits an infimum.
Thus by dual to Lattice is Complete iff it Admits All Suprema:

$\II$ is complete lattice.
$\blacksquare$


Sources
Mizar article YELLOW_2:48




