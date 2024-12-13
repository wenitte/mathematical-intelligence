# 

Source: https://proofwiki.org/wiki/No_Order_Isomophism_Between_Distinct_Initial_Segments_of_Woset

Theorem
Let $E$ be a well-ordered set.
Let $S_\alpha, S_\beta$ be initial segments of $E$ that are order isomorphic.

Then $S_\alpha = S_\beta$.


Proof
Aiming for a contradiction, suppose $S_\alpha \ne S_\beta$.
Then $\alpha \ne \beta$.
By the trichotomy law, $\alpha \prec \beta$ or $\beta \prec \alpha$.
Without loss of generality assume $\alpha \prec \beta$.
Then $S_\alpha \subsetneqq S_\beta$.
That is, $S_\alpha$ is an initial segment of $S_\beta$.
We have by hypothesis that $S_\alpha$ and $S_\beta$ are order isomorphic.
Thus there is an order isomorphism between $S_\beta$ and an initial segment of $S_\beta$.
This contradicts Well-Ordered Class is not Isomorphic to Initial Segment.
Thus $S_\alpha = S_\beta$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): Supplementary Exercise $1.2$




