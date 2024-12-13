# 

Source: https://proofwiki.org/wiki/Non-Finite_Cardinal_is_equal_to_Cardinal_Product



Theorem
Let $\omega$ denote the minimally inductive set.
Let $x$ be an ordinal such that $x \ge \omega$.

Then:

$\card x = \card {x \times x}$
where $\times$ denotes the Cartesian product.


Corollary
Let $S$ be a set that is equinumerous to its cardinal number.
Let $\card S$ denote the cardinal number of $S$.
Let:

$\card S \ge \omega$
where $\omega$ denotes the minimally inductive set.

Then:

$\card {S \times S} = \card S$


Proof
The proof shall proceed by Transfinite Induction on $x$.

Let:

$\forall y \in x: y < \omega \lor \card y = \card {y \times y}$
There are two cases:


Case 1: $\card y = \card x$ for some $y \in x$
If this is so, then:














\(\ds \card x\)

\(=\)







\(\ds \card y\)




















\(\ds \)

\(=\)







\(\ds \card {y \times y}\)





Inductive hypothesis














\(\ds \)

\(=\)







\(\ds \card {x \times x}\)









$\Box$


Case 2: $\card y < \card x$ for all $y \in x$
We have that either:

$y < \omega$
or:

$\card y = \card {y + 1}$
In either case, we have that:

$\card {y + 1} < \card x$
and therefore:

$y + 1 \in x$
Therefore, $x$ is a limit ordinal.

Let $R_0$ denote the canonical order of $\On^2$.
Let $J_0$ be defined as the unique order isomorphism between $\On^2$ and $\On$ as defined in canonical order.


This article needs to be linked to other articles.In particular: The above section Definition:Canonical Order#Properties no longer exists. Instead, this link is to go to the (not yet established) second definition of Canonical Order.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
It follows that:

$\ds \map {J_0} {x \times x} = \bigcup_{y \mathop \in x} \bigcup_{z \mathop \in x} \map {J_0} {y, z}$

But moreover:














\(\ds \map {J_0} {y, z}\)

\(=\)







\(\ds \map {\in^{-1} } {\map {J_0} {y, z} }\)





Definition of Preimage of Element under Mapping














\(\ds \)

\(=\)







\(\ds \map {J_0} {\map {R_0^{-1} } {y, z} }\)





as $J_0$ forms an Order Isomorphism.




Since $J_0$ is a bijection:














\(\ds \card {\map {J_0} {y, z} }\)

\(=\)







\(\ds \card {\map {J_0} {\map {R_0^{-1} } {y, z} } }\)





Equality shown above














\(\ds \)

\(=\)







\(\ds \card {\map {R_0^{-1} } {y, z} }\)





Image of Bijection Cardinal Equality




Take $\max \set {y, z}$.














\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \map {R_0^{-1} } {y, z}\)





by hypothesis








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {a, b}\)

\(R_0\)







\(\ds \tuple {y, z}\)





Definition of Image of Element under Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds a, b\)

\(\le\)







\(\ds \max \set {y, z}\)





Definition of Canonical Order








\(\ds \leadstoandfrom \ \ \)





\(\ds a, b\)

\(\in\)







\(\ds \max \set {y, z} + 1\)





Definition of Successor Set




It follows that:














\(\ds \card {\map {R_0^{-1} } {y, z} }\)

\(\le\)







\(\ds \card {\max \set {y, z} + 1 \times \max \set {y, z} + 1}\)




















\(\ds \)

\(=\)







\(\ds \card {\max \set {y, z} + 1}\)





Inductive hypothesis














\(\ds \)

\(<\)







\(\ds \card x\)





by hypothesis for the case



Therefore:

$\card {\map {R_0^{-1} } {y, z} } < \card x$
Thus by Cardinal Inequality implies Ordinal Inequality:

$\forall y, z \in x: \map {J_0} {y, z} < \card x$

It follows by Supremum Inequality for Ordinals that:

$\map {J_0} {x \times x} \subseteq \card x$
Hence:














\(\ds \card {x \times x}\)

\(=\)







\(\ds \card {\map {J_0} {x \times x} }\)





Image of Bijection Cardinal Equality














\(\ds \)

\(\le\)







\(\ds \card x\)





Subset of Ordinal implies Cardinal Inequality



But also by Set Less than Cardinal Product:

$\card x \le \card {x \times x}$

Thus:

$\card x = \card {x \times x}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.33$




