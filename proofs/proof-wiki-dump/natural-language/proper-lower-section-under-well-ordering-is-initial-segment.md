# 

Source: https://proofwiki.org/wiki/Proper_Lower_Section_under_Well-Ordering_is_Initial_Segment

Theorem
Let $A$ be a class under a well-ordering $\preccurlyeq$.
Let $B$ be a proper lower section of $A$.
Let $b$ be the smallest element of $A \setminus B$.

Then $B$ is the initial segment of $b$ in $A$.


Proof
By definition of proper lower section of $A$:

$\forall x \in B: \forall a \in A \setminus B: x \preccurlyeq a$
while:

$B \ne \O$
$B \ne A$
Because $B \ne A$ we have that $A \setminus B \ne \O$.
Because $\preccurlyeq$ is a well-ordering, $A \setminus B$ does indeed have a smallest element, which we can indeed call $b$.

We have a priori that:

$\forall x \in B: \forall a \in A \setminus B: x \preccurlyeq a$
This applies in particular to $b \in A \setminus B$:

$\forall x \in B: \exists b \in A \setminus B: x \preccurlyeq b$
That is, $B$ is the initial segment of $b$ in $A$ by definition.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 1$ A few preliminaries




