# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_iff_Quotient_Ring_is_Field



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.

The following are equivalent:

$(1): \quad$ $J$ is a maximal ideal.
$(2): \quad$ The quotient ring $R / J$ is a field.


Proof 1
Maximal Ideal implies Quotient Ring is Field
Let $J$ be a maximal ideal.
Because $J \subset R$, it follows from Quotient Ring of Commutative Ring is Commutative and Quotient Ring of Ring with Unity is Ring with Unity that $R / J$ is a commutative ring with unity.

We now need to prove that every non-zero element of $\struct {R / J, +,  \circ}$ has a product inverse in $R / J$.
Let $x \in R$ such that $x + J \ne J$, that is: $x \notin J$.
Thus $x + J \in R / J$ is not the zero element of $R / J$.

Take $K \subseteq R$ such that:

$K = \set {j + r \circ x: j \in J, r \in R}$
that is, the subset of $R$ which can be expressed as a sum of an element of $J$ and a product in $R$ of $x$.

Now $0_R \in K$ as $0_R \in J$ and $0_R \in R$, giving $0_R + 0_R \circ x = 0_R$.
So:

$(1): \quad K \ne \O$
Now let $g, h \in K$.
That is:

$g = j_1 + r_1 \circ x, h = j_2 + r_2 \circ x$
Then:

$-h = -j_2 + \paren {-r_2} \circ x$
But $j_1 - j_2 \in J$ from Test for Ideal.
Similarly $-r_2 \in R$.
So $-h \in K$ and we have:

$(2) \quad g + \paren {-h} = \paren {j_1 - j_2} + \paren {r_1 - r_2} \circ x$
Now consider $g \in J, y \in R$.
Then:

$g \circ y = \paren {j_1 + r_1 \circ x} \circ y = \paren {j_1 \circ y} + \paren {r_1 \circ y} \circ x$
which is valid by the fact that $R$ is a commutative ring.
But as $J$ is an ideal:

$\paren {j_1 \circ y} \in J$
while $r_1 \circ y \in R$.
Thus:

$(3) \quad g \circ y \in K$
and similarly:

$(3) \quad y \circ g \in K$
So Test for Ideal can be applied to statements $(1)$ to $(3)$, and it is seen that $K$ is an ideal of $R$.

Now:














\(\ds j\)

\(\in\)







\(\ds J\)














\(\ds \leadsto \ \ \)





\(\ds j + 0_R \circ x\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds j\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds J\)

\(\subseteq\)







\(\ds K\)









and because $x = 0_R + 1_R \circ x$ (remember $0_R \in J$), then $x \in K$ too.

So, because $x \notin J$, $K$ is an ideal such that $J \subset K \subseteq R$.
Because $J$ is a maximal ideal, then $K = R$.
Thus $1_R \in K$ and thus:

$\exists j_0 \in J, s \in R: 1_R = j_0 + s \circ x$
So:

$1_R + \paren {-s \circ x} = j_0 \in J$
Hence:

$1_R + J = s \circ x + J = \paren {s + J} \circ \paren {x + J}$

So in the commutative ring $\struct {R / J, +,  \circ}$, the product inverse of $x + J$ is $s + J$.
The result follows.
$\Box$


Quotient Ring is Field implies Ideal is Maximal
Let $R / J$ be a field.
Let $K$ be a left ideal of $R$ such that $J \subsetneq K \subseteq R$.
We have that $J$ is the zero of $R / J$.
Let $x \in K \setminus J$.
Because $x \notin J$ then $x + J \ne J$.
Because $R / J$ is a field then $x + J \in R / J$ has a product inverse, say $s + J$.
Hence:

$1_R + J = \paren {s + J} \circ \paren {x + J} = \paren {s \circ x } + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup:

$1_R - s \circ x \in J \subsetneq K$
By the definition of an ideal:

$x \in K, s \in R \implies s \circ x \in K$
$1_R - s \circ x \in K, s \circ x \in K \implies \paren {1_R - s \circ x} + \paren {s \circ x} = 1_R \in K$
$1_R \in K \implies \forall y \in R:  y \circ 1_R = y \in K$
Hence $K = R$.
The result follows.
$\blacksquare$


Proof 2
Let $\mathbb L_J$ be the set of all ideals of $R$ which contain $J$.
Let the ordered set $\struct {\map {\mathbb L} {R / J}, \subseteq}$ be the set of all ideals of $R / J$.

Let the mapping $\Phi_J: \struct {\mathbb L_J, \subseteq} \to \struct {\map {\mathbb L} {R / J}, \subseteq}$ be defined as:

$\forall a \in \mathbb L_J: \map {\Phi_J} a = \map {q_J} a$
where $q_J: a \to a / J$ is the quotient epimorphism from $a$ to $a / J$.

Then from Ideals Containing Ideal Isomorphic to Quotient Ring, $\Phi_J$ is an isomorphism.

Now from Quotient Ring Defined by Ring Itself is Null Ring, $\map {q_J} J$ is the null ideal of $R / J$.
At the same time, $\map {q_J} R$ is the entire ring $R / J$.
Let $R / J$ not be the null ring.
Then by Epimorphism Preserves Rings and Epimorphism Preserves Commutativity, $R / J$ is a commutative ring with unity.

By definition, $J$ is a maximal ideal of $R$ if and only if $\mathbb L_J = \set {J, R}$ and $J$ is a proper ideal of $R$.
By Ideals of Field, $R / J$ is a field if and only if:

$\map {\mathbb L} {R / J} = \set {\map {q_J} J, \map {q_J} R}$
and the null ideal $\map {q_J} J$ is a proper ideal of $R / J$.

As $\Phi_J: \mathbb L_J \to \map {\mathbb L} {R / J}$ is an isomorphism, $J$ is a maximal ideal if and only if $J$ is a field.
$\blacksquare$


Proof 3
Let $J$ be a maximal ideal.
We have by definition of quotient ring that $J$ is the zero element of $R / J$.
Let $A \in R / J$ be a non-zero element of $R / J$.
Let $x \in A$.
Since $A \ne J$, we have that $x \notin J$.
Let the ideal $K = J + A$ of $R$ be formed.
This contains all the elements of the form $j + r a$, with $j \in J$ and $r \in R$.
As $J$ is maximal and $J \subsetneq K$, it follows that:

$K = R$
and so:

$1_R \in K$
That is:

$\exists j \in J, r \in R: j + r a = 1_R$
Thus:

$\paren {r + J} \paren {a + J} = \paren {1 - u} J = 1_R + J$
and so $\paren {r + J}$ is the product inverse of $\paren {a + J}$.
So every non-zero element of $R / J$ has a product inverse.
That is, $R / J$ is a field.
$\Box$

Let $R / J$ be a field.
Let $K$ be an ideal of $R$ such that:

$J \subsetneq K \subseteq R$
Let $a \in K$ such that $a \notin J$.
Then:

$J + \ideal a \subsetneq K$
But as $a \notin J$, we have that $a + J$ is a non-zero element of $R / J$.
Thus as $R / J$ is a field, $a + J$ has a product inverse $r + J$:

$\paren {r + J} \paren {a + J} = 1_R + J$
So:

$\exists r \in R, j \in J: r a + \paren {-1_R} = j$
That is:

$r a + \paren {-1_R} \in J$
So:

$j + r a = 1_R$
and from Ideal of Unit is Whole Ring: Corollary this implies:

$J + \ideal a = R$
So:

$K = R$
and it follows by definition that $J$ is maximal.
$\blacksquare$


Also see
Maximal Left and Right Ideal iff Quotient Ring is Division Ring


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2$: Exercise $12$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.8$ Algebraic properties of $p$-adic integers




