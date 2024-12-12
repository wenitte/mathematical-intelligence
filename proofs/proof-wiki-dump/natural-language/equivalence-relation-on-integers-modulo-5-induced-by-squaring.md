# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Integers_Modulo_5_induced_by_Squaring



Theorem
Let $\beta$ denote the relation defined on the integers $\Z$ by:

$\forall x, y \in \Z: x \mathrel \beta y \iff x^2 \equiv y^2 \pmod 5$

Then $\beta$ is an equivalence relation.


Number of $\beta$-Equivalence Classes
The number of distinct $\beta$-equivalence classes is $3$:














\(\ds \eqclass 0 \beta\)

\(\)







\(\ds \)




















\(\ds \eqclass 1 \beta\)

\(=\)







\(\ds \eqclass 4 \beta\)




















\(\ds \eqclass 2 \beta\)

\(=\)







\(\ds \eqclass 3 \beta\)











Addition Modulo $\beta$ is not Well-Defined
Let the $+_\beta$ operator ("addition") on the $\beta$-equivalence classes be defined as:

$\eqclass a \beta +_\beta \eqclass b \beta := \eqclass {a + b} \beta$
Then such an operation is not well-defined.


Multiplication Modulo $\beta$ is Well-Defined
Let the $\times_\beta$ operator ("multiplication") on the $\beta$-equivalence classes be defined as:

$\eqclass a \beta \times_\beta \eqclass b \beta := \eqclass {a \times b} \beta$
Then such an operation is well-defined.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that for all $x \in \Z$:

$x^2 \equiv x^2 \pmod 5$
It follows by definition of $\beta$ that:

$x \mathrel \beta x$
Thus $\beta$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds x\)

\(\beta\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(\equiv\)







\(\ds y^2\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(\equiv\)







\(\ds x^2\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds y\)

\(\beta\)







\(\ds x\)









Thus $\beta$ is seen to be symmetric.
$\Box$


Transitivity
Let:

$x \mathrel \beta y$ and $y \mathrel \beta z$
for $x, y, z \in \Z$.
Then by definition:














\(\ds x^2\)

\(\equiv\)







\(\ds y^2\)

\(\ds \pmod 5\)


















\(\ds y^2\)

\(\equiv\)







\(\ds z^2\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(\equiv\)







\(\ds z^2\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds x\)

\(\beta\)







\(\ds z\)









Thus $\beta$ is seen to be transitive.
$\Box$

$\beta$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Problem Set $\text{A}.3$: $21$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $9$




