# 

Source: https://proofwiki.org/wiki/Left_Regular_Representation_is_Group_Action



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $*: G \times G \to G$ be the operation:

$\forall g, h \in G: g * h = \map {\lambda_g} h$
where $\lambda_g$ is the left regular representation of $G$ with respect to $g$.

Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $g, h, a \in G$.

Thus:














\(\ds g * \paren {h * a}\)

\(=\)







\(\ds g * \map {\lambda_h} a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g * \paren {h \circ a}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\lambda_g} {h \circ a}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g \circ \paren {h \circ a}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {g \circ h} \circ a\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map {\lambda_{\paren {g \circ h} } } a\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {g \circ h} * a\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds e * s\)

\(=\)







\(\ds \map {\lambda_e} s\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds e \circ s\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds s\)





Group Axiom $\text G 2$: Existence of Identity Element



demonstrating that Group Action Axiom $\text {GA} 2$ holds.
$\blacksquare$


Also defined as
Some sources denote a mapping by placing the symbol defining that mapping on the left of its operand.
Thus under such a convention:

$\lambda_g \left({a}\right)$ is written $a \lambda_g$
and:

$g * a$ is written $a * g$ (or even $a g$ in sources which do not place a high regard on clarity).
Thus for the left regular representation to be defined as being a group action there exists the need to use it on the inverse:














\(\ds \paren {a * h} * g\)

\(=\)







\(\ds \paren {a \lambda_{h^{-1} } } * g\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a \lambda_{h^{-1} } \lambda_{g^{-1} }\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds a * \paren {g \circ h}^{-1}\)





Definition of $*$



Such a treatment can be found in 1982: P.M. Cohn: Algebra Volume 1 (2nd ed.).
As it runs contrary to the conventions used on $\mathsf{Pr} \infty \mathsf{fWiki}$, beyond its mention here it will not be used.

However, this example indicates how the arbitrary nature of notational conventions can cause the details of results to be equally arbitrarily dependent upon the convention used.


Also see
Right Regular Representation by Inverse is Group Action
Group Acts on Itself


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(iv)}$




