# 

Source: https://proofwiki.org/wiki/Group_Action_on_Subgroup_by_Right_Regular_Representation



Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.

Let $*: H \times G \to G$ be the operation defined as:

$\forall \tuple {h, g} \in H \times G: h * g = \map {\rho_{h^{-1} } } g$
where $\map {\rho_{h^{-1} } } g$ is the right regular representation of $g$ by $h^{-1}$.
Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $h_1, h_2 \in H$ and $g \in G$.

Thus:














\(\ds h_1 * \paren {h_2 * g}\)

\(=\)







\(\ds h_1 * \paren {\map {\rho_{h_2^{-1} } } g}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds h_1 * \paren {g \circ h_2^{-1} }\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\rho_{h_1^{-1} } } {h_2^{-1} \circ g}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {g \circ h_2^{-1} } \circ h_1^{-1}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds g \circ \paren {h_2^{-1} \circ h_1^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds g \circ \paren {h_1 \circ h_2}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds \map {\rho_{\paren {h_1 \circ h_2}^{-1} } } g\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {h_1 \circ h_2} * g\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds e * g\)

\(=\)







\(\ds \map {\rho_e} g\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g \circ e^{-1}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds g \circ e\)





Inverse of Identity Element is Itself














\(\ds \)

\(=\)







\(\ds g\)





Group Axiom $\text G 2$: Existence of Identity Element



demonstrating that Group Action Axiom $\text {GA} 2$ holds.

The group action axioms are thus seen to be fulfilled, and so $*$ is a group action.
$\blacksquare$


Also defined as
Some sources denote a mapping by placing the symbol defining that mapping on the left of its operand.
Thus under such a convention:

$\map {\rho_h} a$ is written $a \rho_h$
and:

$h * a$ is written $a * h$ (or even $a h$ in sources which do not place a high regard on clarity).
Thus the right regular representation itself can directly be defined as being a group action without the need to take the inverse:














\(\ds \paren {g * h_1} * h_2\)

\(=\)







\(\ds \paren {g \rho_{h_1} } * h_2\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g \rho_{h_1} \rho_{h_2}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds g * \paren {h_1 \circ h_2}\)





Definition of $*$



Such a treatment can be found in 1982: P.M. Cohn: Algebra Volume 1 (2nd ed.).
As it runs contrary to the conventions used on $\mathsf{Pr} \infty \mathsf{fWiki}$, beyond its mention here it will not be used.

However, this example indicates how the arbitrary nature of notational conventions can cause the details of results to be equally arbitrarily dependent upon the convention used.


Also see
Group Action on Subgroup by Left Regular Representation


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions




