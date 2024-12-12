# 

Source: https://proofwiki.org/wiki/Condition_for_Constant_Operation_to_be_Distributive_over_Another_Operation



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\sqbrk c$ denote the constant operation for some $c \in S$.

Then:

$\sqbrk c$ is distributive over $\circ$
if and only if:

$c \circ c = c$


Proof
Sufficient Condition
Let $\sqbrk c$ be distributive over $\circ$










\(\ds \forall x, y, z \in S: \, \)



\(\ds \paren {x \sqbrk c y} \circ \paren {x \sqbrk c z}\)

\(=\)







\(\ds c circ c\)





Definition of Constant Operation










\(\ds \forall x, y, z \in S: \, \)



\(\ds x \sqbrk c \paren {y \circ z}\)

\(=\)







\(\ds c\)





Definition of Constant Operation



$c \circ c = c$
$\Box$


Necessary Condition
Let $\forall c \circ c = c$.
Then:










\(\ds \forall x, y, z \in S: \, \)



\(\ds \paren {x \sqbrk c y} \circ \paren {x \sqbrk c z}\)

\(=\)







\(\ds c \circ c\)





Definition of Constant Operation














\(\ds \)

\(=\)







\(\ds c\)





by hypothesis














\(\ds \)

\(=\)







\(\ds x \sqbrk c \paren {y \circ z}\)





Definition of Constant Operation



and:










\(\ds \forall x, y, z \in S: \, \)



\(\ds \paren {x \sqbrk c z} \circ \paren {y \sqbrk c z}\)

\(=\)







\(\ds c \circ c\)





Definition of Constant Operation














\(\ds \)

\(=\)







\(\ds c\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \sqbrk c z\)





Definition of Constant Operation



That is, $\sqbrk c$ is distributive over $\circ$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.24$




