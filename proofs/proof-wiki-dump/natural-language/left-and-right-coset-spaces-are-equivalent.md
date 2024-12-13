# 

Source: https://proofwiki.org/wiki/Left_and_Right_Coset_Spaces_are_Equivalent



Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a subgroup of $G$.

Let:

$x H$ denote the left coset of $H$ by $x$
$H y$ denote the right coset of $H$ by $y$.

Then:

$\order {\set {x H: x \in G} } = \order {\set {H y: y \in G} }$

That is:

The number of right cosets is the same as the number of left cosets of $G$ with respect to $H$.
The left and right coset spaces are equivalent.


Proof 1
Let there be exactly $r$ different left cosets of $H$ in $G$.
Let a complete repetition-free list of these left cosets be:

$a_1 H, a_2 H, a_3 H \ldots, a_r H: a_1, a_2, \ldots, a_r \in G$

From Left Coset Space forms Partition, every element of $G$ is contained in exactly one of the left cosets.
Let $x \in G$.
Then, for $1 \le i \le r$:














\(\ds x\)

\(\in\)







\(\ds H a_i^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \paren {a_i^{-1} }^{-1}\)

\(\in\)







\(\ds H\)





Element in Right Coset iff Product with Inverse in Subgroup








\(\ds \leadstoandfrom \ \ \)





\(\ds x a_i\)

\(\in\)







\(\ds H\)





Inverse of Group Inverse








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x^{-1} }^{-1} a_i\)

\(\in\)







\(\ds H\)





Inverse of Group Inverse








\(\ds \leadstoandfrom \ \ \)





\(\ds x^{-1}\)

\(\in\)







\(\ds a_i H\)





Element in Left Coset iff Product with Inverse in Subgroup




Since $x^{-1} \in a_i H$ is true for precisely one value of $i$, it follows that $x \in H a_i^{-1}$ is also true for precisely that value of $i$.

So there are exactly $r$ different right cosets of $H$ in $G$, and a complete repetition-free list of these is:

$H a_1^{-1}, H a_2^{-1}, H a_3^{-1}, \ldots, H a_r^{-1}$

The result follows.
$\blacksquare$


Proof 2
Let $G$ be a group and let $H \le G$.
Consider the mapping $\phi$ from the left coset space to the right coset space defined as:

$\forall g \in G: \map \phi {g H} = H g^{-1}$

We need to show that $\phi$ is a bijection.

First we need to show that $\phi$ is well-defined.
That is, that $a H = b H \implies \map \phi {a H} = \map \phi {b H}$.
Suppose $a H = b H$.














\(\ds a H = b H\)

\(\iff\)







\(\ds a^{-1} b \in H\)





Left Cosets are Equal iff Product with Inverse in Subgroup‎














\(\ds H a^{-1} = H b^{-1}\)

\(\iff\)







\(\ds a^{-1} \paren {b^{-1} }^{-1} \in H\)





Right Cosets are Equal iff Product with Inverse in Subgroup




But $a^{-1} \paren {b^{-1} }^{-1} = a^{-1} b \in H$ as $a H = b H$.
So $H a^{-1} = H b^{-1}$ and $\phi$ is well-defined.

Next we show that $\phi$ is injective:
Suppose $\exists x, y \in G: \map \phi {x H} = \map \phi {y H}$.
Then $H x^{-1} = H y^{-1}$, so $x^{-1} = e_G x^{-1} = h y^{-1}$ for some $h \in H$.
Thus $h = x^{-1} y \implies h^{-1} = y^{-1} x$.
As $H$ is a subgroup, $h^{-1} \in H$.
Thus:

$y^{-1} x \in H$
So by Left Cosets are Equal iff Product with Inverse in Subgroup:

$x H = y H$
Thus $\phi$ is injective.

Next we show that $\phi$ is surjective:
Let $H x$ be a right coset of $H$ in $G$.
Since $x = \paren {x^{-1} }^{-1}$, $H x = \map \phi {x^{-1} H}$ and so $\phi$ is surjective.

Thus $\phi$ constitutes a bijection from the left coset space to the right coset space, and the result follows.
$\blacksquare$


Also see
Index of Subgroup, which is the number of left (or right) cosets of a subgroup.
Subgroup is Normal iff Left Cosets are Right Cosets


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 37 \beta$




