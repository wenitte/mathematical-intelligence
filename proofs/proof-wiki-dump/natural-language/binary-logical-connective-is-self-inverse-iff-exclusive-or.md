# 

Source: https://proofwiki.org/wiki/Binary_Logical_Connective_is_Self-Inverse_iff_Exclusive_Or



Source Work
1993: M. Ben-Ari: Mathematical Logic for Computer Science:

Chapter $2$: Propositional Calculus
$2.1$. Boolean Operations


Mistake
Let $\circ$ be a binary logical connective.
Then:

$\paren {p \circ q} \circ q \dashv \vdash p$
if and only if $\circ$ is the exclusive or operator.

$\mathsf{XOR}$ is also essential since it is the only operator having an inverse, namely itself
$\paren {p \oplus q} \oplus q = p$

Incorrect, as the biconditional operator has the same properties:

$\paren {\paren {p \iff q} \iff q} = p$


Proof
See Binary Logical Connectives with Inverse.
$\blacksquare$


Sources
1993: M. Ben-Ari: Mathematical Logic for Computer Science ... (previous) ... (next): Chapter $2$: Propositional Calculus: $\S 2.1$: Boolean operators




