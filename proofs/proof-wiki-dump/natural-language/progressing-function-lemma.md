# 

Source: https://proofwiki.org/wiki/Progressing_Function_Lemma



Theorem
Let $A$ be a class.
Let $g$ be a progressing mapping on $A$.
Let $\RR$ be the relation defined as:

$\map \RR {x, y} \iff \map g x \subseteq y \lor y \subseteq x$
where $\lor$ denotes disjunction (inclusive "or").

Then:




\((1)\)  

$:$  





  \(\ds \forall y \in \Dom g:\)



   \(\ds \map \RR {y, \O} \)





  


\((2)\)  

$:$  





  \(\ds \forall x, y \in \Dom g:\)



   \(\ds \map \RR {x, y} \land \map \RR {y, x} \)

  \(\ds \implies \)  

\(\ds  \map \RR {x, \map g y} \)   

  

where $\land$ denotes conjunction ("and").


Proof
In the following, let $x$ and $y$ be arbitrary elements of $A$ in the domain of $g$.
From Empty Set is Subset of All Sets:

$\O \subseteq y$
Thus by the Rule of Addition:

$\map g y \subseteq \O \lor \O \subseteq y$
and so it is seen that $\map \RR {y, \O}$.
That is, $(1)$ holds.
$\Box$

Let $\map \RR {x, y}$ and $\map \RR {y, x}$ both hold.
Thus by definition of $\RR$, both of the following hold:

$(\text a): \quad \map g x \subseteq y$ or $y \subseteq x$
$(\text b): \quad \map g y \subseteq x$ or $x \subseteq y$
We are to show that $\map \RR {x, \map g y}$ holds.
That is:

$\map g x \subseteq \map g y$ or $\map g y \subseteq x$

Let $\map g x \subseteq y$.
Because $g$ is a progressing mapping:

$y \subseteq \map g y$
and so:

$\map g x \subseteq \map g y$
Thus $\map \RR {x, \map g y}$ holds.
$\Box$

Let $\map g y \subseteq x$.
Then by definition $\map \RR {x, \map g y}$ holds.
$\Box$

If neither $\map g x \subseteq y$ nor $\map g y \subseteq x$, then by $(\text a)$ and $(\text b)$:

$y \subseteq x$ and $x \subseteq y$
and so by definition of set equality:

$x = y$
Hence:

$\map g x = \map g y$
Thus, again by definition of set equality:

$\map g x \subseteq \map g y$
and so again, by definition, $\map \RR {x, \map g y}$ holds.
$\Box$

Thus it has been shown that in all cases, if $\map \RR {x, y}$ and $\map \RR {y, x}$ both hold, then $\map \RR {x, \map g y}$ holds.
Thus condition $(2)$ has been satisfied.
Hence the result.
$\blacksquare$


Linguistic Note
The name progressing function lemma comes from Set Theory and the Continuum Problem, revised ed. by Raymond M. Smullyan and Melvin Fitting, where they refer to an inflationary mapping as a progressing function.
Hence it is reasonable to assume that this result could also be called:

inflationary mapping lemma
progressive mapping lemma
progressing mapping lemma
and so on, with function replacing mapping as desired.
However, the author of this page has seen no evidence of this result anywhere but in that particular work, with any sort of name assigned to it.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Lemma $4.6$




