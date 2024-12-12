# 

Source: https://proofwiki.org/wiki/Ceva%27s_Theorem/Proof_2



Theorem
Let $\triangle ABC$ be a triangle.
Let $L$, $M$ and $N$ be points on the sides $BC$, $AC$ and $AB$ respectively.

Then the lines $AL$, $BM$ and $CN$ are concurrent if and only if:

$\dfrac {BL} {LC} \times \dfrac {CM} {MA} \times \dfrac {AN} {NB} = 1$


Proof
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





