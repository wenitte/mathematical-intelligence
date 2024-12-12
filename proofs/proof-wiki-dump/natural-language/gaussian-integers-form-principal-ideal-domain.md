# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Principal_Ideal_Domain



Theorem
The ring of Gaussian integers:

$\struct {\Z \sqbrk i, +, \times}$
forms a principal ideal domain.


Proof 1
From Gaussian Integers form Integral Domain, we have that $\struct {\Z \sqbrk i, +, \times}$ is an integral domain.
Let $a, d \in \Z \sqbrk i$ such that $d \ne 0$.
Suppose $\cmod a \ge \cmod d$.
Reference to an Argand diagram shows that one of:

$a + d, a - d, a + i d, a - i d$
is closer to the origin than $a$ is.
So it is possible to subtract Gaussian integer multiples of $d$ from $a$ until the square of the modulus of the remainder drops below $\cmod d^2$.
That remainder can only take integer values.
Thus a Division Theorem result follows:

$\exists q, r \in \Z \sqbrk i: a = q d + r$
where $\cmod r < \cmod d$.

Let $J$ be an arbitrary non-null ideal of $\Z \sqbrk i$.
Let $d$ be an element of minimum modulus in $J$.
Then the Division Theorem can be used to prove that $J = \ideal d$.


This needs considerable tedious hard slog to complete it.In particular: The above is the outline only.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
Follows immediately from:

Gaussian Integers form Euclidean Domain
Euclidean Domain is Principal Ideal Domain.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $23$




