# 

Source: https://proofwiki.org/wiki/Independent_Subset_is_Contained_in_Maximal_Independent_Subset



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $A \subseteq S$.
Let $X \in \mathscr I$ such that $X \subseteq A$.

Then:

$\exists Y \in \mathscr I : X \subseteq Y \subseteq A : \size Y = \map \rho A$
where $\rho$ is the rank function on $M$.


Proof
By definition of the rank function on $M$:

$\size X \le \map \rho A$


Case 1 : $\size X = \map \rho A$
Let $\size X = \map \rho A$.
Let $Y = X$ and the result follows.
$\Box$
 

Case 2 : $\size X < \map \rho A$
Let $\size X < \map \rho A$.
By definition of the rank function on $M$:

$\map \rho A = \max \set{\size I : I \subseteq A \land I \in \mathscr I}$
From Max Operation Equals an Operand:

$\exists Z \in \mathscr I : Z \subseteq A$ and $\size Z = \map \rho A$
From Independent Set can be Augmented by Larger Independent Set:

$\exists Y' \subseteq Z \setminus X: \size {X \cup Y'} = \size Z$ and $X \cup Y' \in \mathscr I$
We have:














\(\ds Y'\)

\(\subseteq\)







\(\ds Z \setminus X\)




















\(\ds \)

\(\subseteq\)







\(\ds Z\)





Set Difference is Subset














\(\ds \)

\(\subseteq\)







\(\ds A\)





by choice of $Z$



From Union of Subsets is Subset:

$X \cup Y' \subseteq A$
Let $Y = X \cup Y'$ and the result follows.
$\Box$

In either case, the result follows.
$\blacksquare$





