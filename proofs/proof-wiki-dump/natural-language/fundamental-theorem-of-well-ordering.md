# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Well-Ordering


It has been suggested that this page or section be merged into Wosets are Isomorphic to Each Other or Initial Segments.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {A, \preccurlyeq_A}$ and $\struct {B, \preccurlyeq_B}$ be well-ordered classes.
Then either:

$\struct {A, \preccurlyeq_A}$ is order isomorphic to a lower section of $\struct {B, \preccurlyeq_B}$, or perhaps all of $\struct {B, \preccurlyeq_B}$
or:

$\struct {B, \preccurlyeq_B}$ is order isomorphic to a lower section of $\struct {A, \preccurlyeq_A}$, or perhaps all of $\struct {A, \preccurlyeq_A}$.


Proof
Let $N$ be the class of all order isomorphisms from lower sections of $\struct {A, \preccurlyeq_A}$ which are sets to lower sections of $\struct {B, \preccurlyeq_B}$ which are sets.
Each such order isomorphism is itself a set.
By Isomorphisms between Lower Sections of Well-Ordered Classes are Nested, $N$ is a nest.
$N$ may or may not contain a maximal element with respect to the subset relation.
However, note that no order isomorphism from a proper lower section of $\struct {A, \preccurlyeq_A}$ onto a proper lower section of $\struct {B, \preccurlyeq_B}$ can be a maximal element of $N$.
Indeed, suppose $\psi$ is an order isomorphism from a proper lower section $a^\prec$ of $\struct {A, \preccurlyeq_A}$ onto a proper lower section $b^\prec$ of $\struct {B, \preccurlyeq_B}$.
Then $\psi \cup \tuple {a, b}$ is an element of $N$ which is a proper extension of $\psi$.

Let $I = \bigcup N$ be the union of $N$.
Because $N$ is a nest, $I$ must be an order isomorphism from a lower section of $\struct {A, \preccurlyeq_A}$ (not necessarily proper) onto a lower section of $\struct {B, \preccurlyeq_B}$  (not necessarily proper).
It remains to be shown that either:

the domain of $I$ is the whole of $A$
or:

the image of $I$ is the whole of $B$.
Equivalently, we can instead show that:

the domain of $I$ cannot be a proper lower section of $\struct {A, \preccurlyeq_A}$
and:

the image of $I$ cannot be a proper lower section of $\struct {B, \preccurlyeq_B}$.
Aiming for a contradiction, suppose, the above were the case.
Because $I = \bigcup N$, $I$ would then be a maximal element of $N$.
But we have shown that no order isomorphism from a proper lower section of $\struct {A, \preccurlyeq_A}$ onto a proper lower section of $\struct {B, \preccurlyeq_B}$ can be a maximal element of $N$.
Therefore $I$ cannot be an order isomorphism from a proper lower section of $\struct {A, \preccurlyeq_A}$ onto a proper lower section of $\struct {B, \preccurlyeq_B}$.
The result follows.
$\blacksquare$


Also presented as
This can also be presented as:
Let $\struct {A, \preccurlyeq_A}$ and $\struct {B, \preccurlyeq_B}$ be well-ordered classes.
Then either:

$\struct {A, \preccurlyeq_A}$ is order isomorphic to a lower section of $\struct {B, \preccurlyeq_B}$
or:

$\struct {B, \preccurlyeq_B}$ is order isomorphic to a lower section of $\struct {A, \preccurlyeq_A}$
or:

$\struct {A, \preccurlyeq_A}$ is order isomorphic to $\struct {B, \preccurlyeq_B}$.


Also known as
The Fundamental Theorem of Well-Ordering is also known as the comparability theorem for well-orderings, or simply the comparability theorem.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 2$ Isomorphisms of well orderings: Theorem $2.9$




