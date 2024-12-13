# 

Source: https://proofwiki.org/wiki/Preimage_of_Lower_Section_under_Increasing_Mapping_is_Lower

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be preordered sets.
Let $f: S \to T$ be an increasing mapping.
Let $X \subseteq T$ be a lower section of $T$.

Then:

$f^{-1} \sqbrk X$ is lower
where $f^{-1} \sqbrk X$ denotes the preimage of $X$ under $f$.


Proof
Let $x \in f^{-1} \sqbrk X$, $y \in S$ such that $y \preceq x$.
Then:














\(\ds y\)

\(\preceq\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(\precsim\)







\(\ds \map f x\)





Definition of Increasing Mapping














\(\ds x\)

\(\in\)







\(\ds f^{-1} \sqbrk X\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds X\)





Definition of Preimage of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(\in\)







\(\ds X\)





Definition of Lower Section








\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(\in\)







\(\ds X\)





Definition of Preimage of Subset under Mapping



$\blacksquare$


Sources
Mizar article WAYBEL17:1




