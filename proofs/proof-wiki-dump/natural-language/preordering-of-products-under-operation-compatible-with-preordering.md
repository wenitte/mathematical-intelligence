# 

Source: https://proofwiki.org/wiki/Preordering_of_Products_under_Operation_Compatible_with_Preordering



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\precsim$ be a preordering on $S$.

Then $\precsim$ is compatible with $\circ$ if and only if:

$\forall x_1, x_2, y_1, y_2 \in S: x_1 \precsim x_2 \land y_1 \precsim y_2 \implies \paren {x_1 \circ y_1} \precsim \paren {x_2 \circ y_2}$


Proof
By definition, $\precsim$ is compatible with $\circ$ if and only if:










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \precsim y\)

\(\implies\)







\(\ds \paren {x \circ z} \precsim \paren {y \circ z}\)




















\(\ds x \precsim y\)

\(\implies\)







\(\ds \paren {z \circ x} \precsim \paren {z \circ y}\)











Sufficient Condition
Let $\precsim$ be compatible with $\circ$.

Then for all $x_1, x_2, y_1, y_2 \in S$:














\(\ds x_1 \precsim x_2\)

\(\implies\)







\(\ds \paren {x_1 \circ y_1} \precsim \paren {x_2 \circ y_1}\)





Definition of Relation Compatible with Operation














\(\ds y_1 \precsim y_2\)

\(\implies\)







\(\ds \paren {x_2 \circ y_1} \precsim \paren {x_2 \circ y_2}\)





Definition of Relation Compatible with Operation




As $\precsim$ is a preordering it is by definition transitive.

Thus it follows that:

$x_1 \precsim x_2 \land y_1 \precsim y_2 \implies \paren {x_1 \circ y_1} \precsim \paren {x_2 \circ y_2}$
$\Box$


Necessary Condition
Let $\precsim$ fulfil the property that:

$\forall x_1, x_2, y_1, y_2 \in S: x_1 \precsim x_2 \land y_1 \precsim y_2 \implies \paren {x_1 \circ x_2} \precsim \paren {y_1 \circ y_2}$

As $\precsim$ is a preordering it is by definition reflexive.
That is:

$\forall z \in S: z \precsim z$

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

$\forall x, y, z \in S: x \precsim y \implies \paren {x \circ z} \precsim \paren {y \circ z}$

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

$\forall x, y, z \in S: x \precsim y \implies \paren {z \circ x} \precsim \paren {z \circ y}$

So for all $x, y, z \in S$, both conditions are fulfilled:














\(\ds x \precsim y\)

\(\implies\)







\(\ds \paren {x \circ z} \precsim \paren {y \circ z}\)




















\(\ds x \precsim y\)

\(\implies\)







\(\ds \paren {z \circ x} \precsim \paren {z \circ y}\)









for $\precsim$ to be compatible with $\circ$.
$\Box$

The result follows.
$\blacksquare$





