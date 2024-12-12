# 

Source: https://proofwiki.org/wiki/Correspondence_Theorem_(Set_Theory)

This proof is about Correspondence Theorem in the context of Set Theory. For other uses, see Correspondence Theorem.

Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be an equivalence relation on $S$.
Let $\mathscr A$ be the set of partitions of $S$ associated with equivalence relations $\RR'$ on $S$ such that:

$\tuple {x, y} \in \RR \iff \tuple {x, y} \in \RR'$

Then there exists a bijection $\phi$ from $\mathscr A$ onto the set of partitions of the quotient set $S / \RR$.


Proof
Denote the equivalence class of an element $x$ of $S$ by $\eqclass x {\RR}$ with respect to the relation $\RR$. 
Consider the relation on $S$:

$\phi = \set {\tuple {\eqclass x {\RR'}, \eqclass x \RR}: x \in S}$

We prove that $\phi$ is a bijection. 

Let $\eqclass x \RR = \eqclass y \RR$.
Then:

$\tuple {x, y} \in \RR$
Thus:

$\tuple {x, y} \in \RR'$
Therefore:

$\eqclass x {\RR'} = \eqclass y {\RR'}$
and so $\phi$ is one-to-many.

Let $\eqclass x {\RR'} = \eqclass y {\RR'}$.
Then:

$\tuple {x, y} \in \RR'$
Thus:

$\tuple {x, y} \in \RR$
Therefore $\eqclass x \RR = \eqclass y \RR$
Hence $\phi$ is many-to-one.
As $\phi$ is both one-to-many and many-to-one, it is by definition a one-to-one relation.

From the fact that $\Rng \phi = S / \RR$ we have that $\phi$ is both left-total and right-total.

We have demonstrated that $\phi$ is left-total and many-to-one, and so by definition is a mapping.
We have demonstrated that $\phi$ is right-total, and so by definition is a surjection.
We have demonstrated that $\phi$ is one-to-one, and so by definition is an injection.
Hence by definition $\phi$ is a bijection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$: Exercise $18$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: For obvious reasons, referencing a result by its page number is of limited usefulness. The below needs to be replaced with its chapter and section number.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: Herbert B. Enderton: Elements of Set Theory P60




