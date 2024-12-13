# 

Source: https://proofwiki.org/wiki/Operation_which_is_Left_Distributive_over_Every_Commutative_Associative_Operation_is_Right_Operation

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ have the property that:

for every arbitrary operation $*$ on $S$ which is both commutative and associative, $\circ$ is left distributive over $*$.

Then $\circ$ is the right operation $\to$:

$\forall a, b \in S: a \to b = b$


Proof
First recall from Right Operation is Left Distributive over All Operations that the right operation is indeed  left distributive over all operations, whether commutative or associative.

Let $*$ be an arbitrary operation on $S$ which is both commutative and associative.
As asserted, let $\circ$ be left distributive over $*$.

Let $c \in S$ be arbitrary.
Consider the constant operation $\sqbrk c$:

$\forall a, b \in S: a \sqbrk c b := c$
We have from Constant Operation is Commutative and Constant Operation is Associative that $\sqbrk c$ is both commutative and associative.
Hence $\circ$ must be left distributive over $\sqbrk c$.
But then from Condition for Operation to be Left Distributive over Constant Operation:

$x \circ c = c$
As $c$ is arbitrary:

$\forall a, b \in S: a \circ b = b$
so $\circ$ has to be the right operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.25$




