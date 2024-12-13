# 

Source: https://proofwiki.org/wiki/McEliece%27s_Theorem_(Integer_Functions)



Theorem
Let $f: \R \to \R$ be a continuous, strictly increasing real function defined on an interval $A$.
Let:

$\forall x \in A: \floor x \in A \text { and } \ceiling x \in A$
where:

$\floor x$ denotes the floor of $x$
$\ceiling x$ denotes the ceiling of $x$

Then:

$\forall x \in A: \paren {\map f x \in \Z \implies x \in \Z} \iff \floor {\map f x} = \floor {\map f {\floor x} }$
$\forall x \in A: \paren {\map f x \in \Z \implies x \in \Z} \iff \ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$


Proof
Let $x \in A$.
Hence by hypothesis we have that both $\floor x \in A$ and $\ceiling x \in A$.


Necessary Condition
Let $\map f x \in \Z$.

Let:

$\floor {\map f x} = \floor {\map f {\floor x} }$
Then:














\(\ds \map f x\)

\(=\)







\(\ds \floor {\map f x}\)





Real Number is Integer iff equals Floor














\(\ds \)

\(=\)







\(\ds \floor {\map f {\floor x} }\)





by hypothesis




Aiming for a contradiction, suppose $x \notin \Z$.














\(\ds \floor x\)

\(<\)







\(\ds x\)





Floor of Non-Integer








\(\ds \leadsto \ \ \)





\(\ds \map f {\floor x}\)

\(<\)







\(\ds \map f x\)





as $f$ is strictly increasing








\(\ds \leadsto \ \ \)





\(\ds \floor {\map f {\floor x} }\)

\(<\)







\(\ds \floor {\map f x}\)





as $\floor {\map f x} = \map f x$ by Real Number is Integer iff equals Floor








\(\ds \leadsto \ \ \)





\(\ds \floor {\map f {\floor x} }\)

\(\ne\)







\(\ds \floor {\map f x}\)





which contradicts $\floor {\map f x} = \floor {\map f {\floor x} }$



Thus by Proof by Contradiction:

$x \in \Z$

Similarly, let:

$\ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$
Then:














\(\ds \map f x\)

\(=\)







\(\ds \ceiling {\map f x}\)





Real Number is Integer iff equals Ceiling














\(\ds \)

\(=\)







\(\ds \ceiling {\map f {\ceiling x} }\)





by hypothesis




Aiming for a contradiction, suppose $x \notin \Z$.














\(\ds \ceiling x\)

\(>\)







\(\ds x\)





Ceiling of Non-Integer








\(\ds \leadsto \ \ \)





\(\ds \map f {\ceiling x}\)

\(>\)







\(\ds \map f x\)





as $f$ is strictly increasing








\(\ds \leadsto \ \ \)





\(\ds \ceiling {\map f {\ceiling x} }\)

\(>\)







\(\ds \ceiling {\map f x}\)





as $\ceiling {\map f x} = \map f x$ by Real Number is Integer iff equals Ceiling








\(\ds \leadsto \ \ \)





\(\ds \ceiling {\map f {\ceiling x} }\)

\(\ne\)







\(\ds \ceiling {\map f x}\)





which contradicts $\ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$



Thus by Proof by Contradiction:

$x \in \Z$

Thus:

$\forall x \in A: \floor {\map f x} = \floor {\map f {\floor x} } \implies \paren {\map f x \in \Z \implies x \in \Z}$
and:

$\forall x \in A: \ceiling {\map f x} = \ceiling {\map f {\ceiling x} } \implies \paren {\map f x \in \Z \implies x \in \Z}$
$\Box$


Sufficient Condition
Let $f$ be such that:

$\map f x \in \Z \implies x \in \Z$

Aiming for a contradiction, suppose there exists $x \in A$ such that:

$\floor {\map f x} \ne \floor {\map f {\floor x} }$
We have by definition of the floor function that $x \ge \floor x$.
As $f$ is strictly increasing, it cannot be the case that $\floor {\map f x} < \floor {\map f {\floor x} }$.
So it must be that:

$\floor {\map f {\floor x} } < \floor {\map f x}$
Because $f$ is continuous:

$\exists y \in A: \floor x < y \le x$
such that $\map f y \in \Z$
But by definition of the floor function, $y$ cannot be an integer.
Thus by Proof by Contradiction:

$\paren {\map f x \in \Z \implies x \in \Z} \implies \floor {\map f x} = \floor {\map f {\floor x} }$
$\Box$

Aiming for a contradiction, suppose, similarly, that there exists $x \in A$ such that:

$\ceiling {\map f x} \ne \ceiling {\map f {\ceiling x} }$
We have by definition of the ceiling function that $x \le \ceiling x$.
As $f$ is strictly increasing, it cannot be the case that $\ceiling {\map f x} > \ceiling {\map f {\ceiling x} }$.
So it must be that:

$\ceiling {\map f {\ceiling x} } > \ceiling {\map f x}$
Because $f$ is continuous:

$\exists y \in A: \ceiling x > y \ge x$
such that $\map f y \in \Z$
But by definition of the ceiling function, $y$ cannot be an integer.
Thus by Proof by Contradiction:

$\paren {\map f x \in \Z \implies x \in \Z} \implies \ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$
$\Box$

Thus we have:

$\paren {\map f x \in \Z \implies x \in \Z} \iff \floor {\map f x} = \floor {\map f {\floor x} }$
and

$\paren {\map f x \in \Z \implies x \in \Z}  \iff \ceiling {\map f x} = \ceiling {\map f {\ceiling x} }$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Robert James McEliece.


Historical Note
Donald E. Knuth reports in The Art of Computer Programming that this generalisation of Conditions for $\floor {\log_b x}$ to equal $\floor {\log_b \floor x}$ was established by Robert James McEliece.

Knuth refers to it (in passing) as McEliece's Theorem.
Whiile this name for it is not backed up in the literature, it is convenient for $\mathsf{Pr} \infty \mathsf{fWiki}$, because of its unwieldy nature, to refer to it thus.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $34$ (Answers to Exercises)




