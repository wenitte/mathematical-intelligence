# 

Source: https://proofwiki.org/wiki/Ceva%27s_Theorem



Theorem
Let $\triangle ABC$ be a triangle.
Let $L$, $M$ and $N$ be points on the sides $BC$, $AC$ and $AB$ respectively.

Then the lines $AL$, $BM$ and $CN$ are concurrent if and only if:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$


Proof 1

Necessary Condition
Let $AL$, $BM$ and $CN$ be concurrent.
Let the point of concurrency be $P$.

Consider the triangles $\triangle ALB$ and $\triangle ALC$.
They have the same altitude from the common base $BC$.
Hence:

$\dfrac {\map \Area {ALB} } {\map \Area {ALC} } = \dfrac {BL} {LC}$
Similarly, consider the triangles $\triangle PLB$ and $\triangle PLC$.
They also have the same altitude from the common base $BC$.
Hence:

$\dfrac {\map \Area {PLB} } {\map \Area {PLC} } = \dfrac {BL} {LC}$
Next we consider the triangles $\triangle APB$ and $\triangle APC$.
We have:

$\map \Area {APB} = \map \Area {ALB} - \map \Area {PLB}$
and:

$\map \Area {APC} = \map \Area {ALC} - \map \Area {PLC}$
and so:

$\dfrac {\map \Area {APB} } {\map \Area {APC} } = \dfrac {BL} {LC}$

In the same way, we derive:

$\dfrac {\map \Area {BPC} } {\map \Area {APB} } = \dfrac {CM} {MA}$
and:

$\dfrac {\map \Area {APC} } {\map \Area {BPC} } = \dfrac {AN} {NB}$

Thus we have:

$\dfrac {\map \Area {APB} } {\map \Area {APC} } \times \dfrac {\map \Area {BPC} } {\map \Area {APB} } \times \dfrac {\map \Area {APC} } {\map \Area {BPC} } = \dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB}$

The areas on the left hand side cancel out, leaving us with:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$
$\Box$


Sufficient Condition
Let:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$
Let $P$ be the intersection of $AM$ and $CN$ as in the diagram above.
We need to show that $A$, $P$ and $L$ are collinear.

From the first part, we have that:

$\dfrac {\map \Area {BPC} } {\map \Area {APB} } = \dfrac {CM} {MA}$
and:

$\dfrac {\map \Area {APC} } {\map \Area {BPC} } = \dfrac {AN} {NB}$

Multiplying them:

$\dfrac {\map \Area {BPC} } {\map \Area {APB} } \times \dfrac {\map \Area {APC} } {\map \Area {BPC} } = \dfrac {CM} {MA} \times \dfrac {AN} {NB}$
Simplifying:

$\dfrac {\map \Area {APC} } {\map \Area {APB} } = \dfrac {CM} {MA} \times \dfrac {AN} {NB}$

It is given that:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$
and so:

$\dfrac {CM} {MA} \times \dfrac {AN} {NB} = \dfrac {LC} {BL} = \dfrac {\map \Area {APC} } {\map \Area {APB} }$
Extend $BP$ to meet $AC$ at point $Z$, say.
By the same construction that we have used throughout, we have:

$\dfrac {\map \Area {APC} } {\map \Area {APB} } = \dfrac {ZC} {BZ}$
But then we have just shown that:

$\dfrac {LC} {BL} = \dfrac {\map \Area {APC} } {\map \Area {APB} }$
So $Z$ coincides with $L$ and the result follows.
$\blacksquare$


Proof 2
Necessary Condition
We have by hypothesis:

$AL$, $BM$ and $CN$ are concurrent in $\triangle ABC$ at point $P$.

Following the sides anticlockwise in $\triangle LAB$:




\(\text {(1)}: \quad\)









\(\ds \dfrac {LP} {PA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BC} {CL}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem



Following the sides clockwise in $\triangle LAC$:




\(\text {(2)}: \quad\)









\(\ds \dfrac {LP} {PA} \cdot \dfrac {AM} {MC} \cdot \dfrac {CB} {BL}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem



Equate $(1)$ and $(2)$ and cancel $\dfrac {LP} {PA}$.














\(\ds \dfrac {AN} {NB} \cdot \dfrac {BC} {CL}\)

\(=\)







\(\ds \dfrac {AM} {MC} \cdot \dfrac {CB} {BL}\)









By definition of directed line segments:

$AM = -MA$
$MC = -CM$
$CL = -LC$
$CB = -BC$
Hence:














\(\ds \dfrac {AN} {NB} \cdot \dfrac {BC} {-LC}\)

\(=\)







\(\ds \dfrac {-MA} {-CM} \cdot \dfrac {-BC} {BL}\)





substituting














\(\ds \dfrac {AN} {NB} \cdot \dfrac {BC} {LC}\)

\(=\)







\(\ds \dfrac {MA} {CM} \cdot \dfrac {BC} {BL}\)





cancel $-1$ twice














\(\ds \dfrac {CM} {MA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BL} {LC}\)

\(=\)







\(\ds 1\)





cancel $BC$ and rearrange



The result follows.
$\Box$


Sufficient Condition
Given:














\(\ds \dfrac {CM} {MA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BL} {LC}\)

\(=\)







\(\ds 1\)





by hypothesis



Without loss of generality, let $BM$ and $CN$ be concurrent at $P$.
Suppose $AL$ does not go through point $P$.
Then let $AP$ produced to $BC$ to give $AL'$, where $L'$ is not the same point as $L$.
By the Necessary Condition:














\(\ds \dfrac {CM} {MA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BL'} {L'C}\)

\(=\)







\(\ds 1\)









Equating the two results:














\(\ds \dfrac {CM} {MA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BL'} {L'C}\)

\(=\)







\(\ds \dfrac {CM} {MA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BL} {LC}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {BL'} {L'C}\)

\(=\)







\(\ds \dfrac {BL} {LC}\)





cancelling














\(\ds \dfrac {BL'} {L'C} + \dfrac {L'C} {L'C}\)

\(=\)







\(\ds \dfrac {BL} {LC} + \dfrac {LC} {LC}\)





add $1$ to both sides














\(\ds \dfrac {BC} {L'C}\)

\(=\)







\(\ds \dfrac {BC} {LC}\)





addition














\(\ds LC\)

\(=\)







\(\ds L'C\)





cancel $BC$ and rearrange



Hence $L'$ is the same point as $L$.
This is a contradiction.
$AL$, $BM$ and $CN$ are concurrent at $P$.
The result follows.
$\blacksquare$


Also see
Menelaus's Theorem


Source of Name
This entry was named for Giovanni Benedetto Ceva.


Historical Note
Ceva's Theorem was discovered by Giovanni Benedetto Ceva in $1678$.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Ceva's theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Ceva's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Ceva's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Ceva's Theorem




