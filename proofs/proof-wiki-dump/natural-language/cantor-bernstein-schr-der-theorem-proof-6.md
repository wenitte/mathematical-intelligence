# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_6



Theorem
Let $A$ and $B$ be sets.
Let $f: A \to B$ and $g: B \to A$ be injections.

Then there is a bijection $h: A \to B$; so that $A$ and $B$ are equivalent.
Furthermore:

For all $x \in A$ and $y \in B$, if $y = \map h x$ then either $y = \map f x$ or $x = \map g y$.


Proof
Let $\powerset A$ be the power set of $A$.
Define a mapping $E: \powerset A \to \powerset A$ thus:

$\map E S = A \setminus g \sqbrk {B \setminus f \sqbrk S}$


$E$ is increasing
Let $S, T \in \powerset A$ such that $S \subseteq T$.
Then:














\(\ds f \sqbrk S\)

\(\subseteq\)







\(\ds f \sqbrk T\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds B \setminus f \sqbrk T\)

\(\subseteq\)







\(\ds B \setminus f \sqbrk S\)





Set Difference with Subset is Superset of Set Difference








\(\ds \leadsto \ \ \)





\(\ds g \sqbrk {B \setminus f \sqbrk T}\)

\(\subseteq\)







\(\ds g \sqbrk {B \setminus f \sqbrk S}\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds A \setminus g \sqbrk {B \setminus f \sqbrk S}\)

\(\subseteq\)







\(\ds A \setminus g \sqbrk {B \setminus f \sqbrk T}\)





Set Difference with Subset is Superset of Set Difference



That is, $\map E S \subseteq \map E T$.
$\Box$
By the Knaster-Tarski Lemma, $E$ has a fixed point $X$.
By the definition of fixed point:

$\map E X = X$
Thus by the definition of $E$:

$A \setminus g \sqbrk {B \setminus f \sqbrk X} = X$
Therefore:

$(1): \quad A \setminus \paren {A \setminus g \sqbrk {B \setminus f \sqbrk X} } = A \setminus X$
Since $g$ is a mapping into $A$:

$g \sqbrk {B \setminus f \sqbrk X} \subseteq A$
Thus by Relative Complement of Relative Complement:

$A \setminus \paren {A \setminus g \sqbrk {B \setminus f \sqbrk X} } = g \sqbrk {B \setminus f \sqbrk X}$
Thus by $(1)$:

$g \sqbrk {B \setminus f \sqbrk X} = A \setminus X$
Let $f' = f \restriction_{X \times f \sqbrk X}$ be the restriction of $f$ to $X \times f \sqbrk X$.
Similarly, let $g' = g \restriction_{\paren {B \setminus f \sqbrk X} \times \paren {A \setminus X} } = g \restriction_{\paren {B \setminus f \sqbrk X} \times g \sqbrk {B \setminus f \sqbrk X} }$.
By Injection to Image is Bijection, $f'$ and $g'$ are both bijections.
Define a relation $h: A \to B$ by $h = f' \cup {g'}^{-1}$.
We will show that $h$ is a bijection from $A$ onto $B$.
The domain of $f'$ is $X$, which is disjoint from the codomain, $A \setminus X$, of $g'$.
The domain of $g'$ is $B \setminus f \sqbrk X$, which is disjoint from the codomain, $f \sqbrk X$, of $f'$.
Let $h = f' \cup {g'}^{-1}$.
By the corollary to Union of Bijections with Disjoint Domains and Codomains is Bijection:

$h$ is a bijection from $X \cup \paren {A \setminus X}$ onto $f \sqbrk X \cup \paren {B \setminus f \sqbrk X}$.
By Union with Relative Complement, $h$ is a bijection from $A$ onto $B$.
Since $f' \subseteq f$ and $g' \subseteq g$, each element of $h$ is an element of $f$ or of $g^{-1}$.
That is, if $y = \map h x$ then either $y = \map f x$ or $x = \map g y$.
$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Union with Relative Complement.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Theorem $9.2.1$: Proof $2$




