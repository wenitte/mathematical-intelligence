# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Relative_Complement



Theorem
The relative complement of the relative complement of a set is itself:

$\relcomp S {\relcomp S T} = T$

Thus, considered as a mapping on the power set of $S$:

$\complement_S: \powerset S \to \powerset S: \relcomp S T = S \setminus T$
$\complement_S$ is an involution.


Proof 1
By the definition of relative complement:

$\relcomp S {\relcomp S T} = S \setminus \paren {S \setminus T}$
Let $t \in T$.
Then by the definition of set difference:

$t \notin S \setminus T$
Since $t \in T$ and $T \subseteq S$, by the definition of subset:

$t \in S$
Thus:

$t \in \paren {S \setminus \paren {S \setminus T} }$

Suppose instead that:

$t \in \paren {S \setminus \paren {S \setminus T} }$
Then:

$t \in S$
and:

$\neg \paren {t \in \paren {S \setminus T} }$
Thus:

$\neg \paren {\paren {t \in S} \land \neg \paren {t \in T} }$
By Conditional is Equivalent to Negation of Conjunction with Negative:

$t \in S \implies t \in T$
By Modus Ponendo Ponens:

$t \in T$
$\blacksquare$


Proof 2













\(\ds \relcomp S {\relcomp S T}\)

\(=\)







\(\ds S \setminus \paren {S \setminus T}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds S \cap T\)





Set Difference with Set Difference




The definition of the relative complement requires that:

$T \subseteq S$
But from Intersection with Subset is Subset‎:

$T \subseteq S \iff T \cap S = T$
Thus:

$\relcomp S {\relcomp S T} = T$
follows directly.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1961: John G. Hocking and Gail S. Young: Topology ... (previous) ... (next): A Note on Set-Theoretic Concepts: $(4)$
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $1$: Set Theory: $1.3$: Set operations
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.6$. Difference and complement
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Theorem $3.2$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: $\text{(i)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.2 \ \text{(i)}$




