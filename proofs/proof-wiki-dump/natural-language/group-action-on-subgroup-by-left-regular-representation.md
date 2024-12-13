# 

Source: https://proofwiki.org/wiki/Group_Action_on_Subgroup_by_Left_Regular_Representation


It has been suggested that this page or section be merged into Subgroup Action is Group Action.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.

Let $*: H \times G \to G$ be the operation defined as:

$\forall \left({h, g}\right) \in H \times G: h * g = \lambda_h \left({g}\right)$
where $\lambda_h \left({g}\right)$ is the left regular representation of $g$ by $h$.
Then $*$ is a group action.


Proof
The group action axioms are investigated in turn.
Let $h_1, h_2 \in H$ and $g \in G$.

Thus:














\(\ds h_1 * \paren {h_2 * g}\)

\(=\)







\(\ds h_1 * \paren {\map {\lambda_{h_2} } g}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds h_1 * \paren {h_2 \circ g}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\lambda_{h_1} } {h_2 \circ g}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds h_1 \circ \paren {h_2 \circ g}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {h_1 \circ h_2} \circ g\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map {\lambda_{h_1 \circ h_2} } g\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {h_1 \circ h_2} * g\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds e * g\)

\(=\)







\(\ds \map {\lambda_e} g\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds e \circ g\)





Definition of Left Regular Representation














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

$\map {\lambda_h} a$ is written $a \lambda_h$
and:

$h * a$ is written $a * h$ (or even $a h$ in sources which do not place a high regard on clarity).
Thus for the left regular representation to be defined as being a group action there exists the need to use it on the inverse:














\(\ds \paren {a * h_2} * h_1\)

\(=\)







\(\ds \paren {a \lambda_{h_2^{-1} } } * h_1^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a \lambda_{h_2^{-1} } \lambda_{h_1^{-1} }\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds a * \paren {h_1 \circ h_2}^{-1}\)





Definition of $*$



Such a treatment can be found in 1982: P.M. Cohn: Algebra Volume 1 (2nd ed.).
As it runs contrary to the conventions used on $\mathsf{Pr} \infty \mathsf{fWiki}$, beyond its mention here it will not be used.

However, this example indicates how the arbitrary nature of notational conventions can cause the details of results to be equally arbitrarily dependent upon the convention used.


Also see
Group Action on Subgroup by Right Regular Representation


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions




