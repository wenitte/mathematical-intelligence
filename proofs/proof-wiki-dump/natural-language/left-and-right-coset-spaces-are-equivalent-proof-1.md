# 

Source: https://proofwiki.org/wiki/Left_and_Right_Coset_Spaces_are_Equivalent/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a subgroup of $G$.

Let:

$x H$ denote the left coset of $H$ by $x$
$H y$ denote the right coset of $H$ by $y$.

Then:

$\order {\set {x H: x \in G} } = \order {\set {H y: y \in G} }$


Proof
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


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 43.2$: Lagrange's theorem




