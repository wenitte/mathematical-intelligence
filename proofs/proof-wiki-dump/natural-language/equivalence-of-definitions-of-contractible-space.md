# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Contractible_Space


This article needs to be tidied.In particular: Please familiarise yourself with the basics of the house style -- both presentation and content. Studying a few pages on this site should be a good start.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: everywhere and everythingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The following definitions of the concept of Contractible Space are equivalent:

Definition 1
$X$ is called contractible if and only if the identity map $\operatorname{id}_X$ is homotopic to a constant map $X \to X$.

Definition 2
$X$ is called contractible if and only if it is homotopy equivalent to a point.


Lemma

This article, or a section of it, needs explaining.In particular: The links in the below need to be reviewed. It's not certain where they are supposed to point. In particular, where we have the link and display showing completely different things, like functions and homeomorphism, a knowledgeable and conscientious helper is required. Some guesses have been made, which may well be wrong.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
When the category of topological spaces $\bf Top$ is endowed with the cartesian monoidal structure, the terminal object $*$ (that is, any singleton set, endowed with the discrete topology) acts as monoidal unit.
$\Box$


Remark
By the lemma above, there is a bijection of sets $\hom(*,X)\cong X$ between the set of functions $* \to X$ and this bijection can be promoted to a homeomorphism transporting to $\hom(*,X)$ the topology on $X$.
Note that the Lemma above and the subsequent remark hold in full generality, even when we do not restrict to a cartesian closed subcategory of $\bf Top$.


Proof of the equivalence
Assume that $X$ is contractible according to definition 1.
Then every $x_0 \in X$ is represented by a unique $\ceiling {x_0}: *\to X$ such that the composition $X \overset {t_X}\to * \overset {\ceiling {x_0} }\to X$ is the constant mapping $X \to X : x \mapsto x_0$.
By assumption, there exists an $x_0$ such that the constant mapping is homotopic to the identity mapping on $X$, which means that $t_X$ and $\ceiling {x_0}$ are mutually inverse homotopy equivalences (the composition $*\to X\to *$ is evidently the identity of $\set {x_0}$).
Similarly, assume that $X$ is contractible according to definition 2.
This means that the terminal map $t_X : X \to *$ has an homotopy inverse $p : *\to X$ such that $X\to *\to X$ is homotopic to the identity of $X$.
But according to the lemma above, there is a unique $x_0\in X$ such that $p = \ceiling {x_0}$.
So again the composition $X \overset {t_X} \to * \overset {\ceiling {x_0} }\to X$ is the constant mapping at $x_0$.
$\blacksquare$





