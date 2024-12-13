# 

Source: https://proofwiki.org/wiki/Limit_Ordinals_Preserved_Under_Ordinal_Addition

Theorem
Let $x$ and $y$ be ordinals such that $x$ is a limit ordinal.
Then $y + x$ is a limit ordinal.

That is, letting $K_{II}$ denote the class of all limit ordinals:

$\forall x \in K_{II}: y + x \in K_{II}$


Proof













\(\ds x\)

\(\in\)







\(\ds K_{II}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\ne\)







\(\ds \O\)





Definition of Limit Ordinal








\(\ds \leadsto \ \ \)





\(\ds y + x\)

\(\ne\)







\(\ds \O\)





Ordinal is Less than Sum








\(\ds \leadsto \ \ \)





\(\ds y + x\)

\(\in\)







\(\ds K_{II}\)





Definition of Limit Ordinal












\(\, \ds \lor \, \)

\(\ds y + x\)

\(=\)







\(\ds z^+\)










The result is now obtained by Proof by Contradiction:
Assume that $y + x = z^+$.














\(\ds y + x\)

\(=\)







\(\ds z^+\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in x} \paren {y + w}\)

\(=\)







\(\ds z^+\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \bigcup_{w \mathop \in x} \paren {y + w}\)





Ordinal is Less than Successor








\(\ds \leadsto \ \ \)

\(\ds \exists w \in x: \, \)



\(\ds z\)

\(\in\)







\(\ds y + w\)





Definition of Set Union



But $w \in x \implies w^+ \in x$ by Successor of Ordinal Smaller than Limit Ordinal is also Smaller.














\(\ds z\)

\(\in\)







\(\ds y + w\)














\(\ds \leadsto \ \ \)





\(\ds z^+\)

\(\in\)







\(\ds \paren {y + w}^+\)





Successor is Less than Successor








\(\ds \leadsto \ \ \)





\(\ds z^+\)

\(\in\)







\(\ds y + w\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds z^+\)

\(\in\)







\(\ds z^+\)





by hypothesis



But $z^+ \in z^+$ is clearly a membership loop, and therefore, our assumption must be wrong.
By disjunctive syllogism:

$y + x \in K_{II}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.11$




