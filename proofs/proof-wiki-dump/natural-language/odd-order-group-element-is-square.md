# 

Source: https://proofwiki.org/wiki/Odd_Order_Group_Element_is_Square



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $x \in G$.
Let the order $\order x$ be odd.

Then:

$\exists y \in G: y^2 = x$


Corollary
Let $\struct {G, \circ}$ be a finite group.
Then:

$\forall x \in G: \exists y \in G: y^2 = x$
if and only if $\order G$ is odd.


Proof
Let $\order x$ be odd.
Then:

$\exists n \in \Z_{> 0}: x^{2 n - 1} = e$
from the definition of the order of an element.

Conversely, suppose that 

$\exists n \in \Z_{> 0}: x^{2 n - 1} = e$
Then $\order x$ is a divisor of $2 n - 1$ from Element to Power of Multiple of Order is Identity.
Hence $\order x$ is odd.

So $\order x$ is odd if and only if:

$\exists n \in \Z_{> 0}: x^{2 n - 1} = e$

Then:














\(\ds \order x\)

\(=\)







\(\ds 2 n - 1\)














\(\ds \leadsto \ \ \)





\(\ds x^{2 n - 1}\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds x^{2 n}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x^n}^2\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in G: \, \)



\(\ds y^2\)

\(=\)







\(\ds x\)





where $x^n$ is precisely that $y$



Hence the result.
$\blacksquare$


Warning
It is completely false to say:

$\exists y \in G: y^2 = x$
if and only if:

the order  $\order x$ is odd
An order $2$ element in $C_4$ refutes the converse.
This mistake can arise by supposing that this:

$\exists y \in G: y^2 = x$
implies:

$\exists n \in \N: \paren {x^n}^2 = x$
The second step can only be used if every $x$ can be expressed in the terms of $y^2$.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $15$




