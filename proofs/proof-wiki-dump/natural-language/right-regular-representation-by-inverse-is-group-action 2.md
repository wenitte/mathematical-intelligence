# 

Source: https://proofwiki.org/wiki/Right_Regular_Representation_by_Inverse_is_Group_Action



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $*: G \times G \to G$ be the operation:

$\forall g, h \in G: g * h = \map {\rho_{g^{-1} } } h$
where $\rho_g$ is the right regular representation of $G$ with respect to $g$.

Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $g, h, a \in G$.

Thus:














\(\ds g * \paren {h * a}\)

\(=\)







\(\ds g * \map {\rho_{h^{-1} } } a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g * \paren {a \circ h^{-1} }\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\rho_{g^{-1} } } {a \circ h^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {a \circ h^{-1} } \circ g^{-1}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds a \circ \paren {h^{-1} \circ g^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ \paren {g \circ h}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map {\rho_{\paren {g \circ h}^{-1} } } a\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {g \circ h} * a\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds e * s\)

\(=\)







\(\ds \map {\rho_{e^{-1} } } s\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds s \circ e^{-1}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds s \circ e\)





Inverse of Identity Element is Itself














\(\ds \)

\(=\)







\(\ds s\)





Group Axiom $\text G 2$: Existence of Identity Element



demonstrating that Group Action Axiom $\text {GA} 2$ holds.
$\blacksquare$


Also defined as
Some sources denote a mapping by placing the symbol defining that mapping on the left of its operand.
Thus under such a convention:

$\map {\rho_g} a$ is written $a \rho_g$
and:

$g * a$ is written $a * g$ (or even $a g$ in sources which do not place a high regard on clarity).
Thus the right regular representation itself can directly be defined as being a group action without the need to take the inverse:














\(\ds \paren {a * g} * h\)

\(=\)







\(\ds \paren {a \rho_g} * h\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a \rho_g \rho_h\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds a * \paren {g \circ h}\)





Definition of $*$



Such a treatment can be found in 1982: P.M. Cohn: Algebra Volume 1 (2nd ed.).
As it runs contrary to the conventions used on $\mathsf{Pr} \infty \mathsf{fWiki}$, beyond its mention here it will not be used.

However, this example indicates how the arbitrary nature of notational conventions can cause the details of results to be equally arbitrarily dependent upon the convention used.


Also see
Left Regular Representation is Group Action
Group Acts on Itself


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(iv)}$




