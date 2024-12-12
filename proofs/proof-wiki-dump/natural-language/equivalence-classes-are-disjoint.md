# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_are_Disjoint



Theorem
Let $\RR$ be an equivalence relation on a set $S$.

Then all $\RR$-classes are pairwise disjoint:

$\tuple {x, y} \notin \RR \iff \eqclass x \RR \cap \eqclass y \RR = \O$


Proof 1
First we show that:

$\tuple {x, y} \notin \RR \implies \eqclass x \RR \cap \eqclass y \RR = \O$

Suppose two $\RR$-classes are not disjoint:














\(\ds \eqclass x \RR \cap \eqclass y \RR \ne \O\)

\(\leadsto\)







\(\ds \exists z: z \in \eqclass x \RR \cap \eqclass y \RR\)





Definition of Empty Set














\(\ds \)

\(\leadsto\)







\(\ds \exists z: z \in \eqclass x \RR \land z \in \eqclass y \RR\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds \exists z: \paren {\tuple {x, z} \in \RR} \land \paren {\tuple {y, z} \in \RR}\)





Definition of Equivalence Class














\(\ds \)

\(\leadsto\)







\(\ds \exists z: \paren {\tuple {x, z} \in \RR} \land \paren {\tuple {z, y} \in \RR}\)





Definition of Symmetric Relation: $\RR$ is symmetric














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in \RR\)





Definition of Transitive Relation: $\RR$ is transitive




Thus we have shown that $\eqclass x \RR \cap \eqclass y \RR \ne \O \implies \tuple {x, y} \in \RR$.

Therefore, by the Rule of Transposition:

$\tuple {x, y} \notin \RR \implies \eqclass x \RR \cap \eqclass y \RR = \O$

Now we show that:

$\eqclass x \RR \cap \eqclass y \RR = \O \implies \tuple {x, y} \notin \RR$

Suppose $\tuple {x, y} \in \RR$.














\(\ds \)

\(\)







\(\ds y \in \eqclass y \RR\)





Definition of Equivalence Class














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \RR\)





by hypothesis














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR\)





Definition of Equivalence Class














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR \land y \in \eqclass y \RR\)





Rule of Conjunction














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR \cap \eqclass y \RR\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds \eqclass x \RR \cap \eqclass y \RR \ne \O\)





Definition of Empty Set




Thus we have shown that:

$\tuple {x, y} \in \RR \implies \eqclass x \RR \cap \eqclass y \RR \ne \O$

Therefore, by the Rule of Transposition:

$\eqclass x \RR \cap \eqclass y \RR = \O \implies \paren {x, y} \notin \RR$

Using the rule of Biconditional Introduction on these results:

$\eqclass x \RR \cap \eqclass y \RR = \O \iff \paren {x, y} \notin \RR$
and the proof is complete.
$\blacksquare$


Proof 2
Suppose that for $x, y \in S$:

$\eqclass x \RR \cap \eqclass y \RR \ne \O$
Let:

$z \in \eqclass x \RR$
$z \in \eqclass y \RR$
Then by definition of equivalence class:

$\tuple {x, z} \in \RR$
$\tuple {y, z} \in \RR$

Let $c \in \eqclass x \RR$.
That is:

$\tuple {x, c} \in \RR$
By definition of equivalence relation, $\RR$ is symmetric so:

$\tuple {z, x} \in \RR$
By definition of equivalence relation, $\RR$ is transitive so:

$\tuple {z, x} \in \RR \land \tuple {x, c} \in \RR \implies \tuple {z, c} \in \RR$
and

$\tuple {y, z} \in \RR \land \tuple {z, c} \in \RR \implies \tuple {y, c} \in \RR$
So we have $c \in \eqclass y \RR$.
By definition of subset:

$\eqclass x \RR \subseteq \eqclass y \RR$

Similarly, let $c \in \eqclass y \RR$.
That is:

$\tuple {y, c} \in \RR$
By definition of equivalence relation, $\RR$ is symmetric so:

$\tuple {z, y} \in \RR$
By definition of equivalence relation, $\RR$ is transitive so:

$\tuple {z, y} \in \RR \land \tuple {y, c} \in \RR \implies \tuple {z, c} \in \RR$
and

$\tuple {x, z} \in \RR \land \tuple {z, c} \in \RR \implies \tuple {x, c} \in \RR$
So we have $c \in \eqclass x \RR$.
By definition of subset:

$\eqclass y \RR \subseteq \eqclass x \RR$

That is:

$\eqclass x \RR \subseteq \eqclass y \RR$
and

$\eqclass y \RR \subseteq \eqclass x \RR$
By definition of set equality:

$\eqclass x \RR = \eqclass y \RR$

Thus:

$\eqclass x \RR \cap \eqclass y \RR \ne \O \implies \eqclass x \RR = \eqclass y \RR$
and the result follows.
$\blacksquare$


Also see
Fundamental Theorem on Equivalence Relations
Union of Equivalence Classes is Whole Set
Equivalence Class is not Empty


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 17$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.3$: Relations: Ponderable $2.3.3$




