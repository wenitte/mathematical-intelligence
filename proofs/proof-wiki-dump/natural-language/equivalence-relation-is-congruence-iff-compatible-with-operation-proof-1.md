# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_is_Congruence_iff_Compatible_with_Operation/Proof_1



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\RR$ be an equivalence relation on $S$.

Then $\RR$ is a congruence relation for $\circ$ if and only if:










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {x \circ z} \mathrel \RR \paren {y \circ z}\)




















\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {z \circ x} \mathrel \RR \paren {z \circ y}\)









That is, if and only if $\RR$ is compatible with $\circ$.


Proof
Necessary Condition
Let $\RR$ be a congruence relation for $\circ$.
That is:

$\forall x_1, x_2, y_1, y_2 \in S: x_1 \mathrel \RR x_2 \land y_1 \mathrel \RR y_2 \implies \paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$

As $\RR$ is an equivalence relation it is by definition reflexive.
That is:

$\forall z \in S: z \mathrel \RR z$

Make the substitutions:














\(\ds x_1\)

\(\to\)







\(\ds x\)




















\(\ds x_2\)

\(\to\)







\(\ds y\)




















\(\ds y_1\)

\(\to\)







\(\ds z\)




















\(\ds y_2\)

\(\to\)







\(\ds z\)









It follows that:

$\forall x, y, z \in S: x \mathrel \RR y \implies \paren {x \circ z} \mathrel \RR \paren {y \circ z}$

Similarly, make the substitutions:














\(\ds x_1\)

\(\to\)







\(\ds z\)




















\(\ds x_2\)

\(\to\)







\(\ds z\)




















\(\ds y_1\)

\(\to\)







\(\ds x\)




















\(\ds y_2\)

\(\to\)







\(\ds y\)









It follows that:

$\forall x, y, z \in S: x \mathrel \RR y \implies \paren {z \circ x} \mathrel \RR \paren {z \circ y}$
$\Box$


Sufficient Condition
Now let $\RR$ have the nature that:










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {x \circ z} \mathrel \RR \paren {y \circ z}\)




















\(\ds x \mathrel \RR y\)

\(\implies\)







\(\ds \paren {z \circ x} \mathrel \RR \paren {z \circ y}\)










Then we have:










\(\ds \forall x_1, x_2, y_1, y_2 \in S: \, \)



\(\ds x_1 \mathrel \RR y_1\)

\(\implies\)







\(\ds \paren {x_1 \circ x_2} \mathrel \RR \paren {y_1 \circ x_2}\)




















\(\ds x_2 \mathrel \RR y_2\)

\(\implies\)







\(\ds \paren {y_1 \circ x_2} \mathrel \RR \paren {y_1 \circ y_2}\)










As $\RR$ is an equivalence relation it is by definition transitive.
Thus it follows that:

$\paren {x_1 \circ x_2} \mathrel \RR \paren {y_1 \circ y_2}$
$\Box$

The result follows.
$\blacksquare$





