# 

Source: https://proofwiki.org/wiki/Quotient_Ring_is_Ring



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $J$ be an ideal of $R$.

Let $\struct {R / J, +, \circ}$ be the quotient ring of $R$ by $J$.

Then $R / J$ is also a ring.


Proof
First, it is to be shown that $+$ and $\circ$ are in fact well-defined operations on $R / J$.


Well-definition of $+$
From Ideal is Additive Normal Subgroup that $J$ is a normal subgroup of $R$ under $+$.
Thus, the quotient group $\struct {R / J, +}$ is defined, and as a Quotient Group is Group, $+$ is well-defined.
$\Box$


Well-definition of $\circ$
From Left Cosets are Equal iff Product with Inverse in Subgroup, we have:














\(\ds x_1 + J\)

\(=\)







\(\ds x_2 + J\)














\(\ds \leadsto \ \ \)





\(\ds x_1 + \paren {-x_2}\)

\(\in\)







\(\ds J\)









and:














\(\ds y_1 + J\)

\(=\)







\(\ds y_2 + J\)














\(\ds \leadsto \ \ \)





\(\ds y_1 + \paren {-y_2}\)

\(\in\)







\(\ds J\)










Hence from the definition of ideal:














\(\ds \paren {x_1 + \paren {-x_2} } \circ y_1\)

\(\in\)







\(\ds J\)




















\(\ds x_2 \circ \paren {y_1 + \paren {-y_2} }\)

\(\in\)







\(\ds J\)










Thus:














\(\ds \paren {x_1 + \paren {-x_2} } \circ y_1 + x_2 \circ \paren {y_1 + \paren {-y_2} }\)

\(\in\)







\(\ds J\)





as $\struct {J, +}$ is a group








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1 + \paren {-\paren {x_2 \circ y_2} }\)

\(\in\)







\(\ds J\)





Various ring properties








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1 + J\)

\(=\)







\(\ds x_2 \circ y_2 + J\)





Left Cosets are Equal iff Product with Inverse in Subgroup



$\Box$

Now to prove that $\struct {R / J, +, \circ}$ is a ring, proceed by verifying the ring axioms in turn:


Ring Axiom $\text A$: Addition forms an Abelian Group
From:

Ideal is Additive Normal Subgroup
The definition of a quotient group
Quotient Group is Group
it follows that $\struct {R / J, +}$ is a group.
$\Box$


Ring Axiom $\text M0$: Closure under Product
By definition of $\circ$ in $R / J$, it follows that $\struct {R / J, \circ}$ is closed.
$\Box$


Ring Axiom $\text M1$: Associativity of Product
Associativity can be deduced from the fact that $\circ$ is associative on $R$:










\(\ds \forall x, y, z \in R: \, \)



\(\ds \)

\(\)







\(\ds \paren {x + J} \circ \paren {\paren {y + J} \circ \paren {z + J} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x + J} \circ \paren {y \circ z + J}\)




















\(\ds \)

\(=\)







\(\ds x \circ y \circ z + J\)




















\(\ds \)

\(=\)







\(\ds \paren {x \circ y + J} \circ \paren {z + J}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + J} \circ \paren {y + J} } \circ \paren {z + J}\)









$\Box$


Ring Axiom $\text D$: Distributivity of Product over Addition
Distributivity can be deduced from the fact that $\circ$ is distributive on $R$:










\(\ds \forall x, y, z \in R: \, \)



\(\ds \)

\(\)







\(\ds \paren {\paren {x + J} + \paren {y + J} } \circ \paren {z + J}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + y + J} \circ \paren {z + J}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + y} \circ z} + J\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x \circ z} + \paren {y \circ z} } + J\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x \circ z} + J} + \paren {\paren {y \circ z} + J}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + J} \circ \paren {z + J} } + \paren {\paren {y + J} \circ \paren {z + J} }\)









$\Box$

Having verified all of the ring axioms, it follows that $\struct {R / J, +, \circ}$ is a ring.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Algebraic Concepts
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.2$ Factor rings: $\text{(i)}$




