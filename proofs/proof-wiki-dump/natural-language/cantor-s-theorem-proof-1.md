# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem/Proof_1



Theorem
There is no surjection from a set $S$ to its power set for any set $S$.
That is, $S$ is strictly smaller than its power set.


Proof
Aiming for a contradiction, suppose $S$ is a set with a surjection $f: S \to \powerset S$.
Then:










\(\ds \forall x \in S: \, \)



\(\ds \map f x\)

\(\in\)







\(\ds \powerset S\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \map f x\)

\(\subseteq\)







\(\ds S\)





Definition of Power Set




Now by Law of Excluded Middle, there are two choices for every $x \in S$:

$x \in \map f x$
$x \notin \map f x$
Let $T = \set {x \in S: x \notin \map f x}$.
As $f$ is supposed to be a surjection, $\exists a \in S: T = \map f a$.
Thus:

$a \in \map f a \implies a \notin \map f a$
$a \notin \map f a \implies a \in \map f a$

This is a contradiction, so the initial supposition that there is such a surjection must be false.
$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.5$: The power of a set: Theorem $6$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 14$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.6$: Cardinality: Theorem $\text{A}.6.1$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 3$ A non-denumerable set




