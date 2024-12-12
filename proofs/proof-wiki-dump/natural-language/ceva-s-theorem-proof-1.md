# 

Source: https://proofwiki.org/wiki/Ceva%27s_Theorem/Proof_1



Theorem
Let $\triangle ABC$ be a triangle.
Let $L$, $M$ and $N$ be points on the sides $BC$, $AC$ and $AB$ respectively.

Then the lines $AL$, $BM$ and $CN$ are concurrent if and only if:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$


Proof

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





