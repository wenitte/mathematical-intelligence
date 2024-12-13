# 

Source: https://proofwiki.org/wiki/Orbit-Stabilizer_Theorem/Proof_1

Theorem
Let $G$ be a group which acts on a finite set $X$.
Let $x \in X$.
Let $\Orb x$ denote  the orbit of $x$.
Let $\Stab x$ denote the stabilizer of $x$ by $G$.
Let $\index G {\Stab x}$ denote the index of $\Stab x$ in $G$.

Then:

$\order {\Orb x} = \index G {\Stab x} = \dfrac {\order G} {\order {\Stab x} }$


Proof
Let us define the mapping:

$\phi: G \to \Orb x$
such that:

$\map \phi g = g * x$
where $*$ denotes the group action.

It is clear that $\phi$ is surjective, because from the definition $x$ was acted on by all the elements of $G$.

Next, from Stabilizer is Subgroup: Corollary:

$\map \phi g = \map \phi h \iff g^{-1} h \in \Stab x$
This means:

$g \equiv h \pmod {\Stab x}$

Thus there is a well-defined bijection:

$G \mathbin / \Stab x \to \Orb x$
given by:

$g \, \Stab x \mapsto g * x$

So $\Orb x$ has the same number of elements as $G \mathbin / \Stab x$.
That is:

$\order {\Orb x} = \index G {\Stab x}$
The result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 54$




