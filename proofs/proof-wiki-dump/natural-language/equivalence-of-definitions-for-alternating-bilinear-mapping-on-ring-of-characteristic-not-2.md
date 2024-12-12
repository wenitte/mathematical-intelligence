# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_for_Alternating_Bilinear_Mapping_on_Ring_of_Characteristic_Not_2


It has been suggested that this page be renamed.In particular: This one is titled "Equivalence of Definitions for..." while other pages are titled "Equivalence of Definitions of...". I suggest changing the title of this page to "Equivalence of Definitions of..."To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $R$ be a commutative ring.
Let $\struct {A_R, \oplus}$ be an algebra over $R$.
Let $R$ have a characteristic not equal to $2$.

Then the following definitions for alternating bilinear mappings are equivalent:

$\oplus$ is an alternating bilinear mapping if and only if for all $a \in A_R$, $a \oplus a = 0$
$\oplus$ is an alternating bilinear mapping if and only if for all $a, b \in A_R$, $a \oplus b + b \oplus a = 0$


Proof
Let $\oplus$ be a bilinear mapping with the property that:

$\forall a \in A_R: a \oplus a = 0$
Then for all $u, v \in A_R$:














\(\ds 0\)

\(=\)







\(\ds \paren {u + v} \oplus \paren {u + v}\)




















\(\ds \)

\(=\)







\(\ds u \oplus \paren {u + v} + v \oplus \paren {u + v}\)




















\(\ds \)

\(=\)







\(\ds u \oplus v + v \oplus u = 0\)









$\Box$

Let $\oplus$ be a bilinear mapping with the property that:

$\forall a, b \in A_R: a \oplus b + b \oplus a = 0$
Let $u \in A_R$.
Then:














\(\ds 0\)

\(=\)







\(\ds u \oplus u + u \oplus u\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {u \oplus u}\)









Because the characteristic of $R$ is not $2$:

$u \oplus u = 0$
$\blacksquare$





