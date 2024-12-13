# 

Source: https://proofwiki.org/wiki/Operation_which_is_Right_Distributive_over_Every_Commutative_Associative_Operation_is_Left_Operation

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ have the property that:

for every arbitrary operation $*$ on $S$ which is both commutative and associative, $\circ$ is right distributive over $*$.

Then $\circ$ is the left operation $\gets$:

$\forall a, b \in S: a \gets b = a$


Proof
First recall from Left Operation is Right Distributive over All Operations that the left operation is indeed right distributive over all operations, whether commutative or associative.

Let $*$ be an arbitrary operation on $S$ which is both commutative and associative.
As asserted, let $\circ$ be right distributive over $*$.

Let $c \in S$ be arbitrary.
Consider the constant operation $\sqbrk c$:

$\forall a, b \in S: a \sqbrk c b := c$
We have from Constant Operation is Commutative and Constant Operation is Associative that $\sqbrk c$ is both commutative and associative.
Hence $\circ$ must be right distributive over $\sqbrk c$.
But then from Condition for Operation to be Right Distributive over Constant Operation:

$c \circ x = c$
As $c$ is arbitrary:

$\forall a, b \in S: a \circ b = a$
so $\circ$ has to be the left operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.25$




