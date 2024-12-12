# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Field_of_Quotients



Theorem
Let $D$ be an integral domain.
Let $F$ be a field.

The following definitions of the concept of Field of Quotients are equivalent:

Definition 1
A field of quotients of $D$ is a pair $\struct {F, \iota}$ where:

$(1): \quad$ $F$ is a field
$(2): \quad$ $\iota : D \to F$ is a ring monomorphism
$(3): \quad \forall z \in F: \exists x \in D, y \in D_{\ne 0}: z = \dfrac {\map \iota x} {\map \iota y}$
Definition 2
A field of quotients of $D$ is a pair $\struct {F, \iota}$ such that:

$(1): \quad F$ is a field
$(2): \quad \iota: D \to F$ is a ring monomorphism
$(3): \quad$ If $K$ is a field with $\iota \sqbrk D \subset K \subset F$, then $K = F$.
That is, the field of quotients of an integral domain $D$ is the smallest field containing $D$ as a subring.

Definition 3
A field of quotients of $D$ is a pair $\struct {F, \iota}$ where:

$(1): \quad$ $F$ is a field
$(2): \quad$ $\iota : D \to F$ is a ring monomorphism
$(3): \quad$ it satisfies the following universal property:
For every field $E$ and for every ring monomorphism $\varphi: D \to E$, there exists a unique field homomorphism $\bar \varphi: F \to E$ such that $\varphi = \bar \varphi \circ \iota$
That is, the following diagram commutes:
$\begin{xy}\xymatrix@+1em@L+2px{D \ar[r]^\iota \ar[dr]_\varphi & F \ar[d]^{\exists_1 \bar \varphi} \\ & E}\end{xy}$
Definition 4
A field of quotients of $D$ is a pair $\struct {F, \iota}$ which is its total ring of fractions, that is, the localization of $D$ at the nonzero elements $D_{\ne 0}$.


Proof
1 implies 2
Let $K$ be a field such that:

$\iota \sqbrk D \subseteq K \subseteq F$
We show that $F \subseteq K$.
Let $f \in F$.
By assumption, there exist $x, y \in D$ with $y \ne 0$ such that $f = \dfrac {\map \iota x} {\map \iota y}$.
Because $K$ is a field containing $\iota \sqbrk D$, $K$ also contains $f = \dfrac {\map \iota x} {\map \iota y}$.
Thus $F \subseteq K$.
$\Box$


1 implies 3
Let $E$ be a field and $\phi: D \to E$ a ring monomorphism.
Let:

$\bar \phi: F \to E$ is such that $\phi = \bar \phi \circ \iota$
and:

$f \in F$ such that $f = \dfrac {\map \iota x} {\map \iota y}$ with $x, y \in D$.
Then:

$\map {\bar \phi} f = \dfrac {\map {\bar \phi} {\map \iota x} } {\map {\bar \phi} {\map \iota y} } = \dfrac {\map \phi x} {\map \phi y}$
Thus there is only one option for $\bar \phi$.
It remains to verify that the mapping which sends $f = \dfrac {\map \iota x} {\map \iota y}$ to $\dfrac {\map \phi x} {\map \phi y}$ is:

well-defined
a field homomorphism

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


2 implies 1
Let $K$ be the subset of elements of $F$ that are of the form $\dfrac {\map \iota x} {\map \iota y}$.
We show that $K$ is a field containing $\iota \sqbrk D$, which by assumption implies $K = F$.

Because:

$\map \iota x = \dfrac {\map \iota x} {\map \iota 1} \in K$ for $x \in D$
we have that:

$\iota \sqbrk D \subseteq H$
We use Subfield Test to show that $K$ is a field:
Let $\dfrac {\map \iota x} {\map \iota y}, \dfrac {\map \iota z} {\map \iota w} \in K$.
Then:














\(\ds \frac {\map \iota x} {\map \iota y} \cdot \frac {\map \iota z} {\map \iota w}\)

\(=\)







\(\ds \frac {\map \iota x \map \iota z} {\map \iota y \map \iota w}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \iota {x z} } {\map \iota {y w} }\)





$\iota$ is a ring homomorphism














\(\ds \)

\(\in\)







\(\ds K\)









and:














\(\ds \frac {\map \iota x} {\map \iota y} - \frac {\map \iota z} {\map \iota w}\)

\(=\)







\(\ds \frac {\map \iota x \map \iota w - \map \iota z \map \iota y} {\map \iota y \map \iota w}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \iota {x w - z y} } {\map \iota {y w} }\)





$\iota$ is a ring homomorphism














\(\ds \)

\(\in\)







\(\ds K\)









Let $\dfrac {\map \iota x} {\map \iota y} \in K^\times$.
Then:

$x \ne 0$
so:














\(\ds \paren {\frac {\map \iota x} {\map \iota y} }^{-1}\)

\(=\)







\(\ds \frac {\map \iota y} {\map \iota x}\)




















\(\ds \)

\(\in\)







\(\ds K\)









By Subfield Test, $K$ is a field.
By assumption, $K = F$.
$\Box$


3 implies 2
Let $K$ be a field such that:

$\iota \sqbrk D \subseteq K \subseteq F$
We show that $F \subseteq K$.
We apply the universal property to $\iota: D \to K$ and $\iota: D \to F$.
By assumption, there exists:

a unique field homomorphism $\bar \iota_1 : F \to K$ such that $\iota = \bar {\iota_1} \circ \iota$
a unique field homomorphism $\bar \iota_2 : F \to F$ such that $\iota = \bar {\iota_2} \circ \iota$.
By uniqueness, $\bar {\iota_2} = I_F$ is the identity mapping on $F$.
Because $K\subset F$, $\iota_1$ fulfills the second condition as well.
By uniqueness, $\iota_1 = \iota_2$.
Because $F = \Img {\iota_2} = \Img {\iota_1} \subseteq K$, we have $F \subseteq K$.
$\Box$


3 implies 4
Let $S = D_{\ne 0}$.
Because $\iota$ is a monomorphism:

$\iota \sqbrk S \subseteq F_{\ne 0}$
Because $F$ is a field:

$\iota \sqbrk S \subset F^\times$
It remains to verify the universal property of the localization.
Let $B$ be a ring with unity
Let $g: D \to B$ be a ring homomorphism such that $g \sqbrk S \subseteq B^\times$.
We show that there is a unique ring homomorphism $h: F \to B$ such that $g = h \circ \iota$.
This is done in exactly the same way as in the implication $1$ implies $3$.
$\Box$


This needs considerable tedious hard slog to complete it.In particular: maybe prove diretly that 1 implies 4 instead?To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


4 implies 3
Follows immediately from the definition of localization.
$\Box$
$\blacksquare$

Also see
Equivalence of Definitions of Localization of Ring




