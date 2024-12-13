# 

Source: https://proofwiki.org/wiki/Saturated_Models_of_same_Cardinality_are_Isomorphic


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T$ be an $\LL$-theory.
Let $\kappa$ be an infinite cardinal.
If $\MM$ and $\NN$ are saturated models of $T$ and the cardinality of the universes of $\MM$ and $\NN$ are both $\kappa$, then $\MM$ and $\NN$ are isomorphic.


Proof
Outline
The idea of the proof is that since the models are saturated, we can define an isomorphism $f: \NN \to \MM$ by picking the image $\map f x$ of an element $x \in \NN$ as something which realizes the type that $\map f x$ would need to satisfy in $\MM$.
This is done using a (transfinite) recursive construction which extends an elementary map at each step.
The proof is very similar to that of Saturated Implies Universal; in both proofs we attempt to construct a formula-preserving map.
In this case, however, the map must be bijective between the universes of the models.


Body of Proof
First, since $\MM$ and $\NN$ have cardinality $\kappa$, we can denote their elements by $m_\alpha$ and $n_\alpha$ respectively for ordinals $\alpha < \kappa$.

For each $\alpha < \kappa$, let $A_\alpha$ denote the domain of the $f_\alpha$ we define below.  Note that we do not know in advance what the domains will be.

Base case $\alpha = 0$:
Define $f_0 = \O$.
Note  that $f_0$ is trivially an elementary embedding from $A_0 = \O$ into $\MM$.
$\Box$

Limit ordinals $\alpha$, assuming $f_\beta: A_\beta \to \MM$ is defined and elementary, and that $\card {A_\beta} < \kappa$ for all $\beta < \alpha$:
Let $\ds f_\alpha = \bigcup_{\beta < \alpha} f_\beta$.
If  $\phi$ is an $\LL$-sentence with parameters from $A_\alpha$, then since it involves only finitely many such parameters, they must all  be contained in some $A_\beta$ for $\beta < \alpha$.
But $f_\alpha  \restriction A_\beta = f_\beta$ is elementary, so $f_\alpha$ must be as well.
Note that $\card {A_\alpha} < \kappa$ by Cardinality of Infinite Union of Infinite Sets.
$\Box$

Successor ordinals $\alpha = \beta + 1$, assuming $f_\beta: A_\beta \to \MM$ is defined and elementary, and that $\card {A_\beta} < \kappa$:
We need to extend $f_\beta$ to some $f_\alpha$ so that the domain includes $n_\beta$, the image includes $m_\beta$, and so that $\LL$-formulas with parameters from $A_\alpha$ are preserved by $f_\alpha$.

First we add $n_\beta$ to the domain:
Consider the subset:

$p = \set {\map \phi {v, \map {f_\beta} {\bar a} }: \bar a \text { is a tuple  from } A_\beta \text { and } \NN \models \map \phi {n_\beta, \bar a} }$
of the set of $\LL$-formulas with one free variable and parameters from the image $\map {f_\beta} {A_\beta}$ of $A_\beta$ under $f_\beta$.
The set $p$ is a $1$-type over the image $\map {f_\beta} {A_\beta}$ in $\MM$.
Since $\card {A_\beta} < \kappa$ by the inductive hypothesis and since by assumption $\MM$ is $\kappa$-saturated, this means that $p$ is realized in $\MM$ by some element $b$.
Thus $f'_\alpha = f_\beta \cup \set {\tuple {n_\beta, b} }$ is an elementary embedding $A_\beta \cup \set {n_\beta} \to \MM$.

Now we add $m_\beta$ to the image:
This is done similarly to the above.
Consider the subset:

$q = \set {\map \phi {v, \bar a}: \bar a \text { is a tuple  from } A_\beta \cup \set {n_\beta} \text { and } \MM \models \map \phi {m_\beta, \map {f'_\alpha} {\bar a} } }$
of the set of $\LL$-formulas with one free variable and parameters from $A_\beta \cup \{n_\beta\}$.
The set $q$ is a $1$-type over $A_\beta \cup \{n_\beta\}$ in $\NN$.
Since $\card {A_\beta} < \kappa$ by the inductive hypothesis and hence $\card {A_\beta \cup \set {n_\beta} } < \kappa$ as well, and since by assumption $\NN$ is $\kappa$-saturated, this means that $q$ is realized in $\NN$ by some element $c$.
Thus $f_\alpha = f'_\alpha \cup \set {\tuple {c, m_\beta} } = f_\beta \cup \set {\tuple {n_\beta, b}, \tuple {c, m_\beta} }$ is an elementary embedding $A_\beta \cup \set {n_\beta} \to \MM$ which includes $m_\beta$ in its range.

Finally define $\ds f = \bigcup_{\alpha < \kappa} f_\alpha$.
The map $f$ is an elementary embedding $\NN \to \MM$ since $\ds \bigcup_{\alpha < \kappa} A_\alpha = \NN$, any finite set of parameters from $\NN$ must belong to some single $A_\alpha$, and $f\restriction A_\alpha$ is elementary.
$f$ is onto $\MM$ since we have constructed it so that $m_\alpha$ is in the image of $f_{\alpha + 1}$.
So, $f$ is a bijection.
Since elementary embeddings are by definition $\LL$-embeddings, this means that $f$ is an isomorphism by definition.
$\blacksquare$





