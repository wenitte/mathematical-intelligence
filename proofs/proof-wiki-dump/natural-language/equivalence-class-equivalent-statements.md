# 

Source: https://proofwiki.org/wiki/Equivalence_Class_Equivalent_Statements



Theorem
Let $\RR$ be an equivalence relation on $S$.
Let $x, y \in S$.
The following statements are equivalent:

$(1): \quad x$ and $y$ are in the same $\RR$-class
$(2): \quad \eqclass x \RR = \eqclass y \RR$
$(3): \quad x \mathrel \RR y$
$(4): \quad x \in \eqclass y \RR$
$(5): \quad y \in \eqclass x \RR$
$(6): \quad \eqclass x \RR \cap \eqclass y \RR \ne \O$


Proof
$(1)$ Equivalent to $(2)$
By Equivalence Class is Unique:

$\eqclass x \RR$ is the unique $\RR$-class to which $x$ belongs
and:

$\eqclass y \RR$ is the unique $\RR$-class to which $y$ belongs.
As these are unique for each, they must be the same set.
$\blacksquare$


$(2)$ Equivalent to $(3)$
By Equivalence Class holds Equivalent Elements:

Necessary Condition
First we prove that $\tuple {x, y} \in \RR \implies \eqclass x \RR = \eqclass y \RR$.
Suppose:

$\tuple {x, y} \in \RR: x, y \in S$
Then:














\(\ds z\)

\(\in\)







\(\ds \eqclass x \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds \tuple {z, x}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric








\(\ds \leadsto \ \ \)





\(\ds \tuple {z, y}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is transitive








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, z}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \eqclass y \RR\)





Definition of Equivalence Class



So:

$\eqclass x \RR \subseteq \eqclass y \RR$

Now:














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \eqclass x \RR \subseteq \eqclass y \RR\)





(see above)














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \tuple {y, x} \in \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric














\(\ds \)

\(\leadsto\)







\(\ds \eqclass y \RR \subseteq \eqclass x \RR\)





from above














\(\ds \)

\(\leadsto\)







\(\ds \eqclass y \RR = \eqclass x \RR\)





Definition of Set Equality




... so we have shown that:

$\tuple {x, y} \in \RR \implies \eqclass x \RR = \eqclass y \RR$
$\Box$


Sufficient Condition
Next we prove that $\eqclass x \RR = \eqclass y \RR \implies \tuple {x, y} \in \RR$.
By definition of set equality:

$\eqclass x \RR = \eqclass y \RR$
means:

$\paren {x \in \eqclass x \RR \iff x \in \eqclass y \RR}$
So by definition of equivalence class:

$\tuple {y, x} \in \RR$
Hence by definition of equivalence relation: $\RR$ is symmetric

$\tuple {x, y} \in \RR$
So we have shown that

$\eqclass x \RR = \eqclass y \RR \implies \tuple {x, y} \in \RR$

Thus, we have:














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \eqclass x \RR = \eqclass y \RR\)




















\(\ds \eqclass x \RR = \eqclass y \RR\)

\(\implies\)







\(\ds \tuple {x, y} \in \RR\)









$\Box$

So by equivalence:

$\tuple {x, y} \in \RR \iff \eqclass x \RR = \eqclass y \RR$
$\blacksquare$


$(3)$ Equivalent to $(4)$
This follows directly by the definition of equivalence class.
$\blacksquare$


$(3)$ Equivalent to $(5)$
This follows through dint of the symmetry of $\RR$ and the definition of Equivalence Class.
$\blacksquare$


$(3)$ Equivalent to $(6)$
Follows directly from Equivalence Classes are Disjoint.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.4$




