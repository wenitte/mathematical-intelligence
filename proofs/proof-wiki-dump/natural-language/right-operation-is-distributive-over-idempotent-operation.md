# 

Source: https://proofwiki.org/wiki/Right_Operation_is_Distributive_over_Idempotent_Operation



Theorem
Let $\struct {S, \circ, \rightarrow}$ be an algebraic structure where:

$\rightarrow$ is the right operation
$\circ$ is any arbitrary binary operation.

Then:

$\rightarrow$ is distributive over $\circ$
if and only if

$\circ$ is idempotent.


Proof
From Right Operation is Left Distributive over All Operations:

$\forall a, b, c \in S: a \rightarrow \paren {b \circ c} = \paren {a \rightarrow b} \circ \paren {a \rightarrow c}$
for all binary operations $\circ$.

It remains to show that $\rightarrow$ is right distributive over $\circ$ if and only if $\circ$ is idempotent.


Necessary Condition
Let $\circ$ be idempotent.
Then:














\(\ds \paren {a \circ b} \rightarrow c\)

\(=\)







\(\ds c\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds c \circ c\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds \paren {a \rightarrow c} \circ \paren {b \rightarrow c}\)





Definition of Right Operation



Thus $\rightarrow$ is right distributive over $\circ$.
$\Box$


Sufficient Condition
Let $\rightarrow$ be right distributive over $\circ$.
Let $c \in S$ be arbitrary.
Then:














\(\ds c\)

\(=\)







\(\ds \paren {a \circ b} \rightarrow c\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds \paren {a \rightarrow c} \circ \paren {b \rightarrow c}\)





Definition of Right Distributive Operation














\(\ds \)

\(=\)







\(\ds c \circ c\)





Definition of Right Operation



Hence $\circ$ is idempotent.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.23 \ \text{(b)}$




