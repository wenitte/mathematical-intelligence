# 

Source: https://proofwiki.org/wiki/Equivalent_Characterizations_of_Finer_Equivalence_Relation



Theorem
Let $X$ be a set.
Let $\equiv$ and $\sim$ be equivalence relations on $X$.

The following statements are equivalent:

$\equiv$ is finer than $\sim$:
$\forall x, y \in X : x \equiv y \implies x \sim y$
The graph of $\equiv$ is contained in the graph of $\sim$.
Every $\equiv$-equivalence class is contained in a $\sim$-equivalence class.
Every $\sim$-equivalence class is saturated under $\equiv$.


Proof
1 implies 2













\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \map \TT \equiv\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\equiv\)







\(\ds y\)





Definition of Graph of Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\sim\)







\(\ds y\)





from $1$








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \map \TT \sim\)





Definition of Graph of Relation



By definition of subset, $\map \TT \equiv \subseteq \map \TT \sim$.
$\Box$


2 implies 1













\(\ds x\)

\(\equiv\)







\(\ds y\)





Definition of Equivalence Class








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \map \TT \equiv\)





Definition of Graph of Relation














\(\ds \)

\(\subseteq\)







\(\ds \map \TT \sim\)





from $2$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\sim\)







\(\ds y\)





Definition of Graph of Relation



$\Box$


1 implies 3
Let $x \in X$.
Then:














\(\ds y\)

\(\in\)







\(\ds \eqclass x \equiv\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\equiv\)







\(\ds x\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\sim\)







\(\ds x\)





from $1$








\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(\in\)







\(\ds \eqclass x \sim\)





Definition of Equivalence Class



By definition of subset, $\eqclass x \equiv \subseteq \eqclass x \sim$.
$\Box$


3 implies 1
For this proof and the next, we use this result implied by $3$:
Let $y \in X$.
$3$ implies:

$\exists z \in X: \eqclass y \equiv \subseteq \eqclass z \sim$
By Element in its own Equivalence Class:

$y \in \eqclass y \equiv \subseteq \eqclass z \sim$
$y \in \eqclass y \sim$
By contrapositive of Equivalence Classes are Disjoint:

$\eqclass y \sim = \eqclass z \sim$
Hence $\eqclass y \equiv \subseteq \eqclass y \sim$.

Thus:














\(\ds x\)

\(\equiv\)







\(\ds y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \eqclass y \equiv\)





Definition of Equivalence Class














\(\ds \)

\(\subseteq\)







\(\ds \eqclass y \sim\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\sim\)







\(\ds y\)





Definition of Equivalence Class



$\Box$


3 implies 4
Let $x \in X$.














\(\ds \bigcup_{y \mathop \in \eqclass x \sim} \eqclass y \equiv\)

\(\subseteq\)







\(\ds \bigcup_{y \mathop \in \eqclass x \sim} \eqclass y \sim\)





Set Union Preserves Subsets














\(\ds \)

\(=\)







\(\ds \bigcup_{\substack {y \mathop \in X \\ y \mathop \sim x} } \eqclass y \sim\)





Definition of Equivalence Class














\(\ds \)

\(=\)







\(\ds \bigcup_{\substack {y \mathop \in X \\ y \mathop \sim x} } \eqclass x \sim\)





Equivalence Class holds Equivalent Elements














\(\ds \)

\(=\)







\(\ds \eqclass x \sim\)









so $\eqclass x \sim$ is a union of equivalence classes under $\equiv$.
Hence $\eqclass x \sim$ is saturated under $\equiv$.
$\Box$


4 implies 3
Let $x \in X$.
Then $\eqclass x \sim$ is saturated under $\equiv$:

$\ds \exists S \subseteq X: \bigcup_{y \mathop \in S} \eqclass y \equiv = \eqclass x \sim$
By Element in its own Equivalence Class:

$x \in \eqclass x \sim$
$x \in \eqclass x \equiv$
Hence by definition of Union of Family:

$\exists z \in S: x \in \eqclass z \equiv$
By contrapositive of Equivalence Classes are Disjoint:














\(\ds \eqclass x \equiv\)

\(=\)







\(\ds \eqclass z \equiv\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{y \mathop \in S} \eqclass y \equiv\)





Set is Subset of Union of Family














\(\ds \)

\(=\)







\(\ds \eqclass x \sim\)









$\blacksquare$


Sources
1986: Nicolas Bourbaki: Theory of Sets ... (previous) Chapter $\text I$: Description of Formal Mathematics: $\S 6$ Equivalence relations $7$. Quotients of equivalence relations




