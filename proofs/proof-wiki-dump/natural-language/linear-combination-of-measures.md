# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Measures



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu, \nu$ be measures on $\struct {X, \Sigma}$.

Then for all positive real numbers $a, b \in \R_{\ge 0}$, the pointwise sum:

$a \mu + b \nu: \Sigma \to \overline \R, \ \map {\paren {a \mu + b \nu} } E := a \map \mu E + b \map \nu E$
is also a measure on $\struct {X, \Sigma}$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Add corollary for a positive linear combination of finitely many measuresYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Verifying the axioms $(1)$, $(2)$ and $(3')$ for a measure in turn:


Axiom $(1)$
The statement of axiom $(1)$ for $a \mu + b \nu$ is:

$\forall E \in \Sigma: \map {\paren {a \mu + b \nu} } E \ge 0$

Let $E \in \Sigma$.
Then $\map \mu E, \map \nu E \ge 0$ as $\mu$ and $\nu$ are measures.
Hence, $a \map \mu E \ge 0$ as $a \ge 0$.
Also, $b \map \nu E \ge 0$ since $b \ge 0$.

Therefore it follows that:

$a \map \mu E + b \map \nu E \ge 0$
as desired.
$\Box$


Axiom $(2)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.

The statement of axiom $(2)$ for $a \mu + b \nu$ is:

$\ds \map {\paren {a \mu + b \nu} } {\bigcup_{n \mathop \in \N} E_n} = \sum_{n \mathop \in \N} \map {\paren {a \mu + b \nu} } {E_n}$

So let us do a direct computation:














\(\ds \map {\paren {a \mu + b \nu} } {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds a \map \mu {\bigcup_{n \mathop \in \N} E_n} + b \map \nu {\bigcup_{n \mathop \in \N} E_n}\)





Definition of Pointwise Addition














\(\ds \)

\(=\)







\(\ds a \sum_{n \mathop \in \N} \map \mu {E_n} + b \sum_{n \mathop \in \N} \map \nu {E_n}\)





$\mu$ and $\nu$ are measures and satisfy $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} a \map \mu {E_n} + b \map \nu {E_n}\)





Combined Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\paren {a \mu + b \nu} } {E_n}\)









which establishes $a \mu + b \nu$ satisfies $(2)$.
$\Box$


This article contains statements that are justified by handwavery.In particular: glosses over $+\infty$ intricacies, but that can be dealt with more generally for monotone sequences in $\overline \R$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Axiom $(3')$
The statement of axiom $(3')$ for $a \mu + b \nu$ is:

$\map {\paren {a \mu + b \nu} } \O = 0$

This is verified by the following:














\(\ds \map {\paren {a \mu + b \nu} } \O\)

\(=\)







\(\ds a \map \mu \O + b \map \nu \O\)





Definition of Pointwise Addition














\(\ds \)

\(=\)







\(\ds a \cdot 0 + b \cdot 0\)





$\mu$ and $\nu$ are measures and satisfy $(3')$














\(\ds \)

\(=\)







\(\ds 0\)









Thus, $a \mu + b \nu$ satisfies $(3')$.
$\Box$

Having verified an appropriate set of axioms, it follows that $a \mu + b \nu$ is a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $6 \ \text{(i)}$




