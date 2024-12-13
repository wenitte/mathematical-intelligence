# 

Source: https://proofwiki.org/wiki/Regular_Representations_in_Semigroup_are_Permutations_then_Structure_is_Group

Theorem
Let $\struct {S, \circ}$ be a semigroup.
For $a \in S$, let $\lambda_a: S \to S$ and $\rho_a: S \to S$ denote the left regular representation and right regular representation with respect to $a$ respectively:










\(\ds \forall x \in S: \, \)



\(\ds \map {\lambda_a} x\)

\(=\)







\(\ds a \circ x\)
















\(\ds \forall x \in S: \, \)



\(\ds \map {\rho_a} x\)

\(=\)







\(\ds x \circ a\)










For all $a$ in $S$, let $\lambda_a$ be a permutation on $S$.
Let there exist $b$ in $S$ such that $\rho_b$ is a permutation on $S$.

Then $\struct {S, \circ}$ is a group.


Proof
We have that $\lambda_a$ be a permutation on $S$ for all $a \in S$.
In particular this applies to $b$.
So:

$\lambda_b$ is a permutation on $S$
$\rho_b$ is a permutation on $S$
and so from Regular Representations wrt Element are Permutations then Element is Invertible:

$\struct {S, \circ}$ has an identity element
$b$ is invertible in $\struct {S, \circ}$.
It remains to be shown that $a$ is invertible in $S$ for all $a \in S$.

Let the identity element of $\struct {S, \circ}$ be $e$.
We have that $\lambda_a$ be a permutation on $S$ for all $a \in S$.
Hence:










\(\ds \forall a \in S: \exists a' \in S: \, \)



\(\ds e\)

\(=\)







\(\ds \map {\lambda_a} {a'}\)




















\(\ds \)

\(=\)







\(\ds a \circ a'\)










Thus for all $a$ in $S$, $a$ has a left inverse $a'$.
Now as $e$ is an identity element of $S$, it is by definition a left identity.
Hence from Left Inverse for All is Right Inverse, $a'$ is also a right inverse for $a$.
That is, every $a \in S$ has an element which is both a left inverse and a right inverse.
That is, every $a \in S$ has an inverse.

So we have that $\struct {S, \circ}$ is a semigroup such that:

$\struct {S, \circ}$ has an identity element
every element of $S$ has an inverse.
Hence, by definition, $\struct {S, \circ}$ is a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.14$




