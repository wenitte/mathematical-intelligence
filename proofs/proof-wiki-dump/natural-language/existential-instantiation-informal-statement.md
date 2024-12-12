# 

Source: https://proofwiki.org/wiki/Existential_Instantiation/Informal_Statement

Theorem

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This differs from the typical statement of EI to an extent that its meaning is obscuredYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\exists x: \map P x, \map P {\mathbf a} \implies y \vdash y$

Suppose we have the following:

From our universe of discourse, any arbitrarily selected object $\mathbf a$ which has the property $P$ implies a conclusion $y$
$\mathbf a$ is not free in $y$
It is known that there does actually exists an object that has $P$.
Then we may infer $y$.

This is called the Rule of Existential Instantiation and often appears in a proof with its abbreviation $\text {EI}$.

When using this rule of existential instantiation:

$\exists x: \map P x, \map P {\mathbf a} \implies y \vdash y$
the instance of $\map P {\mathbf a}$ is referred to as the typical disjunct.


Proof
This is an extension of Proof by Cases.

The propositional expansion of $\exists x: \map P x$ is:

$\map P {\mathbf X_1} \lor \map P {\mathbf X_2} \lor \map P {\mathbf X_3} \lor \ldots$
We know that any arbitrarily selected $\mathbf a$ with the property $P$ implies $y$.
From this we can infer that all such $\mathbf a$ which have that property imply $y$.
This is equivalent to the step in Proof by Cases in which we need to prove that both disjuncts lead to the same conclusion.
The fact that we only need one of them in fact to be true is quite enough to draw the conclusion that $y$ is true.
In this context, we are assured by the statement $\exists x: \map P x$ that at least one such disjunct in the above propositional expansion is true.
Thus the conclusion follows, and the result is proved.
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{IV}$: The Logic of Predicates $(2): \ 3$: Existential Propositions




