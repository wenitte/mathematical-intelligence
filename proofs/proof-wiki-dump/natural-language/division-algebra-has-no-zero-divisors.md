# 

Source: https://proofwiki.org/wiki/Division_Algebra_has_No_Zero_Divisors


This page has been identified as a candidate for refactoring of medium complexity.In particular: Convert this into a standard equivalence proof for Definition:Division Algebra/Definition 1 and Definition:Division Algebra/Definition 2Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

It has been suggested that this page be renamed.In particular: Equivalence of Definitions of Division AlgebraTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $A = \struct {A_F, \oplus}$ be an algebra over a field $F$.

Then $A$ is a division algebra if and only if it has no zero divisors.

That is:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$
If the product of two elements of $A$ is zero, then at least one of those elements must itself be zero.

Some sources use this as the definition of a division algebra and from it deduce:

$\forall a, b \in A_F, b \ne \mathbf 0_A: \exists_1 x \in A_F, y \in A_F: a = b \oplus x, a = y \oplus b$


Proof
Let $A$ be a division algebra, in the sense that:

$\forall a, b \in A_F, b \ne \mathbf 0_A: \exists_1 x \in A_F, y \in A_F: a = b \oplus x, a = y \oplus b$
Suppose that:

$\exists a, b \in A_F \setminus \set {\mathbf 0_A}: \mathbf 0_A = b \oplus a$
Then by definition of the zero vector we also have that $\mathbf 0_A = b \oplus \mathbf 0_A$.
So there are two elements $x$ of $A_F$ such that $\mathbf 0_A = b \oplus x$, that is, $a$ and $\mathbf 0_A$.

Similarly, suppose that:

$\exists a, b \in A_F \setminus \set {\mathbf 0_A}: \mathbf 0_A = a \oplus b$
Then by definition of the zero vector we also have that:

$\mathbf 0_A = \mathbf 0_A \oplus b$
So there are two elements $y$ of $A_F$ such that:

$\mathbf 0_A = y \oplus b$
that is:

$a$ and $\mathbf 0_A$
So $A$ can not be a division algebra.

So it follows that if:

$\forall a, b \in A_F, b \ne \mathbf 0_A: \exists_1 x \in A_F, y \in A_F: a = b \oplus x, a = y \oplus b$
then:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$
$\Box$

Now suppose that:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$

Suppose $\exists x_1, x_2 \in A_F, x_1 \ne x_2$ such that:

$a = b \oplus x_1$
$a = b \oplus x_2$
We have that $x_1 \ne x_2$ and so $x_1 - x_2 = z \ne \mathbf 0_A$.
Thus $b \oplus x_1 - b \oplus x_2 = \mathbf 0_A$.
As $\oplus$ is a bilinear mapping, it follows that:

$b \oplus \paren {x_1 - x_2} = \mathbf 0_A$ and so $b \oplus z = \mathbf 0_A$
But $z \ne \mathbf 0_A$ and so it is not the case that:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$

Similarly it can be shown that if $\exists y_1, y_2 \in A_F, y_1 \ne y_2$ such that:

$a = y_1 \oplus b$
$a = y_2 \oplus b$
then it is not the case that:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$

Now suppose that:

$\exists a, b \in A_F, b \ne \mathbf 0_A: \not \exists_1 x \in A_F: a = b \oplus x$
or

$\exists a, b \in A_F, b \ne \mathbf 0_A: \not \exists_1 y \in A_F: a = y \oplus b$



This needs considerable tedious hard slog to complete it.In particular: Haven't found an approach yet ...To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Thus it is not the case that $\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$.
So it follows that if:

$\forall a, b \in A_F: a \oplus b = \mathbf 0_A \implies a = \mathbf 0_A \lor b = \mathbf 0_A$
then:

$\forall a, b \in A_F, b \ne \mathbf 0_A: \exists_1 x \in A_F, y \in A_F: a = b \oplus x, a = y \oplus b$
$\blacksquare$





