# 

Source: https://proofwiki.org/wiki/Ordinal_Subtraction_when_Possible_is_Unique



Theorem
Let $x$ and $y$ be ordinals such that $x \le y$.
Then there exists a unique ordinal $z$ such that $x + z = y$.

That is:

$x \le y \implies \exists! z \in \On: x + z = y$


Proof
By transfinite induction on $y$.


Base Case













\(\ds x\)

\(\le\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \O\)





Subset of Empty Set








\(\ds \leadsto \ \ \)





\(\ds x + z\)

\(=\)







\(\ds z\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds x + z = \O\)

\(\iff\)







\(\ds z = \O\)





Equality is Equivalence Relation





Inductive Case













\(\ds x\)

\(\le\)







\(\ds y^+\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\le\)







\(\ds y\)





Ordinal is Subset of Successor












\(\, \ds \lor \, \)

\(\ds x\)

\(=\)







\(\ds y^+\)




















\(\ds x\)

\(\le\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists ! z \in \On: \, \)



\(\ds x + z\)

\(=\)







\(\ds y\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \exists ! z \in \On: \, \)



\(\ds \paren {x + z}^+\)

\(=\)







\(\ds y^+\)





Equality of Successors








\(\ds \leadsto \ \ \)

\(\ds \exists ! w \in \On: \, \)



\(\ds x + w\)

\(=\)







\(\ds y^+\)





Equality of Successors



The last step is justified because of:

$x + z^+ = y^+$
which guarantees existence, and by Ordinal Addition is Left Cancellable:

$x + w = x + z^+ \implies w = z^+$
which guarantees uniqueness.


Limit Case









\(\ds \forall w \in y: \, \)



\(\ds x\)

\(\le\)







\(\ds w\)














\(\ds \leadsto \ \ \)

\(\ds \exists ! z: \, \)



\(\ds x + z\)

\(=\)







\(\ds w\)





by hypothesis














\(\ds x\)

\(\le\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)


















\(\, \ds \lor \, \)

\(\ds x\)

\(<\)







\(\ds y\)




















\(\ds x\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x + \O\)

\(=\)







\(\ds y\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds x + z = y\)

\(\iff\)







\(\ds x + \O = x + z\)





Equality is Equivalence Relation








\(\ds \leadsto \ \ \)





\(\ds x + z = y\)

\(\iff\)







\(\ds z = \O\)





Ordinal Addition is Left Cancellable








\(\ds \leadsto \ \ \)

\(\ds \exists ! z: \, \)



\(\ds x + z\)

\(=\)







\(\ds y\)





$z$ must be equal to $\O$














\(\ds x\)

\(<\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists w < y: \, \)



\(\ds x\)

\(<\)







\(\ds w\)





Limit Ordinal Equals its Union



Set $A = \set {w : x < w \land w < y}$.
The above statement shows that $A$ is nonempty.

Then:

$\forall w \in A: \exists ! z: x + z = w$
Create a mapping $F$, that sends each $w \in A$ to the unique $z$ that satisfies $x + z = w$.


This article, or a section of it, needs explaining.In particular: Specify domain and range of $F$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.













\(\ds x\)

\(<\)







\(\ds w\)


















\(\, \ds \land \, \)

\(\ds w\)

\(<\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x + \map F w\)

\(=\)







\(\ds w\)





Definition of $F$ above








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in A} \paren {x + \map F w}\)

\(=\)







\(\ds \bigcup_{w \mathop \in A} w\)





Indexed Union Equality








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in A} \paren {x + \map F w}\)

\(=\)







\(\ds y\)





Limit Ordinal Equals its Union




Finally, we must prove that:

$\ds \bigcup_{w \mathop \in A} \paren {x + \map F w} = x + \bigcup_{w \mathop \in A} \map F w$
It suffices to prove that $\ds \bigcup_{w \mathop \in A} \map F w$ is a limit ordinal.
Let $w = x^+$.
Then $\map F w = 1$, and Union of Ordinals is Least Upper Bound.
Thus:

$\ds \bigcup_{w \mathop \in A} \map F w \ne \O$















\(\ds z\)

\(\in\)







\(\ds \bigcup_{w \mathop \in A} \map F w\)














\(\ds \leadsto \ \ \)

\(\ds \exists w \in A: \, \)



\(\ds z\)

\(<\)







\(\ds \map F w\)





Definition of Union of Family








\(\ds \leadsto \ \ \)

\(\ds \exists w \in A: \, \)



\(\ds z^+\)

\(<\)







\(\ds \map F {w^+}\)














\(\ds \leadsto \ \ \)





\(\ds z^+\)

\(\in\)







\(\ds \bigcup_{w \mathop \in A} \map F w\)









Thus:

$\ds \bigcup_{w \mathop \in A} \map F w \ne z^+$
Therefore $\ds \bigcup_{w \mathop \in A} \map F w$ must be a limit ordinal.

To prove uniqueness, assume $x + z = y$.
Then by Ordinal Addition is Left Cancellable:

$\ds x + z = x + \bigcup_{w \mathop \in A} \map F w \implies z = \bigcup_{w \mathop \in A} \map F w$
$\blacksquare$


Also see
Definition:Ordinal Subtraction


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.8$




