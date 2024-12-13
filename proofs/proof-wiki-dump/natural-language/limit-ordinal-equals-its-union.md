# 

Source: https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union



Theorem
Let $\lambda$ be a limit ordinal.

Then:

$\lambda = \bigcup \lambda$
where $\bigcup \lambda$ denotes the union of $\lambda$.


Proof
From Union of Ordinal is Subset of Itself:

$\bigcup \lambda \subseteq \lambda$
Suppose $x \in \lambda$.
By Successor of Ordinal Smaller than Limit Ordinal is also Smaller:

$x^+ < \lambda$
and so:

$x \in x^+$ and $x^+ \in \lambda$
from which:

$x \in \bigcup \lambda$
That is:

$\lambda \subseteq \bigcup \lambda$

Hence by set equality:

$\lambda = \bigcup \lambda$
$\blacksquare$


Also presented as
This can also be presented in the form:

$\lambda = \ds \bigcup_{\alpha \mathop \in \lambda} \alpha$
which by definition of union can be seen to be equivalent to $\lambda = \bigcup \lambda$.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers: Theorem $1.20 \ (3)$
Metamath: Theorem limuni: A limit ordinal is its own supremum (union)

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: In metamath, this is by definition so the link is not that appropriate. This definition of limit ordinal seems to be sourced in "Bell, J. L., and M. Machover, A Course in Mathematical Logic, North-Holland, Amsterdam (1977)" and we could use it to expand Definition:Limit Ordinal.PM: I'm all for deleting the link until such time as we've used the entire metamath thesis as a separate path into ordinal theoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




