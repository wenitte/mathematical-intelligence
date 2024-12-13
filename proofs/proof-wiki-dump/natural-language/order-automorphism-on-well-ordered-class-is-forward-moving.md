# 

Source: https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Forward_Moving


It has been suggested that this page or section be merged into Order Isomorphism from Woset onto Subset.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {A, \preccurlyeq}$ be a well-ordered class.
Let $\phi$ be an order isomorphism on $\struct {A, \preccurlyeq}$.
Then:

$\forall a \in A: a \preccurlyeq \map \phi a$


Proof
Let us define an element $a$ of $A$ such that:

$\map \phi a \prec a$
as moving backwards.

Aiming for a contradiction, suppose there exists an element $a$ of $A$ that moves backwards:

$\map \phi a \prec a$
for some $a \in A$.
Then applying $\phi$ to both sides:

$\map \phi {\map \phi a} \prec \map \phi a$
That is:

$\map \phi a$ also moves backwards
Thus if some $a \in A$ moves backwards, there is another predecessor element that also moves backwards.

Hence there is no smallest element of the set of all elements of $A$ that move backwards.
But this contradicts the properties of a well-ordered class:

every non-empty subclass of $A$ has a smallest element under $\preccurlyeq$.
Hence there can be no elements of $A$ that move backwards.
That is:

$\forall a \in A: a \preccurlyeq \map \phi a$
$\blacksquare$


Linguistic Note
The term forward moving was invented by $\mathsf{Pr} \infty \mathsf{fWiki}$.
As such, it is not generally expected to be seen in this context outside $\mathsf{Pr} \infty \mathsf{fWiki}$.
The concept is introduced by Raymond M. Smullyan and Melvin Fitting briefly in their Set Theory and the Continuum Problem, revised ed. of $2010$ as a stepping-stone to the stronger result Order Automorphism on Well-Ordered Class is Identity Mapping.
They do not actually give a name to the concept, but merely characterise it as a class mapping under which no element moves backwards.
It is worth comparing with the concept of a progressing mapping.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 2$ Isomorphisms of well orderings: Theorem $2.1$




