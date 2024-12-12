# 

Source: https://proofwiki.org/wiki/Composite_of_Quotient_Mappings

Theorem
Let $S$ be a set.
Let $\RR_1$ be an equivalence on $S$, and $\RR_2$ be an equivalence on the quotient set $S / \RR_1$.

We can find an equivalence $\RR_3$ on $S$ such that $\paren {S / \RR_1} / \RR_2$ is in one-to-one correspondence with $S / \RR_3$ under the mapping:

$\phi: \paren {S / \RR_1} / \RR_2 \to S / \RR_3: \eqclass {\eqclass x {\RR_1} } {\RR_2} \mapsto \eqclass x {\RR_3}$.


Proof
Define $\RR_3$ to be the equivalence induced by:

$x \mapsto \eqclass {\eqclass x {\RR_1} } {\RR_2}$
By definition of $\RR_3$:

$\eqclass {\eqclass x {\RR_1} } {\RR_2} = \eqclass {\eqclass y {\RR_1} } {\RR_2} \implies \eqclass x {\RR_3} = \eqclass y {\RR_3}$
Therefore, $\phi$ is well-defined.

Again by definition of $\RR_3$: 

$\eqclass x {\RR_3} = \eqclass y {\RR_3} \implies \eqclass {\eqclass x {\RR_1} } {\RR_2} = \eqclass {\eqclass y {\RR_1} } {\RR_2}$
which means $\phi$ is an injection.

Lastly, note that every element of $S / \RR_3$ is of the form $\eqclass x {\RR_3}$ for some $x \in S$.
It is now immediate from the definition of $\phi$ that it is surjective.

Hence $\phi$ is a bijection, as desired.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 17 \gamma$




