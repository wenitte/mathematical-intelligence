# 

Source: https://proofwiki.org/wiki/Relative_Prime_Modulo_Tensor_is_Zero

Theorem
Let $p \in \Z_{>0}$ and $q \in \Z_{>0}$ be positive coprime integers.
Let $\Z / p \Z$ and $\Z / q \Z$ be $\Z$-modules.


This article, or a section of it, needs explaining.In particular: It is not a good idea to use the same notation for both a ring and a module. Either $\Z / p \Z$ is a ring or it is a module. Please consider taking the advice in the explain template at the bottom of this page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then:

$\Z / p \Z \otimes_\Z \Z / q\Z = 0$
where $\otimes_\Z$ denotes tensor product over integers.


Proof
By Bézout's Identity there exists $a, b \in \Z$ such that $a p + b q = 1$.

Then for $s \otimes_\Z t \in \Z / p \Z \otimes \Z / q \Z$:














\(\ds s \otimes t\)

\(=\)







\(\ds (s \left({a p + b q}\right)) \otimes t\)





$s = s \cdot 1$














\(\ds \)

\(=\)







\(\ds (s a p + s b q) \otimes t\)





By module axiom 2














\(\ds \)

\(=\)







\(\ds s b q \otimes t + s a p \otimes t\)





By equality in tensor product














\(\ds \)

\(=\)







\(\ds s b \otimes q t + s a p \otimes t\)





By equality in tensor product














\(\ds \)

\(=\)







\(\ds 0\)





by Tensor with Zero Element is Zero in Tensor and the fact that $qt = 0$ in $\Z_q$ and $sap=0$ in $\Z_p$



$\blacksquare$


This article, or a section of it, needs explaining.In particular: Notation needs to be tightened up. When the fundamental stuff like this is being addressed, it is important to explain exactly which operation of which component of the module is being used: the scalar product, or the group operation, or whichever of the ring operations. It is inadequate to use mere concatenation, as it is never completely clear which elements of which structure each one is. As for the rest of this proof, it is still impenetrably vague. The reason for the last line is a complete mystery -- the actual definition of $0$ also needs to be stated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Also see
Tensor Product of Quotient Rings, a generalization




