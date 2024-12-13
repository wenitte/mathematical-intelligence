# 

Source: https://proofwiki.org/wiki/Separable_Degree_of_Field_Extensions_is_Multiplicative


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.In particular: singularTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $E / F / k$ be a tower of fields. Then

$\index E k_s = \index E F_s \index F k_s$
where $\index E F_s$ denotes the separable degree of $E / F$.

Proof
If $E / k$ is infinite, both sides are infinite.
Now assume $E / k$ is finite.
Let $L$ be the algebraic closure of  $k$.
Let $\set{\sigma_i}$ be the family of distinct embedding of $F$ to $L$ fixing $k$,
By definition 2 of separable degree, the set $\set{\sigma_i}$ has $\index F k_s$ elements.
For each $i$, let $\set{\tau_{i j}}$ be the family of distinct extensions of $\sigma_i$ to $E$.
We can view $L$ as an algebraic closure of $F$. By definition 2 of separable degree, each $\sigma_i$ has precisely

$\index E F_s$
extensions to embeddings of $E$ in $L$.
The set of embeddings $\set{\tau_{i j}}$ contains precisely

$\index E F_s \index F k_s$
elements.
Any embedding of $E$ into $L$ fixing $k$ must be one of the $\tau_{i j}$, and thus we have

$\index E k_s = \index E F_s \index F k_s$
$\blacksquare$

Sources
2002: Serge Lang: Algebra (Revised 3rd ed.): Chapter $\text V$: $\S4$: Separable Extensions: Theorem $4.1$




