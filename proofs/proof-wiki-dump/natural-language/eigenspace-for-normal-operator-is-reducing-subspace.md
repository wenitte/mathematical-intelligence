# 

Source: https://proofwiki.org/wiki/Eigenspace_for_Normal_Operator_is_Reducing_Subspace

Theorem
Let $\HH$ be a Hilbert space over $\Bbb F \in \set {\R, \C}$.
Let $A \in \map B \HH$ be a normal operator.
Let $\lambda \in \Bbb F$.

Then $\map \ker {A - \lambda}$ is a reducing subspace for $A$.
Here $\ker$ denotes kernel.


Proof
We are given that $A$ is normal.
Hence by Kernel of Linear Transformation is Orthocomplement of Image of Adjoint: Corollary:

$\ker A = {\Rng A^\perp$
and in particular, that:

$\ker A \subseteq \Rng A^\perp$
Now, by Orthocomplement of Subset of Orthocomplement is Superset:

$\Rng A \subseteq \ker A^\perp$
Applying this to the normal operator $A - \lambda$, we find:

$\Rng {A - \lambda} \subseteq \paren {\map \ker {A - \lambda} }^\perp$

This article needs to be linked to other articles.In particular: Link to result proving $A - \lambda$ normal (not up presently)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

We are now set up to prove that $\map \ker {A - \lambda}$ is a reducing subspace for $A$.
Let $x \in \map \ker {A - \lambda}$.
Then:














\(\ds A x\)

\(=\)







\(\ds \lambda x + \paren {A - \lambda} x\)




















\(\ds \)

\(=\)







\(\ds \lambda x\)





Definition of Kernel of Linear Transformation, $x \in \map \ker {A - \lambda}$



Therefore:

$A \map \ker {A - \lambda} \subseteq \map \ker {A - \lambda}$
that is to say:

$\map \ker {A - \lambda}$ is $A$-invariant.

Now, let $x \in \paren {\map \ker {A - \lambda} }^\perp$.
Observe that:

$A x = \lambda x + \paren {A - \lambda} x$
Now $\paren {A - \lambda} x \in \Rng {A - \lambda}$, and by our derivation above, this means that:

$\paren {A - \lambda} x \in \paren {\map \ker {A - \lambda} }^\perp$
In conclusion, since $\paren {\map \ker {A - \lambda} }^\perp$ is a linear subspace of $H$, it follows that:

$\lambda x + \paren {A - \lambda} x \in \paren {\map \ker {A - \lambda} }^\perp$
as desired.

Hence both $\map \ker {A - \lambda}$ and $\paren {\map \ker {A - \lambda} }^\perp$ have been shown to be $A$-invariant subspaces of $H$.
That is, $\map \ker {A - \lambda}$ is a reducing subspace for $A$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text {II}.5.6$




