# 

Source: https://proofwiki.org/wiki/Condition_for_Agreement_of_Family_of_Mappings


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\family {A_i}_{i \mathop \in I}, \family {B_i}_{i \mathop \in I}$ be families of non empty sets.
Let $\family {f_i}_{i \mathop \in I}$ be a family of mappings such that:

$\forall i \in I: f_i \in \map \FF {A_i, B_i}$

This article, or a section of it, needs explaining.In particular: Clarify: what is $\map \FF {A_i, B_i}$? From the context it can be understood as being the set of all mappings $f_i: A_i \to B_i$ but this is just a guess. The domain and range of each of the $f_i$ could help with being explicitly defined.Note also that I have taken the liberty of exchanging the difficult-to-read $\mathscr F$ with the more eye-friendly $\FF$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We have that:

$\ds \bigcup_{i \mathop \in I} f_i \in \map \FF {\bigcup_{i \mathop \in I} A_i, \bigcup_{i \mathop \in I} B_i}$
if and only if:

$\ds \forall i, j \in I: \Dom {f_i} \cap \Dom {f_j} \ne \O \implies \paren {\forall a \in \paren {\Dom {f_i} \cap \Dom {f_j} }, \tuple {a, b} \in f_i \implies \tuple {a, b} \in f_j}$


Proof
Sufficient Condition
Let:

$\ds \bigcup_{i \mathop \in I} f_i \in \map \FF {\bigcup_{i \mathop \in I} A_i, \bigcup_{i \mathop \in I} B_i}$
Let $i, j \in I$ be such that:

$\Dom {f_i} \cap \Dom {f_j} \ne \O$
Let $a \in \paren {\Dom {f_i} \cap \Dom {f_j} }$.
Let $\ds b \in \bigcup_{i \mathop \in I} B_i$ be such that:

$\tuple {a, b} \in f_i$

Aiming for a contradiction, suppose:

$\tuple {a, b} \notin f_j$
As $a \in \paren {\Dom {f_i} \cap \Dom {f_j} }$:

$\ds \exists c \in \bigcup_{i \mathop \in I} B_i: \tuple {a, c} \in f_j$
As $\tuple {a, b} \in f_i$:

$\ds \tuple {a, b} \in \bigcup_{i \mathop \in I} f_i$
Thus:

$\ds \tuple {a, b}, \tuple {a, c} \in \bigcup_{i \mathop \in I} f_i$
such that $b \ne c$ and $\ds \bigcup_{i \mathop \in I} f_i$ is a mapping.
This is a contradiction.
Thus the supposition that the fact $\tuple {a, b} \notin f_j$ was false.
So:

$\tuple {a, b} \in f_j$
$\Box$


Necessary Condition
Let:

$\forall i, j \in I: \Dom {f_i} \cap \Dom {f_j} \ne \O \implies \paren {\forall a \in \paren {\Dom {f_i} \cap \Dom {f_j} }, \tuple {a, b} \in f_i \implies \tuple {a, b} \in f_j}$
Let $\ds a \in \bigcup_{i \mathop \in I} A_i$.
Hence:

$\exists k \in I: a \in A_k$
Let $k \in I$.
Thus:

$a \in \Dom f_k$
Let $l = \map {f_k} a$.
It follows that:

$\tuple {a, l} \in f_k$
and so:

$\ds \tuple {a, l} \in \bigcup_{i \mathop \in I} f_i$

Aiming for a contradiction, suppose:

$\ds \exists m \in \bigcup_{i \mathop \in I} B_i: \paren {\tuple {a, m} \in \bigcup_{i \mathop \in I} f_i \land m \ne l}$
Let $\ds m \in \bigcup_{i \mathop \in I} B_i$.
Let $j \in I$ be such that:

$\tuple {a, m} \in f_j$
We have:

$a \in \paren {\Dom {f_k} \cap \Dom {f_j} }$
As $\tuple {a, l} \in f_k$:

$\tuple {a, l} \in f_j$.
Therefore:

$\tuple {a, m}, \tuple {a, l} \in f_j$
where $f_j \in \map \FF {A_j, B_j}$ and $m \ne l$.
This contradicts the definition of mapping.
So:

$\ds \nexists m \in \bigcup_{i \mathop \in I} B_i: \paren {\tuple {a, m} \in \bigcup_{i \mathop \in I} f_i \land m \ne l}$
and so:

$\ds \bigcup_{i \mathop \in I} f_i \in \map \FF {\bigcup_{i \mathop \in I} A_i, \bigcup_{i \mathop \in I} B_i}$
$\blacksquare$





