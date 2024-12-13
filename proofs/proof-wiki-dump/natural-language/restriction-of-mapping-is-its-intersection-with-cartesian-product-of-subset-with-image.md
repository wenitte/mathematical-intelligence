# 

Source: https://proofwiki.org/wiki/Restriction_of_Mapping_is_its_Intersection_with_Cartesian_Product_of_Subset_with_Image

Theorem
Let $f: S \to T$ be a mapping.
Let $X \subseteq S$.
Let $f {\restriction_X}$ be the restriction of $f$ to $X$.

Then:

$f {\restriction_X} = f \cap \paren {X \times \Img f}$
where:

$\Img f$ denotes the image of $f$, defined as:
$\Img f = \set {t \in T: \exists s \in S: t = \map f s}$
$X \times \Img f$ denotes the cartesian product of $X$ with $\Img f$.


Proof
We have:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f {\restriction_X}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





Definition of Restriction of Mapping












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds X\)





Definition of $x$












\(\, \ds \land \, \)

\(\ds y\)

\(\in\)







\(\ds \Img f\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





Definition of Restriction of Mapping












\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds X \times \Img f\)





Definition of Cartesian Product








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f \cap \paren {X \times \Img f}\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds f {\restriction_X}\)

\(\subseteq\)







\(\ds f \cap \paren {X \times \Img f}\)





Definition of Subset



$\Box$

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f \cap \paren {X \times \Img f}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)


















\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds X \times \Img f\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)


















\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds X\)





Definition of Cartesian Product












\(\, \ds \land \, \)

\(\ds y\)

\(\in\)







\(\ds f \sqbrk X\)





Definition of Image of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)


















\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f {\restriction_X}\)





Definition of Restriction of Mapping








\(\ds \leadsto \ \ \)





\(\ds f \cap \paren {X \times \Img f}\)

\(\subseteq\)







\(\ds f {\restriction_X}\)





Definition of Subset



$\Box$

Thus we have:














\(\ds f {\restriction_X}\)

\(\subseteq\)







\(\ds f \cap \paren {X \times \Img f}\)





Definition of Subset












\(\, \ds \land \, \)

\(\ds f \cap \paren {X \times \Img f}\)

\(\subseteq\)







\(\ds f {\restriction_X}\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds f \cap \paren {X \times \Img f}\)

\(=\)







\(\ds f {\restriction_X}\)





Definition of Set Equality



$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.4 \ \text{(ii)}$




