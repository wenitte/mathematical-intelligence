# 

Source: https://proofwiki.org/wiki/Left_Operation_is_Distributive_over_Idempotent_Operation



Theorem
Let $\struct {S, \circ, \leftarrow}$ be an algebraic structure where:

$\leftarrow$ is the left operation
$\circ$ is any arbitrary binary operation.

Then:

$\leftarrow$ is distributive over $\circ$
if and only if:

$\circ$ is idempotent.


Proof
From Left Operation is Right Distributive over All Operations:

$\forall a, b, c \in S: \paren {a \circ b} \leftarrow c = \paren {a \leftarrow c} \circ \paren {b \leftarrow c}$
for all binary operations $\circ$.

It remains to show that $\leftarrow$ is left distributive over $\circ$ if and only if $\circ$ is idempotent.


Necessary Condition
Let $\circ$ be idempotent.
Then:














\(\ds a \leftarrow \paren {b \circ c}\)

\(=\)







\(\ds a\)





Definition of Left Operation














\(\ds \)

\(=\)







\(\ds a \circ a\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds \paren {a \leftarrow b} \circ \paren {a \leftarrow c}\)





Definition of Left Operation



Thus $\leftarrow$ is left distributive over $\circ$.
$\Box$


Sufficient Condition
Let $\leftarrow$ be left distributive over $\circ$.
Let $a \in S$ be arbitrary.
Then:














\(\ds a\)

\(=\)







\(\ds a \leftarrow \paren {b \circ c}\)





Definition of Left Operation














\(\ds \)

\(=\)







\(\ds \paren {a \leftarrow b} \circ \paren {a \leftarrow c}\)





Definition of Left Distributive Operation














\(\ds \)

\(=\)







\(\ds a \circ a\)





Definition of Left Operation



Hence $\circ$ is idempotent.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.23 \ \text{(b)}$




